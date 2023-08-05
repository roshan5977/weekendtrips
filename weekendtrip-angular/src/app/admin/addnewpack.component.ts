import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { City } from '../model/city.model';
import { WeekendRepository } from '../model/weekend.repository';

@Component({
  selector: 'add-pack',
  templateUrl: 'addnewpack.component.html'
})

export class AddPackComponent implements OnInit {
selected:String=""
  cityarr:City[]
  constructor(private fb:FormBuilder,private repo:WeekendRepository) {
    this.cityarr=repo.getCities()
    this.selected=this.repo.selectedcity

  }

  PackForm=this.fb.group({
    packageId:(null),
    packageName:[null,Validators.required],
    packageCategory:[null,Validators.required],
    packageDescription:[null,Validators.required],
    packagePrice:[0,Validators.required],
    pimageUrl:[null,Validators.required],
    packageStatus:('Active')
  })
send(){
  console.log(this.selected)
}


  onSubmit(){
    // console.log(form.value)
    // console.log(this.PackForm.dirty)
    console.log(this.PackForm.value)

    let city:City
   city=this.cityarr.filter(e=>e.cityName==this.selected)[0]
   this.repo.savePack(this.PackForm.value,city.cityId);
  }

  ngOnInit() { }
}
