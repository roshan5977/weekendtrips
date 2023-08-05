import { MatSort, MatSortModule } from '@angular/material/sort';
import { NgModule, Component } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthorizationComponent } from './authorization.component';
import { AdminCityComponent } from './admincity.component';
import { AddPlaceComponent } from './addplace.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  EditCityDetailComponent } from './editcitydetails.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TravellorDetailsComponent } from './travellordetails.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AddCityComponent } from './addnewcity.component';
import { AddPackComponent } from './addnewpack.component';
import { CdkTableModule } from '@angular/cdk/table';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DashboardComponent } from './dashboard.component';
import {MatTabsModule} from '@angular/material/tabs'
import {MatCheckboxModule} from '@angular/material/checkbox'
import { AdminHomeComponent } from './adminhome.component';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { CityGraphComponent } from './citygraph.component';
import { MatDividerModule } from '@angular/material/divider';
import {FlexLayoutModule} from '@angular/flex-layout'
import { showpassengersComponent } from './showpassengers.component';
import { SettingsComponent } from './settings.component';

let routing=RouterModule.forChild(
  [
    {
      path:"main",component:AdminComponent,/*data: { roles: ['admin']},*/
      children:[
        // {
        //  path:"auth",component:AuthorizationComponent
        // },
        {
          path:"admincity/:id",component:AdminCityComponent
        },
        {
          path:"editcitydetail/:id",component:EditCityDetailComponent
        },
        {
          path:"travellordetails",component:TravellorDetailsComponent
        },
        {
          path:"addplace",component:AddPlaceComponent
         },
         {
          path:"addcity",component:AddCityComponent
         },
         {
          path:"dashboard",component:DashboardComponent
         },
         {
          path:"adminhome",component:AdminHomeComponent
         },
         {
          path:"addpack",component:AddPackComponent
         },
         {
          path:"settings",component:SettingsComponent
         },
         {
          path:"**",redirectTo:"admincity/0"
         }
      ]
    },
    {
      path: "**" ,redirectTo:"main"
    }
  ]
)



// const ngxUiLoaderConfig: NgxUiLoaderConfig = {
//   bgsColor: "red",
//   bgsPosition: POSITION.centerLeft,
//   bgsSize: 40,
//   bgsType: SPINNER.rectangleBounce, // background spinner type
//   fgsType: SPINNER.chasingDots, // foreground spinner type
//   pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
//   pbThickness: 5, // progress bar thickness
// };


@NgModule({
  imports: [CommonModule,routing,FormsModule,MatToolbarModule,ReactiveFormsModule,
    NgxUiLoaderModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule
    ,MatFormFieldModule
    ,MatIconModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatSortModule,
    CdkTableModule,
    MatStepperModule,
    NgxDropzoneModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    FlexLayoutModule,
  ],
  declarations: [EditCityDetailComponent,showpassengersComponent,DashboardComponent,SettingsComponent,
    CityGraphComponent,AdminHomeComponent,AdminComponent,AuthorizationComponent,AdminCityComponent,AddPlaceComponent,AddCityComponent,AddPackComponent,TravellorDetailsComponent,DashboardComponent

  ],
  providers: [],
})
export class AdminModule { }
