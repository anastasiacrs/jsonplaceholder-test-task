import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {NEVER, Observable} from 'rxjs';
import {Post} from '../models/post';
import {PostRestService} from '../services/post-rest.service';
import {catchError} from 'rxjs/operators';
import {NavigationService} from '../services/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<Observable<Post>> {
  constructor(private postRestService: PostRestService,
              private navigationService: NavigationService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Post> {
    return this.postRestService.getPost(route.paramMap.get('postId'))
      .pipe(
        catchError(err => {
          this.navigationService.navigateToErrorPage();
          return NEVER;
        })
      );
  }
}
