import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BarraDeBuscaComponent } from './barra-de-busca/barra-de-busca.component';
import { MenuNavegacaoComponent } from './menu-navegacao/menu-navegacao.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { BannerComponent } from './banner/banner.component';
import { CardConfirmadoComponent } from './card-confirmado/card-confirmado.component';
import { CardFinalizadoComponent } from './card-finalizado/card-finalizado.component';
import { MenuNavegacao2Component } from './menu-navegacao2/menu-navegacao2.component';
import { AgendamentosComponent } from "./pages/agendamentos/agendamentos.component";
import { ServicosCardsComponent } from './servicos-cards/servicos-cards.component';
import { info } from 'console';
import { InfoBarbeariaComponent } from './pages/info-barbearia/info-barbearia.component';
import { AgendamentosFinalizadosComponent } from "./pages/agendamentos-finalizados/agendamentos-finalizados.component";
import { LoginComponent } from "./pages/login/login.component";
import { CadastroComponent } from './pages/cadastro/cadastro.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuNavegacaoComponent,GalleryComponent, FooterComponent, CardComponent, BarraDeBuscaComponent, LoginuserComponent, BannerComponent, CardConfirmadoComponent, CardFinalizadoComponent, MenuNavegacao2Component, AgendamentosComponent, ServicosCardsComponent, InfoBarbeariaComponent, AgendamentosFinalizadosComponent, LoginComponent,CadastroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FSWBarbeariaFrontEnd';
}
