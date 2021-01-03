export class Feedback{
    bookId:number;
    guestName:any;
    rating:any;
    review:any;
    constructor(bookId:any, guestName:any, rating:any, review:any){
        this.bookId = bookId;
        this.guestName = guestName;
        this.rating = rating;
        this.review = review;
    }
}