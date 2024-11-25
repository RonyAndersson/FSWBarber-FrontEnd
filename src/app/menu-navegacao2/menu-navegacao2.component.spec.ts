import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavegacao2Component } from './menu-navegacao2.component';

describe('MenuNavegacao2Component', () => {
  let component: MenuNavegacao2Component;
  let fixture: ComponentFixture<MenuNavegacao2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuNavegacao2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuNavegacao2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
