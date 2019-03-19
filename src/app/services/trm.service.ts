import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable( { providedIn: 'root' } )
export class TrmService {

    constructor( private http: HttpClient ) {
    }

    getTRM(): Observable<any> {
        return this.http.get( '//localhost:8080/trm/obtenerActual' );
    }
}