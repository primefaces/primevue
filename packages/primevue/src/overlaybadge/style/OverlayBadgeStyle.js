import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-overlaybadge {
    position: relative;
}

.p-overlaybadge .p-badge {
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
    outline-width: ${dt('overlaybadge.outline.width')};
    outline-style: solid;
    outline-color: ${dt('overlaybadge.outline.color')};
}

.p-overlaybadge .p-badge:dir(rtl) {
    transform: translate(-50%, -50%);
}
`;

const classes = {
    root: 'p-overlaybadge'
};

export default BaseStyle.extend({
    name: 'overlaybadge',
    theme,
    classes
});
