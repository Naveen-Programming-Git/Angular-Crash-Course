"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeComponent = void 0;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(likes, like) {
        this.likes = likes;
        this.like = like;
        //this.userId = userAction.userId;
        //this.postId = userAction.postId;
        this.likes = likes;
        this.like = like;
    }
    LikeComponent.prototype.LikedPost = function () {
        this.like = true;
        this.likes++;
    };
    LikeComponent.prototype.UnLikedPost = function () {
        this.like = false;
        this.likes--;
    };
    LikeComponent.prototype.getNumberOfLikes = function () {
        return this.likes;
    };
    LikeComponent.prototype.getLikeStatus = function () {
        return this.like;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
