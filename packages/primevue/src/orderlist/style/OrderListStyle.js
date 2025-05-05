import { style } from '@primeuix/styles/orderlist';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: 'p-orderlist p-component',
    controls: 'p-orderlist-controls'
};

export default BaseStyle.extend({
    name: 'orderlist',
    style,
    classes
});
