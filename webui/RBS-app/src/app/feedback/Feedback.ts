export class Feedback{
   
    username:any;
    rating:any;
    review:any;
    constructor( rating:any, review:any, username:any){
       
       
        this.username = username;
        this.rating = rating;
        this.review = review;
    }
}