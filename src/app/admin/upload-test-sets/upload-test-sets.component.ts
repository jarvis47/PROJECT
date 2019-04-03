import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin.service';
import { Http } from '@angular/http'
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import {MptDetails} from '../../models/mpts';
import {FileUploadedModel} from '../../models/file-uploaded-model';
import { Batch } from '../../models/batches';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-upload-test-sets',
  templateUrl: './upload-test-sets.component.html',
  styleUrls: ['./upload-test-sets.component.css']
})
export class UploadTestSetsComponent implements OnInit 
{
  module:string[]=['Module 1','Module 2','Module 3','Module 4','Module 5'];
  uploadTestPaperSetForm:FormGroup;
  batches:Batch[]=[];
  selectedSubLocation:string;
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
     //GET BATCH NAME AND ID FROM THE DATABASE
   
     
  }
  constructor(private adminService:AdminService,private http:Http,private router:Router) { 
    //SET FORM CONTROLS
    this.uploadTestPaperSetForm=new FormGroup({
      selectedTestPaperSetFile:new FormControl(''),
      selectedBatch:new FormControl(''),
      selectedModule:new FormControl(''),
      selectedSetNumber:new FormControl(''),
      testType:new FormControl(''),
      selectedSubLocation:new FormControl('')
    });
  }

  onSelectingSubLocation(subLoc:string)
  {
    this.adminService
    .getBatchBasedOnLocationAndSubLocation(this.adminLocation,subLoc)
    .subscribe((data)=>{
      this.batches=data;
    });
  }
  selectedFile;
  onFileSelect(event)
  {
   this.selectedFile = event.target.files[0];
  
  }

  fileUploaded:FileUploadedModel;
  responseValue:string;

  //on Submitting Form 
  onSubmit()
  {
    //create an instance of model
    let MptDetailsModel =new MptDetails();
    
    //set form data into that
    let selectedBatch:Batch=this.uploadTestPaperSetForm.controls['selectedBatch'].value;
    
    //batch ID
    MptDetailsModel.batchId=selectedBatch._id;
    
    let selectedModule=this.uploadTestPaperSetForm.controls['selectedModule'].value; 
    MptDetailsModel.module=selectedModule;
    
    let testType=this.uploadTestPaperSetForm.controls['testType'].value; 
    MptDetailsModel.testPaperType=testType;

    //set number
    let setNumber=this.uploadTestPaperSetForm.controls['selectedSetNumber'].value; 
    MptDetailsModel.setNumber=setNumber;

    //userId
    MptDetailsModel.uploadedBy=this.adminUserId;
    
    //set test paper name
    let testPaperSetName=selectedBatch.batchName+"_set_"+setNumber+"_"+selectedModule+"_"+testType;

    MptDetailsModel.testPaperSetName=testPaperSetName;

    if(this.selectedFile==null)
    {
      alert("Please select File !!");
    }
    else
    {
      if(MptDetailsModel.batchId=="0" || MptDetailsModel.batchId==undefined )
      {
        alert("Batch Name not selected")
        return false;
      }
      if(this.uploadTestPaperSetForm.controls['selectedSetNumber'].value=="0" || this.uploadTestPaperSetForm.controls['selectedSetNumber'].value=="0"==undefined)
      {
        alert("Set number not selected")
        return false;
      }
      if(MptDetailsModel.module=="0" || MptDetailsModel.module==undefined)
      {
        alert("Module not selected");
        return false;
      }
      let cnfrm=confirm("Do you want to upload : "+testPaperSetName);
      if(cnfrm)
      {
        //Upload File and save details------------------------------------------------------------------
        this.adminService.uploadAndSaveMpt(MptDetailsModel,this.selectedFile)
        .subscribe((data)=>{
            console.log("test saved : "+this.responseValue);
          });    
      }
      
     
    }
  }
  
}
 


