import { routes } from './../../app.routes';
import { PostFormComponent } from './../post-form/post-form.component';

import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ToastService } from '../../services/toast.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Route } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  imports: [
   CommonModule,
    FormsModule, PostFormComponent // Important: Import FormsModule for ngModel
  ],
})
export class PostComponent implements OnInit {
  posts: any[] = [];
  post: any = {};
  showForm: boolean = false;

  constructor(private postService: PostService , private toastService: ToastService, private router:Router) {}
 
  ngOnInit(): void {
    this.getPosts();
  }

  // Fetch all posts
  getPosts(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  // Fetch a single post (for updating)
  getPostById(event: Event,id: number): void {
    event.stopPropagation();
    this.postService.getPostById(id).subscribe((data) => {
      this.post = data;
      this.showForm = true;
    });
  }

  // Add or update a post
  // savePost(): void {
  //   if (this.post.id) {
  //     // Update post
  //     this.postService.updatePost(this.post.id, this.post).subscribe(() => {
  //       this.getPosts();
  //       this.resetForm();
  //     });
  //   } else {
  //     // Create post
  //     this.postService.createPost(this.post).subscribe(() => {
  //       this.getPosts();
  //       this.resetForm();
  //     });
  //   }
  // }

  handleSave(post: any) {
    if (post.id) {
        // Update post
       this.postService.updatePost(this.post.id, this.post).subscribe(() => {
       this.getPosts();
         this.resetForm();
       });
       this.toastService.showToast('Post updated successfully!');
    }else{
       // Create post
       this.postService.createPost(this.post).subscribe(() => {
         this.getPosts();
          this.resetForm();
       });
       this.toastService.showToast('Post Created successfully!');
    }
  }
  // Delete a post
  deletePost(event: Event,id: number): void {
    event.stopPropagation();
    this.postService.deletePost(id).subscribe(() => {
      this.getPosts();
    });
    this.toastService.showToast('Post Deleted successfully!');
  }

  // Reset form
  resetForm(): void {
    this.post = {};
    this.showForm = false;
  }
  handleCancel() {
    this.showForm = false;
  }
  navigateToPost(id: number): void {
    this.router.navigate(['/posts', id]);
  }
}

