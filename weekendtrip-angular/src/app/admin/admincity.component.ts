import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Packages } from '../model/packages.model';
import { Place } from '../model/place.model';
import { City } from './../model/city.model';
import { WeekendRepository } from './../model/weekend.repository';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-city',
  templateUrl: 'admincity.component.html'
})

export class AdminCityComponent implements OnInit {

  constructor(private repository :WeekendRepository,private ngxService: NgxUiLoaderService) {
  //  if(activateroute.snapshot.params["id"]=1)this.validId=true

  }


  ngOnInit() {

  this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
  // Stop the foreground loading after 5s
  setTimeout(() => {
    this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
  }, 1000);

  // this.ngxService("loging in...");



  }

  removeCity(cityid:number){
    this.repository.removeCity(cityid);
    this.cities;
  }

  get cities(){
    // console.log(this.repository.getCities()[1].status)
    return this.repository.getCities();
  }
}

