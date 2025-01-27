import { theme } from '@primeuix/styles/ripple';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: 'p-ink'
};

export default BaseStyle.extend({
    name: 'ripple-directive',
    theme,
    classes
});
