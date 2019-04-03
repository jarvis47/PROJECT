import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { MptDetails } from '../../models/mpts';
import { Batch } from '../../models/batches';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-view-test-sets',
  templateUrl: './view-test-sets.component.html',
  styleUrls: ['./view-test-sets.component.css']
})
export class ViewTestSetsComponent implements OnInit {

  viewMptsFormGroup:FormGroup;
  selectingSubLocation:string;
  constructor(private adminService:AdminService,private router:Router) 
  { 
    this.viewMptsFormGroup=new FormGroup({
      selectedBatchName: new FormControl(''),
      selectedTestType:new FormControl(''),
      selectedModule: new FormControl(''),
      selectedSubLocation:new FormControl('')
    });
  }
  paperSets:MptDetails[];  
  batches:Batch[];

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
    this.selectingSubLocation=subLoc;
    this.adminService.getBatchBasedOnLocationAndSubLocation(this.adminLocation,subLoc)
    .subscribe((res)=>{
      this.batches=res;
    });
    this.paperSets=null;
  }

  onSubmit()
  {
    let selectedBatchName:Batch=this.viewMptsFormGroup.value['selectedBatchName'];

    let selectedTestType=this.viewMptsFormGroup.value['selectedTestType'];;
    let selectedModule=this.viewMptsFormGroup.value['selectedModule'];

    console.log(selectedBatchName+" "+selectedModule+" "+selectedTestType);

    this.adminService
    .getUploadedPaperSets(selectedBatchName._id, selectedTestType.toUpperCase(), selectedModule.toUpperCase())
    .subscribe((data)=>{
        this.paperSets=data;
    });  
  }
  
}