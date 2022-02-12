import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/user';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  //declare variables
  loginForm!: FormGroup;
  isSubmitted = false;
  error = '';
  loginUser: any = new User();


  //constructor injection
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {

    //create a reactive form model
    this.loginForm = this.formBuilder.group(
      {
        //form control names
        UserName: ['', [Validators.required]],
        UserPassword: ['', [Validators.required]]
      }
    );
  }

  //get controls for validation
  get formControls() {
    return this.loginForm.controls;
  }

  //login Verify
  loginCredentials() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      console.log("Submitted invalid Credentials ");
      this.error = "";
      return;
    }
    if (this.loginForm.valid) {
      console.log("submitted valid credentials")
      this.error = "";
      //calling method from authservice 
      this.authService.loginVerify(this.loginForm.value).subscribe
        (
          data => {
            console.log(data);
            this.loginUser = data;
            //UserName,RoleId and Token
            sessionStorage.setItem('jwtToken',this.loginUser.token)


            //check the role based on roleid ,it redirects to respective page
            if (this.loginUser.RoleId === 1) {
              console.log("ADMIN");

              this.router.navigateByUrl('/admin');
              localStorage.setItem("USERNAME", this.loginUser.UserName);
              localStorage.setItem("ACCESSROLE", this.loginUser.RoleId);
              sessionStorage.setItem("USERNAME", this.loginUser.UserName);

            }
            else if (this.loginUser.RoleId === 2) {
              console.log("Manager");
              localStorage.setItem("USERNAME", this.loginUser.UserName);
              localStorage.setItem("ACCESSROLE", this.loginUser.RoleId);
              sessionStorage.setItem("USERNAME", this.loginUser.UserName);

              this.router.navigateByUrl('/manager');
            }
            else if (this.loginUser.RoleId === 3) {
              console.log("Coordinator");
              localStorage.setItem("USERNAME", this.loginUser.UserName);
              localStorage.setItem("ACCESSROLE", this.loginUser.RoleId);
              sessionStorage.setItem("USERNAME", this.loginUser.UserName);

              this.router.navigateByUrl('/coordinator');
            }
            else if (this.loginUser.RoleId === 4) {
              console.log("User");
              localStorage.setItem("USERNAME", this.loginUser.UserName);
              localStorage.setItem("ACCESSROLE", this.loginUser.RoleId);
              sessionStorage.setItem("USERNAME", this.loginUser.UserName);

              this.router.navigateByUrl('/user');
            }
            else {
              this.error = "Sorry ! NOT authenticate/authorize to access this module"
            }
          },
          error => {
            this.error = "Invalid username or password try again!"
          }
        );
    }
  }
          //logout
          register()
          {
            this.router.navigateByUrl('signup');
          }
  
}
