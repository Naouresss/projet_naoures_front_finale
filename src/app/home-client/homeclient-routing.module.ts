import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientGuard } from '../guards/client-guard.guard';
import { HomeClientComponent } from './home-client.component';
import { BilansComponent } from '../bilans/bilans.component';
import { ConsultationbilansComponent } from '../consultationbilans/consultationbilans.component';
import { TableauxdeclComponent } from '../tableauxdecl/tableauxdecl.component';
import { InformationsComponent } from '../informations/informations.component';
import { PlansComponent } from '../plans/plans.component';
import { PresentationComponent } from '../presentation/presentation.component';
import { MethodologieComponent } from '../methodologie/methodologie.component';




const routes: Routes = [
  {
    path: '',
    
    canActivate: [ClientGuard],
    children: [
      { path: 'homeclient', component: HomeClientComponent },
      { path: 'bilans', component: BilansComponent },
      { path: 'consulter/:id', component: ConsultationbilansComponent },
      { path: 'tableaux', component: TableauxdeclComponent },
      { path: 'informations', component: InformationsComponent },
      { path: 'plans', component: PlansComponent },
      { path: 'presentation', component: PresentationComponent },
      { path: 'methodologie', component: MethodologieComponent },
      
      
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeClientRoutingModule { }