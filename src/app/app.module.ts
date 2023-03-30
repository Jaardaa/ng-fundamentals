import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  EventListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,

} from './events/index'

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { Page404Component } from './errors/page404/page404.component';
import { CreateSessionComponent } from './events/event-details/create-session/create-session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';

declare let toastr: Toastr;


@NgModule({
  declarations: [
    EventsAppComponent,

    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Page404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}
