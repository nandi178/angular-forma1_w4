import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Result, results } from '../results';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {
  @Input() results: Result[] = [];
  @Input() selectedResultIndex: number | undefined;
  @Output() selectedResultIndexChange: EventEmitter<number> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < results.length; index++) {
      this.results.push(results[index]);
    }
  }

  selected(index: number) {
    this.selectedResultIndexChange.emit(index);
  }
}
