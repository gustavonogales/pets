import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  readonly menuItems: Array<PoMenuItem> = [
    { label: 'Donos', link: '/owners' },
    { label: 'Pets', link: '/pets' }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
