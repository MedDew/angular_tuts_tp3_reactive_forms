import { Component, OnInit,  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Car } from '../cars/shared/car.model';
import { CarServiceService } from '../car-service.service';
import { ForbiddenCarDirective } from '../cars/shared/forbidden-car.directive';
import { ForbiddenModel } from './car-model-validation';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit 
{
  carForm : FormGroup;
  car : Car;
  createdCar : Car;
  isCarCreated : boolean;
  submitted : boolean;
  constructor(private formBuilder : FormBuilder, private carService : CarServiceService, private forbiddenCarDirective : ForbiddenCarDirective) 
  { 
    this.carForm = this.formBuilder.group({
      brand : ["", [Validators.required, this.forbiddenCarDirective.validate] ],//appForbiddenCar
      model : ["", [Validators.required, Validators.minLength(2), ForbiddenModel] ]
    });
  }

  ngOnInit() 
  {
    this.car = new Car();
    this.submitted = false;
    this.isCarCreated = false;
  }

  onSubmit() : void
  {
    this.submitted = true;
    console.log("POSTED VALUES : "+this.carForm.value);
    for(let p in this.carForm.value)
    {
      console.log("property : "+p+" => "+this.carForm.value[p]);
    }
    console.log("Brand : "+this.carForm.value["brand"]);
    console.log("Model : "+this.carForm.value["model"]);
    /*
    this.car.setBrand(this.carForm.value["brand"]);
    this.car.setModel(this.carForm.value["model"]);
    this.car.setHorsePower(0);
    this.car.setNbSeats(0);
    this.car.setPrice(0);
    this.car.setWeight(0);
    this.car.setId(0);
    */
  if(this.carForm.valid)
  {
    this.carService.postCar(this.carForm.value)
    /*.pipe(
      map(
          (resp : Car) => {
            let car : Car;
            console.log("CAR : "+car);
            const filteredKey = ["value"];
            const filteredResponse = Object.keys(resp)
                                     .filter(k => filteredKey.includes(k))
                                     .reduce(
                                              function(obj, key)
                                              {
                                                // console.log("key : "+key);
                                                obj[key] = resp[key];
                                                return obj;
                                              }, 
                                              {}
                                      );
            
            for(let p in filteredResponse)
            {
              console.log("filteredResponse : "+p+" => "+filteredResponse[p]);
            }
            for(let p in resp)
            {
              console.log("p : "+typeof p);
              //console.log("p : "+p instanceof string);
              if(p == "value")
              {
                console.log("p : "+p+" => "+resp[p]);
                car = new Car(resp["id"], resp["nbSeats"], resp["price"], resp["weight"], resp["horsePower"], resp["model"], resp["brand"]);
                //car = resp[p];
                console.log("TYPEOF CAR : "+typeof car);
                console.log("TYPEOF CAR : "+typeof car);
                console.log("INSTANCE OF CAR : ");
                console.log(Object.prototype.toString.call(car));
              }
            }
            return car;
          }
        )
    )*/
    .subscribe(
      (response : any) => {
        const car = Object.assign(response, new Car(response.id, response.nbSeats, response.price, response.weight, response.horsePower, response.model, response.brand));
        console.log(car);
        console.log(car instanceof Car);
        //err => console.log(err)
        for(let p in response)
        {
          console.log("p : "+p+" => "+response[p]);
        }
        this.carForm.reset();
        this.createdCar = car;
        this.isCarCreated = true;
      }
    );
  }

  }
}
