import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { User } from '../_models';
import { FlightDataService } from '../flightData.service';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient,
                private flightService:FlightDataService) { }

    getAll() {
        return this.flightService.getAllUser();   //.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: number) {
        return this.flightService.getUserById(id);             //get<User>(`${environment.apiUrl}/users/${id}`);
    }
}