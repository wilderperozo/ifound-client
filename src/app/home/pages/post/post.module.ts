import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostListComponent} from './components/post-list/post-list.component';
import {PostNewComponent} from './components/post-new/post-new.component';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from './post.component';
import {HttpClientModule} from '@angular/common/http';
import {PostSearcherComponent} from './components/post-list/components/post-searcher/post-searcher.component';

const route: Routes = [
  {
    path: '', component: PostComponent, children: [
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      },
      {
        path: 'list', component: PostListComponent
      },
      {
        path: 'new', component: PostNewComponent
      }
    ]
  }
];

@NgModule({
  declarations: [PostListComponent, PostNewComponent, PostComponent, PostSearcherComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    HttpClientModule,
  ]
})
export class PostModule {
}
