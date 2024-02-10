export default {
    css: `
.p-tabview-nav-container {
    position: relative;
}

.p-tabview-scrollable > .p-tabview-nav-container {
    overflow: hidden;
}

.p-tabview-nav-content {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tabview-nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex: 1 1 auto;
    background: var(--p-dark-surface-900, var(--p-surface-0));
    border: 1px solid var(--p-dark-surface-700, var(--p-surface-200));
    border-width: 0 0 1px 0;
    position: relative;
}

.p-tabview-nav-link {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: transparent transparent var(--p-dark-surface-700, var(--p-surface-200)) transparent;
    color: var(--p-dark-surface-400, var(--p-surface-500));
    padding: 1rem 1.125rem;
    font-weight: 600;
    border-top-right-radius: var(--p-border-radius);
    border-top-left-radius: var(--p-border-radius);;
    transition: color var(--p-transition-duration), outline-color var(--p-transition-duration);
    margin: 0 0 -1px 0;
    outline-color: transparent;
}

.p-tabview-header:not(.p-disabled) .p-tabview-nav-link:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: -1px;
}

.p-tabview-header:not(.p-highlight):not(.p-disabled):hover >.p-tabview-nav-link {
    color: var(--p-dark-surface-0, var(--p-surface-700));
}

.p-tabview-header.p-highlight > .p-tabview-nav-link {
    color: var(--p-primary-color);
}

.p-tabview-ink-bar {
    display: none;
    z-index: 1;
}

.p-tabview-title {
    line-height: 1;
    white-space: nowrap;
}

.p-tabview-nav-btn {
    position: absolute;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--p-dark-surface-900, var(--p-surface-0));
    color: var(--p-dark-surface-400, var(--p-surface-500));
    width: 2.5rem;
    border-radius: 0;
    outline-color: transparent;
    transition: color var(--p-transition-duration), outline-color var(--p-transition-duration);
    box-shadow: 0px 0px 10px 50px color-mix(in srgb, var(--p-dark-surface-900, var(--p-surface-0)), transparent 50%);
}

.p-tabview-nav-btn:focus-visible {
    outline: var(--p-focus-ring-width) var(--p-focus-ring-style) var(--p-focus-ring-color);
    outline-offset: -2px;
}

.p-tabview-nav-btn:hover {
    color: var(--p-dark-surface-0, var(--p-surface-700))
}

.p-tabview-nav-prev {
    left: 0;
}

.p-tabview-nav-next {
    right: 0;
}

.p-tabview-nav-content::-webkit-scrollbar {
    display: none;
}

.p-tabview-panels {
    background: var(--p-dark-surface-900, var(--p-surface-0));
    padding: 0.875rem 1.125rem 1.125rem 1.125rem;
    color: var(--p-dark-surface-0, var(--p-surface-700))
}

.p-tabview-ink-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: -1px;
    height: 1px;
    background-color: var(--p-primary-color);
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`
};
