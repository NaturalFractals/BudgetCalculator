export class CurrencyValueConverter {
    toView(value, config = {}) {
        let locale = config.locale || 'en';
        let props = {
            style: 'currency',
            currency: config.currency || 'USD',
            currencyDisplay: config.displayBy || 'symbol'
        };

        return value.toLocaleString(locale, props);
    }
}