import BaseStyle from 'primevue/base/style';

const classes = {
    root: 'p-toolbar p-component',
    start: 'p-toolbar-group-start p-toolbar-group-left',
    center: 'p-toolbar-group-center',
    end: 'p-toolbar-group-end p-toolbar-group-right'
};

export default BaseStyle.extend({
    name: 'toolbar',
    classes
});
