import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../../components/card/card.component';
import { MenuNavegacaoComponent } from '../../components/menu-navegacao/menu-navegacao.component';
import { BarraDeBuscaComponent } from '../../components/barra-de-busca/barra-de-busca.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports:[ReactiveFormsModule, CommonModule, CardComponent, MenuNavegacaoComponent, BarraDeBuscaComponent, GalleryComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
