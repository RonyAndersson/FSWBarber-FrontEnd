import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports:[],
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit() {
  }

  public navigateHome(): void {
    this.router.navigate(['home'])
  }

}
