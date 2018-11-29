import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerService {

    fireBaseUrl = 'https://angular-http-dd05c.firebaseio.com/data.json';

    constructor(private http: Http) {}

    addServers(servers: any[]) {
        return this.http.post(this.fireBaseUrl, servers);
    }

}
