import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LikeComponent } from './components/like.component';
//import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideAnimations } from '@angular/platform-browser/animations';

//When AppComponent declares with StandAlone true, then it will not be part of the AppModule
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

//When AppComponent DOESN't declares with StandAlone true
//platformBrowserDynamic().bootstrapModule(AppModule, {providers: [provideAnimations()]}).catch((err) => console.error(err));


//#region Excercise: Execute using the TS compiler cmd
let component = new LikeComponent(10, false);

component.LikedPost();
console.log('Likes: ' + component.getNumberOfLikes());
console.log('Like Status: ' + component.getLikeStatus());

component.UnLikedPost();
console.log('Likes: ' + component.getNumberOfLikes());
console.log('Like Status: ' + component.getLikeStatus());
//#endregion

