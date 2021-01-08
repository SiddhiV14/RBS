export class Feedback{
    bookId:number;
    guestName:any;
    rating:any;
    review:any;
    constructor(bookId:any, rating:any, review:any, guestName:any){
       
        this.bookId = bookId;
        this.guestName = guestName;
        this.rating = rating;
        this.review = review;
    }
}