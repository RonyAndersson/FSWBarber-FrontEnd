import { Component, OnInit } from '@angular/core';
import { CardConfirmadoComponent } from '../../card-confirmado/card-confirmado.component';
import { CardFinalizadoComponent } from '../../card-finalizado/card-finalizado.component';
import { MenuNavegacao2Component } from '../../menu-navegacao2/menu-navegacao2.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-agendamentos',
  standalone: true,
  imports: [MenuNavegacao2Component,CardConfirmadoComponent,CardFinalizadoComponent,FooterComponent],
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.css']
})
export class AgendamentosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
