export default {
    variables: {
        common: {},
        light: {},
        dark: {}
    },
    css: `
.p-tabview-nav-container {
    position: relative;
}
.p-tabview-scrollable .p-tabview-nav-container {
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
    background: var(--p-tabview-nav-bg);
    border: var(--p-tabview-nav-border);
    border-width: var(--p-tabview-nav-border-width);
}
.p-tabview-header-action {
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    display: flex;
    align-items: center;
    position: relative;
    text-decoration: none;
    overflow: hidden;
}
.p-tabview-ink-bar {
    display: none;
    z-index: 1;
}
.p-tabview-header-action:focus {
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
.p-tabview-nav li {
    margin-right: var(--p-tabview-header-spacing);
}
.p-tabview-nav-link {
    border: var(--p-tabview-header-border);
    border-width: var(--p-tabview-header-border-width);
    border-color: var(--p-tabview-header-border-color);
    background: var(--p-tabview-header-bg);
    color: var(--p-tabview-header-text-color);
    padding: var(--p-tabview-header-padding);
    font-weight: var(--p-tabview-header-font-weight);
    border-top-right-radius: var(--p-border-radius);
    border-top-left-radius: var(--p-border-radius);
    transition:
        background-color 0.2s,
        border-color 0.2s,
        box-shadow 0.2s;
    margin: var(--p-tabview-header-margin);
}
.p-tabview-nav-link:not(.p-disabled):focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: inset var(--p-focus-shadow);
}
.p-tabview-nav li:not(.p-highlight):not(.p-disabled):hover .p-tabview-nav-link {
    background: var(--p-tabview-header-hover-bg);
    border-color: var(--p-tabview-header-hover-border-color);
    color: var(--p-tabview-header-text-hover-color);
}
.p-tabview-nav li.p-highlight .p-tabview-nav-link {
    border-color: var(--p-tabview-header-active-border-color);
}
.p-tabview-nav li.p-highlight .p-tabview-nav-link,
.p-tabview-nav-btn.p-link {
    background: var(--p-tabview-header-active-bg);
    color: var(--p-tabview-header-text-active-color);
}
.p-tabview-nav-btn.p-link {
    width: var(--p-button-icon-only-width);
    box-shadow: var(--p-raised-button-shadow);
    border-radius: 0;
}
.p-tabview-nav-btn.p-link:focus-visible {
    outline: var(--p-focus-outline);
    outline-offset: var(--p-focus-outline-offset);
    box-shadow: inset var(--p-focus-shadow);
}
.p-tabview-panels {
    background: var(--p-tabview-content-bg);
    padding: var(--p-tabview-content-padding);
    border: var(--p-tabview-content-border);
    color: var(--p-tabview-content-text-color);
    border-bottom-right-radius: var(--p-border-radius);
    border-bottom-left-radius: var(--p-border-radius);
}
    `
};
