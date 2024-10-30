import { NotFoundError } from './../common/not-found-error';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { BadRequestError } from '../common/bad-request-error';
import { Follower } from '../components/my-followers/my-followers.component';

@Injectable({
  providedIn: 'root'
})
export class DataService { 
  
constructor(@Inject('url')private url: string, private httpClient: HttpClient) { }


getAll(){
    return this.httpClient.get(this.url).pipe(
        map((response: any) => response), 
        catchError(this.handleError));
}

get(id : any, page: any){
  return this.httpClient.get(this.url + '/' + id + '/'+ page).pipe(
      map((response: any) => response), 
      catchError(this.handleError));
}

create(resource: any){
    return this.httpClient.post(this.url, resource).pipe(
        map((response: any) => response),
        catchError(this.handleError));
}

  patch(resource: any){
    return this.httpClient.patch(this.url + '/' + resource.id, { isRead: true })
    .pipe(
        map((response: any) => response),
        catchError(this.handleError));
  }

  put(resource: any){
    return this.httpClient.put(this.url + '/' + resource.id, { resource })
    .pipe(map((response: any) => response),
        catchError(this.handleError));
  }

  delete(resourceId: any){
    return this.httpClient.delete(this.url + '/' + resourceId)
      .pipe(
        map((response: any) => response),
        catchError(this.handleError)
      )
    }

    deleteNew(resourceId: any){
        //Observerabales are lazy, they only execute when we subscribe to them.
        //Doesn't get executed until we subscribe to it.
        //return this.httpClient.delete(this.url + '/' + resourceId);

        //Converts the observable to a promise.
        //Executes the service call immediately.
        return this.httpClient.delete(this.url + '/' + resourceId).toPromise();
          
        }

    handleError(error: Response){
      if(error.status === 400)
        return throwError(new BadRequestError());

      if(error.status === 404)
            return throwError(new NotFoundError());

      return throwError(new AppError(error));
    }
  
}
