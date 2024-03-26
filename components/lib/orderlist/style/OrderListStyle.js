import BaseStyle from 'primevue/base/style';

const classes = {
    root: 'p-orderlist p-component',
    controls: 'p-orderlist-controls',
    container: 'p-orderlist-list-container',
    list: 'p-orderlist-list',
    item: 'p-orderlist-item'
};

export default BaseStyle.extend({
    name: 'orderlist',
    classes
});
