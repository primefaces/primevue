import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: ${dt('floatlabel.font.weight')};
    left: ${dt('floatlabel.position.x')};
    color: ${dt('floatlabel.color')};
    transition-duration: ${dt('floatlabel.transition.duration')};
}

.p-floatlabel:has(textarea) label {
    top: 1rem;
}

.p-floatlabel:has(.p-invalid) label {
    color: ${dt('floatlabel.invalid.color')};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: ${dt('floatlabel.focus.top')};
    margin-top: 0;
    font-size: ${dt('floatlabel.focus.font.size')};
    font-weight: ${dt('floatlabel.label.focus.font.weight')};
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: ${dt('floatlabel.active.color')};
}

.p-floatlabel:has(input:focus) label ,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label ,
.p-floatlabel:has(.p-inputwrapper-focus) label  {
    color: ${dt('floatlabel.focus.color')};
}

.p-floatlabel .p-placeholder,
.p-floatlabel input::placeholder,
.p-floatlabel .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-floatlabel .p-focus .p-placeholder,
.p-floatlabel input:focus::placeholder,
.p-floatlabel .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}

.p-floatlabel-in .p-inputtext {
    padding-top: ${dt('floatlabel.in.input.padding.top')};
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: ${dt('floatlabel.in.focus.top')};
}

.p-floatlabel-on .p-inputtext {
    padding-top: ${dt('floatlabel.on.input.padding.top')};
    padding-bottom: ${dt('floatlabel.on.input.padding.bottom')};
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    background: ${dt('floatlabel.on.focus.background')};
    padding: ${dt('floatlabel.on.focus.padding')};
}
`;

const classes = {
    root: ({ instance, props }) => [
        'p-floatlabel',
        {
            'p-floatlabel-over': props.variant === 'over',
            'p-floatlabel-on': props.variant === 'on',
            'p-floatlabel-in': props.variant === 'in'
        }
    ]
};

export default BaseStyle.extend({
    name: 'floatlabel',
    theme,
    classes
});
