import { Coupon } from './../model/coupon.model';
import { Component } from '@angular/core';
import { WeekendRepository } from '../model/weekend.repository';

@Component({
  templateUrl: 'payment.component.html',
  styleUrls:['payment.component.css']
})

export class PaymentComponent {
  paymentfailed:boolean=false;
  totalprice:number=0;
  cupi:boolean=false;
  ccard:boolean=false;
  cnet:boolean=false;
  show:boolean=false;
  count:number=0;
  pricecheck:boolean=false;
  datecheck:boolean=false;
  passengercheck:boolean=false;
  checkcoupon:boolean=false;
  checkcoupon1:boolean=false;
  checkcoupon2:boolean=false;
  checkcoupon3:boolean=false;
  checkcoupon4:boolean=false;
  // showsucessfull=false;
  coupons:Coupon[]=[];
  CreditcardActive:boolean=false;
  constructor(public  repo:WeekendRepository,) {
      this.totalprice=repo.totalprice
      console.log(repo.totalprice)
      this.coupons=this.repo.getcoupon();
     console.log(this.coupons)
  }
  changeupi(){
    this.cnet=false;
    this.ccard=false;
     this.cupi=!this.cupi;

  }
  changecard(){
    this.cupi=false;
    this.cnet=false;
    this.ccard=!this.ccard;
 }
 changenet(){
  this.ccard=false;
  this.cupi=false;
  this.cnet=!this.cnet;
}
checkCreditcardActive()
{
  this.CreditcardActive=true
}
sucessfull(){
     console.log("pdf generating 1");
    console.log(this.repo.getid(),this.totalprice,"sucess") 
     
      // this.repo.paymentstatus(this.repo.getid(),this.totalprice)
      //  this.repo.showsucessfull=true;
       this.repo.generatepdf(this.repo.currentTraveller.travellerId,this.totalprice)
      //  this.repo.getpdf(this.repo.currentTraveller.travellerId,this.totalprice)

     }
     

    
// else{
// this.paymentfailed=true;
// }

    //  this.source.getPdf(id).subscribe
// (
//   (res:any)=>{
//     console.log(res)

//     // window.open(window.URL.createObjectURL(new Blob([res], { type: "application/octet-stream",endings:"transparent" } )));
// saveAs(res,"weekendtrips"+id+".pdf");


showcoupons(){
  console.log("hello")
 this.show=true;
}
hidemodel(){
  this.checkcoupon=false;
  this.checkcoupon1=false;
  this. checkcoupon2=false;
  this.checkcoupon3=false;
  this.checkcoupon4=false;
  this.show=false;
}
getcoupon1(discount:number){

  if(this.count==0){
    this.count++;
    this.totalprice=(this.totalprice-((this.totalprice*discount)/100))
  }
  else{
    this.checkcoupon1=false;
  this. checkcoupon2=false;
  this.checkcoupon3=false;
  this.checkcoupon4=false;
  this.checkcoupon=!this.checkcoupon
  }


}
getcoupon2(discount:number){
  if(this.count==0){
     this.count++;
    this.totalprice=(this.totalprice-((this.totalprice*discount)/100))
  }
  else{
    this.checkcoupon=false;
    this. checkcoupon2=false;
    this.checkcoupon3=false;
    this.checkcoupon4=false;
    this.checkcoupon1=!this.checkcoupon1
  }
}
getcoupon3(discount:number){
  if(this.count==0){
    if(this.totalprice>=30000){
       this.count++;
      this.totalprice=(this.totalprice-((this.totalprice*discount)/100))
    }
    else{
      this.pricecheck=!this.pricecheck
      this.datecheck=false;
      this.passengercheck=false;
    }
  }
  else{
    this.checkcoupon1=false;
    this. checkcoupon=false;
    this.checkcoupon3=false;
    this.checkcoupon4=false;
    this.checkcoupon2=!this.checkcoupon2
  }


}
getcoupon4(discount:number){
  console.log(this.repo.checkdate)
  if(this.count==0){
    if(this.repo.checkdate<=7){
      this.count++;
      this.totalprice=(this.totalprice-((this.totalprice*discount)/100))
    }
    else{
    this.pricecheck=false;
    this.passengercheck=false;
    this.datecheck=!this.datecheck
    }
  }
  else{
    this.checkcoupon1=false;
    this. checkcoupon2=false;
    this.checkcoupon4=false;
    this.checkcoupon=false;
    this.checkcoupon3=!this.checkcoupon3
  }


}
getcoupon5(discount:number){
  if(this.count==0){
    if(this.repo.noofpassengers==2){
       this.count++;
      this.totalprice=(this.totalprice-((this.totalprice*discount)/100))
    }
    else{
      this.pricecheck=false;
      this.datecheck=false;
      this.passengercheck=!this.passengercheck
    }
  }
  else{
    this.checkcoupon1=false;
    this. checkcoupon2=false;
    this.checkcoupon3=false;
    this.checkcoupon=false;
    this.checkcoupon4=!this.checkcoupon4
  }


}


}
