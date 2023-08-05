import { Traveller } from "./traveller.model";

export  class Passengers{
  constructor(
    public passengerId:number,
    public passengerName:string,
    public passengerAge:number,
    public passengerGender:string,
    public passengerAadhar:string,
  ){}
}
