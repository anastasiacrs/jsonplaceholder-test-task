import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/post';
import {NavigationService} from '../../services/navigation.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts: Array<Post>;

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit() {
  }

  openPost(post: Post) {
    this.navigationService.navigateToPostPage(post.id);
  }
}
