import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {path: 'dashboard', component : DashboardComponent, data: { title: 'Dashboard'}},
            {path: 'progress', component : ProgressComponent, data: { title: 'Progress'}},
            {path: 'graphics1', component : Graphics1Component, data: { title: 'Graphics'}},
            {path: 'promises', component : PromisesComponent, data: { title: 'Promises'}},
            {path: 'account-settings', component : AccountSettingsComponent, data: { title: 'Account Settings'}},
            {path: 'rxjs', component : RxjsComponent, data: { title: 'RxJs'}},
            {path: '', redirectTo : '/dashboard', pathMatch: 'full'},
        ]
    },
];
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
