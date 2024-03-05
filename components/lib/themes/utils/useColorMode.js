import Theme from 'primevue/themes';

export default () => {
    return {
        colorMode: Theme.getColorMode(),
        toggleColorMode() {
            this.colorMode = Theme.toggleColorMode();

            return this.colorMode;
        }
    };
};
