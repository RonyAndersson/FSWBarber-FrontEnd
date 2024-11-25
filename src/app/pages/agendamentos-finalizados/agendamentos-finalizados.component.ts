import { Component, OnInit } from '@angular/core';
import { MenuNavegacao2Component } from '../../menu-navegacao2/menu-navegacao2.component';
import { CardFinalizadoComponent } from '../../card-finalizado/card-finalizado.component';
import { FooterComponent } from '../../components/footer/footer.component';


@Component({
  selector: 'app-agendamentos-finalizados',
  standalone: true,
  imports: [MenuNavegacao2Component,CardFinalizadoComponent,FooterComponent],
  templateUrl: './agendamentos-finalizados.component.html',
  styleUrls: ['./agendamentos-finalizados.component.css']
})
export class AgendamentosFinalizadosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
