import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveDrawerComponent } from './reserve-drawer.component';

describe('ReserveDrawerComponent', () => {
  let component: ReserveDrawerComponent;
  let fixture: ComponentFixture<ReserveDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReserveDrawerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
