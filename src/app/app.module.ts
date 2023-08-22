import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DOSTComponent } from './dost/dost.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { FeepaymentComponent } from './feepayment/feepayment.component';
import { ApplicationeditComponent } from './applicationedit/applicationedit.component';
import { WeboptionsComponent } from './weboptions/weboptions.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

@NgModule({
  declarations: [
    AppComponent,
    DOSTComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    FeepaymentComponent,
    ApplicationeditComponent,
    WeboptionsComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
