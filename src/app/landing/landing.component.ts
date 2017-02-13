import {AfterViewInit, Component, HostListener, Inject, OnInit, Renderer} from '@angular/core';
import {WindowRef} from "../_services/window.service";
import {DOCUMENT} from "@angular/platform-browser";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LandingService} from "./landing.service";
import {FormValidators} from "../_shared/validators.class";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  providers: [ LandingService ]
})
export class LandingComponent implements OnInit, AfterViewInit {

  contactForm: FormGroup;
  submitLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private renderer: Renderer,
    private _window: WindowRef,
    @Inject(DOCUMENT) private _document,
    private landingService: LandingService
  ) { }

  @HostListener('window:resize', ['$event'])
  resizeWindow() {
    const heroEl = this._document.getElementById('hero');
    this.renderer.setElementStyle(heroEl, 'width', `${this._window.nativeWindow.innerWidth}px`);
    this.renderer.setElementStyle(heroEl, 'height', `${this._window.nativeWindow.innerHeight}px`);
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, FormValidators.validateEmail]],
      message: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    this.resizeWindow();
  }

  public submitForm() {
    console.log('form', this.contactForm);
    if (this.contactForm.valid) {
      this.submitLoading = true;

      const contactInfo = {
        email: this.contactForm.controls['email'].value,
        message: this.contactForm.controls['message'].value
      };

      this.landingService.sendIndicationOfInterests(contactInfo)
        .subscribe(
          (result) => {
            console.log('post result', result);
            this.submitLoading = false;
            this.onSubmit(true);
          },
          (err) => {
            console.log('post err', err);
            this.submitLoading = false;
            this.onSubmit(true);
          }
        )
    }
  }

  public retryForm(event) {
    event.preventDefault();
    event.stopPropagation();

    this.onRetryForm();
  }

  onSubmit(isSuccess: boolean) {
    const formEl = this._document.getElementById('contact-form');

    this.renderer.setElementClass(formEl, 'edp-form-submitted', true);
    this.renderer.setElementClass(formEl, 'edp-form-success', false);
    this.renderer.setElementClass(formEl, 'edp-form-error', false);

    if (isSuccess) {
      this.renderer.setElementClass(formEl, 'edp-form-success', true);
      setTimeout(() => {
        this.renderer.setElementClass(formEl, 'edp-form-success', false);
        this.onRetryForm();
      }, 5000);
    } else {
      this.renderer.setElementClass(formEl, 'edp-form-error', true);
    }

  }

  onRetryForm() {
    const formEl = this._document.getElementById('contact-form');

    this.renderer.setElementClass(formEl, 'edp-form-submitted', false);
    this.renderer.setElementClass(formEl, 'edp-form-success', false);
    this.renderer.setElementClass(formEl, 'edp-form-error', false);
  }



}
