import { Component } from '@angular/core';
import { BarraDeBuscaComponent } from '../barra-de-busca/barra-de-busca.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [BarraDeBuscaComponent, CardComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

}
