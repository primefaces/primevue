import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: ${dt('selectbutton.border.radius')};
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton .p-togglebutton:first-child {
    border-inline-start-width: 1px;
    border-start-start-radius: ${dt('selectbutton.border.radius')};
    border-end-start-radius: ${dt('selectbutton.border.radius')};
}

.p-selectbutton .p-togglebutton:last-child {
    border-start-end-radius: ${dt('selectbutton.border.radius')};
    border-end-end-radius: ${dt('selectbutton.border.radius')};
}

.p-selectbutton.p-invalid {
    outline: 1px solid ${dt('selectbutton.invalid.border.color')};
    outline-offset: 0;
}
`;

const classes = {
    root: ({ instance }) => [
        'p-selectbutton p-component',
        {
            'p-invalid': instance.$invalid // @todo: check
        }
    ]
};

export default BaseStyle.extend({
    name: 'selectbutton',
    theme,
    classes
});
