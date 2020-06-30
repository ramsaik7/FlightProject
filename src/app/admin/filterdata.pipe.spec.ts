import { FilterdataPipe } from "./filterdata.pipe";

 
describe('AdminFlightPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterdataPipe();
    expect(pipe).toBeTruthy();
  });


 
  it('should display time format', () => {
    
   const passenger=[{
    "customerName": "Akash Sai",
    "customerId": 1,
    "seatNumber": "1C",
    "checkIn": true,
    "wheelchair": false,
    "category": "meals",
    "infant": false,
    "passport": "AkB1212",
    "address": "Jharsguda",
    "DOB": null,
    "ancillaryRequested": true,
    "ancillayService": [
      "Ancillary1",
      "Ancillary4"
    ],
    "specialMeal": "SpecialMeal",
    "shoppingItem": []
  }]
    const pipe = new FilterdataPipe();
   
     const result = pipe.transform(passenger,"DOB");
 
     expect(result[0].customerName).toEqual(passenger[0].customerName);
 
});


it('should display time format', () => {
    
    const passenger=[{
     "customerName": "Akash Sai",
     "customerId": 1,
     "seatNumber": "1C",
     "checkIn": true,
     "wheelchair": false,
     "category": "meals",
     "infant": false,
     "passport": null,
     "address": "Jharsguda",
     "DOB": null,
     "ancillaryRequested": true,
     "ancillayService": [
       "Ancillary1",
       "Ancillary4"
     ],
     "specialMeal": "SpecialMeal",
     "shoppingItem": []
   }]
     const pipe = new FilterdataPipe();
    
      const result = pipe.transform(passenger,"passport");
  
      expect(result[0].customerName).toEqual(passenger[0].customerName);
  
 });

 it('should display time format', () => {
    
    const passenger=[{
     "customerName": "Akash Sai",
     "customerId": 1,
     "seatNumber": "1C",
     "checkIn": true,
     "wheelchair": false,
     "category": "meals",
     "infant": false,
     "passport": null,
     "address": null,
     "DOB": null,
     "ancillaryRequested": true,
     "ancillayService": [
       "Ancillary1",
       "Ancillary4"
     ],
     "specialMeal": "SpecialMeal",
     "shoppingItem": []
   }]
     const pipe = new FilterdataPipe();
    
      const result = pipe.transform(passenger,"address");
  
      expect(result[0].customerName).toEqual(passenger[0].customerName);
  
 });
 
});