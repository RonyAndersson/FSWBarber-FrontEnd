import { Component } from '@angular/core';
import { BarraDeBuscaComponent } from '../barra-de-busca/barra-de-busca.component';

@Component({
  selector: 'app-menu-navegacao',
  standalone: true,
  imports: [BarraDeBuscaComponent],
  templateUrl: './menu-navegacao.component.html',
  styleUrl: './menu-navegacao.component.css'
})
export class MenuNavegacaoComponent {

}
