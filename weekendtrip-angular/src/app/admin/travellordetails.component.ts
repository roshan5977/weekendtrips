import { WeekendRestData } from './../model/weekend.restdata';
import { HttpClient } from '@angular/common/http';
import { Traveller } from './../model/traveller.model';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { WeekendRepository } from '../model/weekend.repository';
import { Passengers } from '../model/passengers.model';
import { DataSource } from '@angular/cdk/collections';
import { saveAs } from 'file-saver';




@Component({
  selector: 'travellor-details',
  templateUrl: 'travellordetails.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TravellorDetailsComponent   {
pass:Passengers[]=[]

  traveller:Traveller[];
  showpassengers=false;
  constructor(private repo :WeekendRepository,private source:WeekendRestData) {
    // this.expandedElement=null
   this.traveller= this.repo.getTravellers()
   console.log(this.repo.travellers)
  }
  proceed(id:number){
  //  this.pass=this.traveller[id].passengers
  console.log(id);
  // console.log(this.traveller[0].passengers.passengerId);
  this.showpassengers=true;
  }
  displayedColumns: string[] = ['travellerId', 'travellerEmail', 'packageName', 'journeyStartingDate','passengers'];




  getPdf(id:number,amount:number){

this.source.getPdf(id,amount).subscribe
(
  (res:any)=>{
    console.log(res)

    // window.open(window.URL.createObjectURL(new Blob([res], { type: "application/octet-stream",endings:"transparent" } )));
saveAs(res,"weekendtrips"+id+".pdf");
  //  let fileName=response.headers.get('content-disposition')?.split(';')[1].split('=')[1];
  //  let blob:Blob=response.body as Blob;
  //  let a =document.createElement('a');
  //  a.download=fileName;
  //  a.href=window.URL.createObjectURL(blob);
  //  a.click();
  }
)

    // this.repo.getpdf(id);
  }
  getfullPdf(){
  this.source.getfullPdf().subscribe(
    (res:any)=>{
      saveAs(res,"weekendtripsAdmin.pdf")
    }
   
  )


  }





}






;
