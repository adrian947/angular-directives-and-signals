import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';

interface MenuItem {
  name: string;
  path: string;
}

@Component({
  selector: 'app-side-menu',
  standalone: true,
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule],
})
export class SideMenuComponent {
  public menuItems = signal<MenuItem[]>([
    { name: 'Products', path: 'products' },
    { name: 'About', path: 'about' },
    { name: 'Counter', path: 'signals/counter' },
    { name: 'User Info', path: 'signals/user-info' },
    { name: 'Properties', path: 'signals/properties' },
  ]);

  // public menuItems = [
  //   { name: 'Products', path: 'products' },
  //   { name: 'About', path: 'about' },
  //   { name: 'Counter', path: 'signals/counter' },
  //   { name: 'User Info', path: 'signals/user-info' },
  //   { name: 'Properties', path: 'signals/properties' },
  // ];
}
