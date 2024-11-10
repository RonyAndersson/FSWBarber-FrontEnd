import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosCardsComponent } from './servicos-cards.component';

describe('ServicosCardsComponent', () => {
  let component: ServicosCardsComponent;
  let fixture: ComponentFixture<ServicosCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicosCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicosCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
