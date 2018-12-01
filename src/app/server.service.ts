import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ServerService {

    fireBaseUrl = 'https://angular-http-dd05c.firebaseio.com/data.json';

    constructor(private http: Http) {}

    addServers(servers: any[]) {
        const myHeaders = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.fireBaseUrl, servers, {headers: myHeaders});
    }

    getServers() {
        return this.http.get(this.fireBaseUrl)
            .pipe(map(
                (response: Response) => {
                    const data = response.json();
                    return data;
                }
            ))
            .pipe(catchError(
                (error: Response) => {
                    // return throwError(error);
                    return throwError('Error getting response');
                }
            ));
    }

    putServers(servers: any[]) {
        const myHeaders = new Headers({'Content-Type': 'application/json'});
        return this.http.put(this.fireBaseUrl, servers, {headers: myHeaders});
    }

    getAppName() {
        return this.http.get('https://angular-http-dd05c.firebaseio.com/data/appName.json')
            .pipe(map(
                (response: Response) => {
                    return response.json();
                }
            ));
    }

}
