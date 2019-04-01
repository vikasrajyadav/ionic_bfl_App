import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import { from } from 'rxjs';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { LoginService } from '../../api/login/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginPage implements OnInit {

  public type = 'password';
  public showPass = false;
  loginForm: FormGroup;
  constructor(private storage: Storage,
    private router: Router,
    private fb: FormBuilder,
    public auth: LoginService) {
  }

  userData: any;

  ngOnInit() {
    this.loginFormCreate();
  }

  loginFormCreate() {
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  showPassword() {
    this.showPass = !this.showPass;
    if (this.showPass) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

  onLogin() {
    this.storage.set('currentUser','test');
    this.router.navigateByUrl('/interests');
    // if (this.loginForm.valid) {
    //   console.log(this.loginForm.value);

    //   this.auth.userLogin(this.loginForm.value).then(res => {
    //     if (res.type === true) {

    //       this.userData = res.data;
    //       this.userData.token = res.token;

    //       localStorage.setItem('auth_token' , res.token);
    //       localStorage.setItem('currentUser' , JSON.stringify(this.userData));
    //       this.storage.set('currentUser', this.userData);
    //       this.router.navigateByUrl('/interests');
    //     }

    //   }, err => {
    //     // this.loadingCtrl.dismiss();
    //     // this.toastCtrl.presentToast('Something went wrong please try again',3000,'bottom',"fail",false,'close');
    //     console.log(err);
    //   });
    // } else {
    //   this.validateAllFormFields(this.loginForm);
    // }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
            this.validateAllFormFields(control);
      }
    });
  }

}
