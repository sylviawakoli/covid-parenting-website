import { Injectable } from '@angular/core';

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class WebAnalyticsService {

  constructor() { }

  public eventEmitter(
    eventName: string,
    eventCategory: string = null,
    eventLabel: string = null,
    eventValue: number = null) {

      //todo. we can add more parameters to the gtag if need be
    gtag('event', eventName, {
      'event_category': eventCategory,
      'event_label': eventLabel,
      'value': eventValue
    });

  }//end method

}//end class
