import { Component, OnInit } from '@angular/core';
import { WeekendRepository } from '../model/weekend.repository';
import { ActivatedRoute, Router } from '@angular/router';
import { Traveller } from '../model/traveller.model';
import { Register } from '../model/login.model';


@Component({
  selector: 'review',
  templateUrl: 'bookingreview.component.html',
  styleUrls:['bookingreview.component.css']
})

export class BookingreviewComponent{
  public currentTraveller =new Traveller("",new Date(),new Date(),"",0,[],new Date(),"","")
  public curentUser=new Register("","","","","","",0,"",0)
  public total_price :number=10
  constructor(private repo:WeekendRepository,actvateRouter:ActivatedRoute,router:Router) {
    console.log(this.currentTraveller.travellerEmail,"gyugtygft")
    if(this.repo.getUser!=null){
      this.curentUser=repo.getUser()
      this.currentTraveller.travellerEmail=this.curentUser.email
      console.log(this.currentTraveller.travellerEmail)
     }
     this.currentTraveller.travellerEmail=this.curentUser.email
   this.currentTraveller= repo.gettraveller()
   console.log(this.currentTraveller.packageName)
   console.log(this.currentTraveller.packagePrice,"this is the price of the packege")
   this.total_price=this.repo.currentTraveller.passenger.length*this.repo.currentTraveller.packagePrice
  }

}
