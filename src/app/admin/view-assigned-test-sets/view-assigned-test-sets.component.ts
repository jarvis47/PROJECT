import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AssignedMpt } from '../../models/assigned-mpts';
import { Batch } from '../../models/batches';
import { Candidate } from '../../models/candidates';
import { MptDetails } from '../../models/mpts';
import { HostListener } from '@angular/core';
import { Assignments } from '../../models/assignments';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-view-assigned-test-sets',
  templateUrl: './view-assigned-test-sets.component.html',
  styleUrls: ['./view-assigned-test-sets.component.css']
})
export class ViewAssignedTestSetsComponent implements OnInit 
{
  assignedMptDetails:AssignedMpt[];
  viewAssignedMPTsFormGroup:FormGroup;
  batches:Batch[];
  status:string[];
  dateOfExam:Date[];
  statusAndDate:AssignedMpt[];
  assignmentArray:any[]=[];
  candidates:Candidate[];
  mptDetails:MptDetails[];
  batchId:string;
  finalArray:any[];
  editedIpAddress="";
  candidateToBeEdited:string[]=[];
  cancelEdit:boolean=false;

  //new ways
  assignment:Assignments;
  
  constructor(private adminService:AdminService,private router:Router) {
    this.viewAssignedMPTsFormGroup=new FormGroup({
      selectedBatch:new FormControl(''),
      selectedModule:new FormControl(''),
      selectedTestType:new FormControl(''),
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
    this.assignedMptDetails=[];
  }
  onSelectModule()
  {
    this.assignedMptDetails=[];
  }
  onSelectTestType()
  {
    this.assignedMptDetails=[];
  }
  onSelectionOfBatch(batchId:string)
  {
    this.assignedMptDetails=[];
    this.batchId=batchId;
    this.adminService.getCandidateBasedOnBatchId(batchId)
    .subscribe((res)=>{
      this.candidates=res;
    });

    this.adminService.getAllMptsBasedOnBatchId(batchId)
    .subscribe((res)=>{
      this.mptDetails=res;
    });
  }
  
  onSubmit()
  {
    this.assignmentArray=[];
    this.finalArray=[];
    let assignmentData=new Assignments();
    assignmentData.batchId=this.viewAssignedMPTsFormGroup.value['selectedBatch'];
    assignmentData.module=this.viewAssignedMPTsFormGroup.value['selectedModule'];
    assignmentData.testType=this.viewAssignedMPTsFormGroup.value['selectedTestType'].trim().toUpperCase();
  
    console.log(assignmentData);
    
    //Getting all assignments here..
    this.adminService
    .getAssignmentsBasedOnBatchIdModuleAndType(assignmentData)
    .subscribe((res)=>{
      this.assignment=res;
      console.log(this.assignment[0]);
      this.adminService.getAssignedMptsFiltered(this.assignment[0])
      .subscribe((res)=>{
        this.assignedMptDetails=res;
        this.findCandidates(this.assignment[0],this.assignedMptDetails,this.candidates,this.mptDetails,this.batches);
      });
    });    
   
  }
  findCandidates(assignmentMaster:Assignments,assignedMptDetails:AssignedMpt[],candidates:Candidate[],uploadedMPT:MptDetails[],batchData:Batch[])
  {
    
    for(let i=0;i<assignedMptDetails.length;i++)
    {
      if(assignedMptDetails[i].assignmentId==assignmentMaster._id)
      {
        for(let j=0;j<candidates.length;j++)
        {
          if(assignedMptDetails[i].candidateId==candidates[j]._id)
          {
              for(let k=0;k<uploadedMPT.length;k++)
              {
                if(uploadedMPT[k]._id==assignedMptDetails[i].mptSetId)
                {
                  for(let l=0;l<batchData.length;l++)
                  {
                    if(batchData[l]._id==assignmentMaster.batchId)
                    {
                      let finalDetailedJSON={
                        userId:"",
                        fullName:"",
                        ipAddress:"",
                        emailAddress:"",
                        candidateId:"",
                        employeeId:"",
                        
                        batchId:"",
                        batchName:"",
                        location:"",
                        subLocation:"",
                        
                        mptId:"",
                        mptSetName:"",
                        uploadedBy:"",
                        uploadDate:new Date(),
                        uploadTime:new Date(),
                        
                        assignmentId:"",
                        status:"",
                        dateOfExam:new Date(),
                        timeOfExam:new Date(),
                        assignedBy:"",
                        assignDate:new Date(),
                        assignTime:new Date() 
                     }
                    
                     finalDetailedJSON.candidateId=candidates[j]._id;
                     finalDetailedJSON.userId=candidates[j].userId;
                     finalDetailedJSON.fullName=candidates[j].fullName;
                     finalDetailedJSON.ipAddress=candidates[j].ipAddress;
                     finalDetailedJSON.emailAddress=candidates[j].emailAddress;
                     finalDetailedJSON.employeeId=candidates[j].employeeId;

                     finalDetailedJSON.batchId=batchData[l]._id;
                     finalDetailedJSON.batchName=batchData[l].batchName;
                     finalDetailedJSON.location=batchData[l].location;
                     finalDetailedJSON.subLocation=batchData[l].subLocation;

                     finalDetailedJSON.mptId=uploadedMPT[k]._id;
                     finalDetailedJSON.mptSetName=uploadedMPT[k].testPaperSetName;
                     finalDetailedJSON.uploadDate=uploadedMPT[k].dateOfUpload;
                     finalDetailedJSON.uploadTime=uploadedMPT[k].timeOfUpload;

                     finalDetailedJSON.assignmentId=assignmentMaster._id;
                     finalDetailedJSON.status=assignmentMaster.status;
                     finalDetailedJSON.dateOfExam=assignmentMaster.dateOfExam;
                     finalDetailedJSON.timeOfExam=assignmentMaster.timeOfExam;
                     finalDetailedJSON.assignDate=assignmentMaster.dateOfAssignment;
                     finalDetailedJSON.assignTime=assignmentMaster.timeOfAssignment;

                   
                     this.finalArray.push(finalDetailedJSON);

                    }
                  }
                }
              }
          }
        }
      }
    }
  }


  exportAsExcel()
  {
    
    this.adminService.exportAsExcelFile(this.finalArray,(this.batchId+"_"+this.assignment[0].module+"_"+this.assignment[0].dateOfAssignment));
  }

  checkEditButtonPressed(candidateId):boolean
  { 
    for(let i=0;i<this.candidateToBeEdited.length;i++)
    { 
      if(candidateId==this.candidateToBeEdited[i])
      {
        return true;
      }
    }
    return false;
  }
  
  onEditIpAddress(candidateId:string,ipAddress:string)
  {
    this.cancelEdit=false;
      this.candidateToBeEdited=[];
      this.editedIpAddress=ipAddress;
      this.candidateToBeEdited.push(candidateId);
  }

  onDoneEditing(candidateId:string)
  {
    this.adminService
    .checkIpAddress(this.editedIpAddress,this.batchId)
    .subscribe((res)=>
    {
      if(res=="1")
      {
        alert("Ip address already exists");
      }
      else if(res=="0")
      {
        let flag=0;
        console.log(this.editedIpAddress);
        this.candidateToBeEdited=[];
        let candidate=new Candidate();
        for(let i=0;i<this.candidates.length;i++)
        {
          if(candidateId==this.candidates[i]._id)
          {
            candidate=this.candidates[i];
            flag=1;
          }
        }
        if(flag==1)
        {
          candidate.ipAddress=this.editedIpAddress;

            this.adminService.updateCandidateDetails(candidate)
          .subscribe((res)=>{
              console.log(res);
          });  

          this.adminService.getCandidateBasedOnBatchId(this.batchId)
          .subscribe((res)=>{
            this.candidates=res;
            this.finalArray=[];
            this.findCandidates(this.assignment[0],this.assignedMptDetails,this.candidates,this.mptDetails,this.batches);
          });
          this.cancelEdit=true;
        }
      }
    });
  }

  onCancelEdit()
  {
    this.cancelEdit=true;
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