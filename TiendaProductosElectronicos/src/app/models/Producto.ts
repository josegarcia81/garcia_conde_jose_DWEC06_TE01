export class Producto{
    // atributos //
    public id : number;
    public title : string;
    public description : string;
    public price : number;
    public images : Array<string>;

    // constructor //
    constructor(id : number, title : string, description : string, price : number,
        images : Array<string>){
        
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.images = images;
    
    }

}