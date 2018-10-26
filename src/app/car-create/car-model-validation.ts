import { AbstractControl } from "@angular/forms";

export function ForbiddenModel(c : AbstractControl)
{
    let BRAND_REGEXP = /brand/i;
    if(BRAND_REGEXP.test(c.value))
    {
        return { validBrand : true};
    }
    return null;
}