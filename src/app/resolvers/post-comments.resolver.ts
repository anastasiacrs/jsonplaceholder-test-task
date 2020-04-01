import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {NEVER, Observable} from 'rxjs';
import {Comment} from '../models/comment';
import {PostRestService} from '../services/post-rest.service';
import {catchError} from 'rxjs/operators';
import {NavigationService} from '../services/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class PostCommentsResolver implements Resolve<Observable<Array<Comment>>> {
  constructor(private postRestService: PostRestService,
              private navigationService: NavigationService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Array<Comment>> {
    return this.postRestService.getPostComments(route.paramMap.get('postId'))
      .pipe(
        catchError(err => {
          this.navigationService.navigateToErrorPage();
          return NEVER;
        })
      );
  }
}
