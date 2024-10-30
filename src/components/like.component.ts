export class LikeComponent{
    

    constructor(private likes: number, private like: boolean){
        //this.userId = userAction.userId;
        //this.postId = userAction.postId;
        this.likes = likes;
        this.like = like;
      }

    LikedPost(){
        this.like = true;
        this.likes++;
      }
    
      UnLikedPost(){
        this.like = false;
        this.likes--;
      }
    
      getNumberOfLikes(){
        return this.likes;
      }
    
      getLikeStatus(){
        return this.like;
      }
      //#region 
    //   userAction : UserAction;
    // constructor(userAction?: UserAction){
    //     this.userAction.userId = userAction.userId;
    //     this.userAction.postId = userAction.postId;
    //     this.userAction.likes = userAction.likes;
    //     this.userAction.like = userAction.like;
    //   }

    // LikedPost(){
    //     this.userAction.like = true;
    //     this.userAction.likes++;
    //   }
    
    //   UnLikedPost(){
    //     this.userAction.like = false;
    //     this.userAction.likes--;
    //   }
    
    //   getNumberOfLikes(){
    //     return this.userAction.likes;
    //   }
    
    //   getLikeStatus(){
    //     return this.userAction.like;
    //   }
    //#endregion
}