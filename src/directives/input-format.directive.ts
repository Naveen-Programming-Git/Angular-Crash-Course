import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
  standalone: true
})
export class InputFormatDirective {
  @Input('appInputFormat') caseFormat: string = 'lowercase';
  constructor(private el: ElementRef) { }  

  @HostListener('blur') onBlur(){

    let value: string = this.el.nativeElement.value;
    if(this.caseFormat == 'uppercase')
      this.el.nativeElement.value = value.toUpperCase();
    else
      this.el.nativeElement.value = value.toLowerCase();
  }
}
