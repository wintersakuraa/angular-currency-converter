import { Component, OnInit } from '@angular/core';
import { ExchangeApiDataService } from '../services/exchange-api-data.service';
import { Currency } from '../types/currency';

@Component({
    selector: 'app-exchange',
    templateUrl: './exchange.component.html',
    styleUrls: ['./exchange.component.scss'],
})
export class ExchangeComponent implements OnInit {
    currencyFrom: Currency = { code: 'UAH', value: 0 };
    currencyTo: Currency = { code: 'USD', value: 0 };

    constructor(private exchangeApiDataService: ExchangeApiDataService) {}

    ngOnInit(): void {
        this.exchangeApiDataService.fetchRates();
    }

    getCurrencies() {
        return this.exchangeApiDataService.currencies;
    }

    identify(index: number, item: string) {
        // currency code is unique
        return item;
    }

    exchange(e: any) {
        // if trigger in first -> change in second
        console.log(e.target.name);
        if (e.target.name === 'from') {
            // rate = base / foreign
            const rate =
                this.exchangeApiDataService.rates[this.currencyFrom.code] /
                this.exchangeApiDataService.rates[this.currencyTo.code];

            // value = input value / rate
            this.currencyTo.value = this.currencyFrom.value / rate;
        } else {
            // if trigger in second -> change in first
            const rate =
                this.exchangeApiDataService.rates[this.currencyTo.code] /
                this.exchangeApiDataService.rates[this.currencyFrom.code];

            this.currencyFrom.value = this.currencyTo.value / rate;
        }
    }
}
