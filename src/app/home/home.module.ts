import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeHeaderComponent} from './components/home-header/home-header.component';
import {HttpClientModule} from '@angular/common/http';
import {PostsService} from './services/posts.service';

const route: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: 'post', loadChildren: () => import('./pages/post/post.module').then(m => m.PostModule)
      }
    ]
  },
];


@NgModule({
  declarations: [HomeComponent, HomeHeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
  ],
  providers: [
    PostsService
  ]
})
export class HomeModule {
}
