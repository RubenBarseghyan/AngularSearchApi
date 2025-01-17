import { createAction, props } from '@ngrx/store';

export const searchComments = createAction(
  '[Search] Search Comments',
  props<{ query: string }>()
);

export const searchCommentsSuccess = createAction(
  '[Search] Search Comments Success',
  props<{ query: string, comments: any[] }>()
);

export const searchCommentsFailure = createAction(
  '[Search] Search Comments Failure',
  props<{ error: any }>()
);

export const saveSearchQuery = createAction(
  '[Search] Save Search Query',
  props<{ query: string }>()
);
