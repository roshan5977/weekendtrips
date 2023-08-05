import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { WeekendRepository } from '../model/weekend.repository';
import { Router } from '@angular/router';

@Component({
    selector: 'update-user',
    templateUrl: 'UpdateUser.component.html'
})

export class UpdateUserComponent implements OnInit {

    constructor(
        private fb: FormBuilder,private repo:WeekendRepository,
        private dialogRef: MatDialogRef<UpdateUserComponent>,
        // @Inject(MAT_DIALOG_DATA) public data:any
        ) {

        // this.description = data.description;
    }
    updateform=this.fb.group({
         id:(''),
         oldpassword:[(''),Validators.required],
         newpassword:[(''),Validators.required],
         confirmpassword:[(''),Validators.required]
    })

   
    save() {
        console.log(this.updateform.value)
        this.dialogRef.close();
    }

    close() {
        this.dialogRef.close();
    }
    

    
    ngOnInit() { }
}