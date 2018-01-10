export interface IEvent{
  name:string;
  image:string;
  eventType:string;
  start:Date;
  end:Date;
  location:string;
  description:string;
  keyWords:string[];

}

export class Event implements IEvent{
  name:string;
  image:string;
  eventType:string;
  start:Date;
  end:Date;
  location:string;
  description:string;
  keyWords:string[];

  constructor(data? :Partial<IEvent>){
    if(!data){
      this.name = null;
      this.image = null;
      this.eventType = null;
      this.start = new Date();
      this.end = new Date();
      this.location = null;
      this.description = null;
      this.keyWords = new Array<string>();
      return;
    }

    this.name = data.name ? data.name : "";
    this.image = data.image ? data.image : null;
    this.eventType = data.eventType ? data.eventType : null;
    this.start = data.start ? data.start : new Date();
    this.end = data.end ? data.end : new Date();
    this.location = data.location ? data.location : null;
    this.description = data.description ? data.description : null;
    this.keyWords = new Array<string>();
  }
}