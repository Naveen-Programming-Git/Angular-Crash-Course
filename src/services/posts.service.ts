import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends DataService {
  
  constructor(httpClient: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', httpClient);
    // Rest of the constructor code...
  } 
  
}
