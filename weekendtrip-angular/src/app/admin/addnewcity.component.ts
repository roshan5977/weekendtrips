import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { City } from '../model/city.model';
import { Router } from '@angular/router';
import { WeekendRepository } from '../model/weekend.repository';
// import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'add-city',
  templateUrl: 'addnewcity.component.html',
  // styleUrls:['addnewcitycomponent.css']
})

export class AddCityComponent implements OnInit {
  constructor(private fb:FormBuilder,private router:Router,private repo:WeekendRepository) { }

  cityForm=this.fb.group({
    cityName:['',Validators.required],
    cimageUrl:['',Validators.required],
    status:('Active'),
    packages:(null)
  })


  get cityName(){
    return this.cityForm.get('cityName')
  }
  get cityImgUrl(){
    return this.cityForm.get('cityImgUrl')
  }
  onSubmit(){
    console.log(this.cityForm.dirty)
    console.log(this.cityForm.value)
    console.log("hello")
    this.repo.saveCity(this.cityForm.value)
   
  }
 
  ngOnInit() { }
}
