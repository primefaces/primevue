import Theme from 'primevue/themes';

export default () => {
    return {
        colorScheme: Theme.getColorScheme(),
        toggleColorScheme() {
            this.colorScheme = Theme.toggleColorScheme();

            return this.colorScheme;
        }
    };
};
