import { DecimalPipe } from "@angular/common";
import { Brand } from "./Brand";

export class Product{
    id?: number;
    name?: string;
    price?: number ;
    status?: string;
    image?: string;
    yor?: number;
    color?: string;
    info?: string;
    quantity?: number;
    brandid?:number;
    brand?:Brand;
    typeid?:number;
}     
export const products:Product[] =[];