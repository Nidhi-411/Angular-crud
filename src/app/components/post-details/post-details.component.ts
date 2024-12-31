import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-details',
  standalone: true,
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
  imports: [RouterLink], // Import any necessary modules if needed
})
export class PostDetailsComponent implements OnInit {
  post: any;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getPostDetails(+id); // Convert id to number
    }
  }

  getPostDetails(id: number): void {
    this.postService.getPostById(id).subscribe((data) => {
      this.post = data;
    });
  }
}
