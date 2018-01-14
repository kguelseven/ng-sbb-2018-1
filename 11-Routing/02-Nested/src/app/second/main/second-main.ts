import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'second',
    templateUrl: './second-main.html'
})
export class SecondMain {

    constructor(private router: Router ){}

    goToDetail(){
        this.router.navigate(['second/detail/42'])
    }
}
