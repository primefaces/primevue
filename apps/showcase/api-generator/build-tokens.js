const fs = require('fs');
const path = require('path');

// prettier-ignore
const THEME_COMPONENTS = ['Accordion','AutoComplete','Avatar','Badge','BlockUI','Breadcrumb','Button','Card','Carousel','CascadeSelect','Checkbox','Chip','ColorPicker','ConfirmDialog','ConfirmPopup','ContextMenu','DataTable','DataView','DatePicker','Dialog','Divider','Dock','Drawer','Editor','Fieldset','FileUpload','FloatLabel','Galleria','IconField','Image','InlineMessage','Inplace','InputChips','InputGroup','InputNumber','InputText','Knob','Listbox','MegaMenu','Menu','Menubar','Message','MeterGroup','MultiSelect','OrderList','OrganizationChart','OverlayBadge','Paginator','Panel','PanelMenu','Password','PickList','Popover','ProgressBar','ProgressSpinner','RadioButton','Rating','Ripple','ScrollPanel','Select','SelectButton','Skeleton','Slider','SpeedDial','SplitButton','Splitter','Stepper','Steps','Tabmenu','Tabs','TabView','Tag','Terminal','Textarea','TieredMenu','Timeline','Toast','ToggleButton','ToggleSwitch','Toolbar','Tooltip','Tree','TreeSelect','TreeTable'];

const themeName = 'aura';
const rootDir = path.resolve(__dirname, '../');
const overwrittenDirPath = path.resolve(rootDir, 'components/lib/themes/types/overwritten');

try {
    !fs.existsSync(overwrittenDirPath) && fs.mkdirSync(overwrittenDirPath, { recursive: true });
} catch (err) {
    console.error(err);
}

THEME_COMPONENTS.forEach((comp) => {
    const data = fs.readFileSync(path.resolve(rootDir, `components/lib/themes/${themeName}/${comp.toLowerCase()}/index.js`), { encoding: 'utf8', flag: 'r' });
    let theme = data.replace('export default', 'module.exports = ');

    try {
        fs.writeFileSync(path.resolve(rootDir, `components/lib/themes/types/overwritten/${comp.toLowerCase()}.js`), theme);

        const component = require(path.resolve(rootDir, `components/lib/themes/types/overwritten/${comp.toLowerCase()}.js`));
        const filePath = path.resolve(rootDir, `components/lib/themes/types/${comp.toLowerCase()}`);
        let outputFile = path.resolve(filePath, `index.d.ts`);
        let defaultText = '';

        !fs.existsSync(filePath) && fs.mkdirSync(filePath);

        const splitTokenName = (text) => {
            return text.split(/(?=[A-Z])/).map((part) => part.toLowerCase());
        };

        const createSubTokens = (tokenKeys, tokenValue) => {
            let subTokens = '';

            Object.entries(tokenValue).forEach(([tokenKey, tokenSubValue]) => {
                if (typeof tokenSubValue === 'string') {
                    subTokens += createToken([...tokenKeys, tokenKey]);
                } else {
                    subTokens += createNestedToken([...tokenKeys, tokenKey], tokenSubValue);
                }
            });

            return subTokens;
        };

        const createDescription = (tokenKeys) => {
            let description = '';

            tokenKeys.forEach((tokenPart, i) => {
                if (i !== 0) description += `${splitTokenName(tokenPart).join(' ')} `;
            });
            description = description.charAt(0).toUpperCase() + description.slice(1);

            return `${description}of ${splitTokenName(tokenKeys[0]).join(' ')}`;
        };

        const createToken = (tokenKey) => {
            let tokenName = tokenKey[tokenKey.length - 1];
            let designTokenName = `${comp.toLowerCase()}`;
            let tokenDescription = createDescription(tokenKey);

            tokenKey.forEach((t) => {
                if (t !== 'root') {
                    designTokenName += `.${splitTokenName(t).join('.')}`;
                }

                if (tokenName.indexOf('.') > -1 && tokenName.indexOf("'")) {
                    tokenName = `'${tokenName}'`;
                }
            });

            return `
    /**
    * ${tokenDescription}
    *
    * @designToken ${designTokenName}
    */
    ${tokenName}?: string;`;
        };

        const createNestedToken = (tokenKeys, tokenValue) => {
            let tokenName = tokenKeys[tokenKeys.length - 1];
            let tokenDescription = createDescription(tokenKeys);

            return `
    /**
    * ${tokenDescription}
    */
    ${tokenName}?: {
        ${createSubTokens(tokenKeys, tokenValue)}
    };`;
        };

        const generateTokens = (tokenKey, tokenValue) => {
            let subTokens = '';

            Object.entries(tokenValue).forEach(([subTokenKey, subTokenValue]) => {
                if (typeof subTokenValue === 'string') {
                    subTokens += createToken([tokenKey, subTokenKey]);
                } else {
                    subTokens += createNestedToken([tokenKey, subTokenKey], subTokenValue);
                }
            });

            defaultText += `
    /**
    * Used to pass tokens of the ${splitTokenName(tokenKey).join(' ')} section
    */
    ${tokenKey}?: {
        ${subTokens}
    }`;
        };

        Object.entries(component).forEach(([tname, tvalue]) => {
            if (tname !== 'colorScheme') {
                if (Object.keys(component).includes('colorScheme')) {
                    if (Object.keys(component['colorScheme']['light']).includes(tname)) {
                        tvalue = { ...tvalue, ...component['colorScheme']['light'][tname] };
                    }
                }

                generateTokens(tname, tvalue);
            } else {
                Object.entries(tvalue['light']).forEach(([subtname, subtvalue]) => {
                    if (!Object.keys(component).includes(subtname)) {
                        generateTokens(subtname, subtvalue);
                    }
                });
            }
        });

        let text = `
/**
 *
 * ${comp} Design Tokens
 *
 * [Live Demo](https://www.primevue.org/${comp.toLowerCase()}/)
 *
 * @module themes/${comp.toLowerCase()}
 *
 */

import { ColorSchemeDesignToken } from '..';

export interface ${comp}DesignTokens extends ColorSchemeDesignToken<${comp}DesignTokens> {
${defaultText}
}
`;

        fs.writeFileSync(outputFile, text, 'utf8');
    } catch (err) {
        console.error(err);
    }
});

try {
    if (fs.existsSync(overwrittenDirPath)) {
        fs.rmSync(overwrittenDirPath, { recursive: true, force: true });
    }
} catch (err) {
    console.error(err);
}
