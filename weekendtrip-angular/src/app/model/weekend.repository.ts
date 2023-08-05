import { saveAs } from 'file-saver';
import { Injectable } from "@angular/core";
import { City } from "./city.model";
import { WeekendRestData } from "./weekend.restdata";
import { Place } from "./place.model";
import { Packages } from "./packages.model";
import { Login, Register, Reset } from "./login.model";
import { Traveller } from "./traveller.model";

import { Passengers } from "./passengers.model";
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2'
import { Coupon } from './coupon.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Payment } from './payment.model';

@Injectable()
export class WeekendRepository 
{
  
  currentuserrole:string=this.getRole()

  public getRole(){
if(this.getUser()!=null){
  
  console.log(this.getUser().role)
  console.log(this.getUser())

  return this.getUser().role

}
    else
    return ""
  }

  public showHeader=true;
  public showFooter=true;
  public currenttravellerId=0;
  public loginStatus:boolean=this.isloggedin()

  public isloggedin(){
   let token=localStorage.getItem("token");
  // console.log(token)
    if(token=='' ||token==undefined || token==null ){
      return false;
    }
    // else if(){
      if(this.jwtHelper.isTokenExpired(token)){
        localStorage.clear();
        return false
      }

    // }
    return true
  }

  public loginStatusSubject=new Subject<boolean>();

  public logInSwap:boolean=false;

  public show=true;//make it false for admin
  showsucessfull=false;
  checkdate:any;
  noofpassengers:number=0;
  paymentstatuss:boolean=true;
  public cities:City[]=[];
  public travellers:Traveller[]=[];
  public packages:Packages[]=[]
  private places:Place[]=[];
  users:Register[]=[]
  emailarr:String[]=[]
  selectedcity:string=""
  selectedpack:String=""
  bookingHistoryDetails:Traveller[]=[]
  userpaymentstatus:any=false


  public currentUser=new Register("","","","","","",0,"",0)

  public userId=0;
  totalprice:number=0;
 currentTraveller:Traveller =new Traveller("",new Date(),new Date(),"",0,[],new Date(),"","")
 traveller2:Traveller=new Traveller("",new Date(),new Date(),"",0,[],new Date(),"","")

 private coupon:Coupon[]=[];
 cityrefid:number=-1;
 pacrefid:number=-1;
  getTravellers(): Traveller[] {
    console.log(this.travellers)
    return this.travellers;
  }

//* Storing the list of City objects in local arry

  constructor(private dataSource:WeekendRestData,private snackBar: MatSnackBar,private router:Router
    ,public jwtHelper: JwtHelperService){

    dataSource.getCities().subscribe(data =>{
      console.log(data);
      this.cities=data
    })
    dataSource.getPackages().subscribe(data =>{
    console.log(data);
     this.packages=data
   })

    dataSource.getTravellers().subscribe(data =>{
      console.log(data);
      this.travellers=data
      console.log(this.travellers)
    })
    dataSource.getUsers().subscribe(data =>{
      console.log(data,"users");
      this.users=data
      this.emailarr=this.users.map(e=>e.email);
    })
    dataSource.getuserarray().subscribe(data =>{
      console.log(data,"users");
      this.emailarr=data
    })
    dataSource.getCoupons().subscribe(data =>{
      console.log(data);
      this.coupon=data;
      console.log(this.coupon)
    })


  }
  getPackagesBycityId(cityid:number){
    return this.cities.find(e=>e.cityId==cityid)?.packages;
  }

  // generatePdfAfterPayment()


  getUser(){
 let   userStr=localStorage.getItem("user");
    if(userStr !=null){
      return JSON
      .parse(userStr)
    }
    else return null;
  }

authorize(formdetails:Login){
  console.log(formdetails)
  console.log(this.show)
  localStorage.clear()
  this.dataSource.login(formdetails).subscribe(
    (data:any)=>{
      console.log(data)
    console.log(data.user);
    this.userId=data.user.id
    this.show=true;
    this.logInSwap=true;

    //not needed
    this.currentUser=this.getUser()

    //stored in local storage
    console.log(data.user)

    console.log(JSON.stringify(data.user))
    localStorage.setItem("user",JSON.stringify(data.user));
    localStorage.setItem("token",data.token);
    this.currentuserrole=this.getRole()

    //snackbar logged in
    this.snackBar.open("Login sucessfull !","",{
      panelClass: ['mat-toolbar', 'mat-primary'],
   duration:3000,
   verticalPosition:'bottom',
   horizontalPosition:'center'
    })

    // //not needed instead create a method by get from local storage
    // this.currentuserrole=this.getUser().role

  },
  (error)=>{
console.log(error);
this.snackBar.open("Invalid Login !","",{
  panelClass: ['mat-toolbar', 'mat-warn'],
  duration:3000,
  verticalPosition:'bottom',
  horizontalPosition:'center'
  }
  
  )

  })
}

  register(registerdetails:Register){

    registerdetails.status="active"

    let name=registerdetails.email

        this.dataSource.register(registerdetails).subscribe(
          (data:any)=>{
            console.log(data);
            Swal.fire(name,'Registered sucessfully ','success')},
          (error)=>{
          }
        )

        return this.show;
  }


  //get pdf


//save passenger
savePassenger(passenger:Passengers){
  console.log(passenger)
}
//save traveller
saveTraveller(traveller:Traveller){
  Object.assign(this.currentTraveller,traveller)
  this.traveller2=traveller
  this.totalprice=this.currentTraveller.passenger.length*this.currentTraveller.packagePrice
  console.log(this.currentTraveller)
  this.checkdate=traveller.journeyEndingDate.getDay
  this.noofpassengers=this.currentTraveller.passenger.length

  this.dataSource.saveTraveller(traveller).subscribe(
    e=>{
      this.travellers.push(e)
      this.currentTraveller=e
      console.log(this.currentTraveller,"current traveller")
      this.currenttravellerId=e.travellerId
      console.log(e)
    }
    
  )
}
//get traveller
gettraveller():Traveller{
   console.log(this.currentTraveller)
   return this.traveller2
}





//get cities pack and place
getCities(){
  return this.cities
}
getCity(id:number){
  return this.cities.find(c=>c.cityId==id);
}
getPlaces(id:number):Place[] |undefined   
{
  console.log(id)
  console.log(this.getpackage(id))

  return this.getpackage(id)?.places

}
getPackages():Packages[]{
  return this.packages;
}
getpackage(refid:number):Packages | undefined{
  // this.pacrefid=refid;
  // console.log(this.cities.find(e=>e.cityId==this.cityrefid)?.packages.find(e1=>e1.packageId==this.pacrefid))
  // return (this.cities.find(e=>e.cityId==this.cityrefid)?.packages.find(e1=>e1.packageId==this.pacrefid))
  // console.log(this.packages)
  console.log(this.packages.find(e=>e.packageId==refid))
  return this.packages.find(e=>e.packageId==refid)
}
getCityName(packageName:string):string{

  return this.cities.find(c=>c.packages.find(p=>p.packageName==packageName))?.cityName || ""
}


//changing active inactive status for admin
removeCity( cityid:number){
   this.dataSource.deleteCity(cityid)
   .subscribe(e=>{
    console.log("no error")
    console.log(e)
    this.dataSource.getCities().subscribe(data=>
      this.cities=data)
    },
    error=>{
  console.log("errors")
  this.cities.filter(c=>c.cityId==cityid)[0].status
    }
    )
}
removePlace( placeid:number){
  this.dataSource.deletePlace(placeid).subscribe()
}
removePack( packid:number){
  this.dataSource.deletePack(packid).subscribe()
}





//saving city package and place for admin
saveCity(city:City){
  this.dataSource
  .saveCity(city).subscribe((data)=>{
    this.cities.push(data)
    Swal.fire('success','city added sucessfully ','success') 
  },
  (error)=>{
    Swal.fire('','city not added  ',"warning")
  }
  )
}
savePlace(place:Place,packid:number = 1){
  this.dataSource
  .savePlace(place,packid).subscribe(
    data=>{this.places.push(data)
  Swal.fire('success','place added sucessfully ','success') 
 } ,
 (error)=>{
   Swal.fire('','place not added  ',"warning")
 }
  )
}
savePack(packages:Packages,cityId:number){
  this.dataSource
  .savePack(packages,cityId).subscribe(
    data=>{
      Swal.fire('success','package added sucessfully ','success') 
  this.packages.push(data)
  console.log( this.cities.find(c=>c.cityId==cityId))
 this.cities.find(c=>c.cityId==cityId)?.packages.push(data)//error
},
(error)=>{
  Swal.fire('','package not added  ',"warning")
}
  );
}

getid():number{
  if(this.getUser()!=null){
    this.userId=this.getUser().id
  }
  return this.userId;
}

getstatus():boolean{
  return this.logInSwap
}

saveId(id:number){
  this.cityrefid=id;
  console.log(id)
}




resetpassword(reset:Reset){
  reset.id=this.currentUser.userId 
  console.log(reset.id);
  this.dataSource.resetPassword(reset).subscribe(
    (data)=>{
      Swal.fire('Login now ','password changed sucessfully ','success') 
    },
    (error)=>{
      Swal.fire('try again ','password incorrect ','error') 
    }
  )
}
getcoupon():Coupon[]{
  console.log(this.coupon)
  return this.coupon
}
bookingHistory(travellerMail:string){

this.dataSource.bookingHistory(travellerMail).subscribe(
    (data)=>{
      this.bookingHistoryDetails=data;
      console.log(this.bookingHistoryDetails)
    }
  )
}

changeStatusOfUserAdmin(email:String){
 let user= this.users.filter(e=>e.email==email)[0];
return this.dataSource.changeStatusOfUserAdmin(email).subscribe(
e=>{
  // this.users.splice(user.userId,1,e)
  this.users.filter(e=>e.email==email)[0].role=e.role
}
)
}


//this is the only method called after payment clicked
generatepdf(id:number,amount:number){
  console.log("test1 generate pdf")
  console.log(this.currentTraveller,"current traveller")
  this.getStatus(id,amount)
}

getStatus(id:number,amount:number){
  console.log(this.currentTraveller,"current traveller")
  console.log("test2 generate pdf came")
  console.log("getstatus")
  this.dataSource.doPayment(new Payment(0,"","",id,amount)).subscribe(
    e=>{
      console.log(e)
      if(e.paymentStatus=="success"){
      console.log("getstatus->sucesss")

        // this.paymentstatuss=true
        this.showpaymentstatusimage(true)
        this.getpdf(id,amount)
      }
     
      // else this.paymentstatuss=false
      else this.showpaymentstatusimage(false)
    }
   
  )
  console.log("getstatus->done")
}

getpdf(id:number,amount:number){
  console.log("test3 generate pdf came")

  console.log(id,"pdf")
 return this.dataSource.getPdf(id,amount).subscribe(
  (response:any)=>{
  console.log("test3 generate pdf came")
    saveAs(response,"weekeendtrips"+id+".pdf")
  }
 )
}
showpaymentsucess:boolean=false
showpaymentfailure:boolean=false
showpaymentstatusimage(paymentstatuss:boolean){
  if(paymentstatuss)this.showpaymentsucess=true;
  else this.showpaymentfailure=true;
}

// paymentstatus(id:number,packprice:number){
//   this.getStatus(id,packprice)
//    return this.userpaymentstatus
// }






getResponse(msg:string){
  return this.dataSource.getresponse(msg).subscribe(
    a=>{
      console.log(a)
      console.log(a)
    }
  )
}


}
