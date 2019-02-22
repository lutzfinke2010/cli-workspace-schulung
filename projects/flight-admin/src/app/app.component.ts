import {Component} from '@angular/core';
import {SwPush, SwUpdate} from "@angular/service-worker";
import {MatSnackBar} from "@angular/material";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    constructor(
    ) {
    }

}
