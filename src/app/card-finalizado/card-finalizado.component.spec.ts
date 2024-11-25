import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFinalizadoComponent } from './card-finalizado.component';

describe('CardFinalizadoComponent', () => {
  let component: CardFinalizadoComponent;
  let fixture: ComponentFixture<CardFinalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFinalizadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
