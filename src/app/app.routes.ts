import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { AgendamentosComponent } from './pages/agendamentos/agendamentos.component';
import { InfoBarbeariaComponent } from './pages/info-barbearia/info-barbearia.component';
import { AgendamentosFinalizadosComponent } from './pages/agendamentos-finalizados/agendamentos-finalizados.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'agendamentos',
    component: AgendamentosComponent
  },
  {
    path: 'infoBarbearia',
    component: InfoBarbeariaComponent
  },
  {
    path: 'agendamentosFinalizados',
    component: AgendamentosFinalizadosComponent
  }
];
