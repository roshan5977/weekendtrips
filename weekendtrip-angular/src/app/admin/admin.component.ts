import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { WeekendRepository } from '../model/weekend.repository';
import { MatDialog } from '@angular/material/dialog';
import { AddCityComponent } from './addnewcity.component';
import { AddPackComponent } from './addnewpack.component';
import { AddPlaceComponent } from './addplace.component';
import { AuthorizationComponent } from './authorization.component';

import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION,
} from "ngx-ui-loader";

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "red",
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.rectangleBounce, // background spinner type
  fgsType: SPINNER.chasingDots, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
};

@Component({
  selector:'admin',
    templateUrl: 'admin.component.html',
    styleUrls:['admin.component.css']
})

export class AdminComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );



    constructor(private breakpointObserver: BreakpointObserver,private overlay:OverlayContainer,
      private repository:WeekendRepository,
      private _dialog:MatDialog

      ) {
        this.repository.showHeader=false;
        this.repository.showFooter=false;
    }

  openAddCity(){
    this._dialog.open(AddCityComponent)
  }
  loginPopUp(){
    this._dialog.open(AuthorizationComponent)
  }
  openAddPack(){
    this._dialog.open(AddPackComponent)
  }
  openAddPlace(){
    this._dialog.open(AddPlaceComponent)
  }



    toggleControl=new FormControl(false)
    @HostBinding('class') className='';
    darkClassName='theme-dark';
    lightClassName='theme-light';

    ngOnInit(){
      this.toggleControl.valueChanges.subscribe((darkMode)=>{
        this.className=darkMode ? this.darkClassName :this.lightClassName;
        if(darkMode){
         this.overlay.getContainerElement().classList.add(this.darkClassName)
        }
        else{
          this.overlay.getContainerElement().classList.remove(this.darkClassName)
        }
      })
    }
  get show(){
    // console.log("call me")
    // console.log(this.repository.show)
    return this.repository.show
  }
  logout(){
    this.repository.show=false;
  }



}
// template:'<div>placeholder for admin</div>'

