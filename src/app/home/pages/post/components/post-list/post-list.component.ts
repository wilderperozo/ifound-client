import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IPost} from '../../../../models/post';
import {PostsService} from '../../../../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  $list: Observable<IPost>;

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.$list = this.postsService.list();
  }

}
