export default class PricingService {
    fetchPricing() {
        return fetch('https://www.primefaces.org/cdn/pricing/uikit.json', { cache: 'no-store' }).then((res) => res.json());
    }
}
