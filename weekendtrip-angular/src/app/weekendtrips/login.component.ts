import { from } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login, Register } from '../model/login.model';
import * as CryptoJS from 'crypto-js';//for encrypt 
import { WeekendRepository } from '../model/weekend.repository';

// import { IonInput } from '@ionic/angular';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent  implements OnInit{

  
ngOnInit():void{
this.repo.loginStatusSubject.asObservable().subscribe(data=>{
   this.repo.loginStatus = this.repo.isloggedin()
})
}


  showmodal: boolean = false
  submitted:boolean =false
  id: number = -1;
  login: Login = new Login("", "")
  register: Register = new Register("", "", "", "", "", "", 0, "", 0)


  refid: number = 0;
  status: boolean = false;
  hide:boolean=true;

  constructor(private repo: WeekendRepository
    , private router: Router, private activeroute: ActivatedRoute) {
    this.id = (this.activeroute.snapshot.params["id"])
  }

get emailArr(){
  return this.repo.emailarr
}

  saveLogin(form: NgForm) {
//encrypting
form.value.password=btoa(form.value.password)

    this.repo.authorize(form.value)

    console.log(this.repo.userId)


    setTimeout(() => {
     
      this.refid = this.repo.getid()
      this.status = this.repo.getstatus()
      console.log(this.status)
      console.log(this.refid > 0)
      console.log(this.id == 0)
      console.log(this.repo.logInSwap)

      if(this.repo.currentuserrole=="admin"){
        console.log(this.repo.currentuserrole)
        this.router.navigateByUrl("/admin/main/admincity/0")
        // this.repo.loginStatus = true
        this.repo.isloggedin()
        this.repo.loginStatusSubject.next(true);
        return
      }
      else if ((this.refid != 0 && this.id != 0 && this.status)) {
        console.warn(" this is thee ")
        // this.repo.loginStatus = true
        this.repo.loginStatusSubject.next(true);
        this.repo.isloggedin()
        this.router.navigate(["/traveller/", this.id])
      }
      else if (this.id == 0 && this.status) {
        // this.repo.loginStatus = true;
        this.repo.isloggedin()
        this.router.navigateByUrl("/weekend");
      }
    }, 700);

  }
  showModal() {
    this.showmodal = true
  }
  hideModal() {
    this.showmodal = false
  }

  registerUser(form: NgForm) {
    this.submitted = true;
   
  if (form.valid) {        
    this.register.role = "user";
 
    console.log(this.register)
    this.hideModal()
    this.register.password=btoa(this.register.password)
    this.repo.register(this.register)
    console.log(" new user details ", form.value)
    form.resetForm();
        };
    }
}