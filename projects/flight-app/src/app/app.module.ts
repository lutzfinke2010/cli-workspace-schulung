import {DashboardModule} from './dashboard/dashboard.module';
import {FlightCancellingModule} from './flight-booking/flight-cancelling/flight-cancelling.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FlightApiModule} from '@flight-workspace/flight-api';

import {AppComponent} from './app.component';
import {APP_EXTRA_OPTIONS, APP_ROUTES} from './app.routes';
import {BasketComponent} from './basket/basket.component';
import {FlightBookingModule} from './flight-booking/flight-booking.module';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SharedModule} from './shared/shared.module';
import {SidebarComponent} from './sidebar/sidebar.component';
import {DashboardTileModule} from './dashboard-tile/dashboard-tile.module';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CustomCheckboxModule} from './shared/custom-checkbox/custom-checkbox.module';
import {TabsModule} from './shared/tabs/tabs.module';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {MatSnackBarModule} from '@angular/material';

@NgModule({
    imports: [
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        FlightBookingModule,
        FlightCancellingModule,

        DashboardTileModule,

        DashboardModule,
        FlightApiModule.forRoot(),
        SharedModule.forRoot(),
        RouterModule.forRoot([...APP_ROUTES], {...APP_EXTRA_OPTIONS}),

        CustomCheckboxModule,
        TabsModule,
        MatSnackBarModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
    ],
    declarations: [
        AppComponent,
        SidebarComponent,
        NavbarComponent,
        HomeComponent,
        BasketComponent
    ],
    schemas: [
        // Todo: Add this schema: CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
