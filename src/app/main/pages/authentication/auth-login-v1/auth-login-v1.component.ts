import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";

import { first, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

import { CoreConfigService } from "@core/services/config.service";
import { SupabaseService } from "@core/services/supabase.service";
import { Router } from "@angular/router";
import { AuthenticationService } from "app/auth/service";

@Component({
  selector: "app-auth-login-v1",
  templateUrl: "./auth-login-v1.component.html",
  styleUrls: ["./auth-login-v1.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AuthLoginV1Component implements OnInit {
  //  Public
  public coreConfig: any;
  public loginForm: UntypedFormGroup;
  public submitted = false;
  public passwordTextType: boolean;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {FormBuilder} _formBuilder
   */
  constructor(private _coreConfigService: CoreConfigService, private _formBuilder: UntypedFormBuilder, private supabase: SupabaseService, private router: Router, private _authenticationService: AuthenticationService) {
    this._unsubscribeAll = new Subject();

    // Configure the layout
    this._coreConfigService.config = {
      layout: {
        navbar: {
          hidden: true,
        },
        menu: {
          hidden: true,
        },
        footer: {
          hidden: true,
        },
        customizer: false,
        enableLocalStorage: false,
      },
    };
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  /**
   * Toggle password
   */
  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  /**
   * On Submit
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this._authenticationService
      .login("admin@demo.com", "admin")
      .pipe(first())
      .subscribe((data) => {});

    this.getToken();
  }

  async getToken() {
    const { data, error } = await this.supabase.signIn(this.f.email.value, this.f.password.value);
    if (error) {
      console.error(error);
      return;
    }

    if (data) {
      localStorage.setItem("userJWT", data.session.access_token);
      this.router.navigate(["/dashboard/ecommerce"]);
    }
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });

    // Subscribe to config changes
    this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe((config) => {
      this.coreConfig = config;
    });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
