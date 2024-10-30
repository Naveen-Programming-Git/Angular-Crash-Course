
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-archive',
  standalone: true,
  imports: [],
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss'
})
export class ArchiveComponent implements OnInit {

  year: any;
  month: any;
  title: any;
  constructor(private route: ActivatedRoute, private router: Router){
    
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.year = params.get('year');
      this.month = params.get('month');
      this.title = this.year + ' / ' + this.month;
    });
  }

  viewAll() {
    
     //it will redirect to the home page.
      this.router.navigate(['']);
      //Please note that home page routing path is defined with '/' though it is not mentioned in the routes path.
      this.router.navigate(['/']);
    }
 
}
