import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store/reducers";
import { EffectsModule } from "@ngrx/effects";
import { PostsEffects } from "./store/effects";


@NgModule({
  declarations: [
    PostsComponent
  ],
  exports: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    StoreModule.forFeature("posts", reducers),
    EffectsModule.forFeature([PostsEffects])
  ]
})
export class PostsModule { }
