import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: ${dt('rounded.base')};
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton .p-togglebutton:first-child {
    border-top-left-radius: ${dt('rounded.base')};
    border-bottom-left-radius: ${dt('rounded.base')};
}

.p-selectbutton .p-togglebutton:last-child {
    border-top-right-radius: ${dt('rounded.base')};
    border-bottom-right-radius: ${dt('rounded.base')};
}

.p-selectbutton.p-invalid {
    outline: 1px solid ${dt('selectbutton.invalid.border.color')};
    outline-offset: 0;
}
`;

const classes = {
    root: ({ props }) => [
        'p-selectbutton p-component',
        {
            'p-invalid': props.invalid
        }
    ]
};

export default BaseStyle.extend({
    name: 'selectbutton',
    theme,
    classes
});
