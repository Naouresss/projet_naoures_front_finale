
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatInputModule } from '@angular/material/input';
import { AdminGuard } from '../guards/admin-guard.guard';
import { UsersComponent } from '../users/users.component';
import { AjoutuserComponent } from '../ajoutuser/ajoutuser.component';
import { UpdateuserComponent } from '../updateuser/updateuser.component';
import { HomeClientComponent } from './home-client.component';
import { HomeClientRoutingModule } from './homeclient-routing.module';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { BilansComponent } from '../bilans/bilans.component';
import { ConsultationbilansComponent } from '../consultationbilans/consultationbilans.component';
import { TableauxdeclComponent } from '../tableauxdecl/tableauxdecl.component';
import { InformationsComponent } from '../informations/informations.component';
import { PlansComponent } from '../plans/plans.component';
import { PresentationComponent } from '../presentation/presentation.component';
import { MethodologieComponent } from '../methodologie/methodologie.component';

@NgModule({
  imports: [
    CommonModule,
    HomeClientRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatIconModule,
    MatPaginatorModule ,

    MatInputModule,

  ],
  providers:[AdminGuard],
  declarations: [
    HomeClientComponent,
    HeaderComponent,
    FooterComponent,
    BilansComponent,
    ConsultationbilansComponent,
    TableauxdeclComponent,
    InformationsComponent,
    PlansComponent,
    PresentationComponent,
    MethodologieComponent,
    

  ],
  bootstrap: [HomeClientComponent]
})
export class HomeClientModule { }