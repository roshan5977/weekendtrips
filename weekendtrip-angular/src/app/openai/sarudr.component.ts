import { Component, OnInit } from '@angular/core';
import { WeekendRepository } from '../model/weekend.repository';

import { WeekendRestData } from '../model/weekend.restdata';

@Component({
    selector: 'sarudr-openai',
    templateUrl: 'sarudr.component.html'
})

export class SarudrComponent implements OnInit {

    constructor(private datasouce:WeekendRestData) { }

    message=""
    response=""
    msgsend(){
        if(this.message!="" || this.message!=undefined ||this.message!=null){
      console.log(this.message,"msg")
      this.datasouce.getresponse(this.message).subscribe(
        e=>{
            console.log(e.choices[0].message.content)
            this.response=e.choices[0].message.content
        }
      )
        }
    }

    ngOnInit() { }
}