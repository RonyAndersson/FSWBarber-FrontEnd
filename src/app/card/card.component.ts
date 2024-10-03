import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { BarberShopService } from '../services/barber-shop/barber-shop.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

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
        console.log('Dados recebidos', resp);
      },
      error: (erro) => {
        console.error('Erro ao buscar dados', erro);
      }
    })
  }
}
