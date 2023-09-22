import { Component, ViewChild } from '@angular/core';
import { AccountService } from '../services/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrentUser } from '../models/User';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Process } from '../models/Process';
import { ProcessService } from '../services/process.service';
import { MatPaginator } from '@angular/material/paginator';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-bilans',
  templateUrl: './bilans.component.html',
  styleUrls: ['./bilans.component.css'],
  providers: [DatePipe]
})
export class BilansComponent {
  isLoggedIn = false;
  currentUser!: CurrentUser;
  searchForm: FormGroup;
  processes!: Process[];
  filteredProcesses: Process[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSize = 10;
  pageIndex = 0;
  length = 0;

  constructor(
    private route: ActivatedRoute,
    private processService: ProcessService,
    private authService: AccountService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      association: [''],
      collectivite: [''],
      siren: [''],
      entreprise: [''],
      etat: [''],
      etablissement: [''],
      name: [''],
      anneeReporting: [''],
      secteur: [''],
      region: [''],
      soumise: [''],
      realise: [''],
    });
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.loadProcesses();
    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
    }
    this.getCurrentUser();
  }

  loadProcesses() {
    this.processService.getAllProcesss().subscribe(
      (data: Process[]) => {
        this.processes = data;
        this.length = this.processes.length;
        this.setPage(this.pageIndex);
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des processus :', error);
      }
    );
  }

  onPageChange(event: any) {
    this.setPage(event.pageIndex);
  }

  setPage(index: number) {
    this.pageIndex = index;
    const startIndex = this.pageIndex * this.pageSize;
    this.filteredProcesses = this.processes.slice(startIndex, startIndex + this.pageSize);
  }

  getCurrentUser() {
    this.currentUser = this.authService.getCurrentUser();
  }

  logout(): void {
    this.authService.removeToken();
    window.location.href = '/login';
  }

  onSubmit() {
    const formValues = this.searchForm.value;
    const name = formValues.name.toLowerCase();
    this.processService.searchByName(name).subscribe(
      (data: Process[]) => {
        this.processes = data;
        this.length = this.processes.length;
        this.setPage(this.pageIndex);
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des processus :', error);
      }
    );
  this.pageIndex = 0;
    this.length = this.filteredProcesses.length;
    this.setPage(this.pageIndex);
  }

  onConsulterButtonClick(item: any) {
    console.log('Consulter cliqué pour :', item);
  }

  consulter(id: any) {
    this.router.navigate(['consulter', id]);
  }
}
