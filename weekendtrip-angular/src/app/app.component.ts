import { Component } from '@angular/core';
import { WeekendRepository } from './model/weekend.repository';
import {OnInit} from '@angular/core'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SarudrComponent } from './openai/sarudr.component';
import { bottom } from '@popperjs/core';
@Component({
  selector: 'city-app',
  templateUrl:'app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent implements OnInit{
  title = 'WeekEndTrips';
  isLoggedin:boolean=false
  constructor(public repo:WeekendRepository,private dialog: MatDialog){
    this.isLoggedin = this.repo.isloggedin()
    console.log(this.isLoggedin)
  }
  ngOnInit():void{
    this.isLoggedin = this.repo.isloggedin()
    this.repo.loginStatusSubject.asObservable().subscribe(data=>{
      console.log(this.repo.isloggedin())
       this.isLoggedin = this.repo.isloggedin()
       
    })
    }





    sarudr(){
      const dialogConfig = new MatDialogConfig();
    // dialogConfig.
    dialogConfig.width='300px',
    dialogConfig.maxHeight='60%',
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.backdropClass="blur(4px)"
    dialogConfig.panelClass="blur"


  dialogConfig.position={
    'top':'10%',
    'left':'70%',
    'bottom':'20%',
    'right':'10%'
  }

    this.dialog.open(SarudrComponent, dialogConfig);
    }
}
  // template:"<div>placeholder root</div>"
