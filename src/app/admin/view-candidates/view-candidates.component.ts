import { Component, OnInit } from '@angular/core';
import { Batch } from '../../models/batches';
import { AdminService } from '../../services/admin.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Candidate } from '../../models/candidates';

import { HostListener } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';


@Component({
  selector: 'app-view-candidates',
  templateUrl: './view-candidates.component.html',
  styleUrls: ['./view-candidates.component.css']
})
export class ViewCandidatesComponent implements OnInit {

  editedIpAddress:string;
  editedEmailAddress:string;
  batches:Batch[];
  candidates:Candidate[];
  batchId:string;

  viewCandidateForm:FormGroup;
  constructor(private adminService:AdminService,private router:Router) {
    this.viewCandidateForm=new FormGroup({
      selectedBatchName:new FormControl(''),
      selectedSubLocation:new FormControl('')
    });
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

  }
  onSelectingSubLocation(subLoc:string)
  {
    this.adminService.getBatchBasedOnLocationAndSubLocation(this.adminLocation,subLoc)
    .subscribe((res)=>{
      this.batches=res;
    });
    this.candidates=undefined;
  }
  onSelectingBatch(batch:string)
  {
    this.batchId=batch;
    this.candidates=undefined;
  }

  onSubmit()
  {
    localStorage.setItem('mySession','true');
        if(this.viewCandidateForm.value['selectedBatchName']==undefined || this.viewCandidateForm.value['selectedBatchName']=="")
    {
      alert("Select batch first");
    }
    else
    {
      this.adminService.getCandidateBasedOnBatchId(this.batchId)
      .subscribe((res)=>{
        this.candidates=res;
      });
    }  
  }

  candidateToBeEdited:Candidate[]=[];

  onEdit(candidate:Candidate)
  {
    this.candidateToBeEdited=[];
    this.editedIpAddress=candidate.ipAddress;
    this.editedEmailAddress=candidate.emailAddress;
    this.candidateToBeEdited.push(candidate);
  }


  checkEditButtonPressed(candidateId:String)
  {
    for(let i=0;i<this.candidateToBeEdited.length;i++)
    { 
      if(candidateId==this.candidateToBeEdited[i]._id)
      {
        return true;
      }
    }
    return false;
  }

  onUpdate(candidate:Candidate)
  {
    let flag:string;
    this.adminService
    .checkIpAddress(this.editedIpAddress,candidate.batchId)
    .subscribe((res)=>{
      if(res=="1")
      {
        alert("Ip address already exists");
      }
      else if(res=="0")
      {
        this.candidateToBeEdited=[];
        candidate.ipAddress=this.editedIpAddress;
        candidate.emailAddress=this.editedEmailAddress;
            this.adminService.updateCandidateDetails(candidate)
          .subscribe((res)=>{
              console.log(res);
          });  
    
          this.adminService.getCandidateBasedOnBatchId(this.batchId)
          .subscribe((res)=>{
            this.candidates=res;
          });
      }
    });
    
  }
  onCancelEdit()
  {
    this.candidateToBeEdited=[];
  }
  @HostListener('window:scroll', ['$event'])
	onscroll(event) 
	{
		this.myFunction();
	}

	myFunction() 
	{
		console.log("scroll called");
		let header = document.getElementById("myHeader");
		let sticky = header.offsetTop;
		if (window.pageYOffset > sticky) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
  }
  
}
