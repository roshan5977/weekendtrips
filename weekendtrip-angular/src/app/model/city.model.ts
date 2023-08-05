import { Packages } from './packages.model';

export class City{
  constructor(
    public cityId :number,
    public cityName:string,
    public status:string,
    public cimageUrl:string,
    public packages:Packages[],
  ){}

}
