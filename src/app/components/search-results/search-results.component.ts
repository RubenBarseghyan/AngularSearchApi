import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, switchMap } from 'rxjs';
import {
  selectCommentsByQuery,
  selectIsQueryInStore,
  selectRecentQuery,
} from '../../store/selectors/search.selectors';
import { CommonModule } from '@angular/common';
import {
  CdkVirtualScrollViewport,
  ScrollingModule,
} from '@angular/cdk/scrolling';
import { MatListModule } from '@angular/material/list';
import { searchComments } from '../../store/actions/search.actions';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [
    CommonModule,
    ScrollingModule,
    MatListModule,
    CdkVirtualScrollViewport,
  ],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent implements OnInit {
  comments$: Observable<any[]>;

  constructor(private readonly store: Store) {
    this.comments$ = this.store.select(selectRecentQuery).pipe(
      switchMap((query) => {
        // First, check if the query exists in the store
        return this.store.select(selectIsQueryInStore(query)).pipe(
          switchMap((queryExists) => {
            if (queryExists) {
              // If the query exists, select the comments from the store
              return this.store.select(selectCommentsByQuery(query));
            } else {
              // If the query doesn't exist, fetch it and store it in the state
              this.store.dispatch(searchComments({ query }));
              // Return an empty array while waiting for the data to be fetched
              return [];
            }
          })
        );
      })
    );
  }

  ngOnInit(): void {}
}
