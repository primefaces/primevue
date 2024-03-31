import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance }) => ['p-splitter-panel', { 'p-splitter-panel-nested': instance.isNested }]
};

export default BaseStyle.extend({
    name: 'splitterpanel',
    classes
});
