import { Component, OnInit } from '@angular/core';
import { BarraDeBuscaComponent } from '../components/barra-de-busca/barra-de-busca.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-navegacao2',
  standalone: true,
  imports: [BarraDeBuscaComponent],
  templateUrl: './menu-navegacao2.component.html',
  styleUrl: './menu-navegacao2.component.css'
})
export class MenuNavegacao2Component implements OnInit {

  constructor(private readonly _router: Router) {}

  ngOnInit(): void {
  }

  public navigateLogin(): void {
   this._router.navigate(['/login']);
  }
}
