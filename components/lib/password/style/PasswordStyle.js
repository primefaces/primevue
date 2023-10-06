import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-password {
        display: inline-flex;
    }

    .p-password .p-password-panel {
        min-width: 100%;
    }

    .p-password-meter {
        height: 10px;
    }

    .p-password-strength {
        height: 100%;
        width: 0;
        transition: width 1s ease-in-out;
    }

    .p-fluid .p-password {
        display: flex;
    }

    .p-password-input::-ms-reveal,
    .p-password-input::-ms-clear {
        display: none;
    }
}
`;

const inlineStyles = {
    root: ({ props }) => ({ position: props.appendTo === 'self' ? 'relative' : undefined })
};

const classes = {
    root: ({ instance, props }) => [
        'p-password p-component p-inputwrapper',
        {
            'p-inputwrapper-filled': instance.filled,
            'p-inputwrapper-focus': instance.focused,
            'p-input-icon-right': props.toggleMask
        }
    ],
    input: ({ props }) => [
        'p-password-input',
        {
            'p-disabled': props.disabled
        }
    ],
    panel: ({ instance }) => [
        'p-password-panel p-component',
        {
            'p-input-filled': instance.$primevue.config.inputStyle === 'filled',
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    meter: 'p-password-meter',
    meterLabel: ({ instance }) => `p-password-strength ${instance.meter ? instance.meter.strength : ''}`,
    info: 'p-password-info'
};

export default BaseStyle.extend({
    name: 'password',
    css,
    classes,
    inlineStyles
});
