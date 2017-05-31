import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', loadChildren: 'app/contact/contact.module#ContactModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
