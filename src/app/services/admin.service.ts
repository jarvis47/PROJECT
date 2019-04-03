import { Injectable, OnInit } from '@angular/core';
import {MptDetails} from '../models/mpts';
import { Batch } from '../models/batches';
import { Http, Response, RequestOptions,Headers } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { Candidate } from '../models/candidates';
import { AssignedMpt } from '../models/assigned-mpts';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { Assignments } from '../models/assignments';
import { Locations } from '../models/locations';
import { Admin } from '../models/admin';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements OnInit {

  
  UploadAndSaveMptDetailsURL="/api/mpt-set/upload-store";
  uploadAndSaveBatchDetailsURL="/api/batch/upload-store";
  getUploadedSetsURL="/api/getMpts"; //based on batchID , test type and module no
  getBatchBasedOnLocationAndSubLocationURL="/api/get-batch-by-location-and-sublocation";
  findBatchId="/api/checkBatchId";
  getCandidateBasedOnBatchIdURL="/api/getCandidates";
  saveCandidateData="/api/store-candidates"
  findCountOfBatches:string="/api/findBatchCount";
  getModulesOfBatchFromMptSet="/api/get-modules";  
  getAssignedMPTDetailsFiltered="/api/get-assigned-mpts-based-on-assignmentId"
 // getStatusAndDateOfExamOfAssignmentsBasedOnBatchIdURL="/api/get-status-and-DateOfExam";
  getMptsBasedOnBatchIdURL="/api/get-mpts-based-on-batch-id";
  count:number;
  updateCandidateURL:string="/api/updateCandidate/";
  updateAssignmentURL:string="/api/updateAssignment/";
  storeAssignedMPTsURL="/api/store-assigned-mpt";
  storeAssignmentURL="/api/store-assignment";
  getAllAssignmentsBasedOnBatchIdURL="/api/assignments-based-on-batch-id";
  getAllAssignmentsURL="/api/get-all-assignments"
  checkAssignmentAlreadyExistsURL="/api/check-assignment-exists";
  findIpAddress:string="/api/find-ipAddress"
  getAllCandidateURL="/api/get-all-candidate";
  getAllAssignmentsBasedOnBatchIdModuleAndTypeURL='/api/get-assignments-filtered';
  getAllAssignmentsBasedOnBatchIdModuleAndStatusURL="/api/get-assignments-filtered-on-status";
  getAllLocationsURL="/api/get-all-locations";
  getSubLocationsBasedOnLocationNameURL="/api/get-locations-based-on-location-value";

  storeAdminURL="/api/add-admin";

  checkAdminExistsOrNotURL="/api/get-all-admin-based-on-employeeId-and-userID";
  getAllAdminURL="/api/get-all-admin";

  
  constructor(private http:Http) {
    
  }
  
  ngOnInit(){
   
  }
  //---------------------validation of ip address-----------------------
  checkIpAddress(candidateIpAddress:string,batchId:string)
  {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: myHeaders});
    //trim and uppercase 
    let ipAddress=candidateIpAddress.trim();
    let queryString:string = '?batchId='+batchId+"&ipAddress="+ipAddress;
    return this.http.get(this.findIpAddress+queryString,options)
                    .pipe(map((response : Response) => {
                                  return response.json() as string;   
                                    }));
  }


  //-------------------validation of batch ID existence----------------------------------/
  checkBatchId(batchId:string)
  {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: myHeaders});

    //trim and uppercase 
    batchId=batchId.trim().toUpperCase();

    let queryString:string = '?batchId='+batchId.trim().toUpperCase();

    return this.http.get(this.findBatchId+queryString,options)
                    .pipe(map((response : Response) => {
                                  return response.json() as string;   
                                    }));
  }

  //----------------------Upload Files and save batch details  sets----------------------/

  // 1. upload and save batch details
  batchId:string;
  uploadAndSaveBatchDetails(batchDetails:Batch,selectedFile:File,candidateData:Candidate[])
  {
    //trim and uppercase batchModel
    this.batchId=batchDetails._id.trim().toUpperCase();
    batchDetails.batchName=batchDetails.batchName.trim().toUpperCase();
    batchDetails._id=this.batchId;
    batchDetails.location = batchDetails.location.trim().toUpperCase();
    batchDetails.subLocation = batchDetails.subLocation.trim().toUpperCase();
    batchDetails.lotName = batchDetails.lotName.trim().toUpperCase();

    //batchId in candidate table and trim n uppercase n lowercase
    candidateData=this.assignBatchID(candidateData);
    

    const uploadBatchData = new FormData();
    uploadBatchData.append('myFile',selectedFile, selectedFile.name);
    uploadBatchData.append('candidateData',JSON.stringify(candidateData));
    uploadBatchData.append('batchDetailsModel',JSON.stringify(batchDetails));
     return this.http.post(this.uploadAndSaveBatchDetailsURL, uploadBatchData)
     .pipe( 
       map((response : Response) => 
       {
          return response.json() as Batch;   
      }));
    
  }


//----------------------Upload Files and save test details----------------------/
  uploadAndSaveMpt(mptDetails:MptDetails,selectedFile:File)
  {
    //trim and uppercase
    mptDetails.module=mptDetails.module.trim().toUpperCase();
    mptDetails.testPaperSetName = mptDetails.testPaperSetName.trim().toUpperCase();
    mptDetails.testPaperType = mptDetails.testPaperType.trim().toUpperCase();
    const uploadMptData = new FormData();
    console.log(selectedFile+" "+selectedFile.name);
    uploadMptData.append('myFile',selectedFile, selectedFile.name);
    uploadMptData.append('mptDetailsModel',JSON.stringify(mptDetails));
     return this.http.post(this.UploadAndSaveMptDetailsURL, uploadMptData)
     .pipe( 
       map((response : Response) => 
       {
          return response.json() as MptDetails;   
      }));
    
  }
  
  //-+------------------------------------------Assign test module--------------------------------------------

  checkAssignmentAlreadyExists(assignment:Assignments)
  {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: myHeaders});
    let queryString="?batchId="+assignment.batchId+"&module="+assignment.module+"&testType="+assignment.testType;
    return this.http.get(this.checkAssignmentAlreadyExistsURL+queryString,options)
    .pipe( 
      map((response : Response) => 
      {
        return response.json() as string;   
    }));
  }
//----------------------------store assignements---------------------

storeAssignment(assignment:Assignments)
{
  
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  let options = new RequestOptions({ headers: myHeaders});
  return this.http.post(this.storeAssignmentURL, assignment,options)
  .pipe( 
    map((response : Response) => 
    {
      return response.json() as Assignments;   
  }));
}

//----------------------------store assigned MPTs---------------------
storeAssignedMPTs(assignedMPTs:AssignedMpt[])
{ 

  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  let options = new RequestOptions({ headers: myHeaders});
   return this.http.post(this.storeAssignedMPTsURL, assignedMPTs,options)
   .pipe( 
     map((response : Response) => 
     {
        return response.json() as AssignedMpt[];   
    }));
}

//store admin
storeAdmin(admin:Admin)
{ 
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  let options = new RequestOptions({ headers: myHeaders});
   return this.http.post(this.storeAdminURL,admin,options)
   .pipe( 
     map((response : Response) => 
     {
        return response.json() as Admin;   
    }));
}

/**********************************GEt data from db*********************************** */

    
//----------------------get uploaded mpts----------------------/

  getUploadedPaperSets(batchId:string,testType:string,module:string)
  {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: myHeaders});
    let queryString:string='?batchId='+batchId+"&testType="+testType+"&module="+module;
    return this.http.get(this.getUploadedSetsURL+queryString,options)
    .pipe(map((response : Response) => {
        return response.json() as MptDetails[];   
    }));
  }
  

  //----------------------get added batches ----------------------/

  getBatchBasedOnLocationAndSubLocation(location:string,subLocation:string)
  {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: myHeaders});
    let queryString="?location="+location+"&subLocation="+subLocation;
    return this.http.get(this.getBatchBasedOnLocationAndSubLocationURL+queryString,options)
    .pipe(map((response : Response) => {
        return response.json() as Batch[];   
    }));
  }

  //----------------------get candidates----------------------/

    //Based on batch name : //have to modify
    getCandidateBasedOnBatchId(batchId:string)
    {
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      let options = new RequestOptions({ headers: myHeaders});
      console.log(batchId);
      let queryString:string="?batchId="+batchId;

      return this.http.get(this.getCandidateBasedOnBatchIdURL+queryString,options)
      .pipe(map((response : Response) => {
          return response.json() as Candidate[];    
      }));
      
    }

    //----------------get modules---------------------------

    
    getModulesFromMptSet(batchId:string)
    {
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      let options = new RequestOptions({ headers: myHeaders});
      let queryString="?batchId="+batchId;

      return this.http.get(this.getModulesOfBatchFromMptSet+queryString,options)
      .pipe(map((response : Response) => {
          return response.json() as MptDetails[];    
      }));
    }


  //--------------------------------------Find count of Batches----------------
    findCountOfBatchCollection()
    {
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      let options = new RequestOptions({ headers: myHeaders});

      return this.http.get(this.findCountOfBatches,options)
      .pipe(map((response : Response) => {
          return response.json() as number;   
      }));
    }

    assignBatchID(candidate:Candidate[]):Candidate[]
    {
        for(let i=0;i<candidate.length;i++)
        {
          candidate[i].batchId=this.batchId;
          candidate[i].userId=candidate[i].userId.trim().toLowerCase();
          candidate[i].ipAddress=candidate[i].ipAddress.trim();
         
        }
        this.batchId="";
        return candidate;
    }
// //---------------get status and date of exam ----------------------------

// getStatusAndDateOfExamOfAssignmentsBasedOnBatchId(batchId:string)
// {
//   let myHeaders = new Headers();
//   myHeaders.append('Content-Type', 'application/json');
//   let options = new RequestOptions({ headers: myHeaders});

//   let queryString = "?batchId="+batchId;

//   return this.http.get(this.getStatusAndDateOfExamOfAssignmentsBasedOnBatchIdURL+queryString , options)
//   .pipe(map((response : Response) => {
//       return response.json() as Assignments[];   
//   }));
// }

//-------------------------get assignments based on batch id-------------------------------
getAllAssignmentsBasedOnBatchId(assignment:Assignments)
  {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: myHeaders});
    let queryString="?batchId="+assignment.batchId;
    return this.http.get(this.getAllAssignmentsBasedOnBatchIdURL+queryString,options)
    .pipe( 
      map((response : Response) => 
      {
        return response.json() as Assignments[];   
    }));
  }

  //----------------------------get all assignments based on batchid module and type of test--------------------
  
  getAssignmentsBasedOnBatchIdModuleAndType(assignment:Assignments)
  {
    console.log("checking assignments : "+assignment.testType);
    
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: myHeaders});
    let queryString="?batchId="+assignment.batchId+"&module="+assignment.module+"&testType="+assignment.testType.trim().toUpperCase();
    return this.http.get(this.getAllAssignmentsBasedOnBatchIdModuleAndTypeURL+queryString,options)
    .pipe( 
      map((response : Response) => 
      {
        return response.json() as Assignments;
    }));
  }

  //----------------------------
  getAllAssignmentsBasedOnBatchIdModuleAndStatus(assignment:Assignments)
  {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: myHeaders});
    let queryString="?batchId="+assignment.batchId+"&status="+assignment.status+"&testType="+assignment.testType;
    return this.http.get(this.getAllAssignmentsBasedOnBatchIdModuleAndStatusURL+queryString,options)
    .pipe( 
      map((response : Response) => 
      {
        return response.json() as Assignments[];
    }));
  }
  //---------------------------get all assignments--------------------------
  
  getAllAssignments()
  {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: myHeaders});
    return this.http.get(this.getAllAssignmentsURL,options)
    .pipe( 
      map((response : Response) => 
      {
        return response.json() as Assignments[];   
    }));
  }
//------------------get assigned exams----------------------

getAssignedMptsFiltered(assignment:Assignments)
{
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  let options = new RequestOptions({ headers: myHeaders});
  
  
  let queryString = "?assignId="+assignment._id;
  
  return this.http.get(this.getAssignedMPTDetailsFiltered+queryString , options)
  .pipe(map((response : Response) => {
      return response.json() as AssignedMpt[];   
  }));
  
}

getAllMptsBasedOnBatchId(batchId:string)
{
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  let options = new RequestOptions({ headers: myHeaders});
  let queryString = "?batchId="+batchId;

  return this.http.get(this.getMptsBasedOnBatchIdURL+queryString , options)
  .pipe(map((response : Response) => {
      return response.json() as MptDetails[];   
  }));

}


getAllCandidate()
{
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  let options = new RequestOptions({ headers: myHeaders});

  return this.http.get(this.getAllCandidateURL , options)
  .pipe(map((response : Response) => {
      return response.json() as Candidate[];   
  }));
}

  //---------------------get locations---------------
  
  getAllLocation()
  {
    let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  let options = new RequestOptions({ headers: myHeaders});

  return this.http.get(this.getAllLocationsURL , options)
  .pipe(map((response : Response) => {
      return response.json() as Locations[];   
  }));
  }

  //--------------------get locations based on location name-------------
  
  getSubLocationsBasedOnLocationName(locationName:string)
  {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: myHeaders});
    let queryString="?location="+locationName;
    return this.http.get(this.getSubLocationsBasedOnLocationNameURL+queryString , options)
    .pipe(map((response : Response) => {
        return response.json() as Locations[];   
    }));
  }

  //18. check pre-existence of admin (/api/get-all-admin-based-on-employeeId-and-userID)
  
  checkAdminExistsOrNot(admin:Admin)
  {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: myHeaders});
    let queryString="?employeeId="+admin._id+"&userId="+admin.userId;
    console.log(queryString);
    
    return this.http.get(this.checkAdminExistsOrNotURL+queryString , options)
    .pipe(map((response : Response) => {
        return response.json() as string;   
    }));
  }

  //19.GET ALL ADMIN
  getAllAdmin()
  {
    console.log("get all admin");
    
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: myHeaders});
    return this.http.get(this.getAllAdminURL , options)
    .pipe(map((response : Response) => {
        return response.json() as Admin[];   
    }));
  }


//--------------------------UPDATE----------------------------------------------
  updateCandidateDetails(candidate:Candidate)
  {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: myHeaders});

    let queryString="?candidateId="+candidate._id;
    return this.http.put(this.updateCandidateURL+queryString,candidate,options)
    .pipe(map((resp:Response) => {
      return resp.json() as Candidate;
    }));
  }

  updateAssignment(assignment:Assignments)
  {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: myHeaders});
    return this.http.put(this.updateAssignmentURL,assignment,options)
    .pipe(map((resp:Response) => {
      return resp.json() as Assignments;
    }));
  }
  
  distinctDates(statusAndDate:AssignedMpt[]):Date[]
	{
		let result:Date[]=[];
		for(let i=0;i<statusAndDate.length;i++)
		{
		//	result.push(statusAndDate[i].dateOfExam);
		}
		let filteredArray = result.filter(function(item, pos){
			return result.indexOf(item)== pos; 
		  });
		  return filteredArray;
  }

  distinctStatus(statusAndDate:AssignedMpt[]):string[]
	{
		let result:string[]=[];
		for(let i=0;i<statusAndDate.length;i++)
		{
		//	result.push(statusAndDate[i].status);
		}
		let filteredArray = result.filter(function(item, pos){
			return result.indexOf(item)== pos; 
		  });
		  return filteredArray;
  }

  findDaysDifference(joiningDate,endDate):number
  {
    let date1 = new Date(joiningDate);
    let date2 = new Date(endDate);
    let timeDiff = Math.abs(date2.getTime() - date1.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    return diffDays;
  }

  private handleError (error: any): Promise<any> 
  {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console
    return Promise.reject(errMsg);
  }
  

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
    FileSaver.saveAs(data, fileName + '_export_' + new  Date().getTime() + EXCEL_EXTENSION);
  }


}
