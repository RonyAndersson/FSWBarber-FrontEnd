import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavegacaoComponent } from './menu-navegacao.component';

describe('MenuNavegacaoComponent', () => {
  let component: MenuNavegacaoComponent;
  let fixture: ComponentFixture<MenuNavegacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuNavegacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuNavegacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
