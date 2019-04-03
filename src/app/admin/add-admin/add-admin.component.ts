import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { Locations } from '../../models/locations';
import { Admin } from '../../models/admin';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  locations:Locations[];
  addAdminForm:FormGroup;
  subLocations:Locations[];
  subLocationArray:string[];
  locationSelected:boolean;
  checkedSubLocations:string[]=[];
  admins:Admin[];

  constructor(private adminService:AdminService,private router:Router)
   {
    this.addAdminForm=new FormGroup({
      fullName:new FormControl(''),
      userID:new FormControl(''),
      password:new FormControl(''),
      roleOfAdmin:new FormControl(''),
      selectedLocation:new FormControl(''),
      employeeID:new FormControl(''),
    });
    //console.log("cnstr called");
    
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
      this.adminService.getAllLocation()
      .subscribe((res)=>{
        this.locations=res;
      });   

    this.adminService.getAllAdmin()
    .subscribe((res)=>
    {
      this.admins=res;
    });
   // console.log("ng oninit called");
  }

  onSelectingLocation(location:string)
  {
    this.checkedSubLocations=[];
    this.adminService.getSubLocationsBasedOnLocationName(location)
    .subscribe((res)=>{
      this.subLocations=res;
      this.subLocationArray=this.createSubLocationArray(this.subLocations);
    });
    if(location!="0")
      this.locationSelected=true;
    else
    this.locationSelected=false;
  }

  createSubLocationArray(subLocations:Locations[]):string[]
  {
    let subLocationArray:string[]=[];
    for(let i=0;i<subLocations.length;i++)
    {
      for(let j=0;j<subLocations[i].subLocation.length;j++)
      {
         subLocationArray.push(subLocations[i].subLocation[j]);
      }
    }
    return subLocationArray;
  }
  

  onCheckSubLocation(value)
  {
    console.log(value);
    let flag:boolean=false;
    for(let i=0;i<this.checkedSubLocations.length;i++)
    {
      if(this.checkedSubLocations[i]==value)
      {
        let index=this.checkedSubLocations.indexOf(this.checkedSubLocations[i]);
        this.checkedSubLocations.splice(index,1);
        flag=true;
      }
    }
    if(!flag)
    {
      this.checkedSubLocations.push(value);
    }
  }

   onSubmit()
  {

    let admin:Admin=new Admin();
    let fullName=this.addAdminForm.value['fullName'];
    let userID=this.addAdminForm.value['userID'];
    let password=this.addAdminForm.value['password'];
    let roleOfAdmin=this.addAdminForm.value['roleOfAdmin'];
    let employeeID=this.addAdminForm.value["employeeID"];
    let location=this.addAdminForm.value["selectedLocation"];
    let addedBy=this.adminUserId;
    
    admin._id=employeeID;
    admin.name=fullName;
    admin.userId=userID;
    admin.password=password;
    admin.role=roleOfAdmin;
    admin.location=location;
    admin.addedBy=addedBy;

    if(this.checkedSubLocations.length>1)
    { 
      admin.multiLocation=true;
    }
    else
    {
      admin.multiLocation=false;
    }
    admin.subLocation=this.checkedSubLocations;

    //check pre-existence  employee id
    this.adminService.checkAdminExistsOrNot(admin)
    .subscribe((res)=>
    {
      if(res=="1")
      { 
         //store admin into database
          this.adminService.storeAdmin(admin)
          .subscribe((res)=>{
            window.location.reload();
          });
      }
      else
      {
        alert("Admin with the employee id or userId already exists");
      }
    });
  }
  onRemoveAdmin()
  {
    
  }
}
