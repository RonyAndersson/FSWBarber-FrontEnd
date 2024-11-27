import { AfterViewInit, Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { BarberShopService } from '../services/barber-shop/barber-shop.service';
import { BarberShopModel } from '../model/barber-shop.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Swiper } from 'swiper';
import 'swiper/swiper-bundle.css';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./car.component.css']
})
export class CardComponent implements OnInit {

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
}
