import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { commentsReducer } from './store/reducers/comments.reducer';
import { CommentsEffects } from './store/effects/comments.effects';
import { routes } from './app.routes';
import { CommentsComponent } from './components/comments.component';
import { provideEffects } from '@ngrx/effects';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ comments: commentsReducer }),
    provideEffects(CommentsEffects),
    provideHttpClient(),
    CommentsComponent,
  ],
};
