import Theme from 'primevue/themes';

export default (theme) => {
    const [{ options: o1 }, { options: o2 }] = [Theme.getTheme(), theme];
    const newTheme = {
        ...theme,
        options: { ...o1, ...o2 }
    };

    Theme.setTheme(newTheme);

    return newTheme;
};
