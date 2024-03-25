export default {
    css: ({ dt }) => `
.p-cascadeselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: ${dt('cascadeselect.background')};
    border: 1px solid ${dt('cascadeselect.border.color')};
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border-radius: ${dt('rounded.base')};
    outline-color: transparent;
    box-shadow: ${dt('cascadeselect.box.shadow')};
}

.p-cascadeselect:not(.p-disabled):hover {
    border-color: ${dt('cascadeselect.hover.border.color')};
}

.p-cascadeselect:not(.p-disabled).p-focus {
    border-color: ${dt('cascadeselect.focus.border.color')};
    outline: 0 none;
}

.p-cascadeselect.p-variant-filled {
    background: ${dt('cascadeselect.filled.background')};
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

.p-cascadeselect-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${dt('cascadeselect.toggle.color')};
    width: 2.5rem;
    border-top-right-radius: ${dt('rounded.base')};
    border-bottom-right-radius: ${dt('rounded.base')};
}

.p-cascadeselect-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    padding: 0.5rem 0.75rem;
    text-overflow: ellipsis;
    cursor: pointer;
    color: ${dt('cascadeselect.color')};
    background: transparent;
    border: 0 none;
    outline: 0 none;
}

.p-cascadeselect-label.p-placeholder {
    color: ${dt('cascadeselect.placeholder.color')};
}

.p-cascadeselect-clearable .p-cascadeselect-label {
    padding-right: 1.75rem;
}

.p-cascadeselect.p-disabled .p-cascadeselect-label {
    color: ${dt('cascadeselect.disabled.color')};
}

.p-cascadeselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-fluid .p-cascadeselect {
    display: flex;
}

.p-fluid .p-cascadeselect .p-cascadeselect-label {
    width: 1%;
}

.p-cascadeselect-panel {
    background: ${dt('cascadeselect.overlay.background')};
    color: ${dt('cascadeselect.overlay.color')};
    border: 1px solid ${dt('cascadeselect.overlay.border.color')};
    border-radius: ${dt('rounded.base')};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-cascadeselect .p-cascadeselect-panel {
    min-width: 100%;
}

.p-cascadeselect-sublist {
    position: absolute;
    min-width: 100%;
    z-index: 1;
    display: none;
}

.p-cascadeselect-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
    min-width: 100%;
    padding: 0.25rem 0.25rem;
}

.p-cascadeselect-item {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    margin: 2px 0;
    border: 0 none;
    color: ${dt('cascadeselect.item.color')};
    background: transparent;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border-radius: ${dt('rounded.sm')};
}

.p-cascadeselect-item:first-child {
    margin-top: 0;
}

.p-cascadeselect-item:last-child {
    margin-bottom: 0;
}

.p-cascadeselect-item:not(.p-highlight):not(.p-disabled).p-focus {
    background: ${dt('cascadeselect.item.focus.background')};
    color: ${dt('cascadeselect.item.focus.color')};
}

.p-cascadeselect-item:not(.p-highlight):not(.p-disabled).p-focus .p-cascadeselect-group-icon {
    color: ${dt('cascadeselect.item.icon.focus.color')};
}

.p-cascadeselect-item.p-highlight {
    background: ${dt('cascadeselect.item.selected.background')};
    color: ${dt('cascadeselect.item.selected.color')};
}

.p-cascadeselect-item.p-highlight.p-focus {
    background: ${dt('cascadeselect.item.selected.focus.background')};
    color: ${dt('cascadeselect.item.selected.focus.color')};
}

.p-cascadeselect-item-active {
    overflow: visible;
    background: ${dt('cascadeselect.item.focus.background')};
    color: ${dt('cascadeselect.item.focus.color')};
}

.p-cascadeselect-item-active > .p-cascadeselect-sublist {
    display: block;
    left: 100%;
    top: 0;
}

.p-cascadeselect-item-content {
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    padding: 0.5rem 0.75rem;
}

.p-cascadeselect-group-icon {
    margin-left: auto;
    font-size: 0.875rem;
    color: ${dt('cascadeselect.item.icon.color')};
}

.p-cascadeselect-enter-from,
.p-cascadeselect-leave-active {
    opacity: 0;
}

.p-cascadeselect-enter-active {
    transition: opacity 150ms;
}
`
};
