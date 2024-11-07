import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BarberShopService } from '../services/barber-shop/barber-shop.service';
import { BarberShopModel } from '../model/barber-shop.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  public barberShop = new Array<BarberShopModel>;

  constructor(private readonly _router: Router, private readonly _barberShopService: BarberShopService) {}

  ngOnInit(): void {
     this.getBarberShop();
  }

  public buttonReserva(): void {
     this._router.navigate(['teste'])
  }

  private getBarberShop(): void {
    this._barberShopService.getBarberShops().subscribe({
      next: (resp) => {
        this.barberShop = resp;
        this.barberShop.forEach((barbers) => {
          barbers.name;
          barbers.address;
        })
      }, error: (error) => {
        console.log(error);
      }
    })
  }

}
