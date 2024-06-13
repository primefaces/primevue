import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${dt('togglebutton.color')};
    background: ${dt('togglebutton.background')};
    border: 1px solid ${dt('togglebutton.border.color')};
    padding: ${dt('togglebutton.padding')};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${dt('togglebutton.transition.duration')}, color ${dt('togglebutton.transition.duration')}, border-color ${dt('togglebutton.transition.duration')},
        outline-color ${dt('togglebutton.transition.duration')}, box-shadow ${dt('togglebutton.transition.duration')};
    border-radius: ${dt('togglebutton.border.radius')};
    outline-color: transparent;
    font-weight: ${dt('togglebutton.font.weight')};
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${dt('togglebutton.gap')};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background ${dt('togglebutton.transition.duration')}, color ${dt('togglebutton.transition.duration')}, border-color ${dt('togglebutton.transition.duration')},
            outline-color ${dt('togglebutton.transition.duration')}, box-shadow ${dt('togglebutton.transition.duration')};
    position: absolute;
    left: ${dt('togglebutton.content.left')};
    top: ${dt('togglebutton.content.top')};
    width: calc(100% - calc(2 *  ${dt('togglebutton.content.left')}));
    height: calc(100% - calc(2 *  ${dt('togglebutton.content.top')}));
    border-radius: ${dt('togglebutton.border.radius')};
}

.p-togglebutton.p-togglebutton-checked::before {
    background: ${dt('togglebutton.content.checked.background')};
    box-shadow: ${dt('togglebutton.content.checked.shadow')};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${dt('togglebutton.hover.background')};
    color: ${dt('togglebutton.hover.color')};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${dt('togglebutton.checked.background')};
    border-color: ${dt('togglebutton.checked.border.color')};
    color: ${dt('togglebutton.checked.color')};
}

.p-togglebutton:focus-visible {
    box-shadow: ${dt('togglebutton.focus.ring.shadow')};
    outline: ${dt('togglebutton.focus.ring.width')} ${dt('togglebutton.focus.ring.style')} ${dt('togglebutton.focus.ring.color')};
    outline-offset: ${dt('togglebutton.focus.ring.offset')};
}

.p-togglebutton.p-invalid {
    border-color: ${dt('togglebutton.invalid.border.color')};
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: ${dt('togglebutton.disabled.background')};
    border-color: ${dt('togglebutton.disabled.border.color')};
    color: ${dt('togglebutton.disabled.color')};
}

.p-togglebutton-icon {
    color: ${dt('togglebutton.icon.color')};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${dt('togglebutton.icon.hover.color')};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${dt('togglebutton.icon.checked.color')};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${dt('togglebutton.icon.disabled.color')};
}
`;

const classes = {
    root: ({ instance, props }) => [
        'p-togglebutton p-component',
        {
            'p-togglebutton-checked': instance.active,
            'p-invalid': props.invalid
        }
    ],
    content: 'p-togglebutton-content',
    icon: 'p-togglebutton-icon',
    label: 'p-togglebutton-label'
};

export default BaseStyle.extend({
    name: 'togglebutton',
    theme,
    classes
});
