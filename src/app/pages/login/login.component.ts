import { Component, OnInit } from '@angular/core';
import { MenuNavegacaoComponent } from '../../components/menu-navegacao/menu-navegacao.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MenuNavegacaoComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credentials = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  public login() {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        alert('Login realizado com sucesso!');
        console.log(response);
        sessionStorage.setItem('userName', response.name);
        this.router.navigate(['home'])
      },
      (error) => {
        alert('Erro ao fazer login: ' + (error.error.message || 'Verifique suas credenciais.'));
        console.error(error);
      }
    );
  }

  public goToCadastro(): void {
    this.router.navigate(['cadastro']);
  }

}
