import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConfirmadoComponent } from './card-confirmado.component';

describe('CardConfirmadoComponent', () => {
  let component: CardConfirmadoComponent;
  let fixture: ComponentFixture<CardConfirmadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardConfirmadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardConfirmadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
