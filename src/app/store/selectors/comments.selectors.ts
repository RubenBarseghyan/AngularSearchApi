import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CommentsState } from '../reducers/comments.reducer';

export const selectCommentsState = createFeatureSelector<CommentsState>('comments');

export const selectAllComments = createSelector(
  selectCommentsState,
  (state) => state.comments
);

export const selectCommentsError = createSelector(
  selectCommentsState,
  (state) => state.error
);
