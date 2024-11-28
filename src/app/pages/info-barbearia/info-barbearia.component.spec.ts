/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InfoBarbeariaComponent } from './info-barbearia.component';

describe('InfoBarbeariaComponent', () => {
  let component: InfoBarbeariaComponent;
  let fixture: ComponentFixture<InfoBarbeariaComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ InfoBarbeariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBarbeariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
