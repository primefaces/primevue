import { theme } from '@primeuix/styles/imagecompare';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: 'p-imagecompare',
    slider: 'p-imagecompare-slider'
};

export default BaseStyle.extend({
    name: 'imagecompare',
    theme,
    classes
});
