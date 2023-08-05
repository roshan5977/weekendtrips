import { Component, OnInit } from '@angular/core';
import { WeekendRepository } from '../model/weekend.repository';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../model/login.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ResetPasswordComponent } from './resetpassword.component';
import { UpdateUserComponent } from './UpdateUser.component';
import { Traveller } from '../model/traveller.model';
import { jsDocComment } from '@angular/compiler';

@Component({
  selector: 'user',
  templateUrl: 'userdetails.component.html'
})

export class UserdetailsComponent{

  ngOnInit():void{
    this.repo.loginStatusSubject.asObservable().subscribe(data=>{
       this.repo.loginStatus = this.repo.isloggedin()
      //  if(this.repo.getUser()!=null){
      //   this.userDetails=this.repo.getUser();
      
      //  }
      
      let userStr= localStorage.getItem("user");
console.log("gettingg")
    if(userStr!=null){
    this.userDetails= JSON.parse(userStr)
     }
    
    })
    }
  public userDetails=new Register("","","","","","",0,"",0)

  public photoChaing:boolean=false
  public bookingDetails:Traveller[]=[]

  constructor(public repo:WeekendRepository,private router:Router,private dialog: MatDialog) {
console.log("getting cons")
   let userStr= localStorage.getItem("user");
   console.log(userStr)
    if(userStr!=null){
      console.log(userStr)
    this.userDetails= JSON.parse(userStr)
    if(this.userDetails.gender=="Female"){
      this.photoChaing=true
    }
     }
    this.repo.bookingHistory(this.userDetails.email)

    // console.warn(this.userDetails)
    // console.log(this.photoChaing)
  }
  saveUser(form:NgForm){
      console.log("hrllo")
  }


  logOut(){
    this.repo.currentUser=new Register("","","","","","",0,"",0)
    this.router.navigateByUrl("/weekend")

    localStorage.clear();//reomeItem
    this.repo.isloggedin()
    this.repo.loginStatus=false
  }


  changePassword() {

    const dialogConfig = new MatDialogConfig();
    // dialogConfig.
    dialogConfig.width='20%',
    
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.backdropClass="blur(4px)"
    dialogConfig.panelClass="blur"


  // dialogConfig.position={
  //   'top':'500px',
  //   left:'500px'
  // }

    this.dialog.open(ResetPasswordComponent, dialogConfig);
}
edit(){
  const dialogConfig = new MatDialogConfig();
  // dialogConfig.
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;

  this.dialog.open(UpdateUserComponent, dialogConfig);

}
getBookingDetails(useremail: string){
  this.repo.bookingHistory(useremail)
   this.bookingDetails=this.repo.bookingHistoryDetails
   console.log(this.repo.bookingHistoryDetails)
   console.log(this.bookingDetails," this  is the  booking details of the ")
}
admin(){
  this.router.navigateByUrl("/admin/main/admincity/0")
}



}
