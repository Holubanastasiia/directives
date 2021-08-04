import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  showIds = false;

  constructor(public postsService: PostsService, public rout: ActivatedRoute) {}

  ngOnInit() {
    this.rout.queryParams.subscribe((params: Params) => {
      this.showIds = !!params.showIds;
    });
  }
}
