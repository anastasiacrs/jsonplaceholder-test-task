import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Post} from '../models/post';
import {Comment} from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class PostRestService {

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(environment.postApi + '/posts');
  }

  getPost(postId: number | string): Observable<Post> {
    return this.http.get<Post>(`${environment.postApi}/posts/${postId}`);
  }

  getPostComments(postId: number | string): Observable<Array<Comment>> {
    return this.http.get<Array<Comment>>(`${environment.postApi}/posts/${postId}/comments`);
  }
}
