import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class SecondService {
    constructor(private httpClient: HttpClient) {}

    getData = () => this.httpClient.get('https://api.github.com/repos/angular/angular/commits')
        .toPromise()
        .then(this.extractData)
        .catch(this.handleError)

    private extractData(res: any[]) {
        return res.map(c => ({name: c.commit.author.name, date: new Date(c.commit.author.date)}));
    }

    private handleError (error: any) {
        const errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    }

}
