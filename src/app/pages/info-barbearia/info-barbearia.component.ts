import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { MenuNavegacao2Component } from '../../menu-navegacao2/menu-navegacao2.component';
import { ServicosCardsComponent } from '../../servicos-cards/servicos-cards.component';


@Component({
  selector: 'app-info-barbearia',
  standalone: true,
  imports: [MenuNavegacao2Component, FooterComponent, ServicosCardsComponent],
  templateUrl: './info-barbearia.component.html',
  styleUrls: ['./info-barbearia.component.css']
})
export class InfoBarbeariaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
