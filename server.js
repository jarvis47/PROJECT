var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var formidable = require('formidable');
var fs = require('fs');
var ObjectID = mongodb.ObjectID;

//Available Collections in our database
var UPLOADED_TEST_SETS_COLLECTION = "mpts";
var BATCH_MASTER = "batches"
var CANDIDATE_MASTER = "candidates"
var ASSIGNED_MPT_MASTER = "assigned_mpts";
var ASSIGNEMENT_MASTER = "assignment_master";
var LOCATION_MASTER = "location_master";
var ADMIN_MASTER = "admin_master";

//Express JS configurations
var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist";
app.use(express.static(distDir));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/mpt", function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);

  });
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ "error": message });
}

// MPT API ROUTES BELOW


//-----------------INSERT OPERATIONS HERE---------------------------------------------------------------------


//1.Uploading and saving batch file and data-------------------------------------------------------------------

app.post("/api/batch/upload-store", function (req, res) {
  console.log("batch upload function called");
  //Formdata incoming
  var form = new formidable.IncomingForm();

  form.parse(req, function (err, fields, files) {
    var oldpath = files.myFile.path;

    //fecthing sent object
    var object = fields.batchDetailsModel;
    var candidateObject = fields.candidateData;

    //parsing object from string to real object
    var batchDetailsModel = JSON.parse(object);
    var candidatesModel = JSON.parse(candidateObject);



    //new path of file where file would be save
    var newpath = 'C:/Users/rsoudey/Desktop/MPT/MPT_6.0/src/app/uploadedBatchDetails/' + batchDetailsModel.batchName + '.xlsx';

    //upload file at the newpath
    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;

      //set some details to batch model
      batchDetailsModel.batchFileURL = newpath;

      //setting date and time
      batchDetailsModel.dateOfUpload = getCurrentDate();
      batchDetailsModel.timeOfUpload = getCurrentTime();;


      //Store batch model in database 
      db.collection(BATCH_MASTER).insertOne(batchDetailsModel, function (err, batchDoc) {
        if (err) {
          handleError(res, err.message, "Failed to store new test set");
        }
        else {
          console.log("batch model data saved");

          //-storing candidate data now-----------------------------------------------------------------------------------------------

          //Store uploadTestDetailsModel in database 
          db.collection(CANDIDATE_MASTER).insertMany(candidatesModel, function (err, cadidateDoc) {
            console.log("storing candidate details . . . . . . .")
            if (err) {
              handleError(res, err.message, "Failed to store candidate data");
            }
            else {
              if (cadidateDoc != undefined && batchDoc != undefined) {
                console.log("candidate data saved");
                res.status(201).json("true");
              }
              else {
                res.json("false");
              }
            }
          });
        }
      });
    });
  });
});

//2.Upload and save mpt test details ---------------------------------------------------------------------

app.post("/api/mpt-set/upload-store", function (req, res) {
  console.log("test upload function called");

  //FormData
  var form = new formidable.IncomingForm();

  //parsing formData object
  form.parse(req, function (err, fields, files) {
    var oldpath = files.myFile.path;

    //object sent via FormData
    var mptObject = fields.mptDetailsModel;

    //parsing in JSON format through string
    var uploadTestDetailsModel = JSON.parse(mptObject);


    //new path where our file gonna store
    var newpath = 'C:/Users/rsoudey/Desktop/MPT/MPT_6.0/src/app/uploadedTests/' + uploadTestDetailsModel.testPaperSetName + '.pdf';
    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;

      //setting some properties before persisting object in db
      uploadTestDetailsModel.testPaperSetFileURL = newpath;

      //setting date and time
      uploadTestDetailsModel.dateOfUpload = getCurrentDate();
      uploadTestDetailsModel.timeOfUpload = getCurrentTime();



      //Store uploadTestDetailsModel in database 
      db.collection(UPLOADED_TEST_SETS_COLLECTION).insertOne(uploadTestDetailsModel, function (err, doc) {
        console.log("storing batch details . . . . . . .")
        if (err) {
          handleError(res, err.message, "Failed to store new test set");
        }
        else {
          if (doc != undefined)
            res.json("true");
          else
            res.json("false");
        }
      });
    });
  });
});

//3.api/store-assignment--------------------------------------------------------------------------------
app.post("/api/store-assignment", function (req, res) {

  var AssignmentModel = req.body;
  //adding date and time of assignment
  AssignmentModel.dateOfAssignment = getCurrentDate();
  AssignmentModel.timeOfAssignment = getCurrentTime();
  db.collection(ASSIGNEMENT_MASTER).insertOne(AssignmentModel, function (err, doc) {

    if (err) {
      handleError(res, err.message, "Failed to store assignment");
    }
    else {
      console.log("Assigned mpts stored successfully . . . . . . .");
      res.json(doc)
    }
  });
});

//4.api/store-assigned-mpt---------------------------------------------------------------------------
app.post("/api/store-assigned-mpt", function (req, res) {
  var AssignmentMPTModel = req.body;
  db.collection(ASSIGNED_MPT_MASTER).insertMany(AssignmentMPTModel, function (err, doc) {

    if (err) {
      handleError(res, err.message, "Failed to store mpt assignment");
    }
    else {
      console.log("Assignment stored successfully . . . . . . .");
      res.json(doc)
    }
  });
});

//5.add Admin-------------------------------------------------------------------------------------------
app.post("/api/add-admin", function (req, res) 
{
  var adminObject=req.body;  
  db.collection(ADMIN_MASTER).insertOne(adminObject, function (err, doc) {

    if (err) {
      handleError(res, err.message, "Failed to store admin");
    }
    else {
      console.log("Admin stored successfully.....");
      res.json(doc)
    }
  });
});

/*************************************Get data from database ********************************************** */

//1.check ip address(/api/find-ipAddress)------------------------------------------------
app.get("/api/find-ipAddress", function (req, res) {

  db.collection(CANDIDATE_MASTER).find({ "batchId": req.query["batchId"], "ipAddress": req.query["ipAddress"] }).toArray(function (err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to fetch ipaddress check");
    }
    else {
      console.log("ipaddress check done ");
      if (docs.length == 0) {
        res.json("0");
      }
      else {
        res.json("1");
      }
    }
  });
});
        


//2.check for assignment existence---------------------------------
app.get("/api/check-assignment-exists", function (req, res) {
  console.log("Check batch id for inserting assignment called :" + req.query['batchId']);
  db.collection(ASSIGNEMENT_MASTER).find({ "batchId": req.query["batchId"], "module": req.query["module"], "testType": req.query["testType"] }).toArray(function (err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to fetch assignment check");
    }
    else {
      if (docs.length == 0) {
        res.json("0");
      }
      else {
        res.json("1");
      }
    }
  })
});


//3.Check for batch id available or not--------------------------------
app.get("/api/checkBatchId", function (req, res) {
  
  //trimming spaces
  var batchId = req.query['batchId'];
  db.collection(BATCH_MASTER).find({ "_id": batchId}).toArray(function (err, docs) {
    console.log("Checking for batch Name");
    if (err) {
      handleError(res, err.message, "Failed to fetch batch names");
    }
    else {
      if (docs.length == 0) {
        console.log("batch not founded");
        res.json("1");
      }
      else {
        console.log("batch founded");
        res.json("0");
      }
    }
  })
});

//4.get candidate based on batch Id-----------------------------

app.get("/api/getCandidates", function (req, res) {
  console.log("get candidate based on batch called :" + req.query['batchId']);
  var batchId = req.query['batchId'];
  db.collection(CANDIDATE_MASTER).find({ "batchId": batchId }).toArray(function (err, docs) {
    console.log("fetching candidates for respective batches");
    if (err) {
      handleError(res, err.message, "Failed to fetch batch names");
    }
    else {

      res.json(docs);
    }
  })
});

//5.get all assignments based on batch id---------------------------------

app.get("/api/assignments-based-on-batch-id", function (req, res) {
  console.log("batch id for inserting assignment called :" + req.query['batchId']);
  db.collection(ASSIGNEMENT_MASTER).find({ "batchId": req.query["batchId"] }).toArray(function (err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to fetch assignments");
    }
    else {
      console.log("Assignments fetched succesfully : " + docs.length)
      res.json(docs);
    }
  })
});

//6.get assignments based on batchID module and testType(/api/get-assignments-filtered)------------------
app.get("/api/get-assignments-filtered", function (req, res) 
{
  console.log( req.query["batchId"]+" "+req.query['module']+" "+req.query['testType']);
  db.collection(ASSIGNEMENT_MASTER).find({ "batchId": req.query["batchId"],"module":req.query['module'],"testType":req.query['testType']})
  .toArray(function (err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to fetch assignments");
    }
    else {
      console.log("Assignments filteration : " + docs.length)
      console.log(docs);
      res.json(docs);
    }
  })
});

//7.get assignments based on batchID Module and Status-------------------------
app.get("/api/get-assignments-filtered-on-status", function (req, res) 
{
  console.log( req.query["batchId"]+" "+req.query['status']+" "+req.query['testType']);
  db.collection(ASSIGNEMENT_MASTER).find({ "batchId": req.query["batchId"],"status":req.query['status'],"testType":req.query['testType']})
  .toArray(function (err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to fetch assignments");
    }
    else {
      console.log("Assignments filteration : " + docs.length)
      console.log(docs);
      res.json(docs);
    }
  })
});



//8.get Assigned MPTs (/api/get-assigned-mpts-filtered)------------------------------
app.get("/api/get-assigned-mpts-based-on-assignmentId", function (req, res) {

  var assignId = req.query["assignId"];
  console.log(assignId);
  db.collection(ASSIGNED_MPT_MASTER).find({
    "assignmentId": assignId
  }).toArray(function (err, docs) {
      if (err) {
        handleError(res, err.message, "Failed to get mpts filtered");
      }
      else 
      {
        res.json(docs);
      }
    });
});

//9.get all assignments----------------------------
app.get("/api/get-all-assignments", function (req, res) 
{
  console.log("all assing to be fetched");
  db.collection(ASSIGNEMENT_MASTER).find({}).sort({"_id":-1})
  .toArray(function (err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to fetch all assignments");
    }
    else 
    {
      console.log("all Assignments fetched succesfully : " + docs.length)
      res.json(docs);
    }
  })
});
//10.GEt all mpts based on module, batchId, testType----------------------

app.get("/api/getMpts/", function (req, res) {

  var batchId = req.query["batchId"];
  var testType = req.query["testType"];
  var module = req.query['module'];

  console.log("batch Id inside get all mpts: " + batchId + " " + testType);
  db.collection(UPLOADED_TEST_SETS_COLLECTION).find({ "batchId": batchId, "testPaperType": testType, "module": module }).sort({ "_id": -1 })
    .toArray(function (err, docs) {
      console.log("get mpts called for : " + batchId + " " + testType + " " + module);
      if (err) {
        handleError(res, err.message, "Failed to get test sets.");
      }
      else {
        res.json(docs);
      }
    });
});


//11.get all batches----------------------

app.get("/api/get-batch-by-location-and-sublocation", function (req, res) {

  console.log("inside get-batch : ");
  var location = req.query["location"];
  var subLocation = req.query["subLocation"];
  console.log("inside get-batch : " + location + " " + subLocation);
  db.collection(BATCH_MASTER).find({ "location": location, "subLocation": subLocation }).toArray(function (err, docs) {
    console.log("fetching batches");
    if (err) {
      handleError(res, err.message, "Failed to get batches");
    }
    else {
      res.json(docs);
    }
  })
});

//12.getBatchCount--------------------

app.get("/api/findBatchCount", function (req, res) {
  db.collection(BATCH_MASTER).count({}, function (err, count) {

    if (err) throw err;
    console.log("Finding batch count...");

    res.json(count);
  });
});

//13.get modules (/api/get-modules)----------------------------

app.get("/api/get-modules", function (req, res) {

  var batchId = req.query["batchId"];
  console.log("inside get-modules : " + batchId);
  db.collection(UPLOADED_TEST_SETS_COLLECTION).find({ "batchId": batchId }).toArray(function (err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get modules");
    }
    else {
      res.json(docs);
    }
  })
});


//14.get mpts details based on batch name(/api/get-mpts-based-on-batch-id)--------------------------------------
app.get("/api/get-mpts-based-on-batch-id", function (req, res) {
  var batchId = req.query["batchId"];

  console.log("batch Id inside get all mpts based on batchID: " + batchId);

  db.collection(UPLOADED_TEST_SETS_COLLECTION).find({ "batchId": batchId })
    .toArray(function (err, docs) {
      console.log("get mpts called for : " + batchId);
      if (err) {
        handleError(res, err.message, "Failed to get test sets.");
      }
      else {
        res.json(docs);
      }
    });
});

//15.get all locations-----------------------------------
app.get("/api/get-all-locations",function(req,res)
{
  db.collection(LOCATION_MASTER).find({}).toArray(function(err,locationDocs)
  {
    if(err)
    {
      handleError(res, err.message, "Failed to get all locations.");
    }
    else
    {
      res.json(locationDocs);
    }
  });
});
//16.get locations based on id-----------------------------------
app.get("/api/get-locations-based-on-id",function(req,res)
{
  var locationID=req.query["_id"];
  db.collection(LOCATION_MASTER).find({"_id":locationID}).toArray(function(err,locationDocs)
  {
    if(err)
    {
      handleError(res, err.message, "Failed to get all locations.");
    }
    else
    {
      res.json(locationDocs);
    }
  });
});
//17.get locations based on location value-----------------------------------
app.get("/api/get-locations-based-on-location-value",function(req,res)
{
  var locationvalue=req.query["location"];

  db.collection(LOCATION_MASTER).find({"location":locationvalue}).toArray(function(err,locationDocs)
  {
    if(err)
    {
      handleError(res, err.message, "Failed to get all locations.");
    }
    else
    {
      res.json(locationDocs);
    }
  });
});

//17. get all admin based on emplyee id
app.get("/api/get-all-admin-based-on-employeeId",function(req,res)
{
  var empId=req.query['employeeId'];
  db.collection(ADMIN_MASTER).find({'employeeId':empId})
  .toArray(function(err,adminDoc1)
  {
    if(err)
    {
      handleError(res, err.message, "Failed to get all admin  based on employee id.");
    }
    else
    {
      res.json(adminDoc1);
    }
  });
});

//18. Get all admin based on employeeid and userid
app.get("/api/get-all-admin-based-on-employeeId-and-userID",function(req,res)
{
  var empId=req.query['employeeId'];
  var userId=req.query['userId'];
  console.log(empId);
  db.collection(ADMIN_MASTER).find({$or:[{'_id':empId},{'userId':userId}]})
  .toArray(function(err,adminDoc1)
  {
      if(err)
      {
        handleError(res, err.message, "Failed to get all admin  based on userID employee id 1.");
      }
      else
      {
        if(adminDoc1.length==0)
        {
          res.json("1");
        }
        else
        {
          res.json("0");
        }
      }
    });
});

//19.Get all admin
app.get("/api/get-all-admin",function(req,res)
{
  console.log("request came for get all admin");
  db.collection(ADMIN_MASTER).find({})
  .toArray(function(err,admin)
  {
      if(err)
      {
        handleError(res, err.message, "Failed to get all admin");
      }
      else
      {
        res.json(admin);
      }
    });
});

//20.get admin authentication
app.get("/api/admin-authentication",function(req,res)
{
  console.log("request came for admin authentication");

  var userId=req.query["userId"];

  var password=req.query["password"];

  console.log(userId+" "+password);

  db.collection(ADMIN_MASTER).find({$and:[{"userId":userId},{"password":password}]})
  .toArray(function(err,adminval)
  {
      if(err)
      {
        handleError(res, err.message, "Failed to get all admin");
      }
      else
      {
        res.json(adminval);
      }
    });
});


function getCurrentTime() {
  //Time 
  var time = new Date();
  var currentTime = time.getHours() + ":" + time.getMinutes();
  if(time.getMinutes()<10)
  {
    currentTime = time.getHours() + ":0" + time.getMinutes();
  }
  if(time.getHours()<10)
  {
    currentTime = "0"+time.getHours() + ":" + time.getMinutes();
  }
  return currentTime;
}

function getCurrentDate() {

  //get date 
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  var today = dd + '-' + mm + '-' + yyyy;
  return today;

}

//--------------------------------UPDATE-------------------------- 
app.put("/api/updateAssignment/", function (req, res) {

  var assignmentDoc = req.body;
  console.log("Came for updating assignments :"+assignmentDoc);
  db.collection(ASSIGNEMENT_MASTER).updateOne({ "_id": assignmentDoc._id},
    { $set: { "timeOfAssignment": assignmentDoc.timeOfAssignment, "dateOfAssignment": assignmentDoc.dateOfAssignment, "timeOfExam": assignmentDoc.timeOfExam, "dateOfExam": assignmentDoc.dateOfExam, "batchId": assignmentDoc.batchId, "status": assignmentDoc.status,"module":assignmentDoc.module,"testType":assignmentDoc.testType,"duration":assignmentDoc.duration } },
    { upsert: true }, function (err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to update assignment");
      } else {
        res.status(200).json(doc);
      }
    });
});

app.put("/api/updateCandidate/", function (req, res) {

  var candidateDoc = req.body;
  console.log(candidateDoc.userName);
  db.collection(CANDIDATE_MASTER).updateOne({ "_id": new ObjectID(req.query["candidateId"]) },
    { $set: { "srNo": candidateDoc.srNo, "userName": candidateDoc.userName, "userId": candidateDoc.userId, "emailAddress": candidateDoc.emailAddress, "batchId": candidateDoc.batchId, "ipAddress": candidateDoc.ipAddress } },
    { upsert: true }, function (err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to update candidate");
      } else {
        res.status(200).json(doc);
      }
    });
});

//-----------------------------------GET ALL----------------------------------------

//----------------------------/api/get-all-candidate
app.get("/api/get-all-candidate", function (req, res) 
{

  db.collection(CANDIDATE_MASTER).find({ })
    .toArray(function (err, docs) {
      if (err) {
        handleError(res, err.message, "Failed to all candidates.");
      }
      else {
        res.json(docs);
      }
    });
});



app.get("*", function (req, res) {
  console.log("* called");
  res.sendFile(distDir + "/index.html");
});
