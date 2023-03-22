import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'src/app/common/toastr.service';
import { EventService } from '../shared/event.service';


@Component({
  selector: 'app-event-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
        <div class="row">
          <div *ngFor="let event of events" class="col-md-5" >
            <app-event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></app-event-thumbnail>
          </div>

         </div>
    </div>
  `,
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  events!: any;
  constructor(
    private eventService: EventService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName: any) {
    this.toastr.success(eventName)
  }

}
