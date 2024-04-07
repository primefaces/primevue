import BaseStyle from 'primevue/base/style';

const inlineStyles = {
    root: ({ props }) => ({ position: props.appendTo === 'self' ? 'relative' : undefined })
};

const classes = {
    root: ({ instance, props }) => [
        'p-password p-component p-inputwrapper',
        {
            'p-inputwrapper-filled': instance.filled,
            'p-inputwrapper-focus': instance.focused
        }
    ],
    input: 'p-password-input',
    hideIcon: 'p-password-toggle-mask-icon p-password-mask-icon',
    showIcon: 'p-password-toggle-mask-icon p-password-unmask-icon',
    panel: ({ instance }) => [
        'p-password-overlay p-component',
        {
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    meter: 'p-password-meter',
    meterLabel: ({ instance }) => `p-password-meter-value ${instance.meter ? 'p-password-meter-' + instance.meter.strength : ''}`,
    info: 'p-password-meter-text'
};

export default BaseStyle.extend({
    name: 'password',
    classes,
    inlineStyles
});
