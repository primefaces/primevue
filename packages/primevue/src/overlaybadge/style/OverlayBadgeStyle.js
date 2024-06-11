import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-overlaybadge {
    position: relative;
}

.p-overlaybadge .p-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
    outline-width: ${dt('overlaybadge.outline.width')};
    outline-style: solid;
    outline-color: ${dt('overlaybadge.outline.color')};
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
