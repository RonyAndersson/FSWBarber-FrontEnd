import { Component, OnInit } from '@angular/core';
import { MenuNavegacao2Component } from '../../menu-navegacao2/menu-navegacao2.component';
import { ServicosCardsComponent } from '../../servicos-cards/servicos-cards.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { BarberShopService } from '../../services/barber-shop/barber-shop.service';
import { BarberShopServicesService } from '../../services/barber-shop-service/barber-shop-service.service';


@Component({
  selector: 'app-info-barbearia',
  standalone: true,
  imports: [MenuNavegacao2Component, FooterComponent, ServicosCardsComponent],
  templateUrl: './info-barbearia.component.html',
  styleUrls: ['./info-barbearia.component.css']
})
export class InfoBarbeariaComponent implements OnInit {

  public barberShop: any = null;
  public services: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private barberShopService: BarberShopService,
    private barberShopServiceService: BarberShopServicesService
  ) {}

  ngOnInit(): void {
    const barberShopId = this.route.snapshot.params['id'];
    this.getBarberShopDetails(barberShopId);
    this.getBarberShopServices(barberShopId);
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
