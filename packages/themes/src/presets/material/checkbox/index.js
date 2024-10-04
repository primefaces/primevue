export default {
    root: {
        borderRadius: '{border.radius.xs}',
        width: '18px',
        height: '18px',
        background: '{form.field.background}',
        checkedBackground: '{primary.color}',
        checkedHoverBackground: '{primary.color}',
        disabledBackground: '{form.field.disabled.background}',
        filledBackground: '{form.field.filled.background}',
        borderColor: '{form.field.border.color}',
        hoverBorderColor: '{form.field.hover.border.color}',
        focusBorderColor: '{form.field.focus.border.color}',
        checkedBorderColor: '{primary.color}',
        checkedHoverBorderColor: '{primary.color}',
        checkedFocusBorderColor: '{primary.color}',
        checkedDisabledBorderColor: '{form.field.border.color}',
        invalidBorderColor: '{form.field.invalid.border.color}',
        shadow: '{form.field.shadow}',
        focusRing: {
            width: '0',
            style: 'none',
            color: 'unset',
            offset: '0',
            shadow: 'none'
        },
        transitionDuration: '{form.field.transition.duration}'
    },
    icon: {
        size: '0.875rem',
        color: '{form.field.color}',
        checkedColor: '{primary.contrast.color}',
        checkedHoverColor: '{primary.contrast.color}',
        disabledColor: '{form.field.disabled.color}'
    },
    css: ({ dt }) => `
.p-checkbox {
    border-radius: 50%;
    transition: box-shadow ${dt('checkbox.transition.duration')};
}

.p-checkbox-box {
    border-width: 2px;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt('text.color')}, transparent 96%);
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt('text.color')}, transparent 88%);
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt('checkbox.checked.background')}, transparent 92%);
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${dt('checkbox.checked.background')}, transparent 84%);
}

.p-checkbox-checked .p-checkbox-box:before  {
    content: "";
    position: absolute;
    top: 8px;
    left: 2px;
    border-right: 2px solid transparent;
    border-bottom: 2px solid transparent;
    transform: rotate(45deg);
    transform-origin: 0% 100%;
    animation: p-md-check 125ms 50ms linear forwards;
}

.p-checkbox-checked .p-checkbox-icon {
    display: none;
}

@keyframes p-md-check {
    0%{
      width: 0;
      height: 0;
      border-color: ${dt('checkbox.icon.checked.color')};
      transform: translate3d(0,0,0) rotate(45deg);
    }
    33%{
      width: 4px;
      height: 0;
      transform: translate3d(0,0,0) rotate(45deg);
    }
    100%{
      width: 4px;
      height: 10px;
      border-color: ${dt('checkbox.icon.checked.color')};
      transform: translate3d(0,-10px,0) rotate(45deg);
    }
}
`
};
