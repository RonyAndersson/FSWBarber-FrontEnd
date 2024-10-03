import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarberShopService {

  private readonly URL_API = 'http://localhost:8080/barbershops';

constructor(private readonly _httpClient: HttpClient) { }

public getBarberShops(): Observable<any> {
  return this._httpClient.get<any>(this.URL_API);
}

}
