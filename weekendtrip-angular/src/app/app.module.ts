import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WeekendTripModule } from './weekendtrips/weekendtrips.module';
import {  WeekendTripComponent } from './weekendtrips/weekendTrip.component';
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PackageComponent } from './weekendtrips/package.component';
import { LoginComponent } from './weekendtrips/login.component';
import { TravellerComponent } from './weekendtrips/traveller.component';
import { UserdetailsComponent } from './weekendtrips/userdetails.component';
import { BookingreviewComponent } from './weekendtrips/bookingreview.component';
import { PlacesComponet } from './weekendtrips/places.component';
import { PaymentComponent } from './weekendtrips/payment.component';
import { CityComponent } from './weekendtrips/cities.component';
import { ContactComponent } from './weekendtrips/contact.component';
import { AboutComponent } from './weekendtrips/about.component';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { AdminGuard } from './service/admin.guard';
import { TravellerGuard } from './service/traveller.guard';
import { SarudrComponent } from './openai/sarudr.component';



@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    WeekendTripModule,
    RouterModule.forRoot([
      {  path: 'weekend', component: WeekendTripComponent},
      {  path: 'packages/:id', component: PackageComponent},
      {  path: 'cities', component: CityComponent},
      {  path: "login/:id", component: LoginComponent},
      {  path: "traveller/:packageReferenceId", component: TravellerComponent ,canActivate:[TravellerGuard]},
      {  path: "user", component: UserdetailsComponent},
      {  path: "review", component: BookingreviewComponent,canActivate:[TravellerGuard]},
      {  path: "place/:id", component: PlacesComponet},
      {  path: "payment", component: PaymentComponent,canActivate:[TravellerGuard]},
      {  path: "contact", component: ContactComponent},
      {  path: "about", component: AboutComponent},
      {
         path:"admin",
         loadChildren:()=>import('./admin/admin.module').then(x=>x.AdminModule),canActivate: [AdminGuard],
      },
      {
        path:"**",redirectTo:"weekend"
      }
    ]),



  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
