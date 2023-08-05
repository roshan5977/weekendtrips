
import { Component, OnInit } from '@angular/core';
import {WeekendRepository } from '../model/weekend.repository';
import { City } from '../model/city.model';

@Component({
  selector: 'weekend',
  templateUrl: 'weekendTrip.component.html'
})

export class WeekendTripComponent{
  constructor(private repo:WeekendRepository) {
    this.repo.showpaymentsucess=false
    this.repo.showpaymentfailure=false
    this.repo.showHeader=true;
    this.repo.showFooter=true;
  }

  get cities():City[]{
    console.log("heelo")
    return this.repo.getCities();

  }
  ngOnInit() { }
}
