import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <app-navbar></app-navbar>
  <app-event-list></app-event-list>
  `

})
export class EventsAppComponent {
  title = 'ng-fundamentals';


}
