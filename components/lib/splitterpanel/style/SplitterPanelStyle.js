import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-splitter-panel {
        flex-grow: 1;
        overflow: hidden;
    }

    .p-splitter-panel-nested {
        display: flex;
    }

    .p-splitter-panel .p-splitter {
        flex-grow: 1;
        border: 0 none;
    }
}
`;

const classes = {
    root: ({ instance }) => ['p-splitter-panel', { 'p-splitter-panel-nested': instance.isNested }]
};

export default BaseStyle.extend({
    name: 'splitterpanel',
    css,
    classes
});
