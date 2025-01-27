import { theme } from '@primeuix/styles/inputotp';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: 'p-inputotp p-component',
    pcInputText: 'p-inputotp-input'
};

export default BaseStyle.extend({
    name: 'inputotp',
    theme,
    classes
});
