import { Place } from './place.model';
import { City } from "./city.model";


export class Packages{
  constructor(
    public packageId:number,
    public packageName:string,
    public packageCategory:string,
    public packageDescription:string,
    public packagePrice:number,
    public packageStatus:string,
    public pimageUrl:string,
    public places:Place[]
  ){

  }
}
