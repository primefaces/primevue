import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .p-toolbar-group-start,
    .p-toolbar-group-center,
    .p-toolbar-group-end {
        display: flex;
        align-items: center;
    }

    .p-toolbar-group-left,
    .p-toolbar-group-right {
        display: flex;
        align-items: center;
    }
}
`;

const classes = {
    root: 'p-toolbar p-component',
    start: 'p-toolbar-group-start p-toolbar-group-left',
    center: 'p-toolbar-group-center',
    end: 'p-toolbar-group-end p-toolbar-group-right'
};

export default BaseStyle.extend({
    name: 'toolbar',
    css,
    classes
});
