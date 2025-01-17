import { createReducer, on } from '@ngrx/store';
import { searchCommentsSuccess, searchCommentsFailure, saveSearchQuery } from '../actions/search.actions';

export interface SearchState {
  comments: { [query: string]: Comment[] };
  recentQueries: string[];
  error: string | null; 
}

export const initialState: SearchState = {
  comments: {},
  recentQueries: [],
  error: null,
};

export const searchReducer = createReducer(
  initialState,
  on(searchCommentsSuccess, (state, { query, comments }) => ({
    ...state,
    comments: { ...state.comments, [query]: comments },
  })),
  on(searchCommentsFailure, (state, { error }) => ({
    ...state,
    error, 
  })),
  on(saveSearchQuery, (state, { query }) => ({
    ...state,
    recentQueries: [...state.recentQueries, query], 
  }))
);
