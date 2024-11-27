import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BarberShopModel } from '../../model/barber-shop.model';
import { Router } from '@angular/router';
import { BarberShopService } from '../../services/barber-shop/barber-shop.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {

  public barberShops = new Array<BarberShopModel>;

  constructor(private readonly _router: Router, private readonly _barberShopService: BarberShopService) {}

  ngOnInit(): void {
    this.getBarberShops();
  }

  public buttonReserva(): void {
     this._router.navigate(['teste'])
  }

  public getBarberShops(): void {
    this._barberShopService.getBarberShops().subscribe({
      next: (resp) => {
        this.barberShops = resp;
        console.log('Dados recebidos', resp);
      },
      error: (erro) => {
        console.error('Erro ao buscar dados', erro);
      }
    })
  }

  public reserveBarberShop(barberShopId: number): void {
    this._router.navigate(['infoBarbearia'])
    console.log(`Reservando barbearia com ID: ${barberShopId}`);
  }

}
