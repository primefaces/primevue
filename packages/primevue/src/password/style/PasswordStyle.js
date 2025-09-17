import { style } from '@primeuix/styles/password';
import BaseStyle from '@primevue/core/base/style';

const inlineStyles = {
    root: ({ props }) => ({ position: props.appendTo === 'self' ? 'relative' : undefined })
};

const classes = {
    root: ({ instance }) => [
        'p-password p-component p-inputwrapper',
        {
            'p-inputwrapper-filled': instance.$filled,
            'p-inputwrapper-focus': instance.focused,
            'p-password-fluid': instance.$fluid
        }
    ],
    pcInputText: 'p-password-input',
    maskIcon: 'p-password-toggle-mask-icon p-password-mask-icon',
    unmaskIcon: 'p-password-toggle-mask-icon p-password-unmask-icon',
    clearIcon: 'p-password-clear-icon',
    overlay: 'p-password-overlay p-component',
    content: 'p-password-content',
    meter: 'p-password-meter',
    meterLabel: ({ instance }) => `p-password-meter-label ${instance.meter ? 'p-password-meter-' + instance.meter.strength : ''}`,
    meterText: 'p-password-meter-text'
};

export default BaseStyle.extend({
    name: 'password',
    style,
    classes,
    inlineStyles
});
