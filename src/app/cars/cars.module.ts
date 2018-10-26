import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { CarCreateComponent } from '../car-create/car-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForbiddenCarDirective } from './shared/forbidden-car.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [CarsComponent, CarCreateComponent, ForbiddenCarDirective], 
  exports : [CarsComponent, CarCreateComponent],
  providers : [ForbiddenCarDirective]
})
export class CarsModule { }
