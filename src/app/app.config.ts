import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { SearchEffects } from './store/effects/search.effects';
import { searchReducer } from './store/reducers/search.reducer';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ search: searchReducer }),
    provideEffects(SearchEffects),
    provideHttpClient(),
  ],
};
