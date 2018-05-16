import {
  IEventCategory,
  EventCategoryList
} from "./../../models/event-category";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ResponseContentType } from "@angular/http";

@Injectable()
export class EventCategoryService {
  constructor(private httpClient: HttpClient) {}
  public getCategoryIcon(category: IEventCategory) {
    const promise = new Promise<string>(resolve=>{
      const baseUrl = '/assets/images/markers';
      const url = `${baseUrl}/plop.png`;
      this.httpClient
        .get(url, {
          responseType: "blob"
        })
        .subscribe(image => {
          if(image){
            resolve(url);
          }else{
            resolve(baseUrl+"/Default.png");
          }
        },(error=>{
          if(error.status == 404){
            resolve(baseUrl+"/Default.png");
          }
        }));
    });
   
    return promise;
  }

  public getCategoryList(): Array<IEventCategory> {
    return EventCategoryList;
  }
}
