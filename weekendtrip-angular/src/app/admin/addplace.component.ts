import { City } from './../model/city.model';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnChanges, OnInit } from '@angular/core';


import { Packages } from '../model/packages.model';
import { WeekendRepository } from '../model/weekend.repository';

@Component({
  selector: 'add-place',
  templateUrl: 'addplace.component.html'
}
)

export class AddPlaceComponent implements OnInit{
  selectedCity:String="Goa"
  selectedPack:String=""
  packages:Packages[]=[];
  cityarr:City[]=[];

  constructor(private fb:FormBuilder,private repo:WeekendRepository) {
    // this.selectedCity=this.repo.selectedcity
    // this.selectedPack=this.repo.selectedpack
    this.cityarr=this.repo.cities
    this.packages=this.repo.getPackages()
    // if(this.selectedCity!=""){
      console.log("changing")
      // this.packages=this.cityarr.filter(c=>c.cityName==this.selectedCity)[0].packages
    // }
  }

  PlaceForm=this.fb.group({
    placeName:[null,Validators.required],
    placeImgUrl:[null,Validators.required],
    placeStatus:('Active')
  })

  onSubmit(){

  console.log(this.selectedCity)
  console.log(this.selectedPack);
 let currentpack=this.packages.find(p=>p.packageName==this.selectedPack)?.packageId
 console.log(currentpack)
    console.log(this.PlaceForm.value)
    this.repo.savePlace(this.PlaceForm.value,currentpack)
  }
  callme(){
    console.log("calling");

  }
  getcities(cityname:String ="Goa") {
  let  city= this.cityarr.filter(e=>e.cityName==cityname)
  let cityid= city[0].cityId
 return this.repo.getCity(cityid)?.packages
  }

  ngOnInit() {
  }
}
//
