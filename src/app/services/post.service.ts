
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
 
  // agr less record chahiye to -- 10 records
 // private apiUrl = 'https://jsonplaceholder.typicode.com/users/1/posts';
  constructor(private http: HttpClient) {}

  // Get all posts
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get a single post by ID
  getPostById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Create a new post
  createPost(post: any): Observable<any> {
    return this.http.post(this.apiUrl, post);
  }

  // Update a post by ID
  updatePost(id: number, post: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, post);
  }

  // Delete a post by ID
  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
