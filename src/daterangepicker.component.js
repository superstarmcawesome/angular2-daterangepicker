"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var DaterangepickerComponent = (function () {
    function DaterangepickerComponent() {
        this.options = {};
        this.selected = new core_1.EventEmitter();
    }
    DaterangepickerComponent.prototype.ngOnInit = function () {
        jQuery(this.input.nativeElement).daterangepicker(this.options, this.callback.bind(this));
    };
    DaterangepickerComponent.prototype.callback = function (start, end) {
        var obj = {
            start: start,
            end: end
        };
        this.selected.emit(obj);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DaterangepickerComponent.prototype, "options", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DaterangepickerComponent.prototype, "selected", void 0);
    __decorate([
        core_1.ViewChild('daterangepicker'), 
        __metadata('design:type', core_1.ElementRef)
    ], DaterangepickerComponent.prototype, "input", void 0);
    DaterangepickerComponent = __decorate([
        core_1.Component({
            selector: 'daterangepicker',
            template: "\n  <div class=\"form-group\">\n          <input #daterangepicker\n                type=\"submit\"\n                class=\"form-control btn btn-primary inputField\"\n                />\n </div> \n"
        }), 
        __metadata('design:paramtypes', [])
    ], DaterangepickerComponent);
    return DaterangepickerComponent;
}());
exports.DaterangepickerComponent = DaterangepickerComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy9kYXRlcmFuZ2VwaWNrZXIvc3JjL2RhdGVyYW5nZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxRyxlQUFlLENBQUMsQ0FBQTtBQWVySDtJQUFBO1FBRVcsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUNqQixhQUFRLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFjMUMsQ0FBQztJQVhRLDJDQUFRLEdBQWY7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFTywyQ0FBUSxHQUFoQixVQUFpQixLQUFLLEVBQUUsR0FBRztRQUN6QixJQUFJLEdBQUcsR0FBRztZQUNSLEtBQUssRUFBRSxLQUFLO1lBQ1osR0FBRyxFQUFFLEdBQUc7U0FDVCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQWREO1FBQUMsWUFBSyxFQUFFOzs2REFBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOzs4REFBQTtJQUNUO1FBQUMsZ0JBQVMsQ0FBQyxpQkFBaUIsQ0FBQzs7MkRBQUE7SUFmL0I7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsdU1BT1g7U0FDQSxDQUFDOztnQ0FBQTtJQWtCRiwrQkFBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFqQlksZ0NBQXdCLDJCQWlCcEMsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2NvbXBvbmVudHMvZGF0ZXJhbmdlcGlja2VyL3NyYy9kYXRlcmFuZ2VwaWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcmFuZ2VwaWNrZXInLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxpbnB1dCAjZGF0ZXJhbmdlcGlja2VyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgYnRuIGJ0bi1wcmltYXJ5IGlucHV0RmllbGRcIlxuICAgICAgICAgICAgICAgIC8+XG4gPC9kaXY+IFxuYFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcmFuZ2VwaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIG9wdGlvbnM6IGFueSA9IHt9O1xuICBAT3V0cHV0KCkgc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBWaWV3Q2hpbGQoJ2RhdGVyYW5nZXBpY2tlcicpIGlucHV0OiBFbGVtZW50UmVmO1xuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBqUXVlcnkodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KS5kYXRlcmFuZ2VwaWNrZXIodGhpcy5vcHRpb25zLCB0aGlzLmNhbGxiYWNrLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxsYmFjayhzdGFydCwgZW5kKSB7XG4gICAgbGV0IG9iaiA9IHtcbiAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgIGVuZDogZW5kXG4gICAgfTtcbiAgICB0aGlzLnNlbGVjdGVkLmVtaXQob2JqKTtcbiAgfVxufVxuIl19
