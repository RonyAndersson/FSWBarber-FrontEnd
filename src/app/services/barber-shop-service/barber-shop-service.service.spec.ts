/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { BarberShopServicesService } from './barber-shop-service.service';

describe('Service: BarberShopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarberShopServicesService]
    });
  });

  it('should ...', inject([BarberShopServicesService], (service: BarberShopServicesService) => {
    expect(service).toBeTruthy();
  }));
});
