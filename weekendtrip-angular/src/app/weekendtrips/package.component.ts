import { Component, OnInit } from '@angular/core';
import { City } from '../model/city.model';
import { Packages } from '../model/packages.model';
import { Place } from '../model/place.model';
import { WeekendRepository } from '../model/weekend.repository';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  // templateUrl: 'package.component.html'
  // template:'<div> hello angular</div>'
  templateUrl:'package.component.html'

})

export class PackageComponent  {
    id:number=-1;
    // city:City[]=[]
    // packages:Packages[]=[]
    // places:Place[]=[]
  constructor(private repo:WeekendRepository,private router:Router,private activeroute:ActivatedRoute) {
    // console.log((this.activeroute.snapshot.params["id"]))
    this.id= (this.activeroute.snapshot.params["id"])
    this.repo.saveId(this.id);

    //   this.city=repo.getCities()
    //   console.log(this.city)
      // this.packages=this.city[this.id-1].packages
      // console.log(this.packages)
      // this.places=this.packages[0].places
   }

   get packages(){
    return this.repo.getPackagesBycityId(this.activeroute.snapshot.params["id"])
   }
  bookNow(packageId:number){
    if(packageId==0){
      this.router.navigate(["/login/",packageId])
    }
    else if(this.repo.isloggedin())
    {
      this.router.navigate(['/traveller/',packageId])
    }
    else
      this.router.navigate(["/login/",packageId])
  }
  places(id:number){
    this.router.navigate(['/place',id])
  }
  


  }
