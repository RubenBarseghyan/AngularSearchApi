import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {
  loadComments,
  loadCommentsSuccess,
  loadCommentsFailure,
} from '../actions/comments.actions';

@Injectable()
export class CommentsEffects {
  loadComments$; //declare here
  constructor(
    private readonly actions$: Actions,
    private readonly http: HttpClient
  ) {
    this.loadComments$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadComments),
        switchMap(() =>
          this.http
            .get<any[]>('https://jsonplaceholder.typicode.com/comments')
            .pipe(
              map((comments) => loadCommentsSuccess({ comments })),
              catchError((error) =>
                of(loadCommentsFailure({ error: error.message }))
              )
            )
        )
      )
    );
  }
}
