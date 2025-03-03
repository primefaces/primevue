export const CarService = {
    brands: ['Vapid', 'Carson', 'Kitano', 'Dabver', 'Ibex', 'Morello', 'Akira', 'Titan', 'Dover', 'Norma'],

    colors: ['Black', 'White', 'Red', 'Blue', 'Silver', 'Green', 'Yellow'],

    generateCar(id) {
        return {
            id,
            vin: this.generateVin(),
            brand: this.generateBrand(),
            color: this.generateColor(),
            year: this.generateYear()
        };
    },

    generateVin() {
        let text = '';
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    },

    generateBrand() {
        return this.brands[Math.floor(Math.random() * Math.floor(10))];
    },

    generateColor() {
        return this.colors[Math.floor(Math.random() * Math.floor(7))];
    },

    generateYear() {
        return 2000 + Math.floor(Math.random() * Math.floor(19));
    }
};
