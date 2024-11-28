import { Component, OnInit } from '@angular/core';
import { MenuNavegacao2Component } from '../../menu-navegacao2/menu-navegacao2.component';
import { ServicosCardsComponent } from '../../servicos-cards/servicos-cards.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { BarberShopService } from '../../services/barber-shop/barber-shop.service';
import { BarberShopServicesService } from '../../services/barber-shop-service/barber-shop-service.service';
import { PopUpComponent } from '../../pop-up/pop-up.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-info-barbearia',
  standalone: true,
  imports: [MenuNavegacao2Component, FooterComponent, ServicosCardsComponent, PopUpComponent, CommonModule],
  templateUrl: './info-barbearia.component.html',
  styleUrls: ['./info-barbearia.component.css']
})
export class InfoBarbeariaComponent implements OnInit {

  public barberShop: any = null;
  public services: any[] = [];
  isDrawerOpen = false;
  isPopupVisible = false;
  times = ['09:00', '09:45', '10:30', '11:15', '12:00'];
  selectedDate: number | null = null;
  selectedTime: string | null = null;
  currentMonth: string = 'Novembro';
  currentYear: number = 2024;
  weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  daysInMonth: { day: number | null; weekday: number }[] = [];

  constructor(
    private route: ActivatedRoute,
    private barberShopService: BarberShopService,
    private barberShopServiceService: BarberShopServicesService,
    private router: Router
  ) {this.generateCalendar(30, 5);}

  ngOnInit(): void {
    const barberShopId = this.route.snapshot.params['id'];
    this.getBarberShopDetails(barberShopId);
    this.getBarberShopServices(barberShopId);
  }

  generateCalendar(days: number, startDay: number) {
    this.daysInMonth = Array.from({ length: 42 }, (_, i) => {
      const day = i - startDay + 1;
      return {
        day: day > 0 && day <= days ? day : null,
        weekday: i % 7,
      };
    });
  }

  previousMonth() {
    console.log('Mês anterior');
  }

  nextMonth() {
    console.log('Próximo mês');
  }

  selectDate(day: number) {
    this.selectedDate = day;
  }

  openDrawer() {
    this.isDrawerOpen = true;
  }

  closeDrawer() {
    this.isDrawerOpen = false;
    this.selectedTime = '';
  }

  confirmReservation() {
    if (this.selectedDate && this.selectedTime) {
      this.isDrawerOpen = false;
      this.showPopup();
    } else {
      alert('Por favor, selecione uma data e horário antes de confirmar.');
    }
  }

  closePopup() {
    this.isPopupVisible = false;
    this.router.navigate(['home']);
  }

  showPopup() {
    this.isPopupVisible = true;
  }

  selectTime(time: string) {
    this.selectedTime = time;
  }

  private getBarberShopDetails(id: number): void {
    this.barberShopService.getBarberShopById(id).subscribe({
      next: (data) => (this.barberShop = data),
      error: (err) => console.error('Erro ao carregar a barbearia:', err),
    });
  }

  private getBarberShopServices(id: number): void {
    this.barberShopServiceService.getServicesByBarberShop(id).subscribe({
      next: (data) => (this.services = data),
      error: (err) => console.error('Erro ao carregar os serviços:', err),
    });
  }

}
