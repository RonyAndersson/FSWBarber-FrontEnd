import { Component, Input } from '@angular/core';
import { BarraDeBuscaComponent } from '../barra-de-busca/barra-de-busca.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-navegacao',
  standalone: true,
  imports: [BarraDeBuscaComponent],
  templateUrl: './menu-navegacao.component.html',
  styleUrl: './menu-navegacao.component.css'
})
export class MenuNavegacaoComponent {

  @Input() username!: string | void;

  constructor(private readonly _router: Router) {}

  public navigateLogin(): void {
    this._router.navigate(['/login']);
   }

   public navigateToAgendamentos(): void {
    this._router.navigate(['/agendamentos']);
   }

   public logout(): void {
    this.username = sessionStorage.clear();
   }

}
