import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainCardsComponent } from './main-cards/main-cards.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PaymentBrickComponent } from './payment-brick/payment-brick.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { AddOnsCardComponent } from './add-ons-card/add-ons-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainCardsComponent,
    LandingPageComponent,
    PaymentBrickComponent,
    ProductPageComponent,
    AddOnsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
