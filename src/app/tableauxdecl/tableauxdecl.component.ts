import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { CurrentUser } from '../models/User';

@Component({
  selector: 'app-tableauxdecl',
  templateUrl: './tableauxdecl.component.html',
  styleUrls: ['./tableauxdecl.component.css']
})
export class TableauxdeclComponent {
  isLoggedIn = false;
  isAdmin = false;
  isClient = false;
  activeTab: string = "synthese";
 // Par défaut, l'onglet "Synthèse" est actif

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
   currentUser!: CurrentUser;
   constructor(private authService: AccountService,private router: Router) {
   

 
  }
   ngOnInit(): void {
     this.isLoggedIn = this.authService.isLoggedIn();
     this.isAdmin=this.authService.isAdmin();
     this.isClient=this.authService.isClient();
     this.getCurrentUser();
   }
 
   
   getCurrentUser() {
     this.currentUser = this.authService.getCurrentUser(); // Utilisez la méthode du service pour obtenir les détails de l'utilisateur
   }
   logout(): void {
     
     this.authService.removeToken();
     window.location.href = '/login';
 
   }
   goToConsulter() {
    this.router.navigate(['/consulter']);
}

goToTableauDeclaration() {
    this.router.navigate(['/tableaux']);
}

goToInformations() {
    this.router.navigate(['/informations']);
}
goToMethodologie(){
  this.router.navigate(['/methodologie']);
}
goToPresentation(){
  this.router.navigate(['/presentation']);
}

goToPlans(){
  this.router.navigate(['/plans']);
}



 
 }
 