import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-confirmado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-confirmado.component.html',
  styleUrl: './card-confirmado.component.css'
})
export class CardConfirmadoComponent {

  @Input() reservas: any[] = [];
  @Output() reservaCancelada = new EventEmitter<number>();

  cancelarReserva(id: number) {
    this.reservaCancelada.emit(id);
  }

}
