import { Directive, forwardRef } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms';

@Directive({
  selector: '[appForbiddenCar]',
  providers : [{provide : NG_VALIDATORS, useExisting : forwardRef(() => ForbiddenCarDirective), multi : true}]
})
export class ForbiddenCarDirective //implements Validator
{

  constructor() 
  { 

  }

  validate(forbiddenBrand : FormControl)
  {
    let forbiddenCarBrand_REGEXP = /Citroën/i;
    return forbiddenCarBrand_REGEXP.test(forbiddenBrand.value) ? {appForbiddenCar : {valid : false} } : null;
  }
}
