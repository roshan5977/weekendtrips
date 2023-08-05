import { Component, OnInit, Inject } from '@angular/core';
import { WeekendRepository } from '../model/weekend.repository';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
    selector: 'reset-password',
    templateUrl: 'resetpassword.component.html'
})

export class ResetPasswordComponent implements OnInit {
    

    // form: FormGroup;
    // description:string;
    

    constructor(
        private fb: FormBuilder,private repo:WeekendRepository,
        private dialogRef: MatDialogRef<ResetPasswordComponent>,
        // @Inject(MAT_DIALOG_DATA) public data:any
        ) {

        // this.description = data.description;
    }
    resetform=this.fb.group({
         id:(''),
         oldpassword:[(''),Validators.required],
         newpassword:[(''),Validators.required],
         confirmpassword:[(''),Validators.required]
    })

    ngOnInit() {
        // this.form = this.fb.group({
        //     description: [this.description, []],
        //     ...
        // });
    }
    save() {
        if(this.resetform.invalid){
return 
        }
        console.log(this.resetform.value)
        this.repo.resetpassword(this.resetform.value)
        this.dialogRef.close();
    }

    close() {
        this.dialogRef.close();
    }
    
}
