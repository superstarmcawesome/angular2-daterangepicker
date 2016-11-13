import { Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'daterangepicker',
  template: `
  <div class="form-group">
          <input #daterangepicker
                type="submit"
                class="form-control btn btn-primary inputField"
                />
 </div> 
`
})
export class DaterangepickerComponent implements OnInit {

  @Input() options: any = {};
  @Output() selected = new EventEmitter();
  @ViewChild('daterangepicker') input: ElementRef;

  public ngOnInit(): void {
    jQuery(this.input.nativeElement).daterangepicker(this.options, this.callback.bind(this));
  }

  private callback(start, end) {
    let obj = {
      start: start,
      end: end
    };
    this.selected.emit(obj);
  }
}
