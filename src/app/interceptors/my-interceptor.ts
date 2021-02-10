import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class MyInterceptor{

  intercept(req: any, next: any): Observable<any> {
    
    console.log(req);

    return next.handle(req);
  }
}