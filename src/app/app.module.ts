import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsModule } from './cars/cars.module';
import { CarsComponent } from './cars/cars.component';
// import { ReactiveFormsModule } from '@angular/forms';
import { BASE_ENDPOINT_CONFIG } from './app.config';
//Deprecated : DOES NOT WORK WITH rxjs/add/operator/map
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    //CarsComponent,
    // ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    CarsModule,
    //HttpModule
    HttpClientModule
  ],
  providers: [{provide : BASE_ENDPOINT_CONFIG, useValue : BASE_ENDPOINT_CONFIG.API_URL}],
  bootstrap: [AppComponent],
})
export class AppModule 
{ 

}
