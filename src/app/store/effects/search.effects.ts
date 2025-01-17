import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  debounceTime,
  switchMap,
  distinctUntilChanged,
  map,
  concatMap,
  filter,
} from 'rxjs/operators';
import {
  searchComments,
  searchCommentsSuccess,
  searchCommentsFailure,
  saveSearchQuery,
} from '../actions/search.actions';
import { SearchService } from '../../services/search.service';

@Injectable()
export class SearchEffects {
  searchComments$;
  constructor(
    private readonly actions$: Actions,
    private readonly searchService: SearchService
  ) {
    this.searchComments$ = createEffect(() =>
      this.actions$.pipe(
        ofType(searchComments),
        debounceTime(1000),
        distinctUntilChanged(),
        filter((action) => action.query.trim() !== ''),
        switchMap((action) => {
          return this.searchService.search(action.query).pipe(
            concatMap((comments) => {
              if (comments.length > 0) {
                return [
                  searchCommentsSuccess({ query: action.query, comments }),
                  saveSearchQuery({ query: action.query }),
                ];
              }
              return [searchCommentsFailure({ error: 'No results' })];
            }),
            catchError((error) => [searchCommentsFailure({ error })])
          );
        })
      )
    );
  }
}
