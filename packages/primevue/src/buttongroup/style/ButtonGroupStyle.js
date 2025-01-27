import { theme } from '@primeuix/styles/buttongroup';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: 'p-buttongroup p-component'
};

export default BaseStyle.extend({
    name: 'buttongroup',
    theme,
    classes
});
