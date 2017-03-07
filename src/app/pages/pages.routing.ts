import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { AuthGuard } from './_guards'
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule',canActivate: [AuthGuard] },
      { path: 'editors', loadChildren: 'app/pages/editors/editors.module#EditorsModule',  canActivate: [AuthGuard]},
      { path: 'components', loadChildren: 'app/pages/components/components.module#ComponentsModule',canActivate: [AuthGuard] },
      { path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule' ,canActivate: [AuthGuard]},
      { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule' ,canActivate: [AuthGuard]},
      { path: 'forms', loadChildren: 'app/pages/forms/forms.module#FormsModule',canActivate: [AuthGuard] },
      { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule' ,canActivate: [AuthGuard]},
      { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule',canActivate: [AuthGuard] }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
