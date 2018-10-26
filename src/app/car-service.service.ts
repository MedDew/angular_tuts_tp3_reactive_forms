import { Injectable, Inject } from '@angular/core';
//Http deprecated in angular 6
import { Http , RequestOptions, Headers, Response } from '@angular/http';
import { BASE_ENDPOINT_CONFIG } from './app.config';
import { Car } from './cars/shared/car.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService 
{

  constructor(private http : HttpClient, @Inject(BASE_ENDPOINT_CONFIG) private apiURL : string)
  { 

  }

  postCar(car : Car) :  Observable<Car>
  {
    /*
    /!\ TO BE USED WITH @angular/http/Http
    let headers = new Headers(
      { 
        "Accept" : "application/json",
        "Content-Type" : "application/json",
      }
    );
    let requestOptions = new RequestOptions({headers : headers});
    */
    let httpOptions = {
      headers : new HttpHeaders(
        {
          "Accept":"application/json",
          "Content-Type":"application/json",
        }
      ),
      
    };
    console.log("DATA sent : "+JSON.stringify(car));
    // /!\ TO BE USED WITH @angular/http/Http
    // return this.http.post(`${this.apiURL}/cars`, JSON.stringify(car), requestOptions);
    // /!\ TO BE USED WITH @angular/common/HttpClient
    return this.http.post<Car>(`${this.apiURL}/cars`, JSON.stringify(car), {
      headers : new HttpHeaders(
        {
          "Accept":"application/json",
          "Content-Type":"application/json",
        }
      ),
      responseType : "json"
    })
           .pipe(
             map(
              /*function(res){
              console.log("res : "+res);
              for(let p in res)
              {
                console.log("p ==> "+p+" => "+res[p]);
              }
              const allowedKey = ["value"];
              const filteredResponse = Object.keys(res)
                                       .filter( k => allowedKey.includes(k))
                                       .reduce((acc, key) => acc[key] = res[key], {});
              for(let p in filteredResponse)
              {
                console.log("FILTERING : "+p+" => "+filteredResponse[p]+" | "+filteredResponse.p);
              }
              return new Car(filteredResponse.id, filteredResponse.nbSeats, filteredResponse.price, filteredResponse.weight, filteredResponse.horsePower, filteredResponse.model, filteredResponse.brand);
             }*/
              (result : any) => result.value//Object.assign(result.value, new Car()) 
             )
           );

  }
}
