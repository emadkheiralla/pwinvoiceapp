import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import 'flatpickr/dist/flatpickr.css';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { AgGridModule } from 'ag-grid-angular';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavPanelComponent } from './nav-panel/nav-panel.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TurnBacksComponent } from './turn-backs/turn-backs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
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
import { GridInvoiceButtonRendererComponent } from './grid-buttons/grid-invoice-button-renderer/grid-invoice-button-renderer.component';
import { GridStatusButtonRendererComponent } from './grid-buttons/grid-status-button-renderer/grid-status-button-renderer.component';
import { GridDocsButtonRendererComponent } from './grid-buttons/grid-docs-button-renderer/grid-docs-button-renderer.component';
// tslint:disable-next-line:max-line-length
import { GridAcceptRejectButtonRendererComponent } from './grid-buttons/grid-accept-reject-button-renderer/grid-accept-reject-button-renderer.component';
import { GridTurnbackButtonRendererComponent } from './grid-buttons/grid-turnback-button-renderer/grid-turnback-button-renderer.component';
import { GridOaButtonRendererComponent } from './grid-buttons/grid-oa-button-renderer/grid-oa-button-renderer.component';
import { AddModalComponent } from './status-grid/add-modal/add-modal.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DataService } from './home/data.service';
import { LoginService } from './login-page/login.service';
import { EsnService } from './status-grid/add-modal/esn.service';
import { GetuserService } from './login-page/getuser.service';

const appRoutes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'loginpage', component: LoginPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'invoicereceipt', component: InvoiceReceiptReviewComponent },
  { path: 'invoicereview', component: InvoiceReviewComponent },
  { path: 'turnbacks', component: TurnBacksComponent },
  { path: 'clockstart', component: ClockStartComponent },
  { path: 'payreqsignature', component: PayRequestSignatureComponent },
  { path: 'payreqaccounting', component: PayRequestAccountingComponent },
  { path: 'oafleet', component: OaFleetComponent },
  { path: 'oaresponse', component: OaResponseComponent },
  { path: 'allitems', component: AllItemsComponent },
  { path: 'statusgrid', component: StatusGridComponent },
  { path: 'lineitemgrid', component: LineItemGridComponent }
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
    AllItemsComponent,
    GridInvoiceButtonRendererComponent,
    GridStatusButtonRendererComponent,
    GridDocsButtonRendererComponent,
    GridAcceptRejectButtonRendererComponent,
    GridTurnbackButtonRendererComponent,
    GridOaButtonRendererComponent,
    AddModalComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot(),
    AgGridModule.withComponents([GridInvoiceButtonRendererComponent,
      GridStatusButtonRendererComponent, GridDocsButtonRendererComponent, GridAcceptRejectButtonRendererComponent,
      GridTurnbackButtonRendererComponent, GridOaButtonRendererComponent])
  ],
  providers: [DataService, LoginService, EsnService, GetuserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
