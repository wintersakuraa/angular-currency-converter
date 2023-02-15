import { Component } from '@angular/core';
import { ExchangeApiDataService } from '../services/exchange-api-data.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    constructor(private exchangeApiDataService: ExchangeApiDataService) {}

    getRates() {
        return this.exchangeApiDataService.rates;
    }
}
