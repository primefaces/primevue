import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-password {
    display: inline-flex;
    position: relative;
}

.p-password .p-password-overlay {
    min-width: 100%;
}

.p-password-meter {
    height: ${dt('password.meter.height')};
    background: ${dt('password.meter.background')};
    border-radius: ${dt('password.meter.border.radius')};
}

.p-password-meter-label {
    height: 100%;
    width: 0;
    transition: width 1s ease-in-out;
    border-radius: ${dt('password.meter.border.radius')};
}

.p-password-meter-weak {
    background: ${dt('password.strength.weak.background')};
}

.p-password-meter-medium {
    background: ${dt('password.strength.medium.background')};
}

.p-password-meter-strong {
    background: ${dt('password.strength.strong.background')};
}

.p-fluid .p-password {
    display: flex;
}

.p-password-input::-ms-reveal,
.p-password-input::-ms-clear {
    display: none;
}

.p-password-overlay {
    padding: ${dt('password.overlay.padding')};
    background: ${dt('password.overlay.background')};
    color: ${dt('password.overlay.color')};
    border: 1px solid ${dt('password.overlay.border.color')};
    box-shadow: ${dt('password.overlay.shadow')};
    border-radius: ${dt('password.overlay.border.radius')};
}

.p-password-content {
    display: flex;
    flex-direction: column;
    gap: ${dt('password.content.gap')};
}

.p-password-toggle-mask-icon {
    right: ${dt('form.field.padding.x')};
    color: ${dt('password.icon.color')};
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * calc(${dt('icon.size')} / 2));
    width: ${dt('icon.size')};
    height: ${dt('icon.size')};
}

.p-password:has(.p-password-toggle-mask-icon) .p-password-input {
    padding-right: calc((${dt('form.field.padding.x')} * 2) + ${dt('icon.size')});
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
            'p-inputwrapper-focus': instance.focused
        }
    ],
    pcInput: 'p-password-input',
    maskIcon: 'p-password-toggle-mask-icon p-password-mask-icon',
    unmaskIcon: 'p-password-toggle-mask-icon p-password-unmask-icon',
    overlay: 'p-password-overlay p-component',
    content: 'p-password-content',
    meter: 'p-password-meter',
    meterLabel: ({ instance }) => `p-password-meter-label ${instance.meter ? 'p-password-meter-' + instance.meter.strength : ''}`,
    meterText: 'p-password-meter-text'
};

export default BaseStyle.extend({
    name: 'password',
    theme,
    classes,
    inlineStyles
});
