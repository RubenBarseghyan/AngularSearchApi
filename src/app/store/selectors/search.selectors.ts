import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SearchState } from '../reducers/search.reducer';

export const selectSearchState = createFeatureSelector<SearchState>('search');

export const selectCommentsByQuery = (query: string) =>
  createSelector(
    selectSearchState,
    (state: SearchState) => state.comments[query] || []
  );

export const selectRecentQuery = createSelector(
  selectSearchState,
  (state: SearchState) =>
    state.recentQueries[state.recentQueries.length - 1] || ''
);

export const selectRecentQueries = createSelector(
  selectSearchState,
  (state: SearchState) => state.recentQueries
);

export const selectIsQueryInStore = (query: string) =>
  createSelector(
    selectSearchState,
    (state: SearchState) =>
      !!state.comments[query] && state.comments[query].length > 0
  );
