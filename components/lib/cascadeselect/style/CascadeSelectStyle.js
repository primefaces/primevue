import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-cascadeselect {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
    }

    .p-cascadeselect-trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .p-cascadeselect-label {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        text-overflow: ellipsis;
        cursor: pointer;
    }

    .p-cascadeselect-label-empty {
        overflow: hidden;
        visibility: hidden;
    }

    .p-cascadeselect .p-cascadeselect-panel {
        min-width: 100%;
    }

    .p-cascadeselect-item {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
    }

    .p-cascadeselect-item-content {
        display: flex;
        align-items: center;
        overflow: hidden;
        position: relative;
    }

    .p-cascadeselect-group-icon {
        margin-left: auto;
    }

    .p-cascadeselect-items {
        margin: 0;
        padding: 0;
        list-style-type: none;
        min-width: 100%;
    }

    .p-fluid .p-cascadeselect {
        display: flex;
    }

    .p-fluid .p-cascadeselect .p-cascadeselect-label {
        width: 1%;
    }

    .p-cascadeselect-sublist {
        position: absolute;
        min-width: 100%;
        z-index: 1;
        display: none;
    }

    .p-cascadeselect-item-active {
        overflow: visible !important;
    }

    .p-cascadeselect-item-active > .p-cascadeselect-sublist {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-cascadeselect-enter-from,
    .p-cascadeselect-leave-active {
        opacity: 0;
    }

    .p-cascadeselect-enter-active {
        transition: opacity 150ms;
    }
}
`;

const inlineStyles = {
    root: ({ props }) => ({ position: props.appendTo === 'self' ? 'relative' : undefined })
};

const classes = {
    root: ({ instance, props }) => [
        'p-cascadeselect p-component p-inputwrapper',
        {
            'p-disabled': props.disabled,
            'p-focus': instance.focused,
            'p-inputwrapper-filled': props.modelValue,
            'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
            'p-overlay-open': instance.overlayVisible
        }
    ],
    label: ({ instance, props }) => [
        'p-cascadeselect-label p-inputtext',
        {
            'p-placeholder': instance.label === props.placeholder,
            'p-cascadeselect-label-empty': !instance.$slots['value'] && (instance.label === 'p-emptylabel' || instance.label.length === 0)
        }
    ],
    dropdownButton: 'p-cascadeselect-trigger',
    loadingIcon: 'p-cascadeselect-trigger-icon',
    dropdownIcon: 'p-cascadeselect-trigger-icon',
    panel: ({ instance }) => [
        'p-cascadeselect-panel p-component',
        {
            'p-input-filled': instance.$primevue.config.inputStyle === 'filled',
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    wrapper: 'p-cascadeselect-items-wrapper',
    list: 'p-cascadeselect-panel p-cascadeselect-items',
    item: ({ instance, processedOption }) => [
        'p-cascadeselect-item',
        {
            'p-cascadeselect-item-group': instance.isOptionGroup(processedOption),
            'p-cascadeselect-item-active p-highlight': instance.isOptionActive(processedOption),
            'p-focus': instance.isOptionFocused(processedOption),
            'p-disabled': instance.isOptionDisabled(processedOption)
        }
    ],
    content: 'p-cascadeselect-item-content',
    text: 'p-cascadeselect-item-text',
    groupIcon: 'p-cascadeselect-group-icon',
    sublist: 'p-cascadeselect-sublist'
};

export default BaseStyle.extend({
    name: 'cascadeselect',
    css,
    classes,
    inlineStyles
});
