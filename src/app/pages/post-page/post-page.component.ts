import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../models/post';
import {NavigationService} from '../../services/navigation.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post: Post;
  comments: Array<any>;

  constructor(private route: ActivatedRoute, private navigationService: NavigationService) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
        this.post = data.post;
        this.comments = data.comments;
      }
    );
  }

  goBackToList() {
    this.navigationService.navigateToPostListPage();
  }
}
