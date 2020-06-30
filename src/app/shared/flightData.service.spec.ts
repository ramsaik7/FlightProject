


import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { FlightDataService } from './flightData.service';
import { Role } from './_models';


describe('FlightDataService', () => {
  let injector: TestBed;
  let service: FlightDataService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlightDataService]
    });
    injector = getTestBed();
    service = TestBed.inject(FlightDataService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });
  let flight = {
    "id": "1",
    "planename": "Indigo",
    "planeno": "6E-2131",
    "departure": "Mon May 25 2020 11:48:22 GMT+0530 (India Standard Time)",
    "departureFrom": "DELHI",
    "arrivalTo": "HYDERABAD",
    "arrival": "Mon May 25 2020 08:48:22 GMT+0530 (India Standard Time)",
    "duration": "02 hrs",
    "price": 2341,
    "ancillaryServices": [
      "ancillary1",
      "ancillary2 ",
      "ancillary3 ",
      "anci4"
    ],
    "specialMeals": [
      "Normal Meal",
      "Special Meal"
    ],
    "shoppingItems": [
      "choclate",
      "lays"
    ],
    "image": "https://images-eu.ssl-images-amazon.com/images/I/418wwCw2HuL.png",
    "passengers": [
      {
        "cId": 13,
        "customername": "samir",
        "checkenin": true,
        "passport": "",
        "address": "Bellagam123",
        "DOB": "1998-06-19T18:30:00.000Z",
        "category": "infants",
        "ancillayService": [
          "ancillary1",
          "ancillary2 ",
          "ancillary3 "
        ],
        "action": "Update",
        "seatno": "2A",
        "meal": "Special Meal",
        "shop": [
          "choclate",
          "lays"
        ]
      }]
  }
  let user={ id: 1, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'User', role: Role.Admin };
  const dummyUserListResponse = {
    data: [flight]
  }

  const dummyUsername = {
    data: [user]
  }


  it('update() should return data', () => {
    service.getAllUser().subscribe((res) => {
      expect(res).toEqual(dummyUsername.data);
    });
    const req = httpMock.expectOne('http://localhost:4200/users');
    expect(req.request.method).toBe('GET');
    req.flush(dummyUsername.data);
  });

  it('update() should return one user', () => {
    service.getUserById(1).subscribe((res) => {
      expect(res).toEqual(user);
    });
    const req = httpMock.expectOne('http://localhost:4200/users/1');
    expect(req.request.method).toBe('GET');
    req.flush(user);
  });


  it('get() should return data', () => {
    service.getflights().subscribe((res) => {
      expect(res).toEqual(dummyUserListResponse.data);
    });
    const req = httpMock.expectOne('http://localhost:3000/flight');
    expect(req.request.method).toBe('GET');
    req.flush(dummyUserListResponse.data);
  });


  it('update() should return data', () => {
    service.getFlightById("1").subscribe((res) => {
      expect(res).toEqual(flight);
    });
    const req = httpMock.expectOne('http://localhost:3000/flight?flightId=1');
    expect(req.request.method).toBe('GET');
    req.flush(flight);
  });


  it('update() should return data', () => {
    service.getFlightByName("Indigo").subscribe((res) => {
      expect(res).toEqual(flight);
    });
    const req = httpMock.expectOne('http://localhost:3000/flight?flightName=Indigo');
    expect(req.request.method).toBe('GET');
    req.flush(flight);
  });


  it('update() should return data', () => {
    service.updatePassenger(1, flight).subscribe((res) => {
      expect(res).toEqual(flight);
    });
    const req = httpMock.expectOne('http://localhost:3000/flight/1');
    expect(req.request.method).toBe('PUT');
    req.flush(flight);
  });


  it('update() should return data', () => {
    service.updateAncillary(1, flight).subscribe((res) => {
      expect(res).toEqual(flight);
    });
    const req = httpMock.expectOne('http://localhost:3000/flight/1');
    expect(req.request.method).toBe('PUT');
    req.flush(flight);
  });


  it('update() should return data', () => {
    service.updateShoppingItem(1, flight).subscribe((res) => {
      expect(res).toEqual(flight);
    });
    const req = httpMock.expectOne('http://localhost:3000/flight/1');
    expect(req.request.method).toBe('PUT');
    req.flush(flight);
  });



  it('update() should return data', () => {
    service.updateSpecialMeal(1, flight).subscribe((res) => {
      expect(res).toEqual(flight);
    });
    const req = httpMock.expectOne('http://localhost:3000/flight/1');
    expect(req.request.method).toBe('PUT');
    req.flush(flight);
  });

  it('update() should return data', () => {
    service.updateCheckinStatus(1, flight).subscribe((res) => {
      expect(res).toEqual(flight);
    });
    const req = httpMock.expectOne('http://localhost:3000/flight/1');
    expect(req.request.method).toBe('PUT');
    req.flush(flight);
  });


  it('update() should return data', () => {
    service.updateAncillaryPassenger(1, flight).subscribe((res) => {
      expect(res).toEqual(flight);
    });
    const req = httpMock.expectOne('http://localhost:3000/flight/1');
    expect(req.request.method).toBe('PUT');
    req.flush(flight);
  });


  it('update() should return data', () => {
    service.updatePassengerSeat(1, flight).subscribe((res) => {
      expect(res).toEqual(flight);
    });
    const req = httpMock.expectOne('http://localhost:3000/flight/1');
    expect(req.request.method).toBe('PUT');
    req.flush(flight);
  });


  it('update() should return data', () => {
    service.updatePassengerAncillary(1, flight).subscribe((res) => {
      expect(res).toEqual(flight);
    });
    const req = httpMock.expectOne('http://localhost:3000/flight/1');
    expect(req.request.method).toBe('PUT');
    req.flush(flight);
  });

  it('update() should return data', () => {
    service.addPassenger(1, flight).subscribe((res) => {
      expect(res).toEqual(flight);
    });
    const req = httpMock.expectOne('http://localhost:3000/flight/1');
    expect(req.request.method).toBe('PUT');
    req.flush(flight);
  });



  it('setSelectedFlight() should store data', () => {
    service.getSelectedPassenger(flight.passengers[0]);
    expect(service.rowPassenger).toBe(flight.passengers[0])
  });


  it('setSelectedFlight() should store data', () => {
    service.getFlightCheckIn(flight.passengers[0]);
    expect(service.flightCheckIN).toBe(flight.passengers[0])
  });


  it('setSelectedFlight() should store data', () => {
    service.setAncillaryFlight(flight);
    expect(service.ancillaryFlight).toBe(flight)
  });


  it('setSelectedFlight() should store data', () => {
    service.saveFlight(flight);
    expect(service.saveFlightSeat).toEqual(flight)
  });


  it('getSelectedFlight() should return data', () => {
    service.rowPassenger = flight.passengers[0];
    service.getRowPassenger();
    expect(service.getRowPassenger()).toBe(flight.passengers[0])
  });

  it('getSelectedFlight() should return data', () => {
    service.saveFlightSeat = flight;
    service.getSavedFlight();
    expect(service.getSavedFlight()).toBe(flight)
  });

  it('getSelectedFlight() should return data', () => {
    service.ancillaryFlight = flight;
    service.getAncillaryFlight();
    expect(service.getAncillaryFlight()).toBe(flight)
  });

  it('getSelectedFlight() should return data', () => {
    service.flightCheckIN = flight;
    service.getFlightForCheckIn();
    expect(service.getFlightForCheckIn()).toBe(flight)
  });


  

});

