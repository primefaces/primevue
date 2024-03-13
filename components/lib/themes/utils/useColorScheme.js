import Theme from 'primevue/themes';

export default () => {
    return {
        colorScheme: Theme.getCurrentColorScheme(),
        toggleColorScheme() {
            this.colorScheme = Theme.toggleColorScheme();

            return this.colorScheme;
        }
    };
};
