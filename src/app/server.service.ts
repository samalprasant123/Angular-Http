import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ServerService {

    fireBaseUrl = 'https://angular-http-dd05c.firebaseio.com/data.json';

    constructor(private http: Http) {}

    addServers(servers: any[]) {
        const myHeaders = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.fireBaseUrl, servers, {headers: myHeaders});
    }

}
