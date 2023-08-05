


export class Payment{
    constructor(
      public   paymentId:number,
      public  paymentStatus:string,
      public  transactionId:string,
      public  orderId:number,
      public  amount:number,
    ){
  
    }
  }
  