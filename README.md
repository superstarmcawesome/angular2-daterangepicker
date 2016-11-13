# angular2-daterangepicker

how to use?

dependencies:
npm install daterangepicker --save

!npm install angular2-daterangepicker
(this repo is not yet pushed to npm) but the earlier version is available! 

import DaterangepickerModule


<daterangepicker [options]="options"
                 (selected)="selectedDate($event)"></daterangepicker>

set your custom options:

private options: Object = {
    'showDropdowns': true,
    'showWeekNumbers': true,
    'timePicker': true,
    'timePicker12Hour': false,  
    'alwaysShowCalendars': true,
    'minDate': '06/01/2014',
    'buttonClasses': 'btn btn-outline-success',
    'applyClass': 'btn btn-outline-primary',
    'cancelClass': 'btn btn-outline-warning'
  };

private selectedDate(value: any) {
    console.log(value);
  }

feel free to contribute! :-)






