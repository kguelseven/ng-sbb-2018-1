import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {catchError, map} from 'rxjs/operators'; // lettable operators are new since RxJS 5.5

interface CommitData {
  commit: {
    author: {
      name: string,
      date: string
    }
  };
}

interface Commit {
  name: string;
  date: Date;
}

@Injectable()
export class FirstService {
  constructor(private httpClient: HttpClient) {}

  getData(): Observable<Commit> {
    return this.httpClient.get<CommitData[]>('https://api.github.com/repos/angular/angular/commits')
      .pipe(
        map(
          (data: CommitData[]): Commit[] => data.map(
            c => ({name: c.commit.author.name, date: new Date(c.commit.author.date)})
          )
        ),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return ErrorObservable.create(error.message || 'Server error');
  }
}
