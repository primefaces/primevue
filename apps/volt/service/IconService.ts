export const IconService = {
    async getIcons() {
        return await fetch('/demo/data/icons.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.icons)
            .catch((error) => {
                console.error('Error fetching icons:', error);
                throw error;
            });
    }
};
