export default {
    css: `
.p-stepper-nav {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow-x: auto;
}

.p-stepper-header {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    padding: 0.5rem;
}

.p-stepper-header:last-of-type {
    flex: initial;
}

.p-stepper-action {
    border: 0 none;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration), outline-color var(--p-transition-duration);
    border-radius: var(--p-rounded-base);
    outline-color: transparent;
    background: transparent;
}

.p-stepper-header .p-stepper-action:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: var(--p-focus-ring-offset);
}

.p-stepper.p-stepper-readonly .p-stepper-header {
    cursor: auto;
}

.p-stepper-title {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    margin-left: 0.5rem;
    color: var(--p-stepper-title-text-color);
    font-weight: 500;
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration), outline-color var(--p-transition-duration);
}

.p-stepper-number {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--p-stepper-marker-text-color);
    border: 1px solid var(--p-stepper-marker-border-color);
    border-width: 2px;
    background: var(--p-stepper-marker-background);
    min-width: 2rem;
    height: 2rem;
    line-height: 2rem;
    font-size: 1.143rem;
    border-radius: 50%;
    box-shadow: 0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration), outline-color var(--p-transition-duration);
}

.p-stepper-header.p-highlight .p-stepper-action {
    cursor: default;
}

.p-stepper-header.p-highlight .p-stepper-number {
    background: var(--p-stepper-marker-background-highlight);
    color: var(--p-stepper-marker-text-color-highlight);
}

.p-stepper-header.p-highlight .p-stepper-title {
    color: var(--p-stepper-title-text-color-highlight);
}

.p-stepper-header:not(.p-disabled):focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: var(--p-focus-ring-offset);
}

.p-stepper-header:has(~ .p-highlight) .p-stepper-separator {
    background: var(--p-stepper-connector-background-highlight);
}

.p-stepper-separator {
    flex: 1 1 0;
    background: var(--p-stepper-connector-background);
    width: 100%;
    height: 2px;
    margin-inline-start: 1rem;
    transition: background-color var(--p-transition-duration), color var(--p-transition-duration), border-color var(--p-transition-duration), box-shadow var(--p-transition-duration), outline-color var(--p-transition-duration);
}

.p-stepper-content {
    background: var(--p-stepper-content-background);
    color: var(--p-stepper-content-text-color);
    padding: 0.875rem 1.125rem 1.125rem 1.125rem;
}

.p-stepper-vertical .p-stepper-nav {
    flex-direction: column;
}

.p-stepper-vertical {
    display: flex;
    flex-direction: column;
}

.p-stepper-vertical .p-stepper-toggleable-content {
    display: flex;
    flex: 1 1 auto;
}

.p-stepper-vertical .p-stepper-panel {
    display: flex;
    flex-direction: column;
    flex: initial;
}

.p-stepper-vertical .p-stepper-panel.p-stepper-panel-active {
    flex: 1 1 auto;
}

.p-stepper-vertical .p-stepper-panel .p-stepper-header {
    flex: initial;
}

.p-stepper-vertical .p-stepper-panel .p-stepper-content {
    width: 100%;
    padding-left: 1rem;
}

.p-stepper-vertical .p-stepper-panel .p-stepper-separator {
    flex: 0 0 auto;
    width: 2px;
    height: auto;
    margin-inline-start: calc(1.75rem + 2px);
}

.p-stepper-vertical .p-stepper-panel:has(~ .p-stepper-panel-active) .p-stepper-separator {
    background: var(--p-stepper-connector-background-highlight);
}

.p-stepper-vertical .p-stepper-panel:last-of-type .p-stepper-content {
    padding-left: 3rem;
}    
`
};
