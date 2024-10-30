import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { error } from 'node:console';
import { NotFoundError } from '../../common/not-found-error';
import { BadRequestError } from '../../common/bad-request-error';
import { AppError } from '../../common/app-error';
import { AppErrorHandler } from '../../common/app-error-handler';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [HttpClientModule, NgFor],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
  providers: [PostsService]
  
})
export class PostsComponent implements OnInit {
  posts: any[] = []; 

  constructor(private service: PostsService) {
    
  }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (posts) => {
      this.posts = posts;
    },
    });
  }


  // createPost(input: HTMLInputElement) {
  //   let post: any = { title: input.value };
  //   input.value = '';
  //   this.service.createPosts(post).subscribe(
  //     (response) => {
  //     post.id = (response as any).id;
  //     this.posts.splice(0, 0, post);

  //     console.log(response);
  //   },
  //   (error) => {
  //     alert('Error while creating post!');
  //     console.log(error);
  //   })
  // }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    //Optimistic update: Add post to the list before sending the request to server to add.
    this.posts.splice(0, 0, post); 

    input.value = '';
    this.service.create(post).subscribe({
      next: (post) => {
        post.id = post.id;       

      console.log(post);
      },
      error: (error : AppError) => {
        this.posts.splice(0, 1); //Rollback the changes if there is an error

        if(error instanceof BadRequestError)
        {
          alert('Bad request error!');
        } else {
         throw error;
        }
      }
      
    });
  }

  onUpdate(input: any) {
    //Patches only with specific fields
    this.service.patch(input).subscribe( 
      {
        next: (post) => {
          console.log(post);
        }});

    //Patches with whole object
    this.service.put(input).subscribe(
    {
      next: (post) => {
      console.log(post);
    }});
  }

  onRemove(input: any) {
    let index = this.posts.indexOf(input);
    //Optimistic update: Remove post from the list before sending the request to server to delete.
    this.posts.splice(index, 1);

    this.service.delete(input.id).subscribe({ 
        next: () => {         
          
        },
        error: (error : AppError) => {
          this.posts.splice(index, 0, input); //Rollback the changes if there is an error

          if(error instanceof NotFoundError)
          {
            alert('This post has already been deleted!');
          } else {
            throw error;
          }
        }
  });
  }
}
