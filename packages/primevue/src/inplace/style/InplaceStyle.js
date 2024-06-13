import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-inplace-display {
    display: inline-block;
    cursor: pointer;
    border: 1px solid transparent;
    padding: ${dt('inplace.padding')};
    border-radius: ${dt('inplace.border.radius')};
    transition: background ${dt('inplace.transition.duration')}, color ${dt('inplace.transition.duration')}, outline-color ${dt('inplace.transition.duration')}, box-shadow ${dt('inplace.transition.duration')};
    outline-color: transparent;
}

.p-inplace-display:not(.p-disabled):hover {
    background: ${dt('inplace.display.hover.background')};
    color: ${dt('inplace.display.hover.color')};
}

.p-inplace-display:focus-visible {
    box-shadow: ${dt('inplace.focus.ring.shadow')};
    outline: ${dt('inplace.focus.ring.width')} ${dt('inplace.focus.ring.style')} ${dt('inplace.focus.ring.color')};
    outline-offset: ${dt('inplace.focus.ring.offset')};
}

.p-inplace-content {
    display: block;
}
`;

const classes = {
    root: 'p-inplace p-component',
    display: ({ props }) => ['p-inplace-display', { 'p-disabled': props.disabled }],
    content: 'p-inplace-content'
};

export default BaseStyle.extend({
    name: 'inplace',
    theme,
    classes
});
