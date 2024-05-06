import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-inplace-display {
    display: inline;
    cursor: pointer;
    padding: 0.5rem 0.75rem;
    border-radius: ${dt('border.radius.md')};
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
}

.p-inplace-display:not(.p-disabled):hover {
    background: ${dt('inplace.display.hover.background')};
    color: ${dt('inplace.display.hover.color')};
}

.p-inplace-display:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-inplace-content {
    display: inline;
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
