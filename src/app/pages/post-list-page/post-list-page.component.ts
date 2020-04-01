import {Component, OnInit} from '@angular/core';
import {Post} from '../../models/post';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-list-page',
  templateUrl: './post-list-page.component.html',
  styleUrls: ['./post-list-page.component.scss']
})
export class PostListPageComponent implements OnInit {

  posts: Array<Post>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.posts = this.route.snapshot.data.posts;
  }

}
