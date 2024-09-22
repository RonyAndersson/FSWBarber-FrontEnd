/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { BarberShopService } from './barber-shop.service';

describe('Service: BarberShop', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarberShopService]
    });
  });

  it('should ...', inject([BarberShopService], (service: BarberShopService) => {
    expect(service).toBeTruthy();
  }));
});
