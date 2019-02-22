import {db,  flightsTableName} from './db';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalFlightService {

    save(flight: object): Promise<any> {

        const entry = {
            id: flight.id,
            date: new Date(),
            flight
        };
        console.log('save Flight: ', entry);
        return db.table(flightsTableName).put(entry);
    }

    load(id: any): Promise<object> {
        return db.table(flightsTableName).get(id).then((entry) => {
            console.log('load Flight: ', entry);
            return entry.flight;
        });
    }

}