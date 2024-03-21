import Theme from 'primevue/themes';

export default (initial = 'light') => {
    // @todo
    //Theme.setCurrentColorScheme(initial);

    return {
        colorScheme: Theme.getCurrentColorScheme(),
        toggleColorScheme() {
            const newColorScheme = Theme.toggleColorScheme();

            Theme.setCurrentColorScheme(newColorScheme);

            return newColorScheme;
        }
    };
};
