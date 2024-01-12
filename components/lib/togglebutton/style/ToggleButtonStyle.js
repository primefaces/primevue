import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-togglebutton {
        display: inline-flex;
        user-select: none;
        align-items: center;
        vertical-align: bottom;
        text-align: center;
        overflow: hidden;
        position: relative;
    }

    .p-togglebutton-input {
        cursor: pointer;
    }

    .p-button-label {
        flex: 1 1 auto;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-only {
        justify-content: center;
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
        flex: 0 0 auto;
    }
}
`;

const classes = {
    root: ({ instance, props }) => [
        'p-togglebutton p-button p-component',
        {
            'p-button-icon-only': instance.hasIcon && !instance.hasLabel,
            'p-disabled': props.disabled,
            'p-highlight': instance.active
        }
    ],
    input: 'p-togglebutton-input',
    icon: ({ instance, props }) => [
        'p-button-icon',
        {
            'p-button-icon-left': props.iconPos === 'left' && instance.label,
            'p-button-icon-right': props.iconPos === 'right' && instance.label
        }
    ],
    label: 'p-button-label'
};

export default BaseStyle.extend({
    name: 'togglebutton',
    css,
    classes
});
