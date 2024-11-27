import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-reserve-drawer',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,],
  templateUrl: './reserve-drawer.component.html',
  styleUrls: ['./reserve-drawer.component.css'],
})
export class ReserveDrawerComponent {

  @Input() selectedService: any;
  selectedDate: string | null = null;
  selectedTime: string | null = null;

  availableTimes: string[] = ['09:00', '09:45', '10:30', '11:15', '12:00'];

  selectTime(time: string): void {
    this.selectedTime = time;
  }

  confirmReservation(): void {
    if (this.selectedDate && this.selectedTime) {
      const reservation = {
        serviceId: this.selectedService?.id,
        date: this.selectedDate,
        time: this.selectedTime,
      };
      console.log('Reserva confirmada:', reservation);
    } else {
      alert('Por favor, selecione uma data e um horário.');
    }
  }
}
