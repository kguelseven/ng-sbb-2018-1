import {Component, OnInit} from '@angular/core';
import {Jsonp, URLSearchParams} from '@angular/http';
import {Subject} from 'rxjs/Subject';

@Component({
    selector: 'aw-backend-search',
    templateUrl: 'backend-search.component.html'
})
export class BackendSearchComponent implements OnInit {

    searchTerm = new Subject<string>();
    items: Array<string>;

    constructor(private jsonp: Jsonp) {}

    ngOnInit() {
        this.searchTerm
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(term => this.searchWikipedia(term))
            .subscribe((results: any) => this.items = results);
    }

    searchWikipedia(term: string) {
        const search = new URLSearchParams();
        search.set('search', term);
        search.set('action', 'opensearch');
        search.set('format', 'json');
        search.set('callback', 'JSONP_CALLBACK');

        return this.jsonp.get('https://en.wikipedia.org/w/api.php', {search})
            .map(response => <string[]> response.json()[1]);
    }
}
