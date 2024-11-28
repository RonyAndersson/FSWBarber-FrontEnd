import { Component, OnInit } from '@angular/core';
import { CardConfirmadoComponent } from '../../card-confirmado/card-confirmado.component';
import { CardFinalizadoComponent } from '../../card-finalizado/card-finalizado.component';
import { MenuNavegacao2Component } from '../../menu-navegacao2/menu-navegacao2.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agendamentos',
  standalone: true,
  imports: [MenuNavegacao2Component,CardConfirmadoComponent,CardFinalizadoComponent,FooterComponent, CommonModule],
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.css']
})
export class AgendamentosComponent {

  reservasConfirmadas = [
    {
      id: 1,
      servico: 'Corte de Cabelo',
      barbearia: 'Manolo',
      data: '28 de Novembro',
      horario: '09:45',
      preco: 50,
    },
    {
      id: 2,
      servico: 'Barba',
      barbearia: 'Manolo',
      data: '22 de Novembro',
      horario: '10:30',
      preco: 30,
    },
  ];

  reservaSelecionada: any = null;
  isPopupVisible = false;

  selecionarReserva(id: number) {
    this.reservaSelecionada = this.reservasConfirmadas.find((r) => r.id === id);
  }

  cancelarReserva() {
    if (this.reservaSelecionada) {
      this.reservasConfirmadas = this.reservasConfirmadas.filter(
        (r) => r.id !== this.reservaSelecionada.id
      );
      this.reservaSelecionada = null;
      this.showPopup();
    }
  }

  showPopup() {
    this.isPopupVisible = true;
  }

  closePopup() {
    this.isPopupVisible = false;
  }

}
