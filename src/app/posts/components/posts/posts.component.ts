import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { PostInterface } from "../../types/post.interface";
import { select, Store } from "@ngrx/store";
import { AppStateInterface } from "../../../types/app.state.interface";
import { errorSelector, isLoadingSelector, postsSelector } from "../../store/selectors";
import { getPosts } from "../../store/actions";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  posts$: Observable<PostInterface[]>;

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.posts$ = this.store.pipe(select(postsSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(getPosts());
  }
}
