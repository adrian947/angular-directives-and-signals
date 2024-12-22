import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { CounterComponent } from './pages/counter/counter.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { SignalsLayoutComponent } from './pages/signalsLayout/signalsLayout.component';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'signals',
    component: SignalsLayoutComponent,
    children: [
      { path: 'counter', component: CounterComponent, title: 'Counter' },
      { path: 'user-info', component: UserInfoComponent, title: 'User-info' },
      {
        path: 'properties',
        component: PropertiesComponent,
        title: 'Properties',
      },
      { path: '**', redirectTo: 'counter' },
    ],
  },
  {
    path: '**',
    redirectTo: 'products',
  },
];
