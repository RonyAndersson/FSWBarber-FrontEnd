import { Component } from '@angular/core';
import { ReserveDrawerComponent } from '../reserve-drawer/reserve-drawer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicos-cards',
  standalone: true,
  imports: [ReserveDrawerComponent, FormsModule, CommonModule],
  templateUrl: './servicos-cards.component.html',
  styleUrl: './servicos-cards.component.css'
})
export class ServicosCardsComponent {

  drawerOpen = false;
  selectedService: any = null;

  openDrawer(service: any): void {
    this.selectedService = service;
    this.drawerOpen = true;
  }

  closeDrawer(): void {
    this.drawerOpen = false;
    this.selectedService = null;
  }
}
