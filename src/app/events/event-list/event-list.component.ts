import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../shared/event.service';
import { IEvent } from '../shared/index';


@Component({
  selector: 'app-event-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
        <div class="row">
          <div *ngFor="let event of events" class="col-md-5" >
            <app-event-thumbnail [event]="event"></app-event-thumbnail>
          </div>

         </div>
    </div>
  `,
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  events!: IEvent[];
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

}
