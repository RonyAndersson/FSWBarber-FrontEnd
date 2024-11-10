import { Component, OnInit } from '@angular/core';
import { MenuNavegacaoComponent } from '../../menu-navegacao/menu-navegacao.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MenuNavegacaoComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
