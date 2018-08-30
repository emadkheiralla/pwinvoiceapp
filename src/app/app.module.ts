import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'flatpickr/dist/flatpickr.css';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { FlatpickrModule } from 'angularx-flatpickr';
import { AgGridModule } from 'ag-grid-angular';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavPanelComponent } from './nav-panel/nav-panel.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TurnBacksComponent } from './turn-backs/turn-backs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { StatusGridComponent } from './status-grid/status-grid.component';
import { LineItemGridComponent } from './line-item-grid/line-item-grid.component';
import { EventViewComponent } from './home/event-view/event-view.component';
import { CalanderViewComponent } from './home/calander-view/calander-view.component';
import { InvoiceReceiptReviewComponent } from './invoice-receipt-review/invoice-receipt-review.component';
import { InvoiceReviewComponent } from './invoice-review/invoice-review.component';
import { ClockStartComponent } from './clock-start/clock-start.component';
import { PayRequestSignatureComponent } from './pay-request-signature/pay-request-signature.component';
import { PayRequestAccountingComponent } from './pay-request-accounting/pay-request-accounting.component';
import { OaResponseComponent } from './oa-response/oa-response.component';
import { OaFleetComponent } from './oa-fleet/oa-fleet.component';
import { AllItemsComponent } from './all-items/all-items.component';
import { DataService} from './home/data.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'invoicereceipt', component: InvoiceReceiptReviewComponent },
  { path: 'invoicereview', component: InvoiceReviewComponent },
  { path: 'turnbacks', component: TurnBacksComponent },
  { path: 'clockstart', component: ClockStartComponent },
  { path: 'payreqsignature', component: PayRequestSignatureComponent },
  { path: 'payreqaccounting', component: PayRequestAccountingComponent },
  { path: 'oafleet', component: OaFleetComponent },
  { path: 'oaresponse', component: OaResponseComponent },
  { path: 'allitems', component: AllItemsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavPanelComponent,
    HomeComponent,
    TurnBacksComponent,
    StatusGridComponent,
    LineItemGridComponent,
    EventViewComponent,
    CalanderViewComponent,
    InvoiceReceiptReviewComponent,
    InvoiceReviewComponent,
    ClockStartComponent,
    PayRequestSignatureComponent,
    PayRequestAccountingComponent,
    OaResponseComponent,
    OaFleetComponent,
    AllItemsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    NgbModalModule.forRoot(),
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot(),
    AgGridModule.withComponents([])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
