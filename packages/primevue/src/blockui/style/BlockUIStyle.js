import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-blockui {
    position: relative;
}

.p-blockui-mask {
    border-radius: ${dt('blockui.border.radius')};
}

.p-blockui-mask.p-overlay-mask {
    position: absolute;
}

.p-blockui-mask-document.p-overlay-mask {
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
