import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-treeselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: ${dt('treeselect.background')};
    border: 1px solid ${dt('treeselect.border.color')};
    transition: background ${dt('treeselect.transition.duration')}, color ${dt('treeselect.transition.duration')}, border-color ${dt('treeselect.transition.duration')}, outline-color ${dt('treeselect.transition.duration')}, box-shadow ${dt(
    'treeselect.transition.duration'
)};
    border-radius: ${dt('treeselect.border.radius')};
    outline-color: transparent;
    box-shadow: ${dt('treeselect.shadow')};
}

.p-treeselect:not(.p-disabled):hover {
    border-color: ${dt('treeselect.hover.border.color')};
}

.p-treeselect:not(.p-disabled).p-focus {
    border-color: ${dt('treeselect.focus.border.color')};
    box-shadow: ${dt('treeselect.focus.ring.shadow')};
    outline: ${dt('treeselect.focus.ring.width')} ${dt('treeselect.focus.ring.style')} ${dt('treeselect.focus.ring.color')};
    outline-offset: ${dt('treeselect.focus.ring.offset')};
}

.p-treeselect.p-variant-filled {
    background: ${dt('treeselect.filled.background')};
}

.p-treeselect.p-variant-filled:not(.p-disabled):hover {
    background: ${dt('treeselect.filled.hover.background')};
}

.p-treeselect.p-variant-filled.p-focus {
    background: ${dt('treeselect.filled.focus.background')};
}

.p-treeselect.p-invalid {
    border-color: ${dt('treeselect.invalid.border.color')};
}

.p-treeselect.p-disabled {
    opacity: 1;
    background: ${dt('treeselect.disabled.background')};
}

.p-treeselect-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    color: ${dt('treeselect.clear.icon.color')};
    inset-inline-end: ${dt('treeselect.dropdown.width')};
}

.p-treeselect-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${dt('treeselect.dropdown.color')};
    width: ${dt('treeselect.dropdown.width')};
    border-start-end-radius: ${dt('border.radius.md')};
    border-end-end-radius: ${dt('border.radius.md')};
}

.p-treeselect-label-container {
    overflow: hidden;
    flex: 1 1 auto;
    cursor: pointer;
}

.p-treeselect-label {
    display: flex;
    align-items: center;
    gap: calc(${dt('treeselect.padding.y')} / 2);
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: ${dt('treeselect.padding.y')} ${dt('treeselect.padding.x')};
    color: ${dt('treeselect.color')};
}

.p-treeselect-label.p-placeholder {
    color: ${dt('treeselect.placeholder.color')};
}

.p-treeselect.p-invalid .p-treeselect-label.p-placeholder {
    color: ${dt('treeselect.invalid.placeholder.color')};
}

.p-treeselect.p-disabled .p-treeselect-label {
    color: ${dt('treeselect.disabled.color')};
}

.p-treeselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-treeselect .p-treeselect-overlay {
    min-width: 100%;
}

.p-treeselect-overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: ${dt('treeselect.overlay.background')};
    color: ${dt('treeselect.overlay.color')};
    border: 1px solid ${dt('treeselect.overlay.border.color')};
    border-radius: ${dt('treeselect.overlay.border.radius')};
    box-shadow: ${dt('treeselect.overlay.shadow')};
    overflow: hidden;
}

.p-treeselect-tree-container {
    overflow: auto;
}

.p-treeselect-empty-message {
    padding: ${dt('treeselect.empty.message.padding')};
    background: transparent;
}

.p-treeselect-fluid {
    display: flex;
}

.p-treeselect-overlay .p-tree {
    padding: ${dt('treeselect.tree.padding')};
}

.p-treeselect-overlay .p-tree-loading {
    min-height: 3rem;
}

.p-treeselect-label .p-chip {
    padding-block-start: calc(${dt('treeselect.padding.y')} / 2);
    padding-block-end: calc(${dt('treeselect.padding.y')} / 2);
    border-radius: ${dt('treeselect.chip.border.radius')};
}

.p-treeselect-label:has(.p-chip) {
    padding: calc(${dt('treeselect.padding.y')} / 2) calc(${dt('treeselect.padding.x')} / 2);
}

.p-treeselect-sm .p-treeselect-label {
    font-size: ${dt('treeselect.sm.font.size')};
    padding-block: ${dt('treeselect.sm.padding.y')};
    padding-inline: ${dt('treeselect.sm.padding.x')};
}

.p-treeselect-sm .p-treeselect-dropdown .p-icon {
    font-size: ${dt('treeselect.sm.font.size')};
    width: ${dt('treeselect.sm.font.size')};
    height: ${dt('treeselect.sm.font.size')};
}

.p-treeselect-lg .p-treeselect-label {
    font-size: ${dt('treeselect.lg.font.size')};
    padding-block: ${dt('treeselect.lg.padding.y')};
    padding-inline: ${dt('treeselect.lg.padding.x')};
}

.p-treeselect-lg .p-treeselect-dropdown .p-icon {
    font-size: ${dt('treeselect.lg.font.size')};
    width: ${dt('treeselect.lg.font.size')};
    height: ${dt('treeselect.lg.font.size')};
}
`;

const inlineStyles = {
    root: ({ props }) => ({ position: props.appendTo === 'self' ? 'relative' : undefined })
};

const classes = {
    root: ({ instance, props }) => [
        'p-treeselect p-component p-inputwrapper',
        {
            'p-treeselect-display-chip': props.display === 'chip',
            'p-disabled': props.disabled,
            'p-invalid': instance.$invalid,
            'p-focus': instance.focused,
            'p-variant-filled': instance.$variant === 'filled',
            'p-inputwrapper-filled': instance.$filled,
            'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
            'p-treeselect-open': instance.overlayVisible,
            'p-treeselect-fluid': instance.$fluid,
            'p-treeselect-sm p-inputfield-sm': props.size === 'small',
            'p-treeselect-lg p-inputfield-lg': props.size === 'large'
        }
    ],
    labelContainer: 'p-treeselect-label-container',
    label: ({ instance, props }) => [
        'p-treeselect-label',
        {
            'p-placeholder': instance.label === props.placeholder,
            'p-treeselect-label-empty': !props.placeholder && instance.emptyValue
        }
    ],
    clearIcon: 'p-treeselect-clear-icon',
    chip: 'p-treeselect-chip-item',
    pcChip: 'p-treeselect-chip',
    dropdown: 'p-treeselect-dropdown',
    dropdownIcon: 'p-treeselect-dropdown-icon',
    panel: 'p-treeselect-overlay p-component',
    treeContainer: 'p-treeselect-tree-container',
    emptyMessage: 'p-treeselect-empty-message'
};

export default BaseStyle.extend({
    name: 'treeselect',
    theme,
    classes,
    inlineStyles
});
