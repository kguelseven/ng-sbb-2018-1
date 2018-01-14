import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'second',
    styleUrls: ['./second.css'],
    templateUrl: './second.html'
})
export class Second implements OnInit{
    private myNumber;
    constructor(private route: ActivatedRoute, private router: Router) {
        console.log('Component created!'); // note that the component might be reused
    }

    ngOnInit(): void {
        // subscribe to the params observable
        this.route.params.subscribe((params: Params) => {
            this.myNumber = params['id'];
        });
    }

}
