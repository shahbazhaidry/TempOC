import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

import { GeneralProvider } from '../../../../../providers/general';
import { Globals } from '../../../../../shared/globals';

import { Options, CompleteList, Comune } from '../../../../../models/general';

@Component({
  selector: 'sinistro-tab',
  templateUrl: 'sinistro-tab.html'
})
export class SinistroTabComponent {

  @Output() onNextTab: EventEmitter<any> = new EventEmitter();

  @Output() onBackTab: EventEmitter<any> = new EventEmitter();

  @Input() pratica: any;

  @Input('options')
  get options(): Options {
  	return this.innerOptionsValue;
  }
  set options(v: Options) {
  	if (v !== this.innerOptionsValue) {
  		this.innerOptionsValue = v;
  		this.entitaCostiList = this.globals.parseArrayToSelectList(v.EntitaCosti) || [];  	
  		this.circostanzeList = this.globals.parseCircostanzeToSelectList(v.Circostanze) || [];
  	}
  }
  private innerOptionsValue: Options;

  entitaCostiList: Array<CompleteList> = [];
  circostanzeList: Array<CompleteList> = [];

  cities: Array<CompleteList> = [];

  constructor(public globals: Globals, private general: GeneralProvider) {
    this.initDropdownList();
  }

  /**
   * Initialize Dropdown list
   */
  initDropdownList(): void {
  	this.general.getComune()
  		.then((res: Array<Comune>) => {  			
  			this.cities = this.globals.parseCityToAutocompleteList(res);
  		})
  		.catch(err => console.log('ERROR: ', err));
  }

  /**
   * ngbTypeahead search for county
   */
  searchCities = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.cities.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1))
    );

  /**
   * On select city item
   * @param item 
   */
  onSelectCity(item) {
  }
}