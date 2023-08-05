import { Component, OnInit } from '@angular/core';
import { WeekendRepository } from '../model/weekend.repository';
import { City } from '../model/city.model';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'cities.component.html',
  styleUrls: ['cities.component.css',]

})

export class CityComponent  {
 

  constructor(private repo:WeekendRepository,private router:Router) {
   }


   get cities(){
   return this.repo.getCities().filter(e=>e.status=="Active")
  }


  gotoPackeges(cityid:number){
    this.repo.selectedcity=this.repo.getCities().filter(e=>e.cityId==cityid)[0].cityName
    this.router.navigate(['/packages',cityid])
    
  }
}
