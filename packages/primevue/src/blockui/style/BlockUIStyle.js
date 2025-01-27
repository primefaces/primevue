import { theme } from '@primeuix/styles/blockui';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: 'p-blockui'
};

export default BaseStyle.extend({
    name: 'blockui',
    theme,
    classes
});
