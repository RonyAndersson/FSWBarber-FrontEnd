import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuNavegacaoComponent } from '../../components/menu-navegacao/menu-navegacao.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, MenuNavegacaoComponent],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  user = {
    name: '',
    birthDate: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  public register() {
    if (this.user.password !== this.user.confirmPassword) {
      alert('As senhas não correspondem!');
      return;
    }

    this.authService.register(this.user).subscribe(
      (response) => {
        alert('Cadastro realizado com sucesso!');
        console.log(response);
        this.router.navigate(['login']);
      },
      (error) => {
        alert('Erro ao cadastrar: ' + error.error);
        console.error(error);
      }
    );
  }
}
