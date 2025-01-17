import { createAction, props } from '@ngrx/store';

export const loadComments = createAction('[Comments] Load Comments');
export const loadCommentsSuccess = createAction(
  '[Comments] Load Comments Success',
  props<{ comments: any[] }>()
);
export const loadCommentsFailure = createAction(
  '[Comments] Load Comments Failure',
  props<{ error: string }>()
);
