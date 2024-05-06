import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-blockui {
    position: relative;
}

.p-blockui-mask {
    border-radius: ${dt('border.radius.md')};
}

.p-blockui-mask.p-component-overlay {
    position: absolute;
}

.p-blockui-mask-document.p-component-overlay {
    position: fixed;
}
`;

const classes = {
    root: 'p-blockui'
};

export default BaseStyle.extend({
    name: 'blockui',
    theme,
    classes
});
