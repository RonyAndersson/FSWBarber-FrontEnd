import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarberShopServicesService {

  private readonly URL_API = 'http://localhost:8080/barbershops';

constructor(private readonly _httpClient: HttpClient) { }

getServicesByBarberShop(barberShopId: number): Observable<any> {
  return this._httpClient.get(`${this.URL_API}/barberShop/${barberShopId}`);
}

}
