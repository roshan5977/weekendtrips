export class Response{
    constructor(
      public id:number,
      public object:string,
      public model:string,
      public created:Date,
      public choices:Choices[]
    ){}
  }
  export class Choices{
    constructor(
      public message:Message
    ){}
  } 
  export class Message{
    constructor(
      public content:string
    ){}
  } 