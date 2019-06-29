import { Component, OnInit ,EventEmitter } from '@angular/core';

//import user serivce 
import {IssueService} from './../../issue.service';

import {UserService} from './../../user.service';

import {Router} from '@angular/router';

import {ToastrService} from 'ngx-toastr';
import {CookieService} from 'ngx-cookie-service';
import { FileUploader,FileLikeObject} from 'ng2-file-upload';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private uri='http://localhost:3000/api/upload';

  public uploader: FileUploader = new FileUploader({
    url: this.uri
    });

    public onFileSelected(event: EventEmitter<File[]>) {
      const file: File = event[0];
      console.log(file);
  
    }
     


  public allStatus=["Backlog","In-Progress","In-Test","Done"];
  public allUsers=[];

  constructor(public toastr:ToastrService,
    public router:Router,
    public issueService:IssueService,
    public userService:UserService,
    public cookieService:CookieService) { }

  ngOnInit() {
    this.getAllUsers();
    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    }
  }

  //functions here

  public getAllUsers:any=()=>
  {
    let authToken=this.cookieService.get('authToken');
    this.userService.getAllUsers(authToken).subscribe(
      (userData)=>
      {
        console.log(userData);
        for(let user of userData.data)
        {
          this.allUsers.push(user);
        }
      }
    )
  }//get all users 

}
