
export class Login{
  constructor(
    public email:string,
    public password:string,
  ){}
}
export class Register{
   public check :boolean=true
  public userId:number=0
  constructor(
    public firstname:string,
    public lastname:string,
    public email:string,
    public password:string,
    public role:string,
    public status:string,
    public mobileNumber?:number,
    public gender?:string,
    public age?:number,

  ){}
}
  export class Reset{
    constructor(
      public id:number,
      public oldpassword:string,
      public newpassword:string,

      ){}
  }

