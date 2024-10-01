import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { MenuNavegacaoComponent } from './menu-navegacao/menu-navegacao.component';
import { BarraDeBuscaComponent } from './barra-de-busca/barra-de-busca.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FSWBarbeariaFrontEnd';
}
