import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { CardComponent } from '../../card/card.component';
import { Router } from '@angular/router';
import { MenuNavegacaoComponent } from '../../components/menu-navegacao/menu-navegacao.component';
import { BarraDeBuscaComponent } from '../../components/barra-de-busca/barra-de-busca.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports:[ReactiveFormsModule, CommonModule, AppComponent, CardComponent, MenuNavegacaoComponent, BarraDeBuscaComponent, GalleryComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  userName: string | null = '';
  currentDate: string = '';

  ngOnInit(): void {
    this.userName = sessionStorage.getItem('userName') || 'Olá, Faça seu login!';

    this.currentDate = this.formatDate(new Date());
  }

  private formatDate(date: Date): string {
    const daysOfWeek = [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado',
    ];
    const months = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];

    return `${dayOfWeek}, ${day} de ${month}`;
  }
}
