export class Booking{
    bookingId:number;
	guestName:String;
	guestMobileNumber:number ;
	bookedDate:Date ;
	reservationDate :String;
	slotTime:String;
	noOfGuests:number;
	tableNo:number;
    constructor(bookingId:number,  guestName:String, guestMobileNumber:number, bookedDate:Date, reservationDate :String, slotTime:String, noOfGuests:number, tableNo:number){
        this.bookingId = bookingId;
        this.guestName = guestName;
        this.guestMobileNumber = guestMobileNumber;
        this.bookedDate = bookedDate;
        this.reservationDate = reservationDate;
        this.slotTime = slotTime;
        this.noOfGuests = noOfGuests;
        this.tableNo = tableNo;

    }
}