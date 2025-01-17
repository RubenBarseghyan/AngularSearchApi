import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchComments } from '../../store/actions/search.actions';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  constructor(private readonly store: Store) {}

  onSearch(event: any) {
    this.store.dispatch(searchComments({ query: event.target.value }));
  }
}
