export default {
    css: `
.p-cascadeselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: var(--p-cascadeselect-background);
    border: 1px solid var(--p-cascadeselect-border-color);
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), outline-color var(--p-transition-duration);
    border-radius: var(--p-rounded-base);
    outline-color: transparent;
    box-shadow: var(--p-cascadeselect-box-shadow);
}

.p-cascadeselect:not(.p-disabled):hover {
    border-color: var(--p-cascadeselect-border-color-hover);
}

.p-cascadeselect:not(.p-disabled).p-focus {
    border-color: var(--p-cascadeselect-border-color-focus);
    outline: 0 none;
}

.p-cascadeselect.p-variant-filled {
    background: var(--p-cascadeselect-background-filled);
}

.p-cascadeselect.p-variant-filled.p-focus {
    background: var(--p-cascadeselect-background-filled-focus);
}

.p-cascadeselect.p-invalid {
    border-color: var(--p-cascadeselect-border-color-invalid);
}

.p-cascadeselect.p-disabled {
    opacity: 1;
    background: var(--p-cascadeselect-background-disabled);
}

.p-cascadeselect-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: var(--p-cascadeselect-toggle-color);
    width: 2.5rem;
    border-top-right-radius: var(--p-rounded-base);
    border-bottom-right-radius: var(--p-rounded-base);
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
    color: var(--p-cascadeselect-text-color);
    background: transparent;
    border: 0 none;
    outline: 0 none;
}

.p-cascadeselect-label.p-placeholder {
    color: var(--p-cascadeselect-placeholder-text-color);
}

.p-cascadeselect-clearable .p-cascadeselect-label {
    padding-right: 1.75rem;
}

.p-cascadeselect.p-disabled .p-cascadeselect-label {
    color: var(--p-cascadeselect-text-color-disabled);
}

.p-cascadeselect-label-empty {
    overflow: hidden;
    opacity: 0;
}

.p-fluid .p-cascadeselect {
    display: flex;
}

.p-fluid .p-cascadeselect .p-cascadeselect-label {
    width: 1%;
}
`
};
