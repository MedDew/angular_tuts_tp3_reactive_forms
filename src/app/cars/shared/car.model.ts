export class Car
{
    private id?: number;
    private nbSeats?: number;
    private price?: number;
    private weight?: number;
    private horsePower?: number;
    private model : string;
    private brand : string;

    constructor()
    constructor(id : number, nbSeats : number, price : number, weight : number, horsePower : number, model : string, brand : string)
    constructor(id?: number, nbSeats?: number, price?: number, weight?: number, horsePower?: number, model?: string, brand?: string)
    {
        this.id = id;
        this.nbSeats = nbSeats;
        this.price = price;
        this.weight = weight;
        this.horsePower = horsePower;
        this.model = model;
        this.brand = brand;
    }

    getId() : number
    {
        return this.id;
    }
    
    setId(id : number) : void
    {
        this.id = id;
    }
    
    getNbSeats() : number
    {
        return this.nbSeats;
    }
    
    setNbSeats(nbSeats : number) : void
    {
        this.nbSeats = nbSeats;
    }
    
    getPrice() : number
    {
        return this.price;
    }
    
    setPrice(price : number) : void
    {
        this.price = price;
    }
    
    getWeight() : number
    {
        return this.weight;
    }
    
    setWeight(weight : number) : void
    {
        this.weight = weight;
    }
    
    getHorsePower() : number
    {
        return this.horsePower;
    }
    
    setHorsePower(horsePower : number) : void
    {
        this.horsePower = horsePower;
    }
    
    getModel() : string
    {
        return this.model;
    }
    
    setModel(model : string) : void
    {
        this.model = model;
    }
    
    getBrand() : string
    {
        return this.brand;
    }
    
    setBrand(brand : string) : void
    {
        this.brand = brand;
    }
}