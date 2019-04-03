import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Candidate } from '../../models/candidates';
import { Batch } from '../../models/batches';

import * as XLSX from 'xlsx';
import { AdminService } from '../../services/admin.service';
import { FileUploadedModel } from '../../models/file-uploaded-model';
import { Router } from '../../../../node_modules/@angular/router';

type AOA = any[][];

@Component({
  selector: 'app-add-new-batch',
  templateUrl: './add-new-batch.component.html',
  styleUrls: ['./add-new-batch.component.css']
})
export class AddNewBatchComponent implements OnInit {

  fileUploaded:FileUploadedModel;
  batchSaved:Batch;
  candidateDataSaved:Candidate[];
  batchFounded:string;
  addNewBatchForm:FormGroup;
  data: Candidate[];
	wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
	fileName: string = 'SheetJS.xlsx';
  selectedFile:File;
  candidates:Candidate[];

  candidatesUserIDMatchedArray:string[]=[];
  candidatesIpAddressMatchedArray:string[]=[];
  candidatesEmployeeIdMatchedArray:string[]=[];

  
  locationSelected:string;
  batchIdSelected:string;
  subLocationSelected:string;

  constructor(private adminService:AdminService,private router:Router ) 
  {
    this.addNewBatchForm=new FormGroup({
      selectedLocation:new FormControl(""),
      selectedSubLocation:new FormControl(""),
      batchId:new FormControl(""),
      batchName:new FormControl(""),
      lotName:new FormControl(""),
      onBoardingDate:new FormControl(""),
      endDate:new FormControl(""),
      selectedStudentFile:new FormControl("")
    })
   }
   
    adminUserId:string;
    adminUserName:string;
    adminLocation:string;
    adminSubLocation:string[];

    ngOnInit() {
      this.adminUserId=localStorage.getItem('loginUserId');
      this.adminUserName=localStorage.getItem('loginName');

      this.adminLocation=localStorage.getItem('loginAdminLocation');
      this.adminSubLocation=localStorage.getItem('loginAdminSubLocation').split(',');
      // if(this.adminUserId==undefined)
      // {
      //   this.router.navigate(['/login']);
      // }
     this.adminService
     .getAllCandidate()
     .subscribe((res)=>{
       this.candidates=res;
     });
   }
   /*************************Reading excel*******************************/
  excelData:Candidate[];
  fileTypeMessage:boolean=false;
  fileSelected:boolean=false;
  onFileSelect(evt)
  {
    this.fileSelected=true;
    this.selectedFile=evt.target.files[0] ;
      this.fileSelected=true;
      this.fileTypeMessage=false;
      // wire up file reader 
      const target: DataTransfer = <DataTransfer>(evt.target);
      if (target.files.length !== 1) throw new Error('Cannot use multiple files');
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        // read workbook 
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

        // grab first sheet 
        const wsname: string = wb.SheetNames[0];
      
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];
        // save data 
        this.excelData = <Candidate[]>(XLSX.utils.sheet_to_json(ws, { header: 0 }));
        
        };
        reader.readAsBinaryString(target.files[0]);      
  }


  onSubmit() {
    let invalidDate: boolean;

    let batchDetails = new Batch();
    batchDetails.location = this.adminLocation;
    batchDetails.subLocation = this.addNewBatchForm.controls['selectedSubLocation'].value;
    batchDetails._id = this.addNewBatchForm.controls['batchId'].value;
    batchDetails.batchName = this.addNewBatchForm.controls['batchName'].value;
    batchDetails.lotName = this.addNewBatchForm.controls['lotName'].value;
    let joiningDate: Date = this.addNewBatchForm.controls['onBoardingDate'].value;
    batchDetails.joiningDate = joiningDate;
    let endDate: Date = this.addNewBatchForm.controls['endDate'].value;
    batchDetails.endDate = endDate;
    batchDetails.addedBy=this.adminUserId;

    //find day difference between join and end date
    let todayMinusJoiningDate: number = this.adminService.findDaysDifference(this.addNewBatchForm.controls['onBoardingDate'].value, (new Date()));
    let endDateMinuToday: number = this.adminService.findDaysDifference((new Date()), this.addNewBatchForm.controls['endDate'].value);
    let trainingPeriod: number = this.adminService.findDaysDifference(this.addNewBatchForm.controls['onBoardingDate'].value, this.addNewBatchForm.controls['endDate'].value);

    //Validate of date------------------------------------------
    joiningDate = new Date(joiningDate);
    endDate = new Date(endDate);
    let alertMessage: string;

    if (endDate < new Date()) {
      invalidDate = true;
      alertMessage = "End Date can't be less than today's date";
    }
    else if (endDate < joiningDate) {
      invalidDate = true;
      alertMessage = "End Date can't be less than joining date"
    }
    else if (joiningDate > new Date()) {
      invalidDate = true;
      alertMessage = "You have entered joining date greater than today's dates";
    }
    else if (todayMinusJoiningDate > 60) {
      invalidDate = true;
      alertMessage = "You are trying to add batch older than 2 months";
    }
    else if (endDateMinuToday > 120) {
      invalidDate = true;
      alertMessage = "Please check end date it is more than 4 months from now";
    }
    else if (trainingPeriod > 180) {
      invalidDate = true;
      alertMessage = "Please check training period is more than 6 months";
    }
    else {
      invalidDate = false;
    }

    //validation for location selected
    let locationSelected: boolean = false;
    if (batchDetails.subLocation != "0") {
      locationSelected = true;
    }

    //Validation of batch exists
    this.checkBatchIdExistence(batchDetails._id);

    //Validation messages
    if (this.batchFounded=="0") {
      alert("Batch with the same ID already Exists");
      return false;
    }
    else if (invalidDate) {
      alert(alertMessage);
      return false;
    }
    else if (!locationSelected) {
      alert("Location or sublocation not selected");
    }
    else {
      this.checkCandidateExistenceInDB(this.excelData);
      if (this.candidatesEmployeeIdMatchedArray.length > 0) {
        alert(this.candidatesEmployeeIdMatchedArray.length + " employee IDs already Exists !!!\n" + this.candidatesEmployeeIdMatchedArray)
      }
      else if (this.candidatesIpAddressMatchedArray.length > 0) {
        alert(this.candidatesIpAddressMatchedArray.length + " IPs already Exists !!!\n" + this.candidatesIpAddressMatchedArray)
      }
      else if (this.candidatesUserIDMatchedArray.length > 0) {
        alert(this.candidatesUserIDMatchedArray.length + " userId already Exists !!!\n" + this.candidatesUserIDMatchedArray)
      }
      else {
        let confirmBox = confirm("Do You want to add : " + batchDetails._id + " Batch");
        if (confirmBox) {
          //Upload+Save Lab details File---------------------------------------------------
          this.adminService
            .uploadAndSaveBatchDetails(batchDetails, this.selectedFile, this.excelData)
            .subscribe((res) => {
              this.batchSaved = res;
            });
          window.location.reload();
        }
      }
      this.candidatesUserIDMatchedArray = [];
      this.candidatesIpAddressMatchedArray = [];
      this.candidatesEmployeeIdMatchedArray = [];
    }
  }

  

  //check candidate existence
  checkCandidateExistenceInDB(candidateList:Candidate[])
  {
    for(let i=0;i<candidateList.length;i++)
    {
      for(let j=0;j<this.candidates.length;j++)
      {
        if(candidateList[i].userId==this.candidates[j].userId)
        {
            this.candidatesUserIDMatchedArray.push(candidateList[i].userId);
        }
        if(candidateList[i].ipAddress==this.candidates[j].ipAddress)
        {
            this.candidatesIpAddressMatchedArray.push(candidateList[i].ipAddress);
        }
        if(candidateList[i].employeeId==this.candidates[j].employeeId)
        {
          this.candidatesEmployeeIdMatchedArray.push(candidateList[i].employeeId);
        }
      }
    }
  }

  //Checking existence of batch ID in DB

  checkBatchIdExistence(batchId:string)
  {
    if(batchId!=undefined)
    {
      this.adminService.checkBatchId(batchId).subscribe((res)=>{
        console.log(res);
          this.batchFounded=res;
      });  
    }
  }


  onSelectionSubLocation(subLocation)
  {
    this.subLocationSelected=subLocation;
   // this.checkBatchIdExistence(this.batchIdSelected,this.locationSelected,this.subLocationSelected);
  }


  onSelectionBatchId(batchId)
  {
    this.batchIdSelected=batchId;
    this.checkBatchIdExistence(batchId);
  }
}
