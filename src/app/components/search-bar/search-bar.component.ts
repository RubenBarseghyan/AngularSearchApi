import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchComments } from '../../store/actions/search.actions';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { selectIsQueryInStore } from '../../store/selectors/search.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  queryExists$: Observable<boolean>;

  constructor(private readonly store: Store) {
    this.queryExists$ = new Observable<boolean>();
  }

  onSearch(event: any) {
    const query = event.target.value;
    if (query.trim().length > 0) {
      this.queryExists$ = this.store.select(selectIsQueryInStore(query));

      this.queryExists$.subscribe((queryExists) => {
        if (!queryExists) {
          this.store.dispatch(searchComments({ query }));
        }
      });
    }
  }
}
