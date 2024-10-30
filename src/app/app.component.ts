import { Component, ErrorHandler, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CourseComponent } from './course.component';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from '../components/authors/authors.component';
import { FavoriteChangedEventArgs, FavoriteComponent } from '../components/favorite/favorite.component';
import { BootstrapPanelComponent } from "../components/bootstrap-panel/bootstrap-panel.component";
import { LikeComponent } from "../components/like/like.component";
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from '../pipes/summary.pipe';
import { TitleCasingPipe } from '../pipes/title-casing.pipe';
import { CoursesComponent } from '../components/courses/courses.component';
import { ZippyComponent } from "../components/zippy/zippy.component";
import { ContactFormComponent } from "../components/contact-form/contact-form.component";
import { AngularTemplateAssigmentComponent } from "../components/angular-template-assigment/angular-template-assigment.component";
import { SignupFormComponent } from "../components/signup-form/signup-form.component";
import { NewCourseFormComponent } from "../components/new-course-form/new-course-form.component";
import { ChangePasswordComponent } from "../components/change-password/change-password.component";
import { PostsComponent } from "../components/posts/posts.component";
import { AppErrorHandler } from '../common/app-error-handler';
import { MyFollowersComponent } from "../components/my-followers/my-followers.component";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { HomeComponent } from "../components/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterLink, RouterOutlet, CourseComponent, CommonModule, AuthorsComponent,
    FavoriteComponent, BootstrapPanelComponent, LikeComponent,
    FormsModule, SummaryPipe, TitleCasingPipe, CoursesComponent, ZippyComponent, ContactFormComponent, AngularTemplateAssigmentComponent, SignupFormComponent, NewCourseFormComponent, ChangePasswordComponent, PostsComponent, MyFollowersComponent, NavbarComponent, HomeComponent], 
  
})
export class AppComponent {
onZippyComponentChanged($event: any) {
  throw new Error('Method not implemented.');

}
  
  title = 'My First Angular App';  

  tweet = {
    likesCount: 10,
    isLiked: false
  }

  post = {
    title: "Title",
    isFavorite: true
  }

  words : string = "";

  // onFavoriteChanged(isSelected: boolean){
  //   console.log("Favorite Changed", isSelected);
  // }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
    console.log("Favorite Changed", eventArgs.newValue);
  }

}
