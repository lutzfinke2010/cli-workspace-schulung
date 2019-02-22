import Dexie from 'dexie';

export const basketTableName = 'basket';
export const flightsTableName = 'flights';

const schema: { [key: string]: string} = {}
schema[basketTableName] = 'id,date';
// Just the indexed colums

export const db = new Dexie('flightdb');
db.version(1).stores(
    {
        basket: 'id,date',
        flights: 'id,date'
    }
);