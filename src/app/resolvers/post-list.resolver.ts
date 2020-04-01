import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {NEVER, Observable} from 'rxjs';
import {Post} from '../models/post';
import {PostRestService} from '../services/post-rest.service';
import {catchError} from 'rxjs/operators';
import {NavigationService} from '../services/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class PostListResolver implements Resolve<Observable<Array<Post>>> {
  constructor(private postRestService: PostRestService,
              private navigationService: NavigationService) {
  }

  resolve(): Observable<Array<Post>> {
    return this.postRestService.getPosts().pipe(
      catchError(err => {
        this.navigationService.navigateToErrorPage();
        return NEVER;
      })
    );
  }
}
