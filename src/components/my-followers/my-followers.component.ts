import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MyFollowersService } from '../../services/my-followers.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';
import { map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-my-followers',
  standalone: true,
  imports: [NgFor, HttpClientModule, RouterLink],
  templateUrl: './my-followers.component.html',
  styleUrl: './my-followers.component.scss',
  providers: [MyFollowersService]
})
export class MyFollowersComponent {
  followers: Follower[] = [];
  constructor(private route : ActivatedRoute, private service: MyFollowersService){}

  ngOnInit(): void {
    console.log('MyFollowers onInit');    

    //Required Parameters
    this.route.paramMap.subscribe(params => {
      console.log(params.get('login'), params.get('id'));
    });

    //Optional Parameters
    this.route.queryParamMap.subscribe(params => {
      console.log(params.get('page'), params.get('order'));
    });

    // combineLatest([
    //   this.route.paramMap,
    //   this.route.queryParamMap
    // ]).subscribe(combined => {
    //   let id = combined[0].get('id');
    //   let page= combined[1].get('page');

    //   console.log('Id:' + id);
    //   console.log("Page: "+ page);
      
    //   // //The Fake API doesn't support pagination, so we can't use the page parameter.
    //   // this.service.get(id, page).subscribe((followers) =>{
    //   //   this.followers = followers
    //   // });
    //   //The Fake API doesn't support pagination, so we can't use the page parameter.
    //   this.service.getAll().subscribe((followers) =>{
    //     this.followers = followers
    //   });
    // });

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .pipe(
        switchMap((combined) =>
        {
          let id = combined[0].get('id');
          let page= combined[1].get('page');

          console.log('Id:' + id);
          console.log("Page: "+ page);
          
          // //The Fake API doesn't support pagination, so we can't use the page parameter.
          // this.service.get(id, page).subscribe((followers) =>{
          //   this.followers = followers
          // });
          //The Fake API doesn't support pagination, so we can't use the page parameter.
          return this.service.getAll();
        })    
      ).subscribe((followers) =>{
        this.followers = followers
        });

    //Optional Parameters : Snapshot details won't retain details if the URL/component changes.
    // let page = this.route.snapshot.queryParamMap.get('page');
    // let order = this.route.snapshot.queryParamMap.get('order');
    // console.log(page);
    // console.log(order);
  }

}

export class Follower{
  avatar_url: string | undefined;
  html_url: string | undefined;
  login: string | undefined;
  id: string | undefined;
}
