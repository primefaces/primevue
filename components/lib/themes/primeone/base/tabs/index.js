export default {
    css: ({ dt }) => `
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist-scroll-container {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-scroll-container::-webkit-scrollbar {
    display: none;
}

.p-tablist {
    position: relative;
    background: ${dt('tabs.nav.background')};
}

.p-tablist-content {
    position: relative;
    display: flex;
    border: 1px solid ${dt('tabs.nav.border.color')};
    border-width: 0 0 1px 0;
}

.p-tablist-navigator.p-button {
    position: absolute;
    z-index: 2;
}

.p-tablist-navigator.p-tablist-prev-button {
    top: 0;
    left: 0;
}

.p-tablist-navigator.p-tablist-next-button {
    top: 0;
    right: 0;
}

.p-tab {
    cursor: pointer;
    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: transparent transparent ${dt('tabs.header.border.color')} transparent;
    color: ${dt('tabs.header.color')};
    background: ${dt('tabs.nav.background')};
    padding: 1rem 1.125rem;
    font-weight: 600;
    border-top-right-radius: ${dt('rounded.base')};
    border-top-left-radius: ${dt('rounded.base')};
    transition: color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    margin: 0 0 -1px 0;
    outline-color: transparent;
    line-height: 1;
    white-space: nowrap;
}

.p-tab:not(.p-disabled):focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: -1px;
}

.p-tab:not(.p-active):not(.p-disabled):hover {
    color: ${dt('tabs.header.hover.color')};
}

.p-tab.p-active {
    color: ${dt('tabs.header.active.color')};
}

.p-tabpanels {
    background: ${dt('tabs.navigator.content.background')};
    color: ${dt('tabs.navigator.content.color')};
    padding: 0.875rem 1.125rem 1.125rem 1.125rem;
}

.p-tablist-ink-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: -1px;
    height: 1px;
    background-color: ${dt('tabs.header.active.border.color')};
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`
};
