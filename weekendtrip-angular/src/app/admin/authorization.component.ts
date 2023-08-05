import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../model/login.model';
import { WeekendRepository } from '../model/weekend.repository';

@Component({
  selector: 'admin-auth',
  templateUrl: 'authorization.component.html',
  styleUrls:['authorization.component.css']
})

export class AuthorizationComponent implements OnInit {
  show = true;
  showSpinner=false;
  invalidAdmin=false;



  constructor(private router:Router,private repository: WeekendRepository, private formBuild:FormBuilder ){
    this.invalidAdmin=false;
    this.repository.showHeader=false;
    this.repository.showFooter=false;
   }



   loginForm=this.formBuild.group({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(7)])
   })



  //  get email(){
  //   return this.loginForm.get('emailid')
  //  }
  //  get pass(){
  //   return this.loginForm.get('pass')
  //  }




   registerForm=this.formBuild.group({
    firstname:new FormControl('',[Validators.required]),
    lastname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(7)])
   })

   get firstname(){
    return this.registerForm.get('firstname')
   }

   get lastname(){
    return this.registerForm.get('lastname')
   }
   get email(){
    return this.registerForm.get('email')
   }

   get password(){
    return this.registerForm.get('password')
   }


   onLogin(){
    console.log(this.loginForm.value)
    this.repository.authorize(this.loginForm.value)
setTimeout(() => {
  if(this.repository.show){
      this.router.navigateByUrl("/admin/main/admincity/1")
      // this.showSpinner=false
    }
    else{
      // this.showSpinner=false
      this.invalidAdmin=true
    }
}, 1000);

   }

   onRegister(){
    console.log("register")
    console.log(this.registerForm.value);
    if(this.repository.register(this.registerForm.value)){
      // this.router.navigateByUrl("/admin/main/admincity/1")
      // this.showSpinner=false
    }
   }



  ngOnInit() { }
}



// onSubmit(forms:NgForm){
//   // console.log("hii")
//   // this.showSpinner=!this.showSpinner
//   // console.log(    this.showSpinner  +"jbjhg"    )
//   // setTimeout(() => {
//   //   this.showSpinner=!this.showSpinner
//   // }, 2000);
//   console.log(forms.value)
//   if(this.repository.authorize(this.login)){
//     this.router.navigateByUrl("/admin/main/admincity/1")
//     // this.showSpinner=false
//   }
//   else{
//     // this.showSpinner=false
//     this.invalidAdmin=true
//   }
// }
