import { Routes } from '@angular/router';
import { languageGuard } from './core/i18n/language.guard';

export const routes: Routes = [
    {
        path: ':lang',
        canActivate: [languageGuard],
        children: [
            {
                path: '',
                loadComponent: () => import('./home/home').then((module) => module.Home),
            },
            {
                path: 'freelancer',
                loadComponent: () => import('./freelancer/freelancer').then((module) => module.Freelancer),
            },
            {
                path: 'hiring',
                loadComponent: () => import('./hiring/hiring').then((module) => module.Hiring),
            },
        ]
    },

    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'es'
    },

    {
        path: '**',
        redirectTo: 'es'
    }
];
