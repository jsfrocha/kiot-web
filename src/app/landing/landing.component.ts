import {AfterViewInit, Component, HostListener, Inject, OnInit, Renderer} from '@angular/core';
import {WindowRef} from "../_services/window.service";
import {DOCUMENT} from "@angular/platform-browser";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit {

  constructor(
    private renderer: Renderer,
    private _window: WindowRef,
    @Inject(DOCUMENT) private _document: Document
  ) { }

  @HostListener('window:resize', ['$event'])
  resizeWindow() {
    const heroEl = this._document.getElementById('hero');
    this.renderer.setElementStyle(heroEl, 'width', `${this._window.nativeWindow.innerWidth}px`);
    this.renderer.setElementStyle(heroEl, 'height', `${this._window.nativeWindow.innerHeight}px`);
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.resizeWindow();
  }

}
