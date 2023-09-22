import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrentUser } from '../models/User';

import { ProcessService } from '../services/process.service';
import { Process } from '../models/Process';

@Component({
  selector: 'app-consultationbilans',
  templateUrl: './consultationbilans.component.html',
  styleUrls: ['./consultationbilans.component.css']
})
export class ConsultationbilansComponent {
  isLoggedIn = false;

  isAdmin = false;
  isClient = false;
  filteredData: any[] = [];// Form group to handle filter inputs
  processs!: Process[];
  process!: Process
 
  id: any ; // Replace with the ID you want to fetch
   currentUser!: CurrentUser;
   
   constructor(private route: ActivatedRoute,private processService: ProcessService,private authService: AccountService,private router: Router) {
   
   }
   ngOnInit(): void {
     this.isLoggedIn = this.authService.isLoggedIn();
     this.isAdmin=this.authService.isAdmin();
     this.isClient=this.authService.isClient();
     this.getCurrentUser();
  
    
     this.id = this.route.snapshot.params['id'];

     this.processService.findProcessById(this.id).subscribe(
       data => {
         this.process = data; // Populate this.process with fetched data
         
         this.loadOrigineName();
         this.loadLocationName();

       },
       error => {
         console.error(error);
       }
     );
    
  
    
   }
   loadOrigineName() {
    this.processService.getOrigineNameForProcess(this.id).subscribe(
      response => {
        this.process.origineName = response.origineName;
      },
      error => {
        console.error(error);
      }
    );
  }
  /*loadSecteurName() {
    this.processService.getSousSecteurNameForProcess(this.id).subscribe(
      response => {
        this.process.secteurName = response.secteurName;
      },
      error => {
        console.error(error);
      }
    );
  }*/
  
  loadLocationName() {
    this.processService.getLocationNameForProcess(this.id).subscribe(
      response => {
        this.process.locationName = response.locationName;
      },
      error => {
        console.error(error);
      }
    );
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
 