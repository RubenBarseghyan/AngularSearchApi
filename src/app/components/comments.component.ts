import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadComments } from '../store/actions/comments.actions';
import { selectAllComments, selectCommentsError } from '../store/selectors/comments.selectors';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './comments.component.html',
})
export class CommentsComponent implements OnInit {
  comments$: Observable<any[]>;
  error$: Observable<string | null>;

  constructor(private readonly store: Store) {
    this.comments$ = store.select(selectAllComments);
    this.error$ = store.select(selectCommentsError);
  }

  ngOnInit(): void {
    this.store.dispatch(loadComments());

    this.comments$.subscribe((comments) => {
      console.log(comments);
    });

    this.error$.subscribe((error) => {
      console.log(error);
    });
  }
}
