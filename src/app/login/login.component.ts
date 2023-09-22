import { Component, OnInit } from '@angular/core';
import { CurrentUser, LoginUser } from '../models/User';
import { AccountService } from '../services/account.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: LoginUser = {} as LoginUser;
  isLoggedIn = false;
  buttonText: string = "Login";
  type: string ="password";
  isText: boolean = false;
  currentUser!: CurrentUser;
  eyeIcon: string = "fa-eye-slash";
  registerForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,private accountService: AccountService,private router: Router) { 
    this.retrieveTokenFromCookie();
    this.registerForm = this.formBuilder.group({
    
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.buttonText = "Login";
    this.isLoggedIn = this.accountService.isLoggedIn();

    // Vérifier si l'utilisateur est connecté
    /*if (!this.isLoggedIn) {
      this.router.navigate(['/home']);
    }*/
    this.getCurrentUser();
  }
  getCurrentUser() {
    this.currentUser = this.accountService.getCurrentUser(); // Utilisez la méthode du service pour obtenir les détails de l'utilisateur
  }
  logout(): void {
    
    this.accountService.removeToken();
    window.location.href = '/login';

  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type="password";
  }
  addUser() {
    this.buttonText = "Loading...";
    if(this.registerForm.valid){
    this.accountService.login(this.form).subscribe(
      (data) => {
        this.accountService.registerToken(data);
        
        alert("Login is a success !");
        console.log(this.accountService.getCurrentUser());
        if(this.accountService.getCurrentUser().role === 'ROLE_ADMIN'){
        window.location.href = "/homeadmin";
      }
        else{
          window.location.href = "/homeclient";
        }
      },
      (e) => {
        console.log(e);
       
      }
    );
    }
    else{
      this.validateAllFormFields(this.registerForm);
      alert("your form is invalid")
    }
  }
  private validateAllFormFields(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(field=>{
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control?.markAsDirty({onlySelf:true})
      }else if (control instanceof FormGroup){
        this.validateAllFormFields(control)
      }
    })
  }
  private sessionTokenName = "Token";
  retrieveTokenFromCookie() {
    const tokenFromCookie = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    if (tokenFromCookie) {
      sessionStorage.setItem(this.sessionTokenName, tokenFromCookie);
    }
  }
  
}
