import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';

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
            ));
    }

    putServers(servers: any[]) {
        const myHeaders = new Headers({'Content-Type': 'application/json'});
        return this.http.put(this.fireBaseUrl, servers, {headers: myHeaders});
    }

}
