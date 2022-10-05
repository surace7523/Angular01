import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { ProductItemComponent } from './MyComponents/product-item/product-item.component';
import { ShoppingCartComponent } from './MyComponents/shopping-cart/shopping-cart.component';
import { LoginFormComponent } from './MyComponents/login-form/login-form.component';
import { SmsAppComponent } from './MyComponents/sms-app/sms-app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductItemComponent,
    ShoppingCartComponent,
    LoginFormComponent,
    SmsAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
