import { Routes } from '@angular/router';
import { TesteComponent } from './teste/teste.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'teste',
        component: TesteComponent
    }
];
