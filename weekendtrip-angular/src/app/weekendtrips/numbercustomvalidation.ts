import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";



@Directive({
    selector:'[numValidator]',
    providers:[
        {provide:NG_VALIDATORS, useExisting: NumberCustomValidatorDirective,multi:true }
    ]
})
export class NumberCustomValidatorDirective implements Validator{

// @Input("numVal")numVal:number=0

    validate(fm:FormControl){

     let num:number= +fm.value

     if(num==0 && num != undefined ){
        return {'numValidate':true}
     }
     return null;

    }


}