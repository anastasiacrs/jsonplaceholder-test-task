import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) {
  }

  navigateToPostListPage() {
    return this.router.navigate(['posts']);
  }

  navigateToPostPage(postId: number | string): Promise<boolean> {
    return this.router.navigate(['posts', postId]);
  }

  navigateToErrorPage() {
    return this.router.navigate(['error']);
  }
}
