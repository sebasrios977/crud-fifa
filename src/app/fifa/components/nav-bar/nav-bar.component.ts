import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuItems } from 'src/app/interfaces/menuItems.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  public navbarVisible: boolean = false;
  public activeItem: MenuItem | undefined;
  public menuItems: MenuItems[] = [
    { label: 'Teams', routerLink: 'teams' },
    { label: 'Search', routerLink: 'search-teams' },
    { label: 'Create', routerLink: 'create-teams' },
  ];
}
