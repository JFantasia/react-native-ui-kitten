import { Component, OnInit, OnDestroy, HostBinding, Renderer2 } from '@angular/core';
import { List } from 'immutable';
import { NgaMenuItem, NgaMenuService } from '@akveo/nga-theme/components/menu/menu.service';
import { Subscription } from 'rxjs/Subscription';
import { DocsService } from '../../docs/docs.service';

@Component({
  selector: 'react-header',
  styleUrls: ['react-header.component.scss'],
  template: `
    <div class="logo-container ui-kitten">
      <a routerLink="/">
        <svg class="svg-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 773.93 522.63"><defs><style>.cls-1,.cls-2{fill:none;stroke:#000;stroke-opacity:0.75;stroke-miterlimit:10;stroke-width:14px;}.cls-2{stroke-linecap:round;}</style></defs><title>Asset 16100</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M231.56,487a224.46,224.46,0,0,0-42.81-7.69,251.35,251.35,0,0,1-57.63-12.19l-.32-.11C99.07,456.5,63.85,448,37.38,426.54c-3.16-2.56-6.28-5.46-7.74-9.26-3-7.81,37.5-137.51,33.88-175.38-1.89-19.75-10.7-36.87-19.24-55C22.81,141.34,1.84,95.53,8.13,44.14,9.42,33.62,16.55,7,31.79,7,83.79,7,169.24,60.61,242,70.73h0a417.25,417.25,0,0,1,290,.14h0C604.69,60.81,690.19,7.33,742.19,7.33c15.24,0,22.34,26.64,23.62,37.17,6.24,51.39-14.77,97.18-36.29,142.73-9.85,20.84-17.58,52.39-18.82,55.29-7.24,17,36.44,167,33.45,174.77-1.46,3.8-4.57,6.7-7.74,9.26C709.95,448,674.73,456.5,643,467l-.32.11A261.68,261.68,0,0,1,589.08,479c-26,2.91-51.64,8.6-76.76,16l-17,5a390.1,390.1,0,0,1-217.75.38Z"/><path class="cls-2" d="M29.34,302.55c29,13,62.21,26.57,92.62,35.83"/><path class="cls-2" d="M19,338.74c26.19,11.77,59.56,25.31,87.05,33.68"/><path class="cls-2" d="M8.38,374.87c26.19,11.77,55.28,23.65,82.77,32"/><path class="cls-2" d="M736.83,303.73c-29,12.92-62.29,26.36-92.74,35.52"/><path class="cls-2" d="M747,340c-26.23,11.68-59.65,25.11-87.17,33.39"/><path class="cls-2" d="M757.55,376.12c-26.23,11.68-55.36,23.47-82.88,31.74"/><path class="cls-1" d="M387.25,282.73c27.85.09,44.33,9.46,65.16,22.1,19.06,11.57,41.33,26.75,64.52,26.75,24.49,0,102-38.12,108.94-62.07,5.68-19.54,2.65-44.51-6-63.53-6.38-13.94-22.42-21.59-35.65-27.56-62.74-28.27-128.34-41.79-196.9-43.58H387c-68.56,1.59-134.2,14.93-197,43-13.25,5.92-29.31,13.53-35.73,27.45-8.75,19-11.85,44-6.23,63.52,6.89,24,84.27,62.31,108.76,62.38,23.19.06,45.51-15.05,64.6-26.56,20.86-12.58,37.37-21.91,65.22-21.92Z"/><path class="cls-1" d="M635.49,118.82c2.41-13.6,29.69-14.64,79-62.73,2.78-2.72,17.55-20.33,25-18.69,7,1.56,5.41,17.83,5.34,21.55-.84,43.8-22.78,81.36-42.31,119.16-3.18,6.15-7.53,18.38-15.79,16.94-5.38-.94-15.85-1.31-26-54.08C656.26,118.19,633.67,129.06,635.49,118.82Z"/><path class="cls-1" d="M138.29,118c-2.35-13.58-29.66-14.76-78.77-63C56.74,52.25,42,34.58,34.62,36.2,27.56,37.73,29.15,54,29.2,57.73c.69,43.8,22.51,81.43,41.91,119.31,3.16,6.16,7.47,18.41,15.73,17,5.38-.92,15.85-1.26,26.2-54C117.52,117.28,140.06,128.22,138.29,118Z"/><path class="cls-1" d="M387.1,391c11.31,0,34.47-22.8,47.33-36.45a8.66,8.66,0,0,0-3.87-14.26c-11.25-3.27-28.22,1.24-44.13,1.44-17.31.22-33.69-3.83-44.43-.17a8.68,8.68,0,0,0-3.36,14.4C351.86,369,375.75,391,387.1,391Z"/><path class="cls-2" d="M382.72,391c0,20.7-15.3,37.49-34.17,37.49S314.39,411.7,314.39,391"/><path class="cls-2" d="M391.25,391c0,20.7,15.3,37.49,34.17,37.49S459.59,411.7,459.59,391"/></g></g></svg>
        UI kitten
      </a>
    </div>
    <div class="menu">
      <a routerLink="/home" routerLinkActive="active-link">HOME</a>
      <a routerLink="/docs" routerLinkActive="active-link">DOCUMENTATION</a>
    </div>
    <span> Need some help? Let us meow! 
      <a class="contact-us" href="mailto:contact@akveo.com"><b>contact@akveo.com</b></a>
    </span>
    <i class="menu-icon ion-navicon" (click)="toggleMenu()"></i>
    <nga-menu class="mobile-menu" [class.active]="isMenuActive" [items]="menuItems"></nga-menu>
  `,
})

export class ReactHeaderComponent implements OnInit, OnDestroy {

  isMenuActive: boolean = false;
  menuItems: List<NgaMenuItem> = List([]);

  private structure: any;
  private menuSubscription: Subscription;

  @HostBinding('class.transparent')
  private transparent: boolean = true;

  constructor(private service: DocsService,
              private menuService: NgaMenuService,
              private renderer: Renderer2) {
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
    this.isMenuActive ?
      this.renderer.addClass(document.body, 'scrolless') :
      this.renderer.removeClass(document.body, 'scrolless');
  }

  ngOnInit() {
    this.menuItems = this.service.getPreparedMenu([
      {title: 'Home', link: '/home'},
      {title: 'Docs', link: '/docs'}
    ]);
    this.structure = this.service.getPreparedStructure();
    this.menuSubscription = this.menuService.onItemSelect().subscribe(event => {
      if (this.isMenuActive)
      this.toggleMenu();
    });
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'scrolless');
    this.menuSubscription.unsubscribe();
  }
}
