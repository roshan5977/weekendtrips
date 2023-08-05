import { Component, OnInit } from '@angular/core';
import { WeekendRepository } from '../model/weekend.repository';
import { Place } from '../model/place.model';
import { threadId } from 'worker_threads';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'places',
  templateUrl: 'places.component.html',
  styleUrls:['places.component.css']
})

export class PlacesComponet implements OnInit {

  public pId=0;
  constructor(private repo:WeekendRepository,private activeroute:ActivatedRoute,private router:Router) {}

  get placesArry(){
    console.log(this.repo.getPlaces(this.activeroute.snapshot.params["id"]))
  this.repo.getPlaces(this.activeroute.snapshot.params["id"])
  this.pId=this.activeroute.snapshot.params["id"]
   return this.repo.getPlaces(this.activeroute.snapshot.params["id"])
   }
  ngOnInit() { }

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
  }

