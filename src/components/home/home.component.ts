import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  archives: any[] = [];

  ngOnInit(): void {
    this.archives = [
      {year: 2017, month: 1},
      {year: 2018, month: 2},
      {year: 2019, month: 3}
    ];
  }
  
}
