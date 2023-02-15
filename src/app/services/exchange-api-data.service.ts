import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../types/response';

@Injectable({
    providedIn: 'root',
})
export class ExchangeApiDataService {
    rates: Record<string, number> = {};
    currencies: string[] = [];

    constructor(private httpClient: HttpClient) {}

    fetchRates() {
        this.httpClient
            .get<Response>(
                `https://api.exchangerate.host/latest?base=UAH&symbols=USD,EUR,PLN,UAH`
            )
            .subscribe((res: Response) => {
                this.rates = res.rates;
                this.currencies = Object.keys(res.rates);
            });
    }
}
