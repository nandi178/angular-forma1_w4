import { Component } from '@angular/core';
import { Result, eredmenyek } from './results';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-forma1';
  aktualisEredmeny = eredmenyek;
  selectedResultIndex: number | undefined;
}
