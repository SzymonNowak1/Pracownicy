import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';

const apiUrl = `http://localhost:8080`;

export const ENDPOINTS = {

    'TOKEN': `${apiUrl}/auth/token`,
    'CURRENT_USER': `${apiUrl}/auth/current`,

    'REGISTER_USER': `${apiUrl}/manage/register`,
    'ACTIVATE_USER': `${apiUrl}/manage/activate`,
    'USER_ROLES': `${apiUrl}/manage/roles`,

    'API_RESOURCE': `${apiUrl}/api/resource`,
    'API_MANAGE': `${apiUrl}/api/manage`,

    'API_CONFIGURATION': `${apiUrl}/api/configuration`,
    'API_CONFIGURATION_NAME': `${apiUrl}/api/configuration/{name}`,
    
    'API_POSITIONS': `${apiUrl}/api/positions`,
    'API_POSITIONS_ID': `${apiUrl}/api/positions/{id}`,
    'API_POSITIONS_SEARCHTEXT': `${apiUrl}/api/positions/searchtext`,
    
    'API_SALARIES': `${apiUrl}/api/salaries`,
    'API_SALARIES_ID': `${apiUrl}/api/salaries/{id}`,
    'API_SALARIES_MYSALARIES': `${apiUrl}/api/salaries/mysalaries`,

    'API_SALARYTARGETS': `${apiUrl}/api/salarytargets`,
    'API_SALARYTARGETS_ID': `${apiUrl}/api/salarytargets/{id}`,
    'API_SALARYTARGETS_ID_SELECT': `${apiUrl}/api/salarytargets/{id}/select`,
    'API_SALARYTARGETS_MYSALARIES': `${apiUrl}/api/salarytargets/mysalarytargets`,

    'API_USERWORKERS': `${apiUrl}/api/userworkers`,
    'API_USERWORKERS_SEARCHTEXT': `${apiUrl}/api/userworkers/searchtext`,
    'API_USERWORKERS_USERID': `${apiUrl}/api/userworkes/{userId}`,

    'API_WORKERS': `${apiUrl}/api/workers`,
    'API_WORKERS_SEARCHTEXT': `${apiUrl}/api/workers/searchtext`,
    'API_WORKERS_ID': `${apiUrl}/api/workers/{id}`

}

@Injectable( {providedIn: 'root'} )
export class ApiService {
    
private bracketsRegExp = /{([^}]+)}/g;

    constructor( private http: HttpClient ) {
   
    }
    
    get<T>(endpoint: string, queryParams?: any): Observable<T> {
        let uri = this.resolveUri( endpoint, queryParams );
        
        return this.http.get<T>(uri);
    }

    post<T>(endpoint: string, queryParams?: any, body: any = {}) {
        let uri = this.resolveUri( endpoint, queryParams );

        return this.http.post<T>(uri, body);
    }

    private resolveUri(base: string, queryParams?: any): string {
        let uri = base;

        let currentMatch;
        let found = [];
        while( currentMatch = this.bracketsRegExp.exec(uri) ) {
            found.push( currentMatch[1] );
        }

        found.forEach( pathVariable => {
            if ( queryParams ) {
                if ( queryParams[pathVariable] ) {
                    uri = uri.replace(`{${pathVariable}}`, queryParams[pathVariable] );
                    delete queryParams[pathVariable];
                } else {
                throw new Error('path variable not supplied: ' + pathVariable);
                }
            } else {
                throw new Error('path variable not supplied: ' + pathVariable);
            }
        });

        if ( queryParams ) {
            if ( Object.keys(queryParams).length > 0) {
                uri += '?'
                Object.keys(queryParams).forEach( key => {
                    uri += key + '=' + queryParams[key] + '&';
                });
                uri = uri.substring(0, uri.length - 1);
            }
        }
        return uri;
    }

}