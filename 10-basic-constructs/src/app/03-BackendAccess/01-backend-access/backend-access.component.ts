import { Component, OnInit } from '@angular/core';
import { FirstService } from './first.service';
import { SecondService } from './second.service';

@Component({
    selector: 'aw-backend-access',
    templateUrl: 'backend-access.component.html',
    providers: [FirstService, SecondService]
})
export class BackendAccessComponent implements OnInit {

    commits;
    errorMessage;

    constructor(private firstService: FirstService, private secondService: SecondService) { }

    ngOnInit(): any {
        this.firstService
            .getData()
            .subscribe(
            commits => this.commits = commits,
            error => this.errorMessage = error
            );

        // this.secondService
        //     .getData()
        //     .then(commits => this.commits = commits)
        //     .catch(error => this.errorMessage = error);
    }
}


// TODO:
// Use async pipe: Skip the subscribe and expose the observable as property
