import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="addNewPost()">Add Post</button>
  `
})
export class AppComponent {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  addNewPost() {
    const newPost = { title: 'Arya' };

    this.http.post(this.apiUrl, newPost).subscribe(
      response => {
        console.log('Post created:', response);
      },
      error => {
        console.error('Error creating post:', error);
      }
    );
  }
}
