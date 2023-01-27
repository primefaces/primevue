const fs = require('fs');
const path = require('path');

export default function dynamicTheme(options) {
    const { themes, defaultTheme, outPath } = options;

    return {
        name: 'dynamic-theme',
        buildStart() {
            addThemeFile(themes, outPath);
        },
        transformIndexHtml: {
            enforce: 'pre',
            transform(html) {
                if (!defaultTheme) {
                    throw new Error('Default theme is required');
                }

                const htmlStr = html;
                const htmlResults = [];
                const href = outPath ? `${outPath}/${defaultTheme}.css` : `/${defaultTheme}.css`;

                if (options.defaultTheme) {
                    htmlResults.push({
                        tag: 'link',
                        injectTo: 'head',
                        attrs: {
                            id: 'theme-link',
                            rel: 'stylesheet',
                            type: 'text/css',
                            href: href
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

function addThemeFile(themes, outPath) {
    const out = outPath || 'public';

    if (!fs.existsSync(out)) {
        mkDirByPathSync(out);
    }

    themes.forEach((theme) => {
        const filePath = path.join(out, theme.name + '.css');
        const themePath = path.join(`node_modules/primevue/resources/themes/${theme.name}`, `theme.css`);

        if (!fs.existsSync(filePath)) {
            if (fs.existsSync(themePath)) {
                const themeContent = fs.readFileSync(themePath, 'utf8');

                fs.writeFileSync(filePath, themeContent);
            } else {
                console.log(`${theme.name} theme already exists or not valid`);
            }
        }
    });
}

function mkDirByPathSync(targetDir) {
    const sep = path.sep;
    const initDir = path.isAbsolute(targetDir) ? sep : '';
    const baseDir = process.cwd();

    return targetDir.split(sep).reduce((parentDir, childDir) => {
        const curDir = path.resolve(baseDir, parentDir, childDir);

        try {
            fs.mkdirSync(curDir);
        } catch (err) {
            if (err.code === 'EEXIST') {
                // curDir already exists!
                return curDir;
            }

            // To avoid `EISDIR` error on Mac and `EACCES`-->`ENOENT` and `EPERM` on Windows.
            if (err.code === 'ENOENT') {
                // Throw the original parentDir error on curDir `ENOENT` failure.
                throw new Error(`EACCES: permission denied, mkdir '${parentDir}'`);
            }

            const caughtErr = ['EACCES', 'EPERM', 'EISDIR'].indexOf(err.code) > -1;

            if (!caughtErr || (caughtErr && curDir === path.resolve(targetDir))) {
                throw err; // Throw if it's just the last created dir.
            }
        }

        return curDir;
    }, initDir);
}
