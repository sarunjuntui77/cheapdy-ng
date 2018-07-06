import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BASE} from '../../constants/url';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(
        private router: Router
        ) { }

    ngOnInit() {
    }

    openPage(url) {
        this.router.navigate([url]);
    }
}
