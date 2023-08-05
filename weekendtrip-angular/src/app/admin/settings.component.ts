import { Component, OnInit } from '@angular/core';
import { Register } from '../model/login.model';
import { WeekendRepository } from '../model/weekend.repository';
import { ThemePalette } from '@angular/material/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
    selector: 'admin-settings',
    templateUrl: 'settings.component.html'
})

export class SettingsComponent implements OnInit {
userList:Register[]=[]
color: ThemePalette = 'accent';

  disabled = false;

    constructor( private repo:WeekendRepository) { 
        console.log("settings",this.repo.users)
       this.userList= this.repo.users;

       this.userList.forEach(e=>
        {
            if(e.role=='user'){
                e.check=false;
               console.log("user")
             }
             else if(e.role=='admin'){
                e.check=true;
                console.log("admin")
             }
             else{
                console.log("else")
             }
        }
       )
  
     
    }

    get users(){
        return this.userList;
    }
    onToggleChange(emailId:string){
        
        console.log("toggle",emailId)
        this.repo.changeStatusOfUserAdmin(emailId)
       console.log( this.userList.find(e=>e.email==emailId)?.userId)
    }

    ngOnInit() { }
}