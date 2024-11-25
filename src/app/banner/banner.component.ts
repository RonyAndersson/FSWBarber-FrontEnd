import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { BarraDeBuscaComponent } from '../components/barra-de-busca/barra-de-busca.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [BarraDeBuscaComponent, CardComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

}
