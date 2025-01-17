import { createReducer, on } from '@ngrx/store';
import { searchCommentsSuccess, searchCommentsFailure } from '../actions/search.actions';
// import { Comment } from '../models/comment.model';

export interface SearchState {
  comments: any[];
  loading: boolean;
  error: string | null;
}

export const initialState: SearchState = {
  comments: [],
  loading: false,
  error: null
};

export const searchReducer = createReducer(
  initialState,
  on(searchCommentsSuccess, (state, { comments }) => ({
    ...state,
    comments,
    loading: false
  })),
  on(searchCommentsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);
