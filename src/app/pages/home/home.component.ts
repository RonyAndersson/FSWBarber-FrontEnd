import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { CardComponent } from '../card/card.component';
import { MenuNavegacaoComponent } from '../menu-navegacao/menu-navegacao.component';
import { BarraDeBuscaComponent } from '../barra-de-busca/barra-de-busca.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BarberShopService } from '../services/barber-shop/barber-shop.service';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports:[ReactiveFormsModule, CommonModule, AppComponent, CardComponent, MenuNavegacaoComponent, BarraDeBuscaComponent, GalleryComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
