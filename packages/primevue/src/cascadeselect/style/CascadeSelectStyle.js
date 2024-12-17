import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-cascadeselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: ${dt('cascadeselect.background')};
    border: 1px solid ${dt('cascadeselect.border.color')};
    transition: background ${dt('cascadeselect.transition.duration')}, color ${dt('cascadeselect.transition.duration')}, border-color ${dt('cascadeselect.transition.duration')}, outline-color ${dt(
    'cascadeselect.transition.duration'
)}, box-shadow ${dt('cascadeselect.transition.duration')};
    border-radius: ${dt('cascadeselect.border.radius')};
    outline-color: transparent;
    box-shadow: ${dt('cascadeselect.shadow')};
}

.p-cascadeselect:not(.p-disabled):hover {
    border-color: ${dt('cascadeselect.hover.border.color')};
}

.p-cascadeselect:not(.p-disabled).p-focus {
    border-color: ${dt('cascadeselect.focus.border.color')};
    box-shadow: ${dt('cascadeselect.focus.ring.shadow')};
    outline: ${dt('cascadeselect.focus.ring.width')} ${dt('cascadeselect.focus.ring.style')} ${dt('cascadeselect.focus.ring.color')};
    outline-offset: ${dt('cascadeselect.focus.ring.offset')};
}

.p-cascadeselect.p-variant-filled {
    background: ${dt('cascadeselect.filled.background')};
}

.p-cascadeselect.p-variant-filled:not(.p-disabled):hover {
    background: ${dt('cascadeselect.filled.hover.background')};
}

.p-cascadeselect.p-variant-filled.p-focus {
    background: ${dt('cascadeselect.filled.focus.background')};
}

.p-cascadeselect.p-invalid {
    border-color: ${dt('cascadeselect.invalid.border.color')};
}

.p-cascadeselect.p-disabled {
    opacity: 1;
    background: ${dt('cascadeselect.disabled.background')};
}

.p-cascadeselect-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${dt('cascadeselect.dropdown.color')};
    width: ${dt('cascadeselect.dropdown.width')};
    border-start-end-radius: ${dt('border.radius.md')};
    border-end-end-radius: ${dt('border.radius.md')};
}

.p-cascadeselect-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    color: ${dt('cascadeselect.clear.icon.color')};
    inset-inline-end: ${dt('cascadeselect.dropdown.width')};
}

.p-cascadeselect-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    text-overflow: ellipsis;
    cursor: pointer;
    padding: ${dt('cascadeselect.padding.y')} ${dt('cascadeselect.padding.x')};
    background: transparent;
    border: 0 none;
    outline: 0 none;
}

.p-cascadeselect-label.p-placeholder {
    color: ${dt('cascadeselect.placeholder.color')};
}

.p-cascadeselect.p-invalid .p-cascadeselect-label.p-placeholder {
    color: ${dt('cascadeselect.invalid.placeholder.color')};
}

.p-cascadeselect.p-disabled .p-cascadeselect-label {
    color: ${dt('cascadeselect.disabled.color')};
}

.p-cascadeselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-cascadeselect-fluid {
    display: flex;
}

.p-cascadeselect-fluid .p-cascadeselect-label {
    width: 1%;
}

.p-cascadeselect-overlay {
    background: ${dt('cascadeselect.overlay.background')};
    color: ${dt('cascadeselect.overlay.color')};
    border: 1px solid ${dt('cascadeselect.overlay.border.color')};
    border-radius: ${dt('cascadeselect.overlay.border.radius')};
    box-shadow: ${dt('cascadeselect.overlay.shadow')};
}

.p-cascadeselect .p-cascadeselect-overlay {
    min-width: 100%;
}

.p-cascadeselect-option-list {
    display: none;
    min-width: 100%;
    position: absolute;
    z-index: 1;
}

.p-cascadeselect-list {
    min-width: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: ${dt('cascadeselect.list.padding')};
    display: flex;
    flex-direction: column;
    gap: ${dt('cascadeselect.list.gap')};
}

.p-cascadeselect-option {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    border: 0 none;
    color: ${dt('cascadeselect.option.color')};
    background: transparent;
    border-radius: ${dt('cascadeselect.option.border.radius')};
}

.p-cascadeselect-option-active {
    overflow: visible;
}

.p-cascadeselect-option-active > .p-cascadeselect-option-content {
    background: ${dt('cascadeselect.option.focus.background')};
    color: ${dt('cascadeselect.option.focus.color')};
}

.p-cascadeselect-option:not(.p-cascadeselect-option-selected):not(.p-disabled).p-focus > .p-cascadeselect-option-content {
    background: ${dt('cascadeselect.option.focus.background')};
    color: ${dt('cascadeselect.option.focus.color')};
}

.p-cascadeselect-option:not(.p-cascadeselect-option-selected):not(.p-disabled).p-focus > .p-cascadeselect-option-content > .p-cascadeselect-group-icon-container > .p-cascadeselect-group-icon {
    color: ${dt('cascadeselect.option.icon.focus.color')};
}

.p-cascadeselect-option-selected > .p-cascadeselect-option-content {
    background: ${dt('cascadeselect.option.selected.background')};
    color: ${dt('cascadeselect.option.selected.color')};
}

.p-cascadeselect-option-selected.p-focus > .p-cascadeselect-option-content {
    background: ${dt('cascadeselect.option.selected.focus.background')};
    color: ${dt('cascadeselect.option.selected.focus.color')};
}

.p-cascadeselect-option-active > .p-cascadeselect-option-list {
    inset-inline-start: 100%;
    inset-block-start: 0;
}

.p-cascadeselect-option-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    position: relative;
    padding: ${dt('cascadeselect.option.padding')};
    border-radius: ${dt('cascadeselect.option.border.radius')};
    transition: background ${dt('cascadeselect.transition.duration')}, color ${dt('cascadeselect.transition.duration')}, border-color ${dt('cascadeselect.transition.duration')}, box-shadow ${dt(
    'cascadeselect.transition.duration'
)}, outline-color ${dt('cascadeselect.transition.duration')};
}

.p-cascadeselect-group-icon {
    font-size: ${dt('cascadeselect.option.icon.size')};
    width: ${dt('cascadeselect.option.icon.size')};
    height: ${dt('cascadeselect.option.icon.size')};
    color: ${dt('cascadeselect.option.icon.color')};
}

.p-cascadeselect-group-icon:dir(rtl) {
    transform: rotate(180deg);
}

.p-cascadeselect-mobile-active .p-cascadeselect-option-list {
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-inline-start: ${dt('tieredmenu.submenu.mobile.indent')};
    padding-inline-end: 0;
}

.p-cascadeselect-mobile-active .p-cascadeselect-group-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-cascadeselect-mobile-active .p-cascadeselect-option-active > .p-cascadeselect-option-content .p-cascadeselect-group-icon {
    transform: rotate(-90deg);
}

.p-cascadeselect-sm .p-cascadeselect-label {
    font-size: ${dt('cascadeselect.sm.font.size')};
    padding-block: ${dt('cascadeselect.sm.padding.y')};
    padding-inline: ${dt('cascadeselect.sm.padding.x')};
}

.p-cascadeselect-sm .p-cascadeselect-dropdown .p-icon {
    font-size: ${dt('cascadeselect.sm.font.size')};
    width: ${dt('cascadeselect.sm.font.size')};
    height: ${dt('cascadeselect.sm.font.size')};
}

.p-cascadeselect-lg .p-cascadeselect-label {
    font-size: ${dt('cascadeselect.lg.font.size')};
    padding-block: ${dt('cascadeselect.lg.padding.y')};
    padding-inline: ${dt('cascadeselect.lg.padding.x')};
}

.p-cascadeselect-lg .p-cascadeselect-dropdown .p-icon {
    font-size: ${dt('cascadeselect.lg.font.size')};
    width: ${dt('cascadeselect.lg.font.size')};
    height: ${dt('cascadeselect.lg.font.size')};
}
`;

const inlineStyles = {
    root: ({ props }) => ({ position: props.appendTo === 'self' ? 'relative' : undefined })
};

const classes = {
    root: ({ instance, props }) => [
        'p-cascadeselect p-component p-inputwrapper',
        {
            'p-cascadeselect-mobile': instance.queryMatches,
            'p-disabled': props.disabled,
            'p-invalid': instance.$invalid,
            'p-variant-filled': instance.$variant === 'filled',
            'p-focus': instance.focused,
            'p-inputwrapper-filled': instance.$filled,
            'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
            'p-cascadeselect-open': instance.overlayVisible,
            'p-cascadeselect-fluid': instance.$fluid,
            'p-cascadeselect-sm p-inputfield-sm': props.size === 'small',
            'p-cascadeselect-lg p-inputfield-lg': props.size === 'large'
        }
    ],
    label: ({ instance, props }) => [
        'p-cascadeselect-label',
        {
            'p-placeholder': instance.label === props.placeholder,
            'p-cascadeselect-label-empty': !instance.$slots['value'] && (instance.label === 'p-emptylabel' || instance.label.length === 0)
        }
    ],
    clearIcon: 'p-cascadeselect-clear-icon',
    dropdown: 'p-cascadeselect-dropdown',
    loadingIcon: 'p-cascadeselect-loading-icon',
    dropdownIcon: 'p-cascadeselect-dropdown-icon',
    overlay: ({ instance }) => [
        'p-cascadeselect-overlay p-component',
        {
            'p-cascadeselect-mobile-active': instance.queryMatches
        }
    ],
    listContainer: 'p-cascadeselect-list-container',
    list: 'p-cascadeselect-list',
    option: ({ instance, processedOption }) => [
        'p-cascadeselect-option',
        {
            'p-cascadeselect-option-active': instance.isOptionActive(processedOption),
            'p-cascadeselect-option-selected': instance.isOptionSelected(processedOption),
            'p-focus': instance.isOptionFocused(processedOption),
            'p-disabled': instance.isOptionDisabled(processedOption)
        }
    ],
    optionContent: 'p-cascadeselect-option-content',
    optionText: 'p-cascadeselect-option-text',
    groupIconContainer: 'p-cascadeselect-group-icon-container',
    groupIcon: 'p-cascadeselect-group-icon',
    optionList: 'p-cascadeselect-overlay p-cascadeselect-option-list'
};

export default BaseStyle.extend({
    name: 'cascadeselect',
    theme,
    classes,
    inlineStyles
});
