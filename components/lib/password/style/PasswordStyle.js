import BaseStyle from 'primevue/base/style';

const inlineStyles = {
    root: ({ props }) => ({ position: props.appendTo === 'self' ? 'relative' : undefined })
};

const classes = {
    root: ({ instance, props }) => [
        'p-password p-component p-inputwrapper',
        {
            'p-inputwrapper-filled': instance.filled,
            'p-inputwrapper-focus': instance.focused,
            'p-icon-field p-icon-field-right': props.toggleMask
        }
    ],
    input: ({ props }) => [
        'p-password-input',
        {
            'p-disabled': props.disabled
        }
    ],
    hideIcon: 'p-input-icon',
    showIcon: 'p-input-icon',
    panel: ({ instance }) => [
        'p-password-panel p-component',
        {
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    meter: 'p-password-meter',
    meterLabel: ({ instance }) => `p-password-strength ${instance.meter ? instance.meter.strength : ''}`,
    info: 'p-password-info'
};

export default BaseStyle.extend({
    name: 'password',
    classes,
    inlineStyles
});
