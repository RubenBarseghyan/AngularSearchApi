import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SearchState } from '../reducers/search.reducer';

export const selectSearchState = createFeatureSelector<SearchState>('search');

export const selectSearchComments = createSelector(
  selectSearchState,
  (state: SearchState) => state.comments
);

export const selectSearchError = createSelector(
  selectSearchState,
  (state: SearchState) => state.error
);
