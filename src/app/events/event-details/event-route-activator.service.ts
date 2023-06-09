import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate {


  constructor(private eventService: EventService) { }

  router = inject(Router);

  canActivate(route:ActivatedRouteSnapshot){
    const eventExists = !!this.eventService.getEvent(+route.params['id'])

    if (!eventExists)
      this.router.navigate(['/404'])
    return eventExists
  }
}
