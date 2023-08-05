import { Component, OnInit } from '@angular/core';
import { WeekendRepository } from '../model/weekend.repository';
import { Traveller } from '../model/traveller.model';
import { City } from '../model/city.model';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
travellers:Traveller[]=[]
cities:City[]=[]
totalsale:number=0
orders:number=0
users:number=0
  constructor(private repo:WeekendRepository) {
    this.travellers= this.repo.getTravellers()
    this.travellers.reverse
    this.users=this.repo.users.filter(e=>e.role!="admin").length
    console.log(this.travellers)
    this.travellers.forEach(e=>{
      this.totalsale+=e.packagePrice
    })
    this.orders=this.travellers.length
  }

getTravelers(){
  // console.log(this.repo.getTravellers())
  //  this.travellers.forEach(
  //    d=>this.totalsale+=d.packagePrice
  //  )

   console.log("dashboard",this.travellers)

}
  getCity(){
  this.cities= this.repo.getCities()
  }



  ngOnInit() {

    // this.travellers= this.repo.getTravellers();

   }
}
