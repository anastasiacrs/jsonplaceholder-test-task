import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostListResolver} from './resolvers/post-list.resolver';
import {PostResolver} from './resolvers/post.resolver';
import {PostCommentsResolver} from './resolvers/post-comments.resolver';
import {PostPageComponent} from './pages/post-page/post-page.component';
import {PostListPageComponent} from './pages/post-list-page/post-list-page.component';
import {ErrorPageComponent} from './pages/error-page/error-page.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'posts'},
  {path: 'posts', component: PostListPageComponent, resolve: {posts: PostListResolver}},
  {path: 'posts/:postId', component: PostPageComponent, resolve: {post: PostResolver, comments: PostCommentsResolver}},
  {path: 'error', component: ErrorPageComponent},
  {path: '*', redirectTo: 'posts'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
