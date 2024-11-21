import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarberShopServicesService {

constructor(private readonly _httpClient: HttpClient) { }

}
