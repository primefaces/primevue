import BaseStyle from 'primevue/base/style';

const classes = {
    root: 'p-orderlist p-component',
    controls: 'p-orderlist-controls',
    container: 'p-orderlist-list-container', //TODO: Remove
    list: 'p-orderlist-list', //TODO: Remove
    item: 'p-orderlist-item' //TODO: Remove
};

export default BaseStyle.extend({
    name: 'orderlist',
    classes
});
