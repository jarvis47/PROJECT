import { Component, OnInit } from '@angular/core';
import {Candidate} from '../../models/candidates';
import { AdminService } from '../../services/admin.service';
import { Batch } from '../../models/batches';
import { FormGroup, FormControl } from '@angular/forms';
import { MptDetails } from '../../models/mpts';
import {AssignedMpt} from '../../models/assigned-mpts';

import { HostListener } from '@angular/core';
import { Assignments } from '../../models/assignments';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
	selector: 'app-assign-test-sets',
	templateUrl: './assign-test-sets.component.html',
	styleUrls: ['./assign-test-sets.component.css']
})
export class AssignTestSetsComponent implements OnInit {

	assignMptSetForm:FormGroup;
	batchData:Batch[];
	assignment:Assignments=new Assignments();
	selectedBatchId:string;
	selectedModuleNo:string;
	mptSets:MptDetails[];
	candidates:Candidate[];
	testDate:Date;
	//validate
	batchSelected:boolean;
	moduleSelected:boolean;
	testSetSelected:boolean;
	showRow2:boolean;
	testType:string;
	testTypeSelected:boolean;
	startAssignments:boolean=false;
	moduleName:string;
	
	mptDetails:MptDetails[];
	modules:string[];
	assignedMptCandidates:AssignedMpt[]=[];
	doneEditing:boolean;
	newMptSetId:string;
	editingCandidateMpt:Candidate;
	selectedMptSetId:string;
	minutes:string[]=["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15",
		"16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32",
		"33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49",
		"50","51","52","53","54","55","56","57","58","59"];

	constructor(private adminService:AdminService,private router:Router) {
		this.assignMptSetForm=new FormGroup({
			selectedDateOfTest:new FormControl(''),
			selectedTimeOfTest:new FormControl(''),
			selectedBatchId:new FormControl(''),
			selectedTestType:new FormControl(''),
			selectedModule:new FormControl(''),
			selectedMinutes:new FormControl(''),
			selectedHrs:new FormControl(''),
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
		this.batchData=res;
	  });
	}
	onSelectingTestType()
	{
		this.mptSets=[];
		this.assignedMptCandidates=[];
		
	}
	onSelectModule()
	{
		this.mptSets=[];
		this.assignedMptCandidates=[];
	}
	onSelectingBatch(batch:string)
	{
		this.selectedBatchId=batch;
		this.mptSets=[];
		console.log(batch);
		
		this.adminService
		.getModulesFromMptSet(this.selectedBatchId)
		.subscribe((res)=>{
			this.mptDetails=res;
			this.modules=this.distinctMods(this.mptDetails);
		});
	}
	distinctMods(mptDetails:MptDetails[]):string[]
	{
		let result:string[]=[];
		for(let i=0;i<mptDetails.length;i++)
		{
			result.push(mptDetails[i].module);
		}
		let filteredArray = result.filter(function(item, pos){
			return result.indexOf(item)== pos; 
		  });
		  return filteredArray;
	}
	onSubmit()
	{
		let dateOfExam=this.assignMptSetForm.value["selectedDateOfTest"];
		let timeOfExam=this.assignMptSetForm.value["selectedTimeOfTest"];
		let batchId=this.assignMptSetForm.value["selectedBatchId"];
		let module=this.assignMptSetForm.value["selectedModule"];
		let testType=this.assignMptSetForm.value["selectedTestType"].trim().toUpperCase();
		let durationHours=this.assignMptSetForm.value["selectedHrs"];
		let durationMins=this.assignMptSetForm.value["selectedMinutes"];
		let duration=durationHours+":"+durationMins;

		this.assignment.dateOfExam=dateOfExam;
		this.assignment.timeOfExam=timeOfExam;
		this.assignment.batchId=batchId;
		this.assignment.module=module;
		this.assignment.testType=testType;
		this.assignment.duration=duration;
		this.assignment.addedBy=this.adminUserId;
		this.assignment.status="assigned";

		//this.assignment ID creation
		this.assignment._id=batchId+"_"+module+"_("+dateOfExam+" : "+timeOfExam+")_"+this.assignment.testType;
		
		//validations
		if(new Date(dateOfExam)<new Date())
		{
			alert("Assignment date cannot be past date");
		}
		else if(this.adminService.findDaysDifference(new Date(),new Date(dateOfExam))>10)
		{
			alert("You cannot assign test before 10 days");
		}
		else if(durationHours=="" || durationMins=="" || durationHours==undefined || durationMins==undefined)
		{
			alert("Duration of test is not selected")
		}
		else if(testType=="0" || testType==undefined || testType=="")
		{
			alert("Select test type first");
		}
		else if(batchId=="0" || batchId==undefined || batchId=="")
		{
			alert("Select batch first");
		}
		else if(module=="0" || module==undefined || module=="")
		{
			alert("Select module name first");
		}
		else
		{
			this.adminService
			.getCandidateBasedOnBatchId(batchId)
			.subscribe((res)=>{
				this.candidates=res;
			});

			this.adminService.getUploadedPaperSets(batchId,testType,module.toUpperCase())
			.subscribe((res)=>{
				this.mptSets=res;
			});

		}
		
	}
	onSelectingMPT(setId:string)
	{
		this.selectedMptSetId=setId;
	}

	//Assign button
	onTestAssign(candidate:Candidate)
	{
		if(this.selectedMptSetId=="0" || this.selectedMptSetId==undefined)
		{
			alert("Choose mpt set first");
		}
		else
		{
			let assignedData=new AssignedMpt();
			assignedData.candidateId=candidate._id;
			assignedData.mptSetId=this.selectedMptSetId;
			this.assignedMptCandidates.push(assignedData);
		}
		

	}
	// find candidate assigned or not if assigned then button get disappear and edit option should come
	assignButtonClicked(candidate:Candidate):boolean
	{	
		
		for(let i=0;i<this.assignedMptCandidates.length;i++)
		{
			if(this.assignedMptCandidates[i].candidateId==candidate._id)
			{	
				return true;
			}
		}
		return false;
	}

	// getting set name from mptDetails collection based on setId that came from candidate id inside assignedMptCandidates collection
	getSetName(candidate:Candidate):string
	{
		let setId=this.findAssignmentObjectFromCollection(candidate).mptSetId;
		return this.findSetNameByMptId(setId);
	}
	findSetNameByMptId(setId):string
	{
		let setName:string="";
		for(let i=0;i<this.mptDetails.length;i++)
		{
			if(this.mptDetails[i]._id==setId)
			{
				setName=this.mptDetails[i].testPaperSetName;
			}
		}
		return setName;
	}
	editMptSet(candidate:Candidate,currentSetName:string)
	{	
		this.editingCandidateMpt=candidate;
	}	
	
	newMptSet:string;
	onEditingMPT(candidate:Candidate,mptId:string)
	{	
		this.newMptSet=mptId;
		let assignedMpt=this.findAssignmentObjectFromCollection(candidate);
		let index=this.assignedMptCandidates.indexOf(assignedMpt);
		this.assignedMptCandidates.splice(index,1);

		let assignedData=new AssignedMpt();
		assignedData.candidateId=candidate._id;
		assignedData.mptSetId=mptId;
		this.assignedMptCandidates.push(assignedData);
		this.editingCandidateMpt=null;
	}
	findAssignmentObjectFromCollection(candidate:Candidate):AssignedMpt
	{	
		for(let i=0;i<this.assignedMptCandidates.length;i++)
		{
			if(this.assignedMptCandidates[i].candidateId==candidate._id)
			{
				return this.assignedMptCandidates[i];
			}
		}
	}

	
	finishAssignment()
	{
		let check:string="";
			this,this.adminService
			.checkAssignmentAlreadyExists(this.assignment)
			.subscribe((res)=>{
				check=res;
				if(check=="0")
				{
					let cnfrm=confirm("Please check all assignment carefully before submit");
					if(cnfrm)
					{
						console.log("check came 0");
						this.adminService
						.storeAssignment(this.assignment)
						.subscribe((res)=>{
								console.log(res);	
						});
						this.storeAssignedMPT(this.assignment._id);
						window.location.reload();
					}
				}
				else if(check=="1")
				{
					console.log("check came 1");
					alert(this.assignment.testType+" already exists for "+this.assignment.batchId+" for "+this.assignment.module);
				}
				});
	}
	storeAssignedMPT(assignmentId:string)
	{
		console.log("c came here . . . ."+assignmentId);
		
		for(let i=0;i<this.assignedMptCandidates.length;i++)
		{
			this.assignedMptCandidates[i].assignmentId=assignmentId;
		}
		this.adminService
			.storeAssignedMPTs(this.assignedMptCandidates)
			.subscribe((res)=>{
				console.log(res);
			});
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
