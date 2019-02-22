import {Component} from '@angular/core';
import {SwPush, SwUpdate} from "@angular/service-worker";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


    constructor( private snackBar: MatSnackBar,
    private swUpdate: SwUpdate,
    private swPush: SwPush) {
        this.setupUpdates();
        this.setupPush();0
  }
    public setupUpdates() {
        this.swUpdate.available.subscribe(u => {
            this.swUpdate.activateUpdate().then(e => {
                this.snackBar.open("App updated -- please reload!", "OK");
            });
        });

        this.swUpdate.checkForUpdate();
        this.setupPush();
    }

    setupPush() {

        const key = 'BBc7Bb5f5CRJp7cx19kPHz5d9S5jFSzogxEj2V1C44WuhTwd78tnXLPzOxGe0bUmKJUTAMemSKFzyQjSBN_-XyE';

        this.swPush.requestSubscription({
            serverPublicKey: key
        })
            .then(sub => {
                    console.debug('Push Subscription', JSON.stringify(sub) );
                },
                err => {
                    console.error('error registering for push', err);
                });

        this.swPush.messages.subscribe(push => {
            console.debug('received push message', push);
        });
    }
}

