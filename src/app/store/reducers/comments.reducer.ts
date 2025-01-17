import { createReducer, on } from '@ngrx/store';
import { loadComments, loadCommentsSuccess, loadCommentsFailure } from '../actions/comments.actions';

export interface CommentsState {
  comments: any[];
  error: string | null;
}

export const initialState: CommentsState = {
  comments: [],
  error: null,
};

export const commentsReducer = createReducer(
  initialState,
  on(loadComments, (state) => ({
    ...state,
    error: null,
  })),
  on(loadCommentsSuccess, (state, { comments }) => ({
    ...state,
    comments,
  })),
  on(loadCommentsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
