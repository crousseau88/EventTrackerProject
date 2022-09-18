import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Bean } from 'src/models/bean';

@Injectable({
  providedIn: 'root'
})
export class BeansService {
  private baseUrl = 'http://localhost:8082/'; // adjust port to match server
  private url = this.baseUrl + 'api/beans'; // change 'Beans' to your API path
  constructor(private http: HttpClient) { }



  index() {
    return this.http.get<Bean[]>(this.url).pipe(
     catchError((err: any) => {
       console.log(err);
       return throwError(
         () => new Error (
           'beanService.index():error retrieving Bean list' + err
         )
       );
     })
    );
   }


  create(bean: Bean) {
    return this.http.post<Bean>(this.url, bean).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error (
            'beanService.create():error creating Bean' + err
          )
        );
      })
    );
     }

     update(bean: Bean) {
      return this.http.put<Bean>(this.url + '/' + bean.id, bean).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError(
            () => new Error (
              'beanService.update():error creating Bean' + err
            )
          );
        })
      );
    }
    destroy(id: number) {
      return this.http.delete<void>(this.url + '/' + id).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError(
            () => new Error (
              'beanService.delete():error deleting Bean' + err
            )
          );
        })
      );
    }
}
