(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/add-admin/add-admin.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin/add-admin/add-admin.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/add-admin/add-admin.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/add-admin/add-admin.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"background-color: #f3f3f3\">\r\n        <div class=\"col-md-6\">\r\n                <div class=\"jumbotron\">\r\n                    <h3>\r\n                        Add new Admin Here \r\n                    </h3>\r\n                    <hr>\r\n                        <form [formGroup]=\"addAdminForm\" (ngSubmit)=\"onSubmit()\">\r\n                            <table>\r\n                                <tr>\r\n                                    <td>Full name</td>\r\n                                    <td>\r\n                                        <input type=\"text\" class=\"form-control-sm\" required formControlName=\"fullName\" required>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Employee ID</td>\r\n                                    <td>\r\n                                        <input type=\"text\" class=\"form-control-sm\" formControlName=\"employeeID\" required>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>User ID</td>\r\n                                    <td>\r\n                                        <input type=\"text\" class=\"form-control-sm\" formControlName=\"userID\" required>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Password</td>\r\n                                    <td>\r\n                                        <input type=\"password\" class=\"form-control-sm\" formControlName=\"password\" required>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Role</td>\r\n                                    <td>\r\n                                        <input type=\"radio\" formControlName=\"roleOfAdmin\" value=\"ADMIN\" required>Admin<br>\r\n                                        <input type=\"radio\" formControlName=\"roleOfAdmin\" value=\"SUPER-ADMIN\" required>Super Admin\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Location</td>\r\n                                    <td>\r\n                                        <select formControlName=\"selectedLocation\" required class=\"form-control-sm\" (change)=\"onSelectingLocation($event.target.value)\">\r\n                                                <option value=\"0\">-----------</option>\r\n                                            <option *ngFor=\"let location of locations\">\r\n                                                {{location.location}}\r\n                                            </option>\r\n                                        </select>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr *ngIf=\"locationSelected\">\r\n                                    <td>Sub Location</td>\r\n                                    <td>&nbsp;&nbsp;\r\n                                         <span  *ngFor=\"let subLocation of subLocationArray\">\r\n                                            <input type=\"checkbox\"   [value]=\"subLocation\" (change)=\"onCheckSubLocation($event.target.value)\">{{subLocation}}&nbsp;&nbsp;&nbsp;&nbsp;\r\n                                         </span>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                            <br>\r\n                            <br>\r\n                            <button type=\"submit\" [disabled]=\"!addAdminForm.valid\" class=\"btn btn-success btn-sm\" >Add</button>\r\n                            <button type=\"reset\" class=\"btn btn-danger btn-sm\">Reset</button>\r\n                            <br>\r\n                            <br>\r\n                            <div *ngIf=\"!addAdminForm.valid\"  class=\"p-1 mb-1 bg-danger text-white\">\r\n                                All the fields are mandatory\r\n                            </div>\r\n                        </form>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"col-md-6\">\r\n            <h3>Available Admins</h3>\r\n            <hr>\r\n            <div *ngIf=\"admins\">\r\n                <div *ngIf=\"admins.length>0\">\r\n                    <table class=\"table table-sm table-bordered\">\r\n                        <tr>\r\n                            <th>EMPID</th>\r\n                            <th>Name</th>\r\n                            <th>Role</th>\r\n                            <th>Location</th>\r\n                            <th>Action</th>\r\n                        </tr>\r\n                        <tr *ngFor=\"let admin of admins\">\r\n                            <td>{{admin._id}}</td>\r\n                            <td>{{admin.name}}</td>\r\n                            <td>{{admin.role}}</td>\r\n                            <td>{{admin.location}}</td>\r\n                            <td>\r\n                                <button class=\"btn btn-danger btn-sm\" type=\"button\" (click)=\"onRemoveAdmin()\">Remove</button>\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n                <div *ngIf=\"admins.length==0\">\r\n                    no admin has been added\r\n                </div>  \r\n            </div>\r\n        </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/add-admin/add-admin.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/add-admin/add-admin.component.ts ***!
  \********************************************************/
/*! exports provided: AddAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdminComponent", function() { return AddAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _models_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/admin */ "./src/app/models/admin.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddAdminComponent = /** @class */ (function () {
    function AddAdminComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.checkedSubLocations = [];
        this.addAdminForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            userID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            roleOfAdmin: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            selectedLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            employeeID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        //console.log("cnstr called");
    }
    AddAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminUserId = localStorage.getItem('loginUserId');
        this.adminUserName = localStorage.getItem('loginName');
        this.adminLocation = localStorage.getItem('loginAdminLocation');
        this.adminSubLocation = localStorage.getItem('loginAdminSubLocation').split(',');
        this.adminType = localStorage.getItem('loginRole');
        this.adminMultiLan = localStorage.getItem('loginAdminMultilocationSupport');
        // if(this.adminUserId==undefined)
        // {
        //   this.router.navigate(['/login']);
        // }
        this.adminService.getAllLocation()
            .subscribe(function (res) {
            _this.locations = res;
        });
        this.adminService.getAllAdmin()
            .subscribe(function (res) {
            _this.admins = res;
        });
        // console.log("ng oninit called");
    };
    AddAdminComponent.prototype.onSelectingLocation = function (location) {
        var _this = this;
        this.checkedSubLocations = [];
        this.adminService.getSubLocationsBasedOnLocationName(location)
            .subscribe(function (res) {
            _this.subLocations = res;
            _this.subLocationArray = _this.createSubLocationArray(_this.subLocations);
        });
        if (location != "0")
            this.locationSelected = true;
        else
            this.locationSelected = false;
    };
    AddAdminComponent.prototype.createSubLocationArray = function (subLocations) {
        var subLocationArray = [];
        for (var i = 0; i < subLocations.length; i++) {
            for (var j = 0; j < subLocations[i].subLocation.length; j++) {
                subLocationArray.push(subLocations[i].subLocation[j]);
            }
        }
        return subLocationArray;
    };
    AddAdminComponent.prototype.onCheckSubLocation = function (value) {
        console.log(value);
        var flag = false;
        for (var i = 0; i < this.checkedSubLocations.length; i++) {
            if (this.checkedSubLocations[i] == value) {
                var index = this.checkedSubLocations.indexOf(this.checkedSubLocations[i]);
                this.checkedSubLocations.splice(index, 1);
                flag = true;
            }
        }
        if (!flag) {
            this.checkedSubLocations.push(value);
        }
    };
    AddAdminComponent.prototype.onSubmit = function () {
        var _this = this;
        var admin = new _models_admin__WEBPACK_IMPORTED_MODULE_3__["Admin"]();
        var fullName = this.addAdminForm.value['fullName'];
        var userID = this.addAdminForm.value['userID'];
        var password = this.addAdminForm.value['password'];
        var roleOfAdmin = this.addAdminForm.value['roleOfAdmin'];
        var employeeID = this.addAdminForm.value["employeeID"];
        var location = this.addAdminForm.value["selectedLocation"];
        var addedBy = this.adminUserId;
        admin._id = employeeID;
        admin.name = fullName;
        admin.userId = userID;
        admin.password = password;
        admin.role = roleOfAdmin;
        admin.location = location;
        admin.addedBy = addedBy;
        if (this.checkedSubLocations.length > 1) {
            admin.multiLocation = true;
        }
        else {
            admin.multiLocation = false;
        }
        admin.subLocation = this.checkedSubLocations;
        //check pre-existence  employee id
        this.adminService.checkAdminExistsOrNot(admin)
            .subscribe(function (res) {
            if (res == "1") {
                //store admin into database
                _this.adminService.storeAdmin(admin)
                    .subscribe(function (res) {
                    window.location.reload();
                });
            }
            else {
                alert("Admin with the employee id or userId already exists");
            }
        });
    };
    AddAdminComponent.prototype.onRemoveAdmin = function () {
    };
    AddAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-admin',
            template: __webpack_require__(/*! ./add-admin.component.html */ "./src/app/admin/add-admin/add-admin.component.html"),
            styles: [__webpack_require__(/*! ./add-admin.component.css */ "./src/app/admin/add-admin/add-admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AddAdminComponent);
    return AddAdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/add-new-batch/add-new-batch.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/add-new-batch/add-new-batch.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bId\r\n{\r\n    width: 100%;\r\n}\r\n#bName\r\n{\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/admin/add-new-batch/add-new-batch.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/add-new-batch/add-new-batch.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n<h3>Add New Batches</h3>\n<hr>\n<form [formGroup]=\"addNewBatchForm\" (ngSubmit)=\"onSubmit()\">\n<table class=\"table table-borderless table-sm\">\n  <tr>\n    <td>Location</td>\n    <td>:</td>\n    <td>\n       <b>{{adminLocation}}</b>\n    </td>\n    <td>Sub-Location</td>\n    <td>:</td>\n    <td>\n        <select class=\"form-control-sm\" formControlName=\"selectedSubLocation\" required (change)=\"onSelectionSubLocation($event.target.value)\">\n          <option value=\"0\">--select subLocation--</option>  \n          <option *ngFor=\"let subLocs of adminSubLocation\">{{subLocs}}</option>\n        </select>\n    </td>\n  </tr>\n  <tr>\n      <td>Batch Id</td>\n      <td>:</td>\n      <td>\n        <input class=\"form-control-sm\" type=\"text\" id=\"bId\" formControlName=\"batchId\" required  (change)=\"onSelectionBatchId($event.target.value)\">\n      </td>\n      <td>Lot Name</td>\n      <td>:</td>\n      <td>\n        <input class=\"form-control-sm\" type=\"text\" formControlName=\"lotName\" required>\n      </td>\n     \n    </tr>\n    <tr>\n        <td>Batch Name</td>\n      <td>:</td>\n      <td>\n        <input class=\"form-control-sm\" id=\"bName\" type=\"text\" formControlName=\"batchName\" required>\n      </td>\n      </tr>\n    <tr>\n      <td>On-Boarding Date</td>\n      <td>:</td>\n      <td>\n        <input class=\"form-control-sm\" type=\"date\" formControlName=\"onBoardingDate\" required >\n      </td>\n      <td>Batch End Date</td>\n      <td>:</td>\n      <td>\n        <input class=\"form-control-sm\" type=\"date\" formControlName=\"endDate\" required>\n      </td>\n    </tr>\n      <tr>\n          <td>Student Details Excel</td>\n          <td>:</td>\n          <td>\n             <input class=\"form-control-sm\" formControlName=\"selectedStudentFile\" type=\"file\" (change)=\"onFileSelect($event)\" accept=\".xls,.xlsx\" required>\n          </td>\n          <td></td>\n        </tr>\n        <tr>\n          <td style=\"text-align: center\" colspan=\"6\">\n            <br>\n            <br>\n            <br>\n              <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!addNewBatchForm.valid\">Add Batch</button>\n            &nbsp;&nbsp;&nbsp;\n              <button type=\"reset\" class=\"btn btn-danger\">Reset</button>\n          </td>\n        </tr>\n</table>\n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/add-new-batch/add-new-batch.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/add-new-batch/add-new-batch.component.ts ***!
  \****************************************************************/
/*! exports provided: AddNewBatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewBatchComponent", function() { return AddNewBatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_batches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/batches */ "./src/app/models/batches.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddNewBatchComponent = /** @class */ (function () {
    function AddNewBatchComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.wopts = { bookType: 'xlsx', type: 'array' };
        this.fileName = 'SheetJS.xlsx';
        this.candidatesUserIDMatchedArray = [];
        this.candidatesIpAddressMatchedArray = [];
        this.candidatesEmployeeIdMatchedArray = [];
        this.fileTypeMessage = false;
        this.fileSelected = false;
        this.addNewBatchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            selectedLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            selectedSubLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            batchId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            batchName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            lotName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            onBoardingDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            selectedStudentFile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("")
        });
    }
    AddNewBatchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminUserId = localStorage.getItem('loginUserId');
        this.adminUserName = localStorage.getItem('loginName');
        this.adminLocation = localStorage.getItem('loginAdminLocation');
        this.adminSubLocation = localStorage.getItem('loginAdminSubLocation').split(',');
        // if(this.adminUserId==undefined)
        // {
        //   this.router.navigate(['/login']);
        // }
        this.adminService
            .getAllCandidate()
            .subscribe(function (res) {
            _this.candidates = res;
        });
    };
    AddNewBatchComponent.prototype.onFileSelect = function (evt) {
        var _this = this;
        this.fileSelected = true;
        this.selectedFile = evt.target.files[0];
        this.fileSelected = true;
        this.fileTypeMessage = false;
        // wire up file reader 
        var target = (evt.target);
        if (target.files.length !== 1)
            throw new Error('Cannot use multiple files');
        var reader = new FileReader();
        reader.onload = function (e) {
            // read workbook 
            var bstr = e.target.result;
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_3__["read"](bstr, { type: 'binary' });
            // grab first sheet 
            var wsname = wb.SheetNames[0];
            var ws = wb.Sheets[wsname];
            // save data 
            _this.excelData = (xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].sheet_to_json(ws, { header: 0 }));
        };
        reader.readAsBinaryString(target.files[0]);
    };
    AddNewBatchComponent.prototype.onSubmit = function () {
        var _this = this;
        var invalidDate;
        var batchDetails = new _models_batches__WEBPACK_IMPORTED_MODULE_2__["Batch"]();
        batchDetails.location = this.adminLocation;
        batchDetails.subLocation = this.addNewBatchForm.controls['selectedSubLocation'].value;
        batchDetails._id = this.addNewBatchForm.controls['batchId'].value;
        batchDetails.batchName = this.addNewBatchForm.controls['batchName'].value;
        batchDetails.lotName = this.addNewBatchForm.controls['lotName'].value;
        var joiningDate = this.addNewBatchForm.controls['onBoardingDate'].value;
        batchDetails.joiningDate = joiningDate;
        var endDate = this.addNewBatchForm.controls['endDate'].value;
        batchDetails.endDate = endDate;
        batchDetails.addedBy = this.adminUserId;
        //find day difference between join and end date
        var todayMinusJoiningDate = this.adminService.findDaysDifference(this.addNewBatchForm.controls['onBoardingDate'].value, (new Date()));
        var endDateMinuToday = this.adminService.findDaysDifference((new Date()), this.addNewBatchForm.controls['endDate'].value);
        var trainingPeriod = this.adminService.findDaysDifference(this.addNewBatchForm.controls['onBoardingDate'].value, this.addNewBatchForm.controls['endDate'].value);
        //Validate of date------------------------------------------
        joiningDate = new Date(joiningDate);
        endDate = new Date(endDate);
        var alertMessage;
        if (endDate < new Date()) {
            invalidDate = true;
            alertMessage = "End Date can't be less than today's date";
        }
        else if (endDate < joiningDate) {
            invalidDate = true;
            alertMessage = "End Date can't be less than joining date";
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
        var locationSelected = false;
        if (batchDetails.subLocation != "0") {
            locationSelected = true;
        }
        //Validation of batch exists
        this.checkBatchIdExistence(batchDetails._id);
        //Validation messages
        if (this.batchFounded == "0") {
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
                alert(this.candidatesEmployeeIdMatchedArray.length + " employee IDs already Exists !!!\n" + this.candidatesEmployeeIdMatchedArray);
            }
            else if (this.candidatesIpAddressMatchedArray.length > 0) {
                alert(this.candidatesIpAddressMatchedArray.length + " IPs already Exists !!!\n" + this.candidatesIpAddressMatchedArray);
            }
            else if (this.candidatesUserIDMatchedArray.length > 0) {
                alert(this.candidatesUserIDMatchedArray.length + " userId already Exists !!!\n" + this.candidatesUserIDMatchedArray);
            }
            else {
                var confirmBox = confirm("Do You want to add : " + batchDetails._id + " Batch");
                if (confirmBox) {
                    //Upload+Save Lab details File---------------------------------------------------
                    this.adminService
                        .uploadAndSaveBatchDetails(batchDetails, this.selectedFile, this.excelData)
                        .subscribe(function (res) {
                        _this.batchSaved = res;
                    });
                    window.location.reload();
                }
            }
            this.candidatesUserIDMatchedArray = [];
            this.candidatesIpAddressMatchedArray = [];
            this.candidatesEmployeeIdMatchedArray = [];
        }
    };
    //check candidate existence
    AddNewBatchComponent.prototype.checkCandidateExistenceInDB = function (candidateList) {
        for (var i = 0; i < candidateList.length; i++) {
            for (var j = 0; j < this.candidates.length; j++) {
                if (candidateList[i].userId == this.candidates[j].userId) {
                    this.candidatesUserIDMatchedArray.push(candidateList[i].userId);
                }
                if (candidateList[i].ipAddress == this.candidates[j].ipAddress) {
                    this.candidatesIpAddressMatchedArray.push(candidateList[i].ipAddress);
                }
                if (candidateList[i].employeeId == this.candidates[j].employeeId) {
                    this.candidatesEmployeeIdMatchedArray.push(candidateList[i].employeeId);
                }
            }
        }
    };
    //Checking existence of batch ID in DB
    AddNewBatchComponent.prototype.checkBatchIdExistence = function (batchId) {
        var _this = this;
        if (batchId != undefined) {
            this.adminService.checkBatchId(batchId).subscribe(function (res) {
                console.log(res);
                _this.batchFounded = res;
            });
        }
    };
    AddNewBatchComponent.prototype.onSelectionSubLocation = function (subLocation) {
        this.subLocationSelected = subLocation;
        // this.checkBatchIdExistence(this.batchIdSelected,this.locationSelected,this.subLocationSelected);
    };
    AddNewBatchComponent.prototype.onSelectionBatchId = function (batchId) {
        this.batchIdSelected = batchId;
        this.checkBatchIdExistence(batchId);
    };
    AddNewBatchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-new-batch',
            template: __webpack_require__(/*! ./add-new-batch.component.html */ "./src/app/admin/add-new-batch/add-new-batch.component.html"),
            styles: [__webpack_require__(/*! ./add-new-batch.component.css */ "./src/app/admin/add-new-batch/add-new-batch.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AddNewBatchComponent);
    return AddNewBatchComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-dashboard/admin-dashboard.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".options{\r\n    background-color: #ebeced;\r\n}"

/***/ }),

/***/ "./src/app/admin/admin-dashboard/admin-dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"viewAssignmentsForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"options\">\n            <table class=\"table  table-borderless w-auto\">\n              <tr>\n                <td>\n                  Location : <br> <b>\n                  {{adminLocation}}\n                </b>\n                </td>\n                <td>\n                  Sub Locations : <br>\n                  <select formControlName=\"selectedSubLocation\" class=\"form-control-sm\" (change)=\"onSelectingSubLocation($event.target.value)\">\n                    <option value=\"0\">--select subLocation--</option>\n                    <option *ngFor=\"let subLocs of adminSubLocation\">{{subLocs}}</option>\n                  </select>\n                </td>\n                \n                <td *ngIf=\"batches\">\n                    <div *ngIf=\"batches.length==0\" class=\"alert alert-danger\">There is no batches added for the selected location</div>\n                </td>\n                    <td *ngIf=\"batches\">\n                      <div *ngIf=\"batches.length>0\">\n                          Category : <br>\n                          <select class=\"form-control-sm\" formControlName=\"selectedTestType\" required>\n                              <option value=\"TEST\">Test</option>\n                              <option value=\"RETEST\">Retest</option>\n                          </select>\n                      </div>\n                    </td>\n                    <td *ngIf=\"batches\" >\n                      <div *ngIf=\"batches.length>0\">\n                          Status : <br>\n                          <select formControlName=\"selectedStatus\" class=\"form-control-sm\"  required>\n                              <option value=\"assigned\">Assigned</option>\n                              <option value=\"completed\">Completed</option>\n                              <option value=\"running\">Running</option>\n                          </select>\n                      </div>\n                    </td>\n                    <td  *ngIf=\"batches\" >\n                      <div *ngIf=\"batches.length>0\">\n                          Batch : <br>\n                          <select class=\"form-control-sm\" formControlName=\"selectedBatch\"  required>\n                              <option *ngFor=\"let batch of batches\" [value]=\"batch._id\">{{batch.batchName}}</option>\n                          </select>\n                      </div>  \n                      \n                    </td>\n                   <td  *ngIf=\"batches\">\n                      <br>\n                     <div *ngIf=\"batches.length>0\">\n                        <button type=\"submit\" class=\"btn btn-success btn-sm\" [disabled]=\"!viewAssignmentsForm.valid\">View</button>\n                     </div>\n                       \n                   </td>\n                </tr>\n            </table>\n          </div>\n    </form>\n    <div *ngIf=\"assignmentDetails && assignmentDetails.length>0\">\n      <form [formGroup]=\"updateAssignmentsForm\" (ngSubmit)=\"onUpdateForm()\">\n        <table  class=\"table table-striped table-bordered table-sm\" >\n          <tr>\n            <th>Assign.date</th>\n            <th>Assign.time</th>\n            <th>Assigned By</th>\n            <th>Module</th>\n            <th>Category</th>\n            <th>Exam Date</th>\n            <th>Start Time</th>\n            <th>Duration</th>\n            <th>Status</th>\n            <th>Action</th>\n          </tr>\n          <tr *ngFor=\"let assignment of assignmentDetails\">\n            <td>{{assignment.dateOfAssignment}}</td>\n            <td>{{assignment.timeOfAssignment}}</td>\n            <td>{{assignment.addedBy}}</td>\n            <td>{{assignment.module}}</td>\n            <td>{{assignment.testType}}</td>\n            <td *ngIf=\"!checkEditButtonPressed(assignment)\">{{assignment.dateOfExam}}</td>\n            <td *ngIf=\"checkEditButtonPressed(assignment)\">\n                <input class=\"form-control-sm\"  type=\"date\" formControlName=\"updatedDate\"  required>\n            </td>\n            <td *ngIf=\"!checkEditButtonPressed(assignment)\">{{assignment.timeOfExam}}</td>\n            <td *ngIf=\"checkEditButtonPressed(assignment)\">\n                <input class=\"form-control-sm\" type=\"time\" formControlName=\"updatedTime\"  required>\n            </td>\n            <td *ngIf=\"!checkEditButtonPressed(assignment)\">{{assignment.duration}} Hr.</td>\n            <td *ngIf=\"checkEditButtonPressed(assignment)\">\n                <select class=\"form-control-sm\" formControlName=\"updatedHours\"  required>\n                    <option value=\"01\">1 Hr</option>\n                    <option value=\"02\">2 Hr</option>\n                    <option value=\"03\">3 Hr</option>\n                    <option value=\"04\">4 Hr</option>\n                  </select>:\n                  <select class=\"form-control-sm\" required formControlName=\"updatedMinutes\" >\n                      <option *ngFor=\"let minute of minutes\" [value]=\"minute\">{{minute}} Min.</option>\n                    </select>\n            </td>\n            <td  *ngIf=\"assignment.status=='assigned'\" style=\"background-color: #ffffcc\">\n              {{assignment.status}}\n            </td>\n            <td *ngIf=\"assignment.status=='completed'\" style=\"background-color: #4CAF50\">\n              {{assignment.status}}\n            </td>\n            <td *ngIf=\"!checkEditButtonPressed(assignment)\">\n              <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"onEditAssignment(assignment)\">Edit</button>\n            </td>\n            <td *ngIf=\"checkEditButtonPressed(assignment) && assignment.status=='assigned'\">\n              <button type=\"submit\" [disabled]=\"!updateAssignmentsForm.valid\" class=\"btn btn-success btn-sm\">Update</button>\n              <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"onCancelEdit()\">Cancel</button>\n          </td>\n          </tr>\n        </table>\n      </form>\n      </div>\n      <div *ngIf=\"assignmentDetails!=undefined\">\n          <div class=\"jumbotron\" *ngIf=\"assignmentDetails.length==0 \">\n            <h2 class=\"text-danger\"> No Assignments Availabe for the selected items</h2>\n              </div>      \n      </div>\n        <div class=\"jumbotron\" *ngIf=\"assignmentDetails==undefined\">\n          <h3 class=\"text-info\">\n            View Assignments Here !!\n          </h3>\n          </div>"

/***/ }),

/***/ "./src/app/admin/admin-dashboard/admin-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_assignments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/assignments */ "./src/app/models/assignments.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.minutes = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15",
            "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32",
            "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49",
            "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];
        //Edit assignment button
        this.editingAssignments = [];
        this.viewAssignmentsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            selectedStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            selectedBatch: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            selectedTestType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            selectedSubLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        this.updateAssignmentsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            updatedDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            updatedTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            updatedHours: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            updatedMinutes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.assignmentToBeUpdated = new _models_assignments__WEBPACK_IMPORTED_MODULE_3__["Assignments"]();
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        this.adminUserId = localStorage.getItem('loginUserId');
        this.adminUserName = localStorage.getItem('loginName');
        this.adminLocation = localStorage.getItem('loginAdminLocation');
        this.adminSubLocation = localStorage.getItem('loginAdminSubLocation').split(',');
        this.adminType = localStorage.getItem('loginRole');
        this.adminMultiLan = localStorage.getItem('loginAdminMultilocationSupport');
        // if(this.adminUserId==undefined)
        // {
        //   this.router.navigate(['/login']);
        // }
    };
    AdminDashboardComponent.prototype.onSelectingSubLocation = function (subLoc) {
        var _this = this;
        this.adminService.getBatchBasedOnLocationAndSubLocation(this.adminLocation, subLoc)
            .subscribe(function (res) {
            _this.batches = res;
        });
    };
    AdminDashboardComponent.prototype.onSubmit = function () {
        var _this = this;
        var status = this.viewAssignmentsForm.value['selectedStatus'];
        var batchId = this.viewAssignmentsForm.value['selectedBatch'];
        var testType = this.viewAssignmentsForm.value['selectedTestType'];
        this.assignments = new _models_assignments__WEBPACK_IMPORTED_MODULE_3__["Assignments"]();
        this.assignments.batchId = batchId;
        this.assignments.status = status;
        this.assignments.testType = testType;
        this.adminService.getAllAssignmentsBasedOnBatchIdModuleAndStatus(this.assignments)
            .subscribe(function (res) {
            _this.assignmentDetails = res;
            console.log(_this.assignmentDetails);
        });
    };
    AdminDashboardComponent.prototype.onEditAssignment = function (assignment) {
        this.editingAssignments = [];
        this.editingAssignments.push(assignment);
    };
    AdminDashboardComponent.prototype.checkEditButtonPressed = function (assignment) {
        this.assignmentToBeUpdated = assignment;
        for (var i = 0; i < this.editingAssignments.length; i++) {
            if (this.editingAssignments[i]._id == assignment._id) {
                return true;
            }
        }
        return false;
    };
    AdminDashboardComponent.prototype.onUpdateForm = function () {
        this.editingAssignments = [];
        var duration = this.updateAssignmentsForm.value["updatedHours"] + ":" + this.updateAssignmentsForm.value["updatedMinutes"];
        var startTime = this.updateAssignmentsForm.value["updatedTime"];
        var examDate = this.updateAssignmentsForm.value["updatedDate"];
        this.assignmentToBeUpdated.duration = duration;
        this.assignmentToBeUpdated.dateOfExam = examDate;
        this.assignmentToBeUpdated.timeOfExam = startTime;
        this.adminService.updateAssignment(this.assignmentToBeUpdated)
            .subscribe(function (res) {
            console.log(res);
        });
        this.updateAssignmentsForm.reset();
    };
    AdminDashboardComponent.prototype.onCancelEdit = function (assignment) {
        this.editingAssignments = [];
    };
    AdminDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__(/*! ./admin-dashboard.component.html */ "./src/app/admin/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./admin-dashboard.component.css */ "./src/app/admin/admin-dashboard/admin-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/assign-test-sets/assign-test-sets.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin/assign-test-sets/assign-test-sets.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th, td { \r\n    padding: 20px; \r\n    background-color:none; \r\n} \r\n.content {\r\n    padding: 16px;\r\n  } \r\n.sticky {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n  } \r\n.sticky + .content {\r\n    padding-top: 102px;\r\n  } \r\n.header {\r\n    padding: 10px 16px;\r\n    background:#17a2b8;\r\n    border-bottom-color:1px solid black;\r\n    color: white;\r\n  }"

/***/ }),

/***/ "./src/app/admin/assign-test-sets/assign-test-sets.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/assign-test-sets/assign-test-sets.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  style=\"background-color: #d1d1d1\" >\n<h3>Assign MPTs Here</h3>\n<hr>\n<form [formGroup]=\"assignMptSetForm\" (ngSubmit)=\"onSubmit()\">\n  <table class=\"table table-sm table-borderless\">\n    <tr>\n      <td>\n        Location <br>\n        <b>{{adminLocation}}</b>\n      </td>\n      <td>\n          Sub Locations <br>\n          <select formControlName=\"selectedSubLocation\" class=\"form-control-sm\" (change)=\"onSelectingSubLocation($event.target.value)\">\n            <option value=\"0\">--select subLocation--</option>\n            <option *ngFor=\"let subLocs of adminSubLocation\">{{subLocs}}</option>\n          </select>\n          <div *ngIf=\"batchData\">\n                <div *ngIf=\"batchData.length==0\" class=\"text-danger\">There is no batches added for the selected location</div>\n            </div>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        Date of Test <br>\n        <input class=\"form-control-sm\" formControlName=\"selectedDateOfTest\" type=\"date\" required>\n      </td>\n      <td>\n        Time of Test <br>\n        <input class=\"form-control-sm\" type=\"time\" formControlName=\"selectedTimeOfTest\" required>\n      </td>\n      <td colspan=\"2\">Batch Name <br>\n        <select class=\"form-control-sm\" formControlName=\"selectedBatchId\" (change)=\"onSelectingBatch($event.target.value)\"  required>\n          <option value=\"0\">--select batch here--</option>\n          <option *ngFor=\"let b of batchData\" [ngValue]=\"b\" [value]=\"b._id\">{{b.batchName}}</option>\n        </select>\n      </td>\n    </tr>\n    <tr>\n        <td>\n            Duration <br>\n            <select class=\"form-control-sm\" formControlName=\"selectedHrs\" required>\n              <option value=\"01\">1 Hr</option>\n              <option value=\"02\">2 Hr</option>\n              <option value=\"03\">3 Hr</option>\n              <option value=\"04\">4 Hr</option>\n            </select>\n            :\n            <select class=\"form-control-sm\" formControlName=\"selectedMinutes\" required>\n              <option *ngFor=\"let minute of minutes\" [value]=\"minute\">{{minute}} Min.</option>\n            </select>\n          </td>\n          <td>\n              Category <br>\n              <select class=\"form-control-sm\" formControlName=\"selectedTestType\" required (change)=\"onSelectingTestType()\">\n                <option [value]=\"0\">--select test type--</option>\n                <option>Test</option>\n                <option>Retest</option>\n              </select>\n            </td>\n    \n      <td>Module <br>\n        <select class=\"form-control-sm\" formControlName=\"selectedModule\" required (change)=\"onSelectModule()\"> \n          <option value=\"0\">--select module--</option>\n          <option *ngFor=\"let mpt of \tmodules\">{{mpt}}</option>\n        </select>\n      </td>\n        <td>\n          <br>\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!assignMptSetForm.valid\">view candidates</button>\n        </td>\n    </tr>\n  </table>\n</form>\n</div>\n  <div *ngIf=\"mptSets\">\n  <div *ngIf=\"mptSets.length>0\" class=\"content\">\n    <div class=\"header\" id=\"myHeader\">\n      MPT Set :\n      <select class=\"form-control-sm\"  (change)=\"onSelectingMPT($event.target.value)\">\n        <option value=\"0\">--Select Test Paper Sets--</option>\n        <option *ngFor=\"let set of mptSets\" [ngValue]=\"set\" [value]=\"set._id\">{{set.testPaperSetName}}</option>\n      </select>\n    </div>\n    <table class=\"table table-striped table-bordered table-sm\">\n      <tr>\n        <th>\n          Employee ID\n        </th>\n        <th>\n          UserID\n        </th>\n        <th>\n          User Name\n        </th>\n        <th>\n          IP Address\n        </th>\n        <th>\n          Action\n        </th>\n      </tr>\n      <tr *ngFor=\"let candidate of candidates\">\n        <td>{{candidate.employeeId}}</td>\n        <td>\n          {{ candidate.userId}}\n        </td>\n        <td>\n          {{candidate.fullName}}\n        </td>\n        <td>\n          {{candidate.ipAddress}}\n        </td>\n        <td>\n          <div *ngIf=\"!assignButtonClicked(candidate)\">\n            <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"onTestAssign(candidate)\">Assign Test</button>\n          </div>\n          <div *ngIf=\"assignButtonClicked(candidate)\">\n            <div *ngIf=\"editingCandidateMpt!=candidate\">\n              {{getSetName(candidate)}}\n              <button type=\"button\" class=\"btn btn-warning btn-sm\" (click)=\"editMptSet(candidate,getSetName(candidate))\">Edit</button>\n            </div>\n            <div *ngIf=\"editingCandidateMpt==candidate\">\n              <select class=\"form-control-sm\" required (change)=\"onEditingMPT(candidate,$event.target.value)\">\n                <option value=\"0\"></option>\n                <option *ngFor=\"let set of mptSets\" [ngValue]=\"set\" [value]=\"set._id\">{{set.testPaperSetName}}</option>\n              </select>\n            </div>\n          </div>\n        </td>\n      </tr>\n    </table>\n    <button type=\"button\" (click)=\"finishAssignment()\" class=\"btn btn-success btn-sm\" id=\"publish\">Submit Assignment</button>\n  </div>\n</div>\n  <div *ngIf=\"!mptSets || mptSets.length==0\" class=\"content\">\n    <h5>NO MPTS available for selected test category, module and batch</h5>\n    </div>\n"

/***/ }),

/***/ "./src/app/admin/assign-test-sets/assign-test-sets.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/assign-test-sets/assign-test-sets.component.ts ***!
  \**********************************************************************/
/*! exports provided: AssignTestSetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignTestSetsComponent", function() { return AssignTestSetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_assigned_mpts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/assigned-mpts */ "./src/app/models/assigned-mpts.ts");
/* harmony import */ var _models_assignments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/assignments */ "./src/app/models/assignments.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AssignTestSetsComponent = /** @class */ (function () {
    function AssignTestSetsComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.assignment = new _models_assignments__WEBPACK_IMPORTED_MODULE_4__["Assignments"]();
        this.startAssignments = false;
        this.assignedMptCandidates = [];
        this.minutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15",
            "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32",
            "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49",
            "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];
        this.assignMptSetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            selectedDateOfTest: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            selectedTimeOfTest: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            selectedBatchId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            selectedTestType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            selectedModule: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            selectedMinutes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            selectedHrs: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            selectedSubLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    AssignTestSetsComponent.prototype.ngOnInit = function () {
        this.adminUserId = localStorage.getItem('loginUserId');
        this.adminUserName = localStorage.getItem('loginName');
        this.adminLocation = localStorage.getItem('loginAdminLocation');
        this.adminSubLocation = localStorage.getItem('loginAdminSubLocation').split(',');
        // if(this.adminUserId==undefined)
        // {
        //   this.router.navigate(['/login']);
        // }
    };
    AssignTestSetsComponent.prototype.onSelectingSubLocation = function (subLoc) {
        var _this = this;
        this.adminService.getBatchBasedOnLocationAndSubLocation(this.adminLocation, subLoc)
            .subscribe(function (res) {
            _this.batchData = res;
        });
    };
    AssignTestSetsComponent.prototype.onSelectingTestType = function () {
        this.mptSets = [];
        this.assignedMptCandidates = [];
    };
    AssignTestSetsComponent.prototype.onSelectModule = function () {
        this.mptSets = [];
        this.assignedMptCandidates = [];
    };
    AssignTestSetsComponent.prototype.onSelectingBatch = function (batch) {
        var _this = this;
        this.selectedBatchId = batch;
        this.mptSets = [];
        console.log(batch);
        this.adminService
            .getModulesFromMptSet(this.selectedBatchId)
            .subscribe(function (res) {
            _this.mptDetails = res;
            _this.modules = _this.distinctMods(_this.mptDetails);
        });
    };
    AssignTestSetsComponent.prototype.distinctMods = function (mptDetails) {
        var result = [];
        for (var i = 0; i < mptDetails.length; i++) {
            result.push(mptDetails[i].module);
        }
        var filteredArray = result.filter(function (item, pos) {
            return result.indexOf(item) == pos;
        });
        return filteredArray;
    };
    AssignTestSetsComponent.prototype.onSubmit = function () {
        var _this = this;
        var dateOfExam = this.assignMptSetForm.value["selectedDateOfTest"];
        var timeOfExam = this.assignMptSetForm.value["selectedTimeOfTest"];
        var batchId = this.assignMptSetForm.value["selectedBatchId"];
        var module = this.assignMptSetForm.value["selectedModule"];
        var testType = this.assignMptSetForm.value["selectedTestType"].trim().toUpperCase();
        var durationHours = this.assignMptSetForm.value["selectedHrs"];
        var durationMins = this.assignMptSetForm.value["selectedMinutes"];
        var duration = durationHours + ":" + durationMins;
        this.assignment.dateOfExam = dateOfExam;
        this.assignment.timeOfExam = timeOfExam;
        this.assignment.batchId = batchId;
        this.assignment.module = module;
        this.assignment.testType = testType;
        this.assignment.duration = duration;
        this.assignment.addedBy = this.adminUserId;
        this.assignment.status = "assigned";
        //this.assignment ID creation
        this.assignment._id = batchId + "_" + module + "_(" + dateOfExam + " : " + timeOfExam + ")_" + this.assignment.testType;
        //validations
        if (new Date(dateOfExam) < new Date()) {
            alert("Assignment date cannot be past date");
        }
        else if (this.adminService.findDaysDifference(new Date(), new Date(dateOfExam)) > 10) {
            alert("You cannot assign test before 10 days");
        }
        else if (durationHours == "" || durationMins == "" || durationHours == undefined || durationMins == undefined) {
            alert("Duration of test is not selected");
        }
        else if (testType == "0" || testType == undefined || testType == "") {
            alert("Select test type first");
        }
        else if (batchId == "0" || batchId == undefined || batchId == "") {
            alert("Select batch first");
        }
        else if (module == "0" || module == undefined || module == "") {
            alert("Select module name first");
        }
        else {
            this.adminService
                .getCandidateBasedOnBatchId(batchId)
                .subscribe(function (res) {
                _this.candidates = res;
            });
            this.adminService.getUploadedPaperSets(batchId, testType, module.toUpperCase())
                .subscribe(function (res) {
                _this.mptSets = res;
            });
        }
    };
    AssignTestSetsComponent.prototype.onSelectingMPT = function (setId) {
        this.selectedMptSetId = setId;
    };
    //Assign button
    AssignTestSetsComponent.prototype.onTestAssign = function (candidate) {
        if (this.selectedMptSetId == "0" || this.selectedMptSetId == undefined) {
            alert("Choose mpt set first");
        }
        else {
            var assignedData = new _models_assigned_mpts__WEBPACK_IMPORTED_MODULE_3__["AssignedMpt"]();
            assignedData.candidateId = candidate._id;
            assignedData.mptSetId = this.selectedMptSetId;
            this.assignedMptCandidates.push(assignedData);
        }
    };
    // find candidate assigned or not if assigned then button get disappear and edit option should come
    AssignTestSetsComponent.prototype.assignButtonClicked = function (candidate) {
        for (var i = 0; i < this.assignedMptCandidates.length; i++) {
            if (this.assignedMptCandidates[i].candidateId == candidate._id) {
                return true;
            }
        }
        return false;
    };
    // getting set name from mptDetails collection based on setId that came from candidate id inside assignedMptCandidates collection
    AssignTestSetsComponent.prototype.getSetName = function (candidate) {
        var setId = this.findAssignmentObjectFromCollection(candidate).mptSetId;
        return this.findSetNameByMptId(setId);
    };
    AssignTestSetsComponent.prototype.findSetNameByMptId = function (setId) {
        var setName = "";
        for (var i = 0; i < this.mptDetails.length; i++) {
            if (this.mptDetails[i]._id == setId) {
                setName = this.mptDetails[i].testPaperSetName;
            }
        }
        return setName;
    };
    AssignTestSetsComponent.prototype.editMptSet = function (candidate, currentSetName) {
        this.editingCandidateMpt = candidate;
    };
    AssignTestSetsComponent.prototype.onEditingMPT = function (candidate, mptId) {
        this.newMptSet = mptId;
        var assignedMpt = this.findAssignmentObjectFromCollection(candidate);
        var index = this.assignedMptCandidates.indexOf(assignedMpt);
        this.assignedMptCandidates.splice(index, 1);
        var assignedData = new _models_assigned_mpts__WEBPACK_IMPORTED_MODULE_3__["AssignedMpt"]();
        assignedData.candidateId = candidate._id;
        assignedData.mptSetId = mptId;
        this.assignedMptCandidates.push(assignedData);
        this.editingCandidateMpt = null;
    };
    AssignTestSetsComponent.prototype.findAssignmentObjectFromCollection = function (candidate) {
        for (var i = 0; i < this.assignedMptCandidates.length; i++) {
            if (this.assignedMptCandidates[i].candidateId == candidate._id) {
                return this.assignedMptCandidates[i];
            }
        }
    };
    AssignTestSetsComponent.prototype.finishAssignment = function () {
        var _this = this;
        var check = "";
        this, this.adminService
            .checkAssignmentAlreadyExists(this.assignment)
            .subscribe(function (res) {
            check = res;
            if (check == "0") {
                var cnfrm = confirm("Please check all assignment carefully before submit");
                if (cnfrm) {
                    console.log("check came 0");
                    _this.adminService
                        .storeAssignment(_this.assignment)
                        .subscribe(function (res) {
                        console.log(res);
                    });
                    _this.storeAssignedMPT(_this.assignment._id);
                    window.location.reload();
                }
            }
            else if (check == "1") {
                console.log("check came 1");
                alert(_this.assignment.testType + " already exists for " + _this.assignment.batchId + " for " + _this.assignment.module);
            }
        });
    };
    AssignTestSetsComponent.prototype.storeAssignedMPT = function (assignmentId) {
        console.log("c came here . . . ." + assignmentId);
        for (var i = 0; i < this.assignedMptCandidates.length; i++) {
            this.assignedMptCandidates[i].assignmentId = assignmentId;
        }
        this.adminService
            .storeAssignedMPTs(this.assignedMptCandidates)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    AssignTestSetsComponent.prototype.onscroll = function (event) {
        this.myFunction();
    };
    AssignTestSetsComponent.prototype.myFunction = function () {
        console.log("scroll called");
        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        }
        else {
            header.classList.remove("sticky");
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AssignTestSetsComponent.prototype, "onscroll", null);
    AssignTestSetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assign-test-sets',
            template: __webpack_require__(/*! ./assign-test-sets.component.html */ "./src/app/admin/assign-test-sets/assign-test-sets.component.html"),
            styles: [__webpack_require__(/*! ./assign-test-sets.component.css */ "./src/app/admin/assign-test-sets/assign-test-sets.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AssignTestSetsComponent);
    return AssignTestSetsComponent;
}());



/***/ }),

/***/ "./src/app/admin/home/admin-home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin/home/admin-home.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #e5e5e5;\r\n  }\r\n  \r\n  li {\r\n    float: left;\r\n  }\r\n  \r\n  a{\r\n    color: #666;\r\n  }\r\n  \r\n  li a {\r\n    display: block;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  li a:hover:not(.active) {\r\n    background-color:  #d3d4d5;\r\n    color: #666;\r\n  }\r\n  \r\n  li a.active {\r\n    color: white;\r\n    background-color: #4CAF50;\r\n  }\r\n  \r\n  .is-active\r\n  {\r\n    background-color:  #0f6674;\r\n    color: white\r\n  }\r\n  \r\n  .header {\r\n    overflow: hidden;\r\n    background-color: #0f6674;\r\n    padding: 20px 10px;\r\n    \r\n  }\r\n  \r\n  .header h3{\r\n    color:white;\r\n  }\r\n  \r\n "

/***/ }),

/***/ "./src/app/admin/home/admin-home.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/home/admin-home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <h3>MPT Assignment Master</h3>\n        </div>\n        <div class=\"col-sm-6 text-right text-white\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">Welcome {{adminUserName}}</div>\n                <div class=\"col-sm-12\">\n                    <button class=\"btn btn-default btn-sm text-white\" (click)=\"logOut()\"><b><u>Logout</u></b></button>\n                </div>\n            </div>\n           \n        </div>\n    </div>\n    \n</header>\n<ul>\n                <li>\n                    <a routerLink='/admin-home/admin-dashboard' [routerLinkActive]=\"['is-active']\">Dashboard</a>\n                </li>\n                <li>\n                    <a routerLink='/admin-home/add-new-batch' [routerLinkActive]=\"['is-active']\">Add New Batch</a>\n                </li>\n                <li>\n                        <a routerLink='/admin-home/view-candidates' [routerLinkActive]=\"['is-active']\">Edit Candidates</a>\n                 </li>\n                <li>\n                    <a routerLink='/admin-home/upload-test-sets' [routerLinkActive]=\"['is-active']\">Upload MPTs</a>\n                </li>\n                <li>\n                        <a routerLink='/admin-home/view-test-sets' [routerLinkActive]=\"['is-active']\">View Uploaded MPTs</a>\n                </li>\n                <li>\n                    <a routerLink='/admin-home/assign-test-sets' [routerLinkActive]=\"['is-active']\">Assign MPTs</a>\n                </li>\n                <li>\n                        <a routerLink='/admin-home/view-assigned-mpt-sets' [routerLinkActive]=\"['is-active']\">Edit Assigned MPTs</a>\n                    </li>\n                <li *ngIf=\"adminRole=='SUPER-ADMIN'\">\n                    <a routerLink='/admin-home/add-admin' [routerLinkActive]=\"['is-active']\">Add Admin</a>\n                </li>\n            </ul>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/admin/home/admin-home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/home/admin-home.component.ts ***!
  \****************************************************/
/*! exports provided: AdminHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function() { return AdminHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminHomeComponent = /** @class */ (function () {
    function AdminHomeComponent(router) {
        this.router = router;
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
        this.adminUserId = localStorage.getItem('loginUserId');
        this.adminUserName = localStorage.getItem('loginName');
        this.adminRole = localStorage.getItem("loginRole");
        if (this.adminUserId == undefined) {
            this.router.navigate(['/login']);
        }
    };
    AdminHomeComponent.prototype.logOut = function () {
        localStorage.removeItem('loginUserId');
        localStorage.removeItem('loginName');
        window.location.reload();
    };
    AdminHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./admin-home.component.html */ "./src/app/admin/home/admin-home.component.html"),
            styles: [__webpack_require__(/*! ./admin-home.component.css */ "./src/app/admin/home/admin-home.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminHomeComponent);
    return AdminHomeComponent;
}());



/***/ }),

/***/ "./src/app/admin/upload-test-sets/upload-test-sets.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin/upload-test-sets/upload-test-sets.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/upload-test-sets/upload-test-sets.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/upload-test-sets/upload-test-sets.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h3>\n    Upload MPT Sets Here\n  </h3>\n  <hr>\n    <form [formGroup]=\"uploadTestPaperSetForm\" (ngSubmit)=\"onSubmit()\">\n      <table class=\"table table-borderless table-sm w-auto\">\n              <tr>\n                  <td>\n                      Location\n                  </td>\n                  <td>:</td>\n                  <td>\n                  <b> {{adminLocation}}   </b>\n                  </td>\n              </tr> \n              <tr>  \n              <td>\n                Sub Location:\n              </td>\n              <td>\n                :\n              </td>\n              <td>\n                  <select formControlName=\"selectedSubLocation\" class=\"form-control-sm\" (change)=\"onSelectingSubLocation($event.target.value)\">\n                      <option value=\"0\">--select subLocation--</option>\n                      <option *ngFor=\"let subLocs of adminSubLocation\">{{subLocs}}</option>\n                 </select>\n              </td>\n            </tr>\n        <tr>\n          <td>Batch Name</td>\n          <td>:</td>\n          <td>\n            <select class=\"form-control-sm\" formControlName=\"selectedBatch\" required>\n              <option value=\"0\"></option>\n              <option *ngFor=\"let b of batches\" [ngValue]=\"b\">{{b.batchName}}</option>\n            </select>\n          </td>\n\n        </tr>\n\n        <tr>\n          <td>Set Number</td>\n          <td>:</td>\n          <td>\n            <select class=\"form-control-sm\" formControlName=\"selectedSetNumber\" required>\n              <option value=\"0\"></option>\n              <option>1</option>\n              <option>2</option>\n              <option>3</option>\n              <option>4</option>\n              <option>5</option>\n              <option>6</option>\n              <option>7</option>\n              <option>8</option>\n              <option>9</option>\n              <option>10</option>\n            </select>\n          </td>\n        </tr>\n        <tr>\n          <td>Module Name</td>\n          <td>:</td>\n          <td>\n            <select class=\"form-control-sm\" formControlName=\"selectedModule\" required>\n              <option value=\"0\"></option>\n              <option value=\"mod1\">Module 1</option>\n              <option value=\"mod2\">Module 2</option>\n              <option value=\"mod3\">Module 3</option>\n              <option value=\"mod4\">Module 4</option>\n              <option value=\"mod5\">Module 5</option>\n              <option value=\"mod6\">Module 6</option>\n            </select>\n          </td>\n\n        </tr>\n        <tr>\n          <td>Test Type</td>\n          <td>:</td>\n          <td>\n            <input type=\"radio\" checked=\"checked\" value=\"test\" formControlName=\"testType\" required>Test&nbsp;&nbsp;&nbsp;\n            <input type=\"radio\" value=\"retest\" formControlName=\"testType\" required>Retest\n          </td>\n        </tr>\n        <tr>\n            <td>Test Paper Set</td>\n            <td>:</td>\n            <td>\n              <input formControlName=\"selectedTestPaperSetFile\" type=\"file\" accept=\".pdf\" (change)=\"onFileSelect($event)\" #fileInput required>\n            </td>\n          </tr>\n        <tr>\n          <td>\n            <br>\n            <br>\n            <button type=\"submit\" class=\"btn btn-success btn-sm\" [disabled]=\"!uploadTestPaperSetForm.valid\">Upload MPT</button>\n          </td>\n          <td>\n            <br>\n            <br>\n            <button type=\"reset\" class=\"btn btn-danger btn-sm\">Reset</button>\n          </td>\n        </tr>\n\n      </table>\n    </form>\n  </div>\n"

/***/ }),

/***/ "./src/app/admin/upload-test-sets/upload-test-sets.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/upload-test-sets/upload-test-sets.component.ts ***!
  \**********************************************************************/
/*! exports provided: UploadTestSetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadTestSetsComponent", function() { return UploadTestSetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_mpts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/mpts */ "./src/app/models/mpts.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UploadTestSetsComponent = /** @class */ (function () {
    function UploadTestSetsComponent(adminService, http, router) {
        this.adminService = adminService;
        this.http = http;
        this.router = router;
        this.module = ['Module 1', 'Module 2', 'Module 3', 'Module 4', 'Module 5'];
        this.batches = [];
        //SET FORM CONTROLS
        this.uploadTestPaperSetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            selectedTestPaperSetFile: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            selectedBatch: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            selectedModule: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            selectedSetNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            testType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            selectedSubLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    UploadTestSetsComponent.prototype.ngOnInit = function () {
        this.adminUserId = localStorage.getItem('loginUserId');
        this.adminUserName = localStorage.getItem('loginName');
        this.adminLocation = localStorage.getItem('loginAdminLocation');
        this.adminSubLocation = localStorage.getItem('loginAdminSubLocation').split(',');
        // if(this.adminUserId==undefined)
        // {
        //   this.router.navigate(['/login']);
        // }
        //GET BATCH NAME AND ID FROM THE DATABASE
    };
    UploadTestSetsComponent.prototype.onSelectingSubLocation = function (subLoc) {
        var _this = this;
        this.adminService
            .getBatchBasedOnLocationAndSubLocation(this.adminLocation, subLoc)
            .subscribe(function (data) {
            _this.batches = data;
        });
    };
    UploadTestSetsComponent.prototype.onFileSelect = function (event) {
        this.selectedFile = event.target.files[0];
    };
    //on Submitting Form 
    UploadTestSetsComponent.prototype.onSubmit = function () {
        var _this = this;
        //create an instance of model
        var MptDetailsModel = new _models_mpts__WEBPACK_IMPORTED_MODULE_4__["MptDetails"]();
        //set form data into that
        var selectedBatch = this.uploadTestPaperSetForm.controls['selectedBatch'].value;
        //batch ID
        MptDetailsModel.batchId = selectedBatch._id;
        var selectedModule = this.uploadTestPaperSetForm.controls['selectedModule'].value;
        MptDetailsModel.module = selectedModule;
        var testType = this.uploadTestPaperSetForm.controls['testType'].value;
        MptDetailsModel.testPaperType = testType;
        //set number
        var setNumber = this.uploadTestPaperSetForm.controls['selectedSetNumber'].value;
        MptDetailsModel.setNumber = setNumber;
        //userId
        MptDetailsModel.uploadedBy = this.adminUserId;
        //set test paper name
        var testPaperSetName = selectedBatch.batchName + "_set_" + setNumber + "_" + selectedModule + "_" + testType;
        MptDetailsModel.testPaperSetName = testPaperSetName;
        if (this.selectedFile == null) {
            alert("Please select File !!");
        }
        else {
            if (MptDetailsModel.batchId == "0" || MptDetailsModel.batchId == undefined) {
                alert("Batch Name not selected");
                return false;
            }
            if (this.uploadTestPaperSetForm.controls['selectedSetNumber'].value == "0" || this.uploadTestPaperSetForm.controls['selectedSetNumber'].value == "0" == undefined) {
                alert("Set number not selected");
                return false;
            }
            if (MptDetailsModel.module == "0" || MptDetailsModel.module == undefined) {
                alert("Module not selected");
                return false;
            }
            var cnfrm = confirm("Do you want to upload : " + testPaperSetName);
            if (cnfrm) {
                //Upload File and save details------------------------------------------------------------------
                this.adminService.uploadAndSaveMpt(MptDetailsModel, this.selectedFile)
                    .subscribe(function (data) {
                    console.log("test saved : " + _this.responseValue);
                });
            }
        }
    };
    UploadTestSetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-test-sets',
            template: __webpack_require__(/*! ./upload-test-sets.component.html */ "./src/app/admin/upload-test-sets/upload-test-sets.component.html"),
            styles: [__webpack_require__(/*! ./upload-test-sets.component.css */ "./src/app/admin/upload-test-sets/upload-test-sets.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UploadTestSetsComponent);
    return UploadTestSetsComponent;
}());



/***/ }),

/***/ "./src/app/admin/view-assigned-test-sets/view-assigned-test-sets.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/view-assigned-test-sets/view-assigned-test-sets.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    padding: 16px;\r\n  }\r\n.sticky {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n  }\r\n.sticky + .content {\r\n    padding-top: 102px;\r\n  }\r\n.header {\r\n    padding: 10px 16px;\r\n    background:#f1f1f1;\r\n    border-bottom-color:1px solid black;\r\n  }"

/***/ }),

/***/ "./src/app/admin/view-assigned-test-sets/view-assigned-test-sets.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/view-assigned-test-sets/view-assigned-test-sets.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"viewAssignedMPTsFormGroup\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"header\" id=\"myHeader\">\n        <h3>Edit Assigned MPTs</h3>\n        <hr>\n        <table>\n            <tr>\n                <td style=\"padding: 10px\">\n                    Location\n                    <br>\n                    <b>{{adminLocation}}</b>\n                </td>\n                <td style=\"padding: 10px\">\n                    Sub Locations\n                    <br>\n                    <select formControlName=\"selectedSubLocation\" class=\"form-control-sm\" (change)=\"onSelectingSubLocation($event.target.value)\">\n                        <option value=\"0\">--select subLocation--</option>\n                        <option *ngFor=\"let subLocs of adminSubLocation\">{{subLocs}}</option>\n                    </select>\n                    <div *ngIf=\"batches\">\n                        <div *ngIf=\"batches.length==0\" class=\"text-danger\">There is no batches added for the selected location</div>\n                    </div>\n                </td>\n                <td style=\"padding: 10px\" *ngIf=\"batches\">\n                    <div *ngIf=\"batches.length>0\">\n                        Module\n                        <br>\n                        <select class=\"form-control-sm\" formControlName=\"selectedModule\" (change)=\"onSelectModule()\" required>\n                            <option value=\"MOD1\">Module 1</option>\n                            <option value=\"MOD2\">Module 2</option>\n                            <option value=\"MOD3\">Module 3</option>\n                            <option value=\"MOD4\">Module 4</option>\n                            <option value=\"MOD5\">Module 5</option>\n                            <option value=\"MOD6\">Module 6</option>\n                        </select>\n                    </div>\n                </td>\n                <td style=\"padding: 10px\" *ngIf=\"batches\">\n                    <div *ngIf=\"batches.length>0\">\n                        Category\n                        <br>\n                        <select class=\"form-control-sm\" formControlName=\"selectedTestType\" (change)=\"onSelectTestType()\" required>\n                            <option>Test</option>\n                            <option>Retest</option>\n                        </select>\n                    </div>\n                </td>\n                <td style=\"padding: 10px\" *ngIf=\"batches\">\n                    <div *ngIf=\"batches.length>0\">\n                        Batch\n                        <br>\n                        <select class=\"form-control-sm\" formControlName=\"selectedBatch\" (change)=\"onSelectionOfBatch($event.target.value)\" required>\n                            <option *ngFor=\"let batch of batches\" [value]=\"batch._id\">{{batch.batchName}}</option>\n                        </select>\n                    </div>\n                </td>\n                <td style=\"padding: 10px\" *ngIf=\"batches\">\n                    <div *ngIf=\"batches.length>0\">\n                        <br>\n                        <button type=\"submit\" class=\"btn btn-success btn-sm\" [disabled]=\"!viewAssignedMPTsFormGroup.valid\">View</button>\n                    </div>\n                </td>\n                <td *ngIf=\"assignedMptDetails && assignedMptDetails.length>0 && batches\" style=\"padding: 10px\">\n                    <div *ngIf=\"batches.length>0\">\n                        <br>\n                        <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"exportAsExcel()\">Export</button>\n                    </div>\n                </td>\n            </tr>\n        </table>\n        <div *ngIf=\"assignedMptDetails && assignedMptDetails.length!=0\">\n            <table class=\"table table-bordered table-sm\">\n                <tr>\n                    <td>Date of Exam :</td>\n                    <td>{{finalArray[0].dateOfExam}}</td>\n                    <td>Date of Assignment :</td>\n                    <td>{{finalArray[0].assignDate}}</td>\n                </tr>\n            </table>\n        </div>\n    </div>\n</form>\n\n<div *ngIf=\"assignedMptDetails && assignedMptDetails.length!=0\" class=\"content\">\n    <table class=\"table table-striped table-bordered table-sm\">\n        <tr>\n            <th>Location</th>\n            <th>Sub Location</th>\n            <th>User Id</th>\n            <th>Name</th>\n            <th>Ip Address</th>\n            <th>Set</th>\n            <th>Status</th>\n            <th>Time of Exam</th>\n            <th>Action</th>\n        </tr>\n        <tr *ngFor=\"let data of finalArray\">\n            <td>\n                {{data.location}}\n            </td>\n            <td>{{data.subLocation}}</td>\n            <td>{{data.userId}}</td>\n            <td>{{data.fullName}}</td>\n            <td *ngIf=\"checkEditButtonPressed(data.candidateId) \">\n                <input class=\"border:1px thin red\" type=\"text\" [(ngModel)]=\"editedIpAddress\">\n            </td>\n            <td *ngIf=\"!checkEditButtonPressed(data.candidateId)\">{{data.ipAddress}}</td>\n            <td>{{data.mptSetName}}</td>\n            <td>{{data.status}}</td>\n            <td>{{data.timeOfExam}}</td>\n            <td *ngIf=\"!checkEditButtonPressed(data.candidateId)\">\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"onEditIpAddress(data.candidateId,data.ipAddress)\">Edit</button>\n            </td>\n            <td *ngIf=\"checkEditButtonPressed(data.candidateId)\">\n                <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"onDoneEditing(data.candidateId)\">Update</button>\n                <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"onCancelEdit()\">Cancel</button>\n            </td>\n        </tr>\n    </table>\n</div>\n<div *ngIf=\"finalArray!=undefined && batches!=undefined\">\n    <div class=\"jumbotron\" *ngIf=\"finalArray.length==0 && batches.length>0\">\n        <h2 class=\"text-danger\"> No Assignments Availabe for the selected items</h2>\n    </div>\n</div>\n<div *ngIf=\"finalArray==undefined\">\n    <div class=\"jumbotron\">\n        <h3 class=\"text-info\">\n            View Assigned Candidates on Assignments Here !!\n        </h3>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/view-assigned-test-sets/view-assigned-test-sets.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/admin/view-assigned-test-sets/view-assigned-test-sets.component.ts ***!
  \************************************************************************************/
/*! exports provided: ViewAssignedTestSetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAssignedTestSetsComponent", function() { return ViewAssignedTestSetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_candidates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/candidates */ "./src/app/models/candidates.ts");
/* harmony import */ var _models_assignments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/assignments */ "./src/app/models/assignments.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewAssignedTestSetsComponent = /** @class */ (function () {
    function ViewAssignedTestSetsComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.assignmentArray = [];
        this.editedIpAddress = "";
        this.candidateToBeEdited = [];
        this.cancelEdit = false;
        this.viewAssignedMPTsFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            selectedBatch: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            selectedModule: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            selectedTestType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            selectedSubLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    ViewAssignedTestSetsComponent.prototype.ngOnInit = function () {
        this.adminUserId = localStorage.getItem('loginUserId');
        this.adminUserName = localStorage.getItem('loginName');
        this.adminLocation = localStorage.getItem('loginAdminLocation');
        this.adminSubLocation = localStorage.getItem('loginAdminSubLocation').split(',');
        // if(this.adminUserId==undefined)
        // {
        //   this.router.navigate(['/login']);
        // }
    };
    ViewAssignedTestSetsComponent.prototype.onSelectingSubLocation = function (subLoc) {
        var _this = this;
        this.adminService.getBatchBasedOnLocationAndSubLocation(this.adminLocation, subLoc)
            .subscribe(function (res) {
            _this.batches = res;
        });
        this.assignedMptDetails = [];
    };
    ViewAssignedTestSetsComponent.prototype.onSelectModule = function () {
        this.assignedMptDetails = [];
    };
    ViewAssignedTestSetsComponent.prototype.onSelectTestType = function () {
        this.assignedMptDetails = [];
    };
    ViewAssignedTestSetsComponent.prototype.onSelectionOfBatch = function (batchId) {
        var _this = this;
        this.assignedMptDetails = [];
        this.batchId = batchId;
        this.adminService.getCandidateBasedOnBatchId(batchId)
            .subscribe(function (res) {
            _this.candidates = res;
        });
        this.adminService.getAllMptsBasedOnBatchId(batchId)
            .subscribe(function (res) {
            _this.mptDetails = res;
        });
    };
    ViewAssignedTestSetsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.assignmentArray = [];
        this.finalArray = [];
        var assignmentData = new _models_assignments__WEBPACK_IMPORTED_MODULE_4__["Assignments"]();
        assignmentData.batchId = this.viewAssignedMPTsFormGroup.value['selectedBatch'];
        assignmentData.module = this.viewAssignedMPTsFormGroup.value['selectedModule'];
        assignmentData.testType = this.viewAssignedMPTsFormGroup.value['selectedTestType'].trim().toUpperCase();
        console.log(assignmentData);
        //Getting all assignments here..
        this.adminService
            .getAssignmentsBasedOnBatchIdModuleAndType(assignmentData)
            .subscribe(function (res) {
            _this.assignment = res;
            console.log(_this.assignment[0]);
            _this.adminService.getAssignedMptsFiltered(_this.assignment[0])
                .subscribe(function (res) {
                _this.assignedMptDetails = res;
                _this.findCandidates(_this.assignment[0], _this.assignedMptDetails, _this.candidates, _this.mptDetails, _this.batches);
            });
        });
    };
    ViewAssignedTestSetsComponent.prototype.findCandidates = function (assignmentMaster, assignedMptDetails, candidates, uploadedMPT, batchData) {
        for (var i = 0; i < assignedMptDetails.length; i++) {
            if (assignedMptDetails[i].assignmentId == assignmentMaster._id) {
                for (var j = 0; j < candidates.length; j++) {
                    if (assignedMptDetails[i].candidateId == candidates[j]._id) {
                        for (var k = 0; k < uploadedMPT.length; k++) {
                            if (uploadedMPT[k]._id == assignedMptDetails[i].mptSetId) {
                                for (var l = 0; l < batchData.length; l++) {
                                    if (batchData[l]._id == assignmentMaster.batchId) {
                                        var finalDetailedJSON = {
                                            userId: "",
                                            fullName: "",
                                            ipAddress: "",
                                            emailAddress: "",
                                            candidateId: "",
                                            employeeId: "",
                                            batchId: "",
                                            batchName: "",
                                            location: "",
                                            subLocation: "",
                                            mptId: "",
                                            mptSetName: "",
                                            uploadedBy: "",
                                            uploadDate: new Date(),
                                            uploadTime: new Date(),
                                            assignmentId: "",
                                            status: "",
                                            dateOfExam: new Date(),
                                            timeOfExam: new Date(),
                                            assignedBy: "",
                                            assignDate: new Date(),
                                            assignTime: new Date()
                                        };
                                        finalDetailedJSON.candidateId = candidates[j]._id;
                                        finalDetailedJSON.userId = candidates[j].userId;
                                        finalDetailedJSON.fullName = candidates[j].fullName;
                                        finalDetailedJSON.ipAddress = candidates[j].ipAddress;
                                        finalDetailedJSON.emailAddress = candidates[j].emailAddress;
                                        finalDetailedJSON.employeeId = candidates[j].employeeId;
                                        finalDetailedJSON.batchId = batchData[l]._id;
                                        finalDetailedJSON.batchName = batchData[l].batchName;
                                        finalDetailedJSON.location = batchData[l].location;
                                        finalDetailedJSON.subLocation = batchData[l].subLocation;
                                        finalDetailedJSON.mptId = uploadedMPT[k]._id;
                                        finalDetailedJSON.mptSetName = uploadedMPT[k].testPaperSetName;
                                        finalDetailedJSON.uploadDate = uploadedMPT[k].dateOfUpload;
                                        finalDetailedJSON.uploadTime = uploadedMPT[k].timeOfUpload;
                                        finalDetailedJSON.assignmentId = assignmentMaster._id;
                                        finalDetailedJSON.status = assignmentMaster.status;
                                        finalDetailedJSON.dateOfExam = assignmentMaster.dateOfExam;
                                        finalDetailedJSON.timeOfExam = assignmentMaster.timeOfExam;
                                        finalDetailedJSON.assignDate = assignmentMaster.dateOfAssignment;
                                        finalDetailedJSON.assignTime = assignmentMaster.timeOfAssignment;
                                        this.finalArray.push(finalDetailedJSON);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    ViewAssignedTestSetsComponent.prototype.exportAsExcel = function () {
        this.adminService.exportAsExcelFile(this.finalArray, (this.batchId + "_" + this.assignment[0].module + "_" + this.assignment[0].dateOfAssignment));
    };
    ViewAssignedTestSetsComponent.prototype.checkEditButtonPressed = function (candidateId) {
        for (var i = 0; i < this.candidateToBeEdited.length; i++) {
            if (candidateId == this.candidateToBeEdited[i]) {
                return true;
            }
        }
        return false;
    };
    ViewAssignedTestSetsComponent.prototype.onEditIpAddress = function (candidateId, ipAddress) {
        this.cancelEdit = false;
        this.candidateToBeEdited = [];
        this.editedIpAddress = ipAddress;
        this.candidateToBeEdited.push(candidateId);
    };
    ViewAssignedTestSetsComponent.prototype.onDoneEditing = function (candidateId) {
        var _this = this;
        this.adminService
            .checkIpAddress(this.editedIpAddress, this.batchId)
            .subscribe(function (res) {
            if (res == "1") {
                alert("Ip address already exists");
            }
            else if (res == "0") {
                var flag = 0;
                console.log(_this.editedIpAddress);
                _this.candidateToBeEdited = [];
                var candidate = new _models_candidates__WEBPACK_IMPORTED_MODULE_3__["Candidate"]();
                for (var i = 0; i < _this.candidates.length; i++) {
                    if (candidateId == _this.candidates[i]._id) {
                        candidate = _this.candidates[i];
                        flag = 1;
                    }
                }
                if (flag == 1) {
                    candidate.ipAddress = _this.editedIpAddress;
                    _this.adminService.updateCandidateDetails(candidate)
                        .subscribe(function (res) {
                        console.log(res);
                    });
                    _this.adminService.getCandidateBasedOnBatchId(_this.batchId)
                        .subscribe(function (res) {
                        _this.candidates = res;
                        _this.finalArray = [];
                        _this.findCandidates(_this.assignment[0], _this.assignedMptDetails, _this.candidates, _this.mptDetails, _this.batches);
                    });
                    _this.cancelEdit = true;
                }
            }
        });
    };
    ViewAssignedTestSetsComponent.prototype.onCancelEdit = function () {
        this.cancelEdit = true;
        this.candidateToBeEdited = [];
    };
    ViewAssignedTestSetsComponent.prototype.onscroll = function (event) {
        this.myFunction();
    };
    ViewAssignedTestSetsComponent.prototype.myFunction = function () {
        console.log("scroll called");
        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        }
        else {
            header.classList.remove("sticky");
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ViewAssignedTestSetsComponent.prototype, "onscroll", null);
    ViewAssignedTestSetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-assigned-test-sets',
            template: __webpack_require__(/*! ./view-assigned-test-sets.component.html */ "./src/app/admin/view-assigned-test-sets/view-assigned-test-sets.component.html"),
            styles: [__webpack_require__(/*! ./view-assigned-test-sets.component.css */ "./src/app/admin/view-assigned-test-sets/view-assigned-test-sets.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ViewAssignedTestSetsComponent);
    return ViewAssignedTestSetsComponent;
}());



/***/ }),

/***/ "./src/app/admin/view-candidates/view-candidates.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/view-candidates/view-candidates.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sticky {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n  }\r\n  \r\n  .sticky + .content {\r\n    padding-top: 102px;\r\n  }\r\n  \r\n  .header {\r\n    padding: 10px 16px;\r\n    background:#f1f1f1;\r\n    border-bottom-color:1px solid black;\r\n  }\r\n  \r\n  td\r\n  {\r\n      padding: 10px;\r\n  }"

/***/ }),

/***/ "./src/app/admin/view-candidates/view-candidates.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/view-candidates/view-candidates.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" id=\"myHeader\">\n  <h3>Edit Candidates</h3>\n  <hr>\n  <form [formGroup]=\"viewCandidateForm\" (ngSubmit)=\"onSubmit()\">\n    <table>\n      <tr>\n          <td>\n              Location :<br>\n              <b>\n              {{adminLocation}}\n            </b>\n            </td>\n            <td>\n              Sub Locations : <br>\n              <select formControlName=\"selectedSubLocation\" class=\"form-control-sm\" (change)=\"onSelectingSubLocation($event.target.value)\">\n                <option value=\"0\">--select subLocation--</option>\n                <option *ngFor=\"let subLocs of adminSubLocation\">{{subLocs}}</option>\n           </select>\n        <td>\n        </td>\n          <td *ngIf=\"batches;else elseBlock\">\n            <div *ngIf=\"batches.length>0;else elseBlock\">\n            Choose batch : <br>\n              <select class=\"form-control\" formControlName=\"selectedBatchName\" (change)=\"onSelectingBatch($event.target.value)\">\n                  <option *ngFor=\"let batch of batches\" [value]=\"batch._id\">{{batch.batchName}}</option>\n                </select>\n              </div>\n          </td>\n          <td *ngIf=\"batches;\">\n            <br>\n            <div *ngIf=\"batches.length>0;\">\n                <button type=\"submit\" class=\"btn btn-success btn-sm\" [disabled]=\"!viewCandidateForm.valid\">View</button>\n            </div>\n          </td>\n      </tr> \n    </table>\n  </form>\n</div>\n  <div *ngIf=\"candidates\" class=\"content\">\n    <table class=\"table table-striped table bordered\">\n          <tr>\n            <th>Employee ID</th>\n            <th>User Id</th>\n            <th>Name</th>\n            <th>IP Address</th>\n            <th>Email Address</th>\n            <th>Action</th>\n          </tr>\n          <tr *ngFor=\"let candidate of candidates\">\n            <td>{{candidate.employeeId}}</td>\n            <td>{{candidate.userId}}</td>\n            <td>{{candidate.fullName}}</td>\n            <td *ngIf=\"checkEditButtonPressed(candidate._id) \">\n                <input class=\"border:1px thin red\"  type=\"text\" [(ngModel)]=\"editedIpAddress\">\n            </td>\n            <td *ngIf=\"!checkEditButtonPressed(candidate._id)\">{{candidate.ipAddress}}</td>\n            <td *ngIf=\"checkEditButtonPressed(candidate._id) \">\n                <input class=\"border:1px thin red\" type=\"text\" [(ngModel)]=\"editedEmailAddress\">\n            </td>\n            <td *ngIf=\"!checkEditButtonPressed(candidate._id)\">{{candidate.emailAddress}}</td>\n            <td *ngIf=\"!checkEditButtonPressed(candidate._id)\">\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"onEdit(candidate)\">Edit</button>\n            </td>\n            <td *ngIf=\"checkEditButtonPressed(candidate._id)\">\n                <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"onUpdate(candidate)\">Update</button>\n                <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"onCancelEdit()\">Cancel</button>\n            </td>\n          </tr>\n    </table>\n  </div>\n  <ng-template #elseBlock>\n    <br>\n    <div class=\"alert alert-danger\">No Batches For Selected Sublocations added</div>\n  </ng-template>\n  \n  <div *ngIf=\"candidates!=undefined\">\n      <div class=\"jumbotron\" *ngIf=\"candidates.length==0 \">\n        <h2 class=\"text-danger\"> No candidates available for the selected batch</h2>\n          </div>      \n  </div>\n    <div class=\"jumbotron\" *ngIf=\"candidates==undefined\">\n      <h3 class=\"text-info\">\n        View and edit candidate Details Here !!\n      </h3>\n      </div>\n"

/***/ }),

/***/ "./src/app/admin/view-candidates/view-candidates.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/view-candidates/view-candidates.component.ts ***!
  \********************************************************************/
/*! exports provided: ViewCandidatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCandidatesComponent", function() { return ViewCandidatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewCandidatesComponent = /** @class */ (function () {
    function ViewCandidatesComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.candidateToBeEdited = [];
        this.viewCandidateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            selectedBatchName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            selectedSubLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    ViewCandidatesComponent.prototype.ngOnInit = function () {
        this.adminUserId = localStorage.getItem('loginUserId');
        this.adminUserName = localStorage.getItem('loginName');
        this.adminLocation = localStorage.getItem('loginAdminLocation');
        this.adminSubLocation = localStorage.getItem('loginAdminSubLocation').split(',');
        // if(this.adminUserId==undefined)
        // {
        //   this.router.navigate(['/login']);
        // }
    };
    ViewCandidatesComponent.prototype.onSelectingSubLocation = function (subLoc) {
        var _this = this;
        this.adminService.getBatchBasedOnLocationAndSubLocation(this.adminLocation, subLoc)
            .subscribe(function (res) {
            _this.batches = res;
        });
        this.candidates = undefined;
    };
    ViewCandidatesComponent.prototype.onSelectingBatch = function (batch) {
        this.batchId = batch;
        this.candidates = undefined;
    };
    ViewCandidatesComponent.prototype.onSubmit = function () {
        var _this = this;
        localStorage.setItem('mySession', 'true');
        if (this.viewCandidateForm.value['selectedBatchName'] == undefined || this.viewCandidateForm.value['selectedBatchName'] == "") {
            alert("Select batch first");
        }
        else {
            this.adminService.getCandidateBasedOnBatchId(this.batchId)
                .subscribe(function (res) {
                _this.candidates = res;
            });
        }
    };
    ViewCandidatesComponent.prototype.onEdit = function (candidate) {
        this.candidateToBeEdited = [];
        this.editedIpAddress = candidate.ipAddress;
        this.editedEmailAddress = candidate.emailAddress;
        this.candidateToBeEdited.push(candidate);
    };
    ViewCandidatesComponent.prototype.checkEditButtonPressed = function (candidateId) {
        for (var i = 0; i < this.candidateToBeEdited.length; i++) {
            if (candidateId == this.candidateToBeEdited[i]._id) {
                return true;
            }
        }
        return false;
    };
    ViewCandidatesComponent.prototype.onUpdate = function (candidate) {
        var _this = this;
        var flag;
        this.adminService
            .checkIpAddress(this.editedIpAddress, candidate.batchId)
            .subscribe(function (res) {
            if (res == "1") {
                alert("Ip address already exists");
            }
            else if (res == "0") {
                _this.candidateToBeEdited = [];
                candidate.ipAddress = _this.editedIpAddress;
                candidate.emailAddress = _this.editedEmailAddress;
                _this.adminService.updateCandidateDetails(candidate)
                    .subscribe(function (res) {
                    console.log(res);
                });
                _this.adminService.getCandidateBasedOnBatchId(_this.batchId)
                    .subscribe(function (res) {
                    _this.candidates = res;
                });
            }
        });
    };
    ViewCandidatesComponent.prototype.onCancelEdit = function () {
        this.candidateToBeEdited = [];
    };
    ViewCandidatesComponent.prototype.onscroll = function (event) {
        this.myFunction();
    };
    ViewCandidatesComponent.prototype.myFunction = function () {
        console.log("scroll called");
        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        }
        else {
            header.classList.remove("sticky");
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ViewCandidatesComponent.prototype, "onscroll", null);
    ViewCandidatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-candidates',
            template: __webpack_require__(/*! ./view-candidates.component.html */ "./src/app/admin/view-candidates/view-candidates.component.html"),
            styles: [__webpack_require__(/*! ./view-candidates.component.css */ "./src/app/admin/view-candidates/view-candidates.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ViewCandidatesComponent);
    return ViewCandidatesComponent;
}());



/***/ }),

/***/ "./src/app/admin/view-test-sets/view-test-sets.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin/view-test-sets/view-test-sets.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n    padding: 8px 8px;\r\n    background:#f1f1f1;\r\n    border-bottom-color:1px solid black;\r\n  }"

/***/ }),

/***/ "./src/app/admin/view-test-sets/view-test-sets.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/view-test-sets/view-test-sets.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h3>Uploaded MPTs</h3>\n  <hr>\n    <form [formGroup]=\"viewMptsFormGroup\" (ngSubmit)=\"onSubmit()\">\n      <table>\n          <tr>\n              <td style=\"padding:15px\">\n                  Location<br>\n                  <b>\n                  {{adminLocation}}\n                </b>\n                </td>\n                <td style=\"padding:15px\">\n                  Sub Locations <br>\n                  <select formControlName=\"selectedSubLocation\" class=\"form-control-sm\" (change)=\"onSelectingSubLocation($event.target.value)\">\n                    <option value=\"0\">--select subLocation--</option>\n                    <option *ngFor=\"let subLocs of adminSubLocation\">{{subLocs}}</option>\n               </select>\n            <td>\n              <td *ngIf=\"batches\">\n                <br>\n                <div *ngIf=\"batches.length==0\" class=\"alert alert-danger\">\n                  No Batches Added For The Selected Sub Location\n                </div>\n              </td>\n          <td style=\"padding:15px\" *ngIf=\"batches\">\n            <div  *ngIf=\"batches.length>0\" >\n                Category\n                <br>\n                <select class=\"form-control-sm\" formControlName=\"selectedTestType\" required>\n                  <option>test</option>\n                  <option>retest</option>\n                </select>\n              </div>\n              </td>\n           \n          <td style=\"padding:15px\" *ngIf=\"batches\">\n            <div  *ngIf=\"batches.length>0\" >\n                Module\n                <br>\n                <select class=\"form-control-sm\" formControlName=\"selectedModule\" required>\n                  <option value=\"MOD1\">Module 1</option>\n                  <option value=\"MOD2\">Module 2</option>\n                  <option value=\"MOD3\">Module 3</option>\n                  <option value=\"MOD4\">Module 4</option>\n                  <option value=\"MOD5\">Module 5</option>\n                  <option value=\"MOD6\">Module 6</option>\n                </select>\n            </div>\n            </td>\n          <td style=\"padding:15px\" *ngIf=\"batches\">\n            <div  *ngIf=\"batches.length>0\" >\n                Batch Name\n                <br>\n                <select class=\"form-control-sm\" formControlName=\"selectedBatchName\" required>\n                  <option *ngFor=\"let batch of batches\" [ngValue]=\"batch\">{{batch.batchName}}</option>\n                </select>\n              </div>\n              </td>\n              <td style=\"padding:15px\" *ngIf=\"batches\">    \n                <div  *ngIf=\"batches.length>0\">\n                    <br>\n                    <button class=\"btn btn-primary\" type=\"submit\">View</button>\n                </div>  \n              </td>\n          \n        </tr>\n      </table>\n    </form>\n</div>\n<div *ngIf=\"paperSets && paperSets.length>0\">\n  <table class=\"table table-striped table-bordered\">\n    <thead>\n      <tr>\n        <th>Location</th>\n        <th>Sub Location</th>\n        <th>Uploaded By</th>\n        <th>Module</th>\n        <th>MPT Name </th>\n        <th>Set No.</th>\n        <th>upload Date</th>\n        <th>upload Time</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let sets of paperSets\">\n        <td>\n          {{adminLocation}}\n        </td>\n        <td>\n          {{selectingSubLocation}}\n        </td>\n        <td>\n          {{sets.uploadedBy}}\n        </td>\n        <td>\n          {{sets.module}}\n        </td>\n        <td>\n          {{sets.testPaperSetName}}\n        </td>\n        <td>\n          {{sets.setNumber}}\n        </td>\n        <td>\n          {{sets.dateOfUpload}}\n        </td>\n        <td>\n          {{sets.timeOfUpload}}\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<div *ngIf=\"paperSets!=undefined && batches!=undefined\">\n    <div class=\"jumbotron\" *ngIf=\"paperSets.length==0\">\n      <h2 class=\"text-danger\">No MPT Sets Uploaded For The Selected Fields....</h2>\n        </div>      \n</div>\n  <div class=\"jumbotron\" *ngIf=\"paperSets==null\">\n    <h3 class=\"text-info\">\n      View Uploaded MPT Sets Here....\n    </h3>\n    </div>"

/***/ }),

/***/ "./src/app/admin/view-test-sets/view-test-sets.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/view-test-sets/view-test-sets.component.ts ***!
  \******************************************************************/
/*! exports provided: ViewTestSetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTestSetsComponent", function() { return ViewTestSetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewTestSetsComponent = /** @class */ (function () {
    function ViewTestSetsComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.viewMptsFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            selectedBatchName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            selectedTestType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            selectedModule: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            selectedSubLocation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    ViewTestSetsComponent.prototype.ngOnInit = function () {
        this.adminUserId = localStorage.getItem('loginUserId');
        this.adminUserName = localStorage.getItem('loginName');
        this.adminLocation = localStorage.getItem('loginAdminLocation');
        this.adminSubLocation = localStorage.getItem('loginAdminSubLocation').split(',');
        // if(this.adminUserId==undefined)
        // {
        //   this.router.navigate(['/login']);
        // }
    };
    ViewTestSetsComponent.prototype.onSelectingSubLocation = function (subLoc) {
        var _this = this;
        this.selectingSubLocation = subLoc;
        this.adminService.getBatchBasedOnLocationAndSubLocation(this.adminLocation, subLoc)
            .subscribe(function (res) {
            _this.batches = res;
        });
        this.paperSets = null;
    };
    ViewTestSetsComponent.prototype.onSubmit = function () {
        var _this = this;
        var selectedBatchName = this.viewMptsFormGroup.value['selectedBatchName'];
        var selectedTestType = this.viewMptsFormGroup.value['selectedTestType'];
        ;
        var selectedModule = this.viewMptsFormGroup.value['selectedModule'];
        console.log(selectedBatchName + " " + selectedModule + " " + selectedTestType);
        this.adminService
            .getUploadedPaperSets(selectedBatchName._id, selectedTestType.toUpperCase(), selectedModule.toUpperCase())
            .subscribe(function (data) {
            _this.paperSets = data;
        });
    };
    ViewTestSetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-test-sets',
            template: __webpack_require__(/*! ./view-test-sets.component.html */ "./src/app/admin/view-test-sets/view-test-sets.component.html"),
            styles: [__webpack_require__(/*! ./view-test-sets.component.css */ "./src/app/admin/view-test-sets/view-test-sets.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ViewTestSetsComponent);
    return ViewTestSetsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/home/admin-home.component */ "./src/app/admin/home/admin-home.component.ts");
/* harmony import */ var _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/home/user-home.component */ "./src/app/user/home/user-home.component.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _admin_assign_test_sets_assign_test_sets_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/assign-test-sets/assign-test-sets.component */ "./src/app/admin/assign-test-sets/assign-test-sets.component.ts");
/* harmony import */ var _admin_view_test_sets_view_test_sets_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/view-test-sets/view-test-sets.component */ "./src/app/admin/view-test-sets/view-test-sets.component.ts");
/* harmony import */ var _admin_view_assigned_test_sets_view_assigned_test_sets_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/view-assigned-test-sets/view-assigned-test-sets.component */ "./src/app/admin/view-assigned-test-sets/view-assigned-test-sets.component.ts");
/* harmony import */ var _admin_upload_test_sets_upload_test_sets_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/upload-test-sets/upload-test-sets.component */ "./src/app/admin/upload-test-sets/upload-test-sets.component.ts");
/* harmony import */ var _user_test_paper_test_paper_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/test-paper/test-paper.component */ "./src/app/user/test-paper/test-paper.component.ts");
/* harmony import */ var _user_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/error-page/error-page.component */ "./src/app/user/error-page/error-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_add_new_batch_add_new_batch_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/add-new-batch/add-new-batch.component */ "./src/app/admin/add-new-batch/add-new-batch.component.ts");
/* harmony import */ var _admin_add_admin_add_admin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/add-admin/add-admin.component */ "./src/app/admin/add-admin/add-admin.component.ts");
/* harmony import */ var _admin_view_candidates_view_candidates_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/view-candidates/view-candidates.component */ "./src/app/admin/view-candidates/view-candidates.component.ts");
/* harmony import */ var _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/admin-dashboard/admin-dashboard.component */ "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_3__["AdminHomeComponent"],
                _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_4__["UserHomeComponent"],
                _admin_assign_test_sets_assign_test_sets_component__WEBPACK_IMPORTED_MODULE_7__["AssignTestSetsComponent"],
                _admin_view_test_sets_view_test_sets_component__WEBPACK_IMPORTED_MODULE_8__["ViewTestSetsComponent"],
                _admin_view_assigned_test_sets_view_assigned_test_sets_component__WEBPACK_IMPORTED_MODULE_9__["ViewAssignedTestSetsComponent"],
                _admin_upload_test_sets_upload_test_sets_component__WEBPACK_IMPORTED_MODULE_10__["UploadTestSetsComponent"],
                _user_test_paper_test_paper_component__WEBPACK_IMPORTED_MODULE_11__["TestPaperComponent"],
                _user_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_12__["ErrorPageComponent"],
                _admin_add_new_batch_add_new_batch_component__WEBPACK_IMPORTED_MODULE_16__["AddNewBatchComponent"],
                _admin_add_admin_add_admin_component__WEBPACK_IMPORTED_MODULE_17__["AddAdminComponent"],
                _admin_view_candidates_view_candidates_component__WEBPACK_IMPORTED_MODULE_18__["ViewCandidatesComponent"],
                _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["AdminDashboardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_14__["HttpModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot([
                    {
                        path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"]
                    },
                    {
                        path: 'user-home',
                        component: _user_home_user_home_component__WEBPACK_IMPORTED_MODULE_4__["UserHomeComponent"],
                        children: [
                            { path: 'error-page', component: _user_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_12__["ErrorPageComponent"] },
                            { path: 'test-page', component: _user_test_paper_test_paper_component__WEBPACK_IMPORTED_MODULE_11__["TestPaperComponent"] }
                        ]
                    },
                    {
                        path: 'admin-home',
                        component: _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_3__["AdminHomeComponent"],
                        children: [
                            { path: 'upload-test-sets', component: _admin_upload_test_sets_upload_test_sets_component__WEBPACK_IMPORTED_MODULE_10__["UploadTestSetsComponent"] },
                            { path: 'assign-test-sets', component: _admin_assign_test_sets_assign_test_sets_component__WEBPACK_IMPORTED_MODULE_7__["AssignTestSetsComponent"] },
                            { path: 'view-test-sets', component: _admin_view_test_sets_view_test_sets_component__WEBPACK_IMPORTED_MODULE_8__["ViewTestSetsComponent"] },
                            { path: 'view-assigned-mpt-sets', component: _admin_view_assigned_test_sets_view_assigned_test_sets_component__WEBPACK_IMPORTED_MODULE_9__["ViewAssignedTestSetsComponent"] },
                            { path: 'add-new-batch', component: _admin_add_new_batch_add_new_batch_component__WEBPACK_IMPORTED_MODULE_16__["AddNewBatchComponent"] },
                            { path: 'view-candidates', component: _admin_view_candidates_view_candidates_component__WEBPACK_IMPORTED_MODULE_18__["ViewCandidatesComponent"] },
                            { path: 'admin-dashboard', component: _admin_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["AdminDashboardComponent"] },
                            { path: 'add-admin', component: _admin_add_admin_add_admin_component__WEBPACK_IMPORTED_MODULE_17__["AddAdminComponent"] }
                        ]
                    },
                ]),
            ],
            providers: [_services_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"], _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n    overflow: hidden;\r\n    background-color: #0f6674;\r\n    padding: 20px 10px;\r\n    text-align: center;\r\n  }\r\n  .header h3{\r\n    color:white;\r\n  }\r\n  /* BASIC */\r\n  html {\r\n    background-color:#0f6674;\r\n  }\r\n  body {\r\n    font-family: \"Poppins\", sans-serif;\r\n    height: 100vh;\r\n  }\r\n  a {\r\n    color: #92badd;\r\n    display:inline-block;\r\n    text-decoration: none;\r\n    font-weight: 400;\r\n  }\r\n  h2 {\r\n    text-align: center;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    display:inline-block;\r\n    margin: 40px 8px 10px 8px; \r\n    color: #cccccc;\r\n  }\r\n  /* STRUCTURE */\r\n  .wrapper {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column; \r\n    -ms-flex-pack: center; \r\n        justify-content: center;\r\n    width: 100%;\r\n    min-height: 100%;\r\n    padding: 20px;\r\n  }\r\n  #formContent {\r\n    border-radius: 10px 10px 10px 10px;\r\n    background: #fff;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: 450px;\r\n    position: relative;\r\n    padding: 0px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n    text-align: center;\r\n  }\r\n  #formFooter {\r\n    background-color: #f6f6f6;\r\n    border-top: 1px solid #dce8f1;\r\n    padding: 25px;\r\n    text-align: center;\r\n    border-radius: 0 0 10px 10px;\r\n  }\r\n  /* TABS */\r\n  h2.inactive {\r\n    color: #cccccc;\r\n  }\r\n  h2.active {\r\n    color: #0d0d0d;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n  /* FORM TYPOGRAPHY*/\r\n  input[type=button], input[type=submit], input[type=reset]  {\r\n    background-color:#0f6674;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 80px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    box-shadow: 0 10px 30px 0 #0f6674;\r\n    border-radius: 5px 5px 5px 5px;\r\n    margin: 5px 20px 40px 20px;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n  input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\r\n    background-color: #0f6674\r\n  }\r\n  input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\r\n    -webkit-transform: scale(0.95);\r\n    -ms-transform: scale(0.95);\r\n    transform: scale(0.95);\r\n  }\r\n  input[type=text],input[type=password] {\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    width: 85%;\r\n    border: 2px solid #f6f6f6;\r\n    transition: all 0.5s ease-in-out;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n  input[type=text]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #0f6674;\r\n  }\r\n  input[type=password]:focus\r\n  {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #0f6674;\r\n  }\r\n  input[type=text]:placeholder {\r\n    color: #cccccc;\r\n  }\r\n  input[type=password]:placeholder \r\n  {\r\n    color: #cccccc;\r\n  }\r\n  /* ANIMATIONS */\r\n  /* Simple CSS3 Fade-in-down Animation */\r\n  .fadeInDown {\r\n    -webkit-animation-name: fadeInDown;\r\n    animation-name: fadeInDown;\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n  }\r\n  @-webkit-keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0, -100%, 0);\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      -webkit-transform: none;\r\n      transform: none;\r\n    }\r\n  }\r\n  @keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0, -100%, 0);\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      -webkit-transform: none;\r\n      transform: none;\r\n    }\r\n  }\r\n  /* Simple CSS3 Fade-in Animation */\r\n  @-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n  .fadeIn {\r\n    opacity:0;\r\n    -webkit-animation:fadeIn ease-in 1;\r\n    animation:fadeIn ease-in 1;\r\n  \r\n    -webkit-animation-fill-mode:forwards;\r\n    animation-fill-mode:forwards;\r\n  \r\n    -webkit-animation-duration:1s;\r\n    animation-duration:1s;\r\n  }\r\n  .fadeIn.first {\r\n    -webkit-animation-delay: 0.4s;\r\n    animation-delay: 0.4s;\r\n  }\r\n  .fadeIn.second {\r\n    -webkit-animation-delay: 0.6s;\r\n    animation-delay: 0.6s;\r\n  }\r\n  .fadeIn.third {\r\n    -webkit-animation-delay: 0.8s;\r\n    animation-delay: 0.8s;\r\n  }\r\n  .fadeIn.fourth {\r\n    -webkit-animation-delay: 1s;\r\n    animation-delay: 1s;\r\n  }\r\n  /* Simple CSS3 Fade-in Animation */\r\n  .underlineHover:after {\r\n    display: block;\r\n    left: 0;\r\n    bottom: -10px;\r\n    width: 0;\r\n    height: 2px;\r\n    background-color: #56baed;\r\n    content: \"\";\r\n    transition: width 0.2s;\r\n  }\r\n  .underlineHover:hover {\r\n    color: #0d0d0d;\r\n  }\r\n  .underlineHover:hover:after{\r\n    width: 100%;\r\n  }\r\n  /* OTHERS */\r\n  *:focus {\r\n      outline: none;\r\n  }\r\n  #icon {\r\n    width:60%;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n      <h3>MPT Assignment Master</h3>\n</header>\n\n  <div class=\"wrapper fadeInDown\" style=\"margin-top:7%\">\n      <div id=\"formContent\">\n        <!-- Tabs Titles -->\n    \n        <!-- Icon -->\n        <br>\n        <div class=\"fadeIn first\">\n          <h4>Admin Login</h4>\n          <br>\n        </div>\n    \n        <!-- Login Form -->\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n          <input type=\"text\" id=\"login\" class=\"fadeIn second\" formControlName=\"username\" placeholder=\"login\">\n          <input type=\"password\" id=\"password\" class=\"fadeIn third\" formControlName=\"password\" placeholder=\"password\">\n          <input type=\"submit\" class=\"fadeIn fourth\" value=\"Log In\">\n        </form>\n    \n        <!-- Remind Passowrd -->\n        <div id=\"formFooter\">\n          <a class=\"underlineHover\" href=\"#\">Forgot Password?</a>\n        </div>\n    \n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.adminUserId = localStorage.getItem('loginUserId');
        this.adminUserName = localStorage.getItem('loginName');
    };
    LoginComponent.prototype.checkLogin = function (username, password) {
        var _this = this;
        this.authService.checkLogin(username, password)
            .subscribe(function (res) {
            _this.admin = res;
            if (res[0] != undefined) {
                if (res[0].userId == username && res[0].password == password) {
                    console.log("res : " + res.userId);
                    console.log("res[0] : " + _this.admin[0].subLocation[1]);
                    localStorage.setItem("loginUserId", username);
                    localStorage.setItem("loginName", res[0].name);
                    localStorage.setItem("loginRole", res[0].role);
                    localStorage.setItem("loginAdminMultilocationSupport", res[0].multiLocation);
                    localStorage.setItem("loginAdminLocation", res[0].location);
                    localStorage.setItem("loginAdminSubLocation", res[0].subLocation);
                    _this.router.navigate(['/admin-home']);
                }
            }
            else {
                console.log("failed to login check credentials");
            }
        });
        ;
    };
    LoginComponent.prototype.onSubmit = function () {
        var username = this.loginForm.value['username'];
        var password = this.loginForm.value['password'];
        this.checkLogin(username, password);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/admin.ts":
/*!*********************************!*\
  !*** ./src/app/models/admin.ts ***!
  \*********************************/
/*! exports provided: Admin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin", function() { return Admin; });
var Admin = /** @class */ (function () {
    function Admin() {
    }
    return Admin;
}());



/***/ }),

/***/ "./src/app/models/assigned-mpts.ts":
/*!*****************************************!*\
  !*** ./src/app/models/assigned-mpts.ts ***!
  \*****************************************/
/*! exports provided: AssignedMpt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignedMpt", function() { return AssignedMpt; });
var AssignedMpt = /** @class */ (function () {
    function AssignedMpt() {
    }
    return AssignedMpt;
}());



/***/ }),

/***/ "./src/app/models/assignments.ts":
/*!***************************************!*\
  !*** ./src/app/models/assignments.ts ***!
  \***************************************/
/*! exports provided: Assignments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Assignments", function() { return Assignments; });
var Assignments = /** @class */ (function () {
    function Assignments() {
    }
    return Assignments;
}());



/***/ }),

/***/ "./src/app/models/batches.ts":
/*!***********************************!*\
  !*** ./src/app/models/batches.ts ***!
  \***********************************/
/*! exports provided: Batch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Batch", function() { return Batch; });
var Batch = /** @class */ (function () {
    function Batch() {
    }
    return Batch;
}());



/***/ }),

/***/ "./src/app/models/candidates.ts":
/*!**************************************!*\
  !*** ./src/app/models/candidates.ts ***!
  \**************************************/
/*! exports provided: Candidate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Candidate", function() { return Candidate; });
var Candidate = /** @class */ (function () {
    function Candidate() {
    }
    return Candidate;
}());



/***/ }),

/***/ "./src/app/models/mpts.ts":
/*!********************************!*\
  !*** ./src/app/models/mpts.ts ***!
  \********************************/
/*! exports provided: MptDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MptDetails", function() { return MptDetails; });
var MptDetails = /** @class */ (function () {
    function MptDetails() {
    }
    return MptDetails;
}());



/***/ }),

/***/ "./src/app/models/test-data.ts":
/*!*************************************!*\
  !*** ./src/app/models/test-data.ts ***!
  \*************************************/
/*! exports provided: TestData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestData", function() { return TestData; });
var TestData = /** @class */ (function () {
    function TestData() {
    }
    return TestData;
}());



/***/ }),

/***/ "./src/app/services/admin.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
        this.UploadAndSaveMptDetailsURL = "/api/mpt-set/upload-store";
        this.uploadAndSaveBatchDetailsURL = "/api/batch/upload-store";
        this.getUploadedSetsURL = "/api/getMpts"; //based on batchID , test type and module no
        this.getBatchBasedOnLocationAndSubLocationURL = "/api/get-batch-by-location-and-sublocation";
        this.findBatchId = "/api/checkBatchId";
        this.getCandidateBasedOnBatchIdURL = "/api/getCandidates";
        this.saveCandidateData = "/api/store-candidates";
        this.findCountOfBatches = "/api/findBatchCount";
        this.getModulesOfBatchFromMptSet = "/api/get-modules";
        this.getAssignedMPTDetailsFiltered = "/api/get-assigned-mpts-based-on-assignmentId";
        // getStatusAndDateOfExamOfAssignmentsBasedOnBatchIdURL="/api/get-status-and-DateOfExam";
        this.getMptsBasedOnBatchIdURL = "/api/get-mpts-based-on-batch-id";
        this.updateCandidateURL = "/api/updateCandidate/";
        this.updateAssignmentURL = "/api/updateAssignment/";
        this.storeAssignedMPTsURL = "/api/store-assigned-mpt";
        this.storeAssignmentURL = "/api/store-assignment";
        this.getAllAssignmentsBasedOnBatchIdURL = "/api/assignments-based-on-batch-id";
        this.getAllAssignmentsURL = "/api/get-all-assignments";
        this.checkAssignmentAlreadyExistsURL = "/api/check-assignment-exists";
        this.findIpAddress = "/api/find-ipAddress";
        this.getAllCandidateURL = "/api/get-all-candidate";
        this.getAllAssignmentsBasedOnBatchIdModuleAndTypeURL = '/api/get-assignments-filtered';
        this.getAllAssignmentsBasedOnBatchIdModuleAndStatusURL = "/api/get-assignments-filtered-on-status";
        this.getAllLocationsURL = "/api/get-all-locations";
        this.getSubLocationsBasedOnLocationNameURL = "/api/get-locations-based-on-location-value";
        this.storeAdminURL = "/api/add-admin";
        this.checkAdminExistsOrNotURL = "/api/get-all-admin-based-on-employeeId-and-userID";
        this.getAllAdminURL = "/api/get-all-admin";
    }
    AdminService.prototype.ngOnInit = function () {
    };
    //---------------------validation of ip address-----------------------
    AdminService.prototype.checkIpAddress = function (candidateIpAddress, batchId) {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        //trim and uppercase 
        var ipAddress = candidateIpAddress.trim();
        var queryString = '?batchId=' + batchId + "&ipAddress=" + ipAddress;
        return this.http.get(this.findIpAddress + queryString, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }));
    };
    //-------------------validation of batch ID existence----------------------------------/
    AdminService.prototype.checkBatchId = function (batchId) {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        //trim and uppercase 
        batchId = batchId.trim().toUpperCase();
        var queryString = '?batchId=' + batchId.trim().toUpperCase();
        return this.http.get(this.findBatchId + queryString, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }));
    };
    AdminService.prototype.uploadAndSaveBatchDetails = function (batchDetails, selectedFile, candidateData) {
        //trim and uppercase batchModel
        this.batchId = batchDetails._id.trim().toUpperCase();
        batchDetails.batchName = batchDetails.batchName.trim().toUpperCase();
        batchDetails._id = this.batchId;
        batchDetails.location = batchDetails.location.trim().toUpperCase();
        batchDetails.subLocation = batchDetails.subLocation.trim().toUpperCase();
        batchDetails.lotName = batchDetails.lotName.trim().toUpperCase();
        //batchId in candidate table and trim n uppercase n lowercase
        candidateData = this.assignBatchID(candidateData);
        var uploadBatchData = new FormData();
        uploadBatchData.append('myFile', selectedFile, selectedFile.name);
        uploadBatchData.append('candidateData', JSON.stringify(candidateData));
        uploadBatchData.append('batchDetailsModel', JSON.stringify(batchDetails));
        return this.http.post(this.uploadAndSaveBatchDetailsURL, uploadBatchData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }));
    };
    //----------------------Upload Files and save test details----------------------/
    AdminService.prototype.uploadAndSaveMpt = function (mptDetails, selectedFile) {
        //trim and uppercase
        mptDetails.module = mptDetails.module.trim().toUpperCase();
        mptDetails.testPaperSetName = mptDetails.testPaperSetName.trim().toUpperCase();
        mptDetails.testPaperType = mptDetails.testPaperType.trim().toUpperCase();
        var uploadMptData = new FormData();
        console.log(selectedFile + " " + selectedFile.name);
        uploadMptData.append('myFile', selectedFile, selectedFile.name);
        uploadMptData.append('mptDetailsModel', JSON.stringify(mptDetails));
        return this.http.post(this.UploadAndSaveMptDetailsURL, uploadMptData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }));
    };
    //-+------------------------------------------Assign test module--------------------------------------------
    AdminService.prototype.checkAssignmentAlreadyExists = function (assignment) {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        var queryString = "?batchId=" + assignment.batchId + "&module=" + assignment.module + "&testType=" + assignment.testType;
        return this.http.get(this.checkAssignmentAlreadyExistsURL + queryString, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }));
    };
    //----------------------------store assignements---------------------
    AdminService.prototype.storeAssignment = function (assignment) {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        return this.http.post(this.storeAssignmentURL, assignment, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }));
    };
    //----------------------------store assigned MPTs---------------------
    AdminService.prototype.storeAssignedMPTs = function (assignedMPTs) {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        return this.http.post(this.storeAssignedMPTsURL, assignedMPTs, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }));
    };
    //store admin
    AdminService.prototype.storeAdmin = function (admin) {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        return this.http.post(this.storeAdminURL, admin, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }));
    };
    /**********************************GEt data from db*********************************** */
    //----------------------get uploaded mpts----------------------/
    AdminService.prototype.getUploadedPaperSets = function (batchId, testType, module) {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        var queryString = '?batchId=' + batchId + "&testType=" + testType + "&module=" + module;
        return this.http.get(this.getUploadedSetsURL + queryString, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }));
    };
    //----------------------get added batches ----------------------/
    AdminService.prototype.getBatchBasedOnLocationAndSubLocation = function (location, subLocation) {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        var queryString = "?location=" + location + "&subLocation=" + subLocation;
        return this.http.get(this.getBatchBasedOnLocationAndSubLocationURL + queryString, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }));
    };
    //----------------------get candidates----------------------/
    //Based on batch name : //have to modify
    AdminService.prototype.getCandidateBasedOnBatchId = function (batchId) {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        console.log(batchId);
        var queryString = "?batchId=" + batchId;
        return this.http.get(this.getCandidateBasedOnBatchIdURL + queryString, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }));
    };
    //----------------get modules---------------------------
    AdminService.prototype.getModulesFromMptSet = function (batchId) {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        var queryString = "?batchId=" + batchId;
        return this.http.get(this.getModulesOfBatchFromMptSet + queryString, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }));
    };
    //--------------------------------------Find count of Batches----------------
    AdminService.prototype.findCountOfBatchCollection = function () {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        return this.http.get(this.findCountOfBatches, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }));
    };
    AdminService.prototype.assignBatchID = function (candidate) {
        for (var i = 0; i < candidate.length; i++) {
            candidate[i].batchId = this.batchId;
            candidate[i].userId = candidate[i].userId.trim().toLowerCase();
            candidate[i].ipAddress = candidate[i].ipAddress.trim();
        }
        this.batchId = "";
        return candidate;
    };
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
    AdminService.prototype.getAllAssignmentsBasedOnBatchId = function (assignment) {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        var queryString = "?batchId=" + assignment.batchId;
        return this.http.get(this.getAllAssignmentsBasedOnBatchIdURL + queryString, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }));
    };
    //----------------------------get all assignments based on batchid module and type of test--------------------
    AdminService.prototype.getAssignmentsBasedOnBatchIdModuleAndType = function (assignment) {
        console.log("checking assignments : " + assignment.testType);
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        var queryString = "?batchId=" + assignment.batchId + "&module=" + assignment.module + "&testType=" + assignment.testType.trim().toUpperCase();
        return this.http.get(this.getAllAssignmentsBasedOnBatchIdModuleAndTypeURL + queryString, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }));
    };
    //----------------------------
    AdminService.prototype.getAllAssignmentsBasedOnBatchIdModuleAndStatus = function (assignment) {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        var queryString = "?batchId=" + assignment.batchId + "&status=" + assignment.status + "&testType=" + assignment.testType;
        return this.http.get(this.getAllAssignmentsBasedOnBatchIdModuleAndStatusURL + queryString, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }));
    };
    //---------------------------get all assignments--------------------------
    AdminService.prototype.getAllAssignments = function () {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        return this.http.get(this.getAllAssignmentsURL, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }));
    };
    //------------------get assigned exams----------------------
    AdminService.prototype.getAssignedMptsFiltered = function (assignment) {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        var queryString = "?assignId=" + assignment._id;
        return this.http.get(this.getAssignedMPTDetailsFiltered + queryString, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }));
    };
    AdminService.prototype.getAllMptsBasedOnBatchId = function (batchId) {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        var queryString = "?batchId=" + batchId;
        return this.http.get(this.getMptsBasedOnBatchIdURL + queryString, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }));
    };
    AdminService.prototype.getAllCandidate = function () {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        return this.http.get(this.getAllCandidateURL, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }));
    };
    //---------------------get locations---------------
    AdminService.prototype.getAllLocation = function () {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        return this.http.get(this.getAllLocationsURL, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }));
    };
    //--------------------get locations based on location name-------------
    AdminService.prototype.getSubLocationsBasedOnLocationName = function (locationName) {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        var queryString = "?location=" + locationName;
        return this.http.get(this.getSubLocationsBasedOnLocationNameURL + queryString, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }));
    };
    //18. check pre-existence of admin (/api/get-all-admin-based-on-employeeId-and-userID)
    AdminService.prototype.checkAdminExistsOrNot = function (admin) {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        var queryString = "?employeeId=" + admin._id + "&userId=" + admin.userId;
        console.log(queryString);
        return this.http.get(this.checkAdminExistsOrNotURL + queryString, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }));
    };
    //19.GET ALL ADMIN
    AdminService.prototype.getAllAdmin = function () {
        console.log("get all admin");
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        return this.http.get(this.getAllAdminURL, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }));
    };
    //--------------------------UPDATE----------------------------------------------
    AdminService.prototype.updateCandidateDetails = function (candidate) {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        var queryString = "?candidateId=" + candidate._id;
        return this.http.put(this.updateCandidateURL + queryString, candidate, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            return resp.json();
        }));
    };
    AdminService.prototype.updateAssignment = function (assignment) {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        return this.http.put(this.updateAssignmentURL, assignment, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            return resp.json();
        }));
    };
    AdminService.prototype.distinctDates = function (statusAndDate) {
        var result = [];
        for (var i = 0; i < statusAndDate.length; i++) {
            //	result.push(statusAndDate[i].dateOfExam);
        }
        var filteredArray = result.filter(function (item, pos) {
            return result.indexOf(item) == pos;
        });
        return filteredArray;
    };
    AdminService.prototype.distinctStatus = function (statusAndDate) {
        var result = [];
        for (var i = 0; i < statusAndDate.length; i++) {
            //	result.push(statusAndDate[i].status);
        }
        var filteredArray = result.filter(function (item, pos) {
            return result.indexOf(item) == pos;
        });
        return filteredArray;
    };
    AdminService.prototype.findDaysDifference = function (joiningDate, endDate) {
        var date1 = new Date(joiningDate);
        var date2 = new Date(endDate);
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return diffDays;
    };
    AdminService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console
        return Promise.reject(errMsg);
    };
    AdminService.prototype.exportAsExcelFile = function (json, excelFileName) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].json_to_sheet(json);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_4__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    };
    AdminService.prototype.saveAsExcelFile = function (buffer, fileName) {
        var data = new Blob([buffer], { type: EXCEL_TYPE });
        file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        //-------------------URLS------------------------
        this.checkLoginURL = "/api/admin-authentication/";
    }
    AuthenticationService.prototype.checkLogin = function (userId, password) {
        var myHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        myHeaders.append('Content-Type', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: myHeaders });
        var queryString = "?userId=" + userId + "&password=" + password;
        //console.log(queryString);
        return this.http.get(this.checkLoginURL + queryString, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }));
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_test_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/test-data */ "./src/app/models/test-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(router, http) {
        this.router = router;
        this.http = http;
        this.countCheckIpAddressFunction = 0;
    }
    //Check full screen of the window
    UserService.prototype.checkFullScreen = function () {
        if (window.innerHeight == window.screen.height && window.innerWidth == window.screen.width) {
            console.log('-------------Browser is in fullscreen-------');
            return true;
        }
        else {
            console.log('-------------Browser is in not fullscreen-------');
            return false;
        }
    };
    //Redirect on test page if window is full screened
    UserService.prototype.redirectOnScreenChange = function () {
        console.log("service redirect func called");
        //redirect on screen changes
        if (this.checkFullScreen()) {
            this.router.navigate(['user-home/test-page']);
            return true;
        }
        else {
            this.router.navigate(['user-home/error-page']);
            return false;
        }
    };
    //Copy to clipboard for PrintScrn module
    UserService.prototype.copyToClipboard = function () {
        var aux = document.createElement("input");
        aux.setAttribute("value", "print screen disabled!");
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        // Remove it from the body
        document.body.removeChild(aux);
    };
    UserService.prototype.findIpAddress = function () {
        var _this = this;
        //Read IP Address
        /************************************************************************************************************* */
        this.privateIP = ClientIP;
        /**
         * To read public IP
         */
        this.http.get('https://api.ipify.org?format=json').subscribe(function (data) {
            _this.publicIP = data['ip'];
        });
        return this.privateIP;
        /************************************************************************************************************* */
    };
    UserService.prototype.checkIpAddress = function () {
        var ip_address_session = sessionStorage.getItem('ip_address_session');
        if (ip_address_session == null) {
            window.sessionStorage.setItem("ip_address_session", this.findIpAddress());
        }
        console.log("IP address of my PC=" + ip_address_session);
        this.getAssinedUserIpAddress = this.checkTestAvailability().candidate.ipAddress;
        console.log(this.getAssinedUserIpAddress + "   " + ip_address_session);
        //Checking IP address of the current matchine
        this.countCheckIpAddressFunction++;
        console.log('IP address checked : ' + this.countCheckIpAddressFunction);
        if (this.getAssinedUserIpAddress == ip_address_session) {
            return true;
        }
        else {
            return false;
        }
    };
    UserService.prototype.checkTestAvailability = function () {
        //Fetch tests from database on the basis of lab details -ip address and date 
        var testData = new _models_test_data__WEBPACK_IMPORTED_MODULE_3__["TestData"]();
        //testData.setEmailAddress("rsoudey@capgemini.com");
        testData.candidate.ipAddress = "10.219.34.87";
        testData.testPaperSet = "../../assets/g.png";
        return testData;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/error-page/error-page.component.css":
/*!**********************************************************!*\
  !*** ./src/app/user/error-page/error-page.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/error-page/error-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/user/error-page/error-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 align=\"center\">Close developer tool or any other sub window and press F11 to load the test</h3>\n"

/***/ }),

/***/ "./src/app/user/error-page/error-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/user/error-page/error-page.component.ts ***!
  \*********************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent(userService) {
        this.userService = userService;
        console.log("error page called");
        userService.redirectOnScreenChange();
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
    };
    ErrorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/user/error-page/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.css */ "./src/app/user/error-page/error-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/user/home/user-home.component.css":
/*!***************************************************!*\
  !*** ./src/app/user/home/user-home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n    font-family: Lato;\r\n  }\r\n  @media print \r\n  {\r\n     .main{\r\n        visibility: hidden;\r\n     }\r\n  }\r\n  .main-div\r\n  {\r\n    filter: blur(20px);\r\n  -webkit-filter: blur(20px);\r\n  }"

/***/ }),

/***/ "./src/app/user/home/user-home.component.html":
/*!****************************************************!*\
  !*** ./src/app/user/home/user-home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"TestNotFound\">\n    <h3>Test Not Found</h3>\n</div>\n<div [ngClass]=\"main_div\" *ngIf=\"!TestNotFound\">\n<router-outlet></router-outlet>\n</div>\nuser home called\n\n"

/***/ }),

/***/ "./src/app/user/home/user-home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user/home/user-home.component.ts ***!
  \**************************************************/
/*! exports provided: UserHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomeComponent", function() { return UserHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserHomeComponent = /** @class */ (function () {
    function UserHomeComponent(userService) {
        this.userService = userService;
        console.log("user home called");
        //Finding IP Address and setting it into a session
        if (userService.checkIpAddress()) {
            this.TestNotFound = false;
            userService.redirectOnScreenChange();
        }
        else {
            this.TestNotFound = true;
        }
    }
    UserHomeComponent.prototype.ngOnInit = function () {
    };
    // Reload webpage on change in resolution size
    UserHomeComponent.prototype.onResize = function (event) {
        window.location.reload();
    };
    // ********************************************************Keyup event blocker
    UserHomeComponent.prototype.handlePrintScreenEvent = function (event) {
        if (event.keyCode == 44) {
            this.userService.copyToClipboard();
            console.log(' prntscrn pressed keyup');
            return false;
        }
        else if (event.keyCode == 122) {
            window.location.reload();
        }
        else if (event.keyCode == 91) {
            this.main_div = '';
        }
        else if (event.keyCode == 92) {
            this.main_div = '';
        }
    };
    // ***************************************************Mouse event controllers  
    UserHomeComponent.prototype.handleMouseEvent = function (event) {
        return false;
    };
    // ************************************************Mouse context menu right click event
    UserHomeComponent.prototype.handleContextMenuEvent = function (event) {
        return false;
    };
    // ************************************************* Keydown events
    UserHomeComponent.prototype.handleKeyboardEvent = function (event) {
        this.key = event.key;
        console.log(event);
        // F12 key blocker
        if (event.keyCode == 123) {
            return false;
        }
        else if (event.ctrlKey && event.keyCode == 83) {
            return false;
        }
        else if (event.ctrlKey && event.keyCode == 67) {
            return false;
        }
        else if (event.ctrlKey && event.keyCode == 80) {
            return false;
        }
        else if (event.ctrlKey && event.keyCode == 65) {
            return false;
        }
        else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
            return false;
        }
        else if (event.keyCode == 122) {
            window.location.reload();
        }
        console.log('\n\nkey pressed : " + this.key + ');
    };
    UserHomeComponent.prototype.windowKeyDownEventHandler = function (event) {
        if (event.keyCode == 91) {
            this.main_div = 'main-div';
            return false;
        }
        else if (event.keyCode == 92) {
            this.main_div = 'main-div';
            return false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UserHomeComponent.prototype, "onResize", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], UserHomeComponent.prototype, "handlePrintScreenEvent", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], UserHomeComponent.prototype, "handleMouseEvent", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:contextmenu', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UserHomeComponent.prototype, "handleContextMenuEvent", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], UserHomeComponent.prototype, "handleKeyboardEvent", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UserHomeComponent.prototype, "windowKeyDownEventHandler", null);
    UserHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./user-home.component.html */ "./src/app/user/home/user-home.component.html"),
            styles: [__webpack_require__(/*! ./user-home.component.css */ "./src/app/user/home/user-home.component.css")],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserHomeComponent);
    return UserHomeComponent;
}());



/***/ }),

/***/ "./src/app/user/test-paper/test-paper.component.css":
/*!**********************************************************!*\
  !*** ./src/app/user/test-paper/test-paper.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n    font-family: Lato;\r\n  }\r\n  @media print \r\n  {\r\n     .main{\r\n        visibility: hidden;\r\n     }\r\n  }"

/***/ }),

/***/ "./src/app/user/test-paper/test-paper.component.html":
/*!***********************************************************!*\
  !*** ./src/app/user/test-paper/test-paper.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" *ngIf=\"urlOfImage\">\n  <p>\n    Start editing to see some magic happen :)\n  </p>\n  <img [src]=\"urlOfImage\" height=\"400px\" width=\"700px\">\n</div>\n<div *ngIf=\"!urlOfImage\">\n  <h1>Test Paper For You have not assigned</h1>\n</div>\n{{ip_address_session}}\n{{testPaperSet}}\n\n"

/***/ }),

/***/ "./src/app/user/test-paper/test-paper.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/user/test-paper/test-paper.component.ts ***!
  \*********************************************************/
/*! exports provided: TestPaperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPaperComponent", function() { return TestPaperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestPaperComponent = /** @class */ (function () {
    function TestPaperComponent(userService) {
        this.userService = userService;
        this.ip_address_session = sessionStorage.getItem('ip_address_session');
        this.urlfound = false;
        console.log("Main Test paper component called");
        //Checking paper set
        this.testPaperSet = userService.checkTestAvailability().candidate.ipAddress;
        if (this.testPaperSet != null) {
            this.urlOfImage = this.testPaperSet;
            this.urlfound = true;
        }
        else {
            this.urlfound = false;
        }
        userService.redirectOnScreenChange();
    }
    TestPaperComponent.prototype.ngOnInit = function () {
    };
    TestPaperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-paper',
            template: __webpack_require__(/*! ./test-paper.component.html */ "./src/app/user/test-paper/test-paper.component.html"),
            styles: [__webpack_require__(/*! ./test-paper.component.css */ "./src/app/user/test-paper/test-paper.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], TestPaperComponent);
    return TestPaperComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rsoudey\Desktop\MPT\MPT_6.0\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map