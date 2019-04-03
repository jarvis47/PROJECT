import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Batch } from '../../models/batches';
import { FormGroup, FormControl } from '@angular/forms';
import { MptDetails } from '../../models/mpts';
import { Assignments } from '../../models/assignments';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  assignments:Assignments;
  assignmentToBeUpdated:Assignments;
  batches:Batch[];
  batchId:string;
  mptDetails:MptDetails[];
  assignmentDetails:Assignments[];
  viewAssignmentsForm:FormGroup;
  updateAssignmentsForm:FormGroup;
  minutes:string[]=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15",
		"16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32",
		"33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49",
		"50","51","52","53","54","55","56","57","58","59"];

  constructor(private adminService:AdminService,private router:Router)
  {

    this.viewAssignmentsForm=new FormGroup({
      selectedStatus:new FormControl(''),
      selectedBatch:new FormControl(''),
      selectedTestType:new FormControl(''),
      selectedSubLocation:new FormControl(''),
      
    });

    this.updateAssignmentsForm=new FormGroup({
      updatedDate:new FormControl(''),
      updatedTime:new FormControl(''),
      updatedHours:new FormControl(''),
      updatedMinutes:new FormControl('')
    });

    this.assignmentToBeUpdated=new Assignments();
  }

  adminUserId:string;
  adminUserName:string;
  adminLocation:string;
  adminSubLocation:string[];
  adminType:string;
  adminMultiLan:string;
  ngOnInit() {
    this.adminUserId=localStorage.getItem('loginUserId');
    this.adminUserName=localStorage.getItem('loginName');
    this.adminLocation=localStorage.getItem('loginAdminLocation');
    this.adminSubLocation=localStorage.getItem('loginAdminSubLocation').split(',');
    this.adminType=localStorage.getItem('loginRole');
    this.adminMultiLan=localStorage.getItem('loginAdminMultilocationSupport');
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
  }
  onSubmit()
  {
    let status=this.viewAssignmentsForm.value['selectedStatus'];
    let batchId=this.viewAssignmentsForm.value['selectedBatch'];
    let testType=this.viewAssignmentsForm.value['selectedTestType'];
    
    this.assignments=new Assignments();
    this.assignments.batchId=batchId;
    this.assignments.status=status;
    this.assignments.testType=testType;

    this.adminService.getAllAssignmentsBasedOnBatchIdModuleAndStatus(this.assignments)
    .subscribe((res)=>{
      this.assignmentDetails=res;
      console.log(this.assignmentDetails);
      
    });
  }
  //Edit assignment button
  editingAssignments:Assignments[]=[];
  onEditAssignment(assignment){
    this.editingAssignments=[];
    this.editingAssignments.push(assignment);
  }

  checkEditButtonPressed(assignment)
  {
    this.assignmentToBeUpdated=assignment;
    for(let i=0;i<this.editingAssignments.length;i++)
    {
      if(this.editingAssignments[i]._id==assignment._id)
      {
        return true;
      }
    }
    return false;
  }
  onUpdateForm()
  {
    this.editingAssignments=[];

    let duration=this.updateAssignmentsForm.value["updatedHours"]+":"+this.updateAssignmentsForm.value["updatedMinutes"];
    let startTime=this.updateAssignmentsForm.value["updatedTime"];
    let examDate=this.updateAssignmentsForm.value["updatedDate"];

    this.assignmentToBeUpdated.duration=duration;
    this.assignmentToBeUpdated.dateOfExam=examDate;
    this.assignmentToBeUpdated.timeOfExam=startTime;

    this.adminService.updateAssignment(this.assignmentToBeUpdated)
    .subscribe((res)=>{
      console.log(res);
    });
    this.updateAssignmentsForm.reset();

  }
  onCancelEdit(assignment:Assignments)
  {
    this.editingAssignments=[]; 
  }
}
