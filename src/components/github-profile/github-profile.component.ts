import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './github-profile.component.html',
  styleUrl: './github-profile.component.scss'
})
export class GithubProfileComponent implements OnInit {


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log('GitHubProfile onInit');
    
    //Navigate to the component with the same data.
    // let login = this.route.snapshot.paramMap.get('login');
    // console.log(login);
    
    //Required Parameters: Navigate to the component with the different data.
    this.route.paramMap.subscribe(params => { 
      console.log(params);
      console.log(params.get('login'), params.get('id'));
    });    

    //Optional Parameters
    this.route.queryParamMap.subscribe(params => {
      console.log(params.get('page'), params.get('order'));
    });
  }

  submit() {
      this.router.navigate(['/followers'], {
        queryParams: { page: 1, order: 'newest'}
      });
    }

}
