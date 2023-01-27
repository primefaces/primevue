const fs = require('fs');
const path = require('path');

export default function dynamicTheme(options) {
    const { themes, defaultTheme } = options;

    return {
        name: 'dynamic-theme',
        buildStart() {
            addCssFile(themes);
        },
        configureServer(server) {
            server.ws.on('get:themes', (data, client) => {
                client.send('send:themes', { themes, defaultTheme });
            });
        },
        transformIndexHtml: {
            enforce: 'pre',
            transform(html) {
                const htmlStr = html;
                const htmlResults = [];

                if (options.defaultTheme) {
                    htmlResults.push({
                        tag: 'link',
                        injectTo: 'head',
                        attrs: {
                            id: 'theme-link',
                            rel: 'stylesheet',
                            type: 'text/css',
                            href: `/${defaultTheme}.css`
                        }
                    });
                }

                return {
                    html: htmlStr,
                    tags: htmlResults
                };
            }
        }
    };
}

function addCssFile(themes) {
    themes.forEach((theme) => {
        const filePath = path.join('public', theme.name + '.css');
        const themePath = path.join(`node_modules/primevue/resources/themes/${theme.name}`, `theme.css`);

        if (!fs.existsSync(filePath)) {
            if (fs.existsSync(themePath)) {
                const themeContent = fs.readFileSync(themePath, 'utf8');

                fs.writeFileSync(filePath, themeContent);
            } else {
                throw new Error(`${theme.name} theme already exists`);
            }
        } else {
            console.log(`${theme.name} theme already exists`);
        }
    });
}
