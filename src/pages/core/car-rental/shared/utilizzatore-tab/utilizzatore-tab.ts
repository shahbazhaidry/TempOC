import { Component, Output, EventEmitter } from '@angular/core';
import { GeneralProvider } from '../../../../../providers/general';

@Component({
  selector: 'utilizzatore-tab',
  templateUrl: 'utilizzatore-tab.html'
})
export class UtilizzatoreTabComponent {
  @Output() onNextTab: EventEmitter<any> = new EventEmitter();

  // Properties
  countries: any[] = [];
  cities: any[] = [];

  constructor(private general: GeneralProvider) {
    this.initDropdownList();
  }

  /**
   * Initialize Dropdown list
   */
  initDropdownList(): void {
  	Promise.all([this.general.getCountry(), this.general.getComune()])
  		.then((values: any[]) => {
  			this.countries = values[0];
  			this.cities = values[1];
  		})
  		.catch(err => console.log('ERROR: ', err));
  }
}