import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-zippy',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './zippy.component.html',
  styleUrl: './zippy.component.scss'
})
export class ZippyComponent {
  @Input() title: string='';
  
  isExpanded: boolean = false;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}
