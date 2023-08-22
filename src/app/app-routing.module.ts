import { NgModule } from '@angular/core';
import { DOSTComponent } from './dost/dost.component';
import { RouterModule,Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FeepaymentComponent } from './feepayment/feepayment.component';
import { ApplicationeditComponent } from './applicationedit/applicationedit.component';
import { WeboptionsComponent } from './weboptions/weboptions.component';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
  { path: '', component: DOSTComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'feepayment', component:FeepaymentComponent },
  { path: 'applicationedit', component:ApplicationeditComponent},
  {path:'weboptions',component:WeboptionsComponent},
  {path:'login',component:LoginpageComponent}
];

@NgModule({
  declarations: [],
  imports:  [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
