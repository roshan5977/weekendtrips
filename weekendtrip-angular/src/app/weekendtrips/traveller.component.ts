import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Traveller } from '../model/traveller.model';
import { Packages } from '../model/packages.model';
import { Passengers } from '../model/passengers.model';
import { WeekendRepository } from '../model/weekend.repository';
import { Register } from '../model/login.model';
import Swal from 'sweetalert2'

@Component({
  templateUrl: 'traveller.component.html',
  styleUrls:['traveller.component.css']
})

export class TravellerComponent implements OnInit,OnDestroy  {


  traveller :Traveller=new Traveller("",new Date(),new Date(),"",0,[],new Date(),"","")

  packagee:Packages=new Packages(0,"","","",1,"","",[]);

  passenger:Passengers=new Passengers(0,"",0,"","")

  check:boolean=false;
   id:any

  showmodal:boolean=false

  passengerDetailsArry:Passengers[]=[];

  userDetails=new Register("","","","","","",0,"",0)

  minDate = new Date();
  maxDate =new Date();
  date: Date =new Date();

  constructor(private repo:WeekendRepository,private activeroute:ActivatedRoute,private router:Router) {
    // console.log()
    this.repo.showpaymentsucess=false
    this.repo.showpaymentfailure=false
   console.log((this.activeroute.snapshot.params["packageReferenceId"]))
   Object.assign(this.packagee,this.repo.getpackage((this.activeroute.snapshot.params["packageReferenceId"])))
   console.log(this.packagee,"this is the current package")
  console.log(localStorage.getItem("user"))
   console.log(repo.getUser())
   if(this.repo.getUser!=null){
    console.log(repo.getUser())
    this.userDetails=repo.getUser()
    this.traveller.travellerEmail=this.userDetails.email
   console.log( this.userDetails.email)
   }
   this.traveller.packageName=this.packagee.packageName
   this.traveller.packagePrice=this.packagee.packagePrice
  //  this.traveller.travellerEmail=this.repo.currentUser.email

  }

  saveTraveller(form:NgForm){
  this.traveller.travellerEmail=this.userDetails.email
  // this.traveller.cityName=this.repo.selectedcity
  console.log( this.traveller.cityName)
  console.log(this.repo.selectedcity)
    console.log(this.traveller.passenger.length)
    console.log(form.value.passengers)
    if(this.passengerDetailsArry.length>0)
{
    this.date = new Date(this.traveller.journeyStartingDate); //* setting the date as  Starting date
    this.date.setDate( this.date.getDate() + 3 ); //* adding 3 days for given date
    this.traveller.journeyEndingDate=this.date;
    this.traveller.cityName=this.repo.getCityName(this.traveller.packageName)
    console.log(this.traveller.cityName,"city")
    this.traveller.passenger=this.passengerDetailsArry
    this.repo.saveTraveller(this.traveller)

    // swal("Click on either the button or outside the modal.")
    // .then((value:string) => {
    //   swal(`The returned value is: ${value}`);
      this.router.navigateByUrl('/review')
}
//
else{
  Swal.fire(
    'Something Went Wrong ?',
    'Please add atleast one passenger',
    'question'
  )

}
    // });
  }

  showModal(){
    this.showmodal=true
    console.log(this.showmodal)
  }
  hideModal(){
    this.showmodal=false
  }
  savePassenger(form:NgForm){
    this.hideModal()
    this.passengerDetailsArry.push(form.value);
    console.log(this.passengerDetailsArry)
    form.resetForm();

  }

  deletePassenger(id:number){
    this.passengerDetailsArry.splice(id,1);
  }


  resetTimer(){
    //  this.id=setTimeout(() => {
    // console.log("calling clear")
    //    Swal.fire("Time out","login again")
    //   localStorage.removeItem("token")
    // }, 10000);
    

  }

ngOnInit(){
  if(this.repo.getUser!=null){
    console.log(this.repo.getUser())
    this.userDetails=this.repo.getUser()
    this.traveller.travellerEmail=this.userDetails.email
   console.log( this.userDetails.email)
   }
  // document.addEventListener('mousemove',this.resetTimer)
  // document.removeEventListener('mousemove',this.resetTimer)
}
ngOnDestroy(){

  // document.removeEventListener('mousemove',this.resetTimer)

}

}
