import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { ContactComponent } from './contact.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeekendTripComponent } from './weekendTrip.component';
import { ModelModule } from '../model/model.module';
import { CityComponent } from './cities.component';
import { PackageComponent } from './package.component';
import { LoginComponent } from './login.component';
import { TravellerComponent } from './traveller.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SearchPipe } from './search.pip';
import { UserdetailsComponent } from './userdetails.component';
import { PlacesComponet } from './places.component';
import { BookingreviewComponent } from './bookingreview.component';
import { PaymentComponent } from './payment.component';
import { AboutComponent } from './about.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {  MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { ResetPasswordComponent } from './resetpassword.component';
import { UpdateUserComponent } from './UpdateUser.component';
import { NumberCustomValidatorDirective } from './numbercustomvalidation';
import { SarudrComponent } from '../openai/sarudr.component';



@NgModule({
  imports: [BrowserModule, RouterModule,
    MatRippleModule,ReactiveFormsModule,
    FormsModule, ModelModule,MatSelectModule,MatToolbarModule,MatButtonModule,MatDividerModule, BrowserAnimationsModule,MatIconModule,MatDialogModule,MatCardModule,
    MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule,MatSnackBarModule],
  declarations: [SarudrComponent,WeekendTripComponent,UpdateUserComponent, CityComponent, PackageComponent,NumberCustomValidatorDirective, LoginComponent,ResetPasswordComponent, TravellerComponent, ResetPasswordComponent,SearchPipe, UserdetailsComponent,PlacesComponet,BookingreviewComponent,ContactComponent,AboutComponent,PaymentComponent],
  exports: [SarudrComponent,CityComponent, WeekendTripComponent, PackageComponent, LoginComponent, TravellerComponent,NumberCustomValidatorDirective, SearchPipe, UserdetailsComponent,PlacesComponet,BookingreviewComponent,ContactComponent,AboutComponent,PaymentComponent]

})
export class WeekendTripModule { }

