import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectSearchComments } from '../../store/selectors/search.selectors';
import { CommonModule } from '@angular/common';
import {
  CdkVirtualScrollViewport,
  ScrollingModule,
} from '@angular/cdk/scrolling';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [
    CommonModule,
    ScrollingModule,
    MatListModule,
    CdkVirtualScrollViewport,
  ],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
})
export class SearchResultsComponent implements OnInit {
  comments$: Observable<any[]>;

  constructor(private readonly store: Store) {
    this.comments$ = this.store.select(selectSearchComments);
  }

  ngOnInit(): void {}
}
