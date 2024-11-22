import { FormGroup } from "@angular/forms";
import { AbstractControl } from '@angular/forms';

export function ConfirmedValidator(cn:string,mcn:string) {
  return(formgroup:FormGroup)=>{
    const pass=formgroup.controls[cn];
    const cpass=formgroup.controls[mcn];
    if(pass.value!==cpass.value )
    {
      cpass.setErrors({Confirmedvalidator:true})
    }
    else{
      cpass.setErrors(null);
 }
 }
}

export function futureDateValidator(control: AbstractControl): { [key: string]: any } | null {
  const selectedDate = new Date(control.value);
  const currentDate = new Date();

  if (selectedDate < currentDate) {
    return { 'futureDate': true };
  }

  return null;
}
