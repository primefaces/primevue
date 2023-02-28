async function fetchPricing() {
    try {
        const response = await fetch('https://www.primefaces.org/cdn/pricing/uikit.json', { cache: 'no-store' });

        return response.json();
    } catch {
        return null;
    }
}

export default fetchPricing;
