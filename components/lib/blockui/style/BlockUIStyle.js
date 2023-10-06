import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-blockui-container {
        position: relative;
    }

    .p-blockui.p-component-overlay {
        position: absolute;
    }

    .p-blockui-document.p-component-overlay {
        position: fixed;
    }
}
`;

const classes = {
    root: 'p-blockui-container'
};

export default BaseStyle.extend({
    name: 'blockui',
    css,
    classes
});
