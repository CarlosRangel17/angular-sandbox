import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class AppHttpResponse{
  id: number
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { 
    this.httpClient.get(this.url)
      .subscribe(response => {
        this.posts = <any[]>response;
        console.log(this.posts);
      });
  }

  createPost(input: HTMLInputElement){
    let post = { title: input.value };

    this.httpClient.post<AppHttpResponse>(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response.id;
        console.log(response);
      });
  }
}
