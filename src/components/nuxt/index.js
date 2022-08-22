import path from 'path';

export default function (moduleOptions) {
    const config = Object.assign({}, this.options.primevue, moduleOptions);
    const theme = config.theme || 'saga-blue';
    this.options.css.push('primevue/resources/themes/' + theme + '/theme.css');
    this.options.css.push('primevue/resources/primevue.min.css');
    this.options.css.push('primeicons/primeicons.css');

    if (config.ripple) {
        this.addPlugin(path.resolve(__dirname, '../config/plugin-ripple.js'));
    }
    else {
        this.addPlugin(path.resolve(__dirname, '../config/plugin.js'));
    }

    if (config.components) {
        config.components.forEach(component => this.addPlugin(path.resolve(__dirname,  '../' + component.toLowerCase() + '/plugin.js')));
    }

    if (config.directives) {
        config.directives.forEach(component => this.addPlugin(path.resolve(__dirname,  '../' + component.toLowerCase() + '/plugin.js')));
    }
}