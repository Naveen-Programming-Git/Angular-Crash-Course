"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./components/like.component");
// bootstrapApplication(AppComponent, appConfig)
// .then(() => 
// {
//   console.log('App started!');
// })
//   .catch((err) => console.error(err));
//Execute using the TS compiler cmd
var component = new like_component_1.LikeComponent(10, false);
component.LikedPost();
console.log('Likes: ' + component.getNumberOfLikes());
console.log('Like Status: ' + component.getLikeStatus());
component.UnLikedPost();
console.log('Likes: ' + component.getNumberOfLikes());
console.log('Like Status: ' + component.getLikeStatus());
