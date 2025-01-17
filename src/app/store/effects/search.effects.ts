import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, debounceTime, map, switchMap } from 'rxjs/operators';
import { SearchService } from '../../services/search.service';
import {
  searchComments,
  searchCommentsSuccess,
  searchCommentsFailure,
} from '../actions/search.actions';

@Injectable()
export class SearchEffects {
  searchComments$;
  constructor(private readonly actions$: Actions, private readonly searchService: SearchService) {
    this.searchComments$ = createEffect(() =>
      this.actions$.pipe(
        ofType(searchComments),
        debounceTime(500),
        switchMap((action) =>
          this.searchService.search(action.query).pipe(
            map((comments) => searchCommentsSuccess({ comments })),
            catchError((error) => [searchCommentsFailure({ error })])
          )
        )
      )
    );
  }
}



