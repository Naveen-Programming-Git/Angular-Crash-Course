import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { MyFollowersComponent } from '../components/my-followers/my-followers.component';
import { PostsComponent } from '../components/posts/posts.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { GithubProfileComponent } from '../components/github-profile/github-profile.component';
import { ArchiveComponent } from '../components/archive/archive.component';

export const routes: Routes = [
    
        { path: '', component: HomeComponent},
        { path: 'profile/:login/:id', component: GithubProfileComponent},
        { path: 'archive/:year/:month', component: ArchiveComponent},
        { path: 'followers', component: MyFollowersComponent},
        { path: 'posts', component: PostsComponent},        
        { path: '**', component: NotFoundComponent},

        // { path: '', canActivate: [HomeComponent], children: [], pathMatch: 'full'},
        // { path: 'followers/:username', canActivate: [MyFollowersComponent],children: [], pathMatch: 'full'},
        // { path: 'followers', canActivate: [MyFollowersComponent],children: [], pathMatch: 'full'},
        // { path: 'posts', canActivate: [PostsComponent],children: [], pathMatch: 'full'},
        // { path: '**', canActivate: [NotFoundComponent],children: [], pathMatch: 'full'},
      
      ];
