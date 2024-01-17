import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-inputswitch {
        display: inline-block;
    }

    .p-inputswitch-input {
        cursor: pointer;
    }

    .p-inputswitch-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid transparent;
    }

    .p-inputswitch-slider:before {
        position: absolute;
        content: '';
        top: 50%;
    }
}
`;

const inlineStyles = {
    root: { position: 'relative' }
};

const classes = {
    root: ({ instance, props }) => [
        'p-inputswitch p-component',
        {
            'p-highlight': instance.checked,
            'p-disabled': props.disabled
        }
    ],
    input: 'p-inputswitch-input',
    slider: 'p-inputswitch-slider'
};

export default BaseStyle.extend({
    name: 'inputswitch',
    css,
    classes,
    inlineStyles
});
