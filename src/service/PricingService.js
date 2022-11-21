export default class PricingService {
    fetchPricing() {
        //return fetch('https://www.primefaces.org/cdn/pricing/uikit.json', { cache: 'no-store' }).then((res) => res.json());
        return fetch('demo/data/pricing.json', { cache: 'no-store' }).then((res) => res.json());
    }
}
