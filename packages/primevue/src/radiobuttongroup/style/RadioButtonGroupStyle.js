import { theme } from '@primeuix/styles/radiobuttongroup';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: 'p-radiobutton-group p-component'
};

export default BaseStyle.extend({
    name: 'radiobuttongroup',
    theme,
    classes
});
