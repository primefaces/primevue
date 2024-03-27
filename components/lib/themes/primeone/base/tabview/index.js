export default {
    css: ({ dt }) => `
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
    background: ${dt('tabview.nav.background')};
    border: 1px solid ${dt('tabview.nav.border.color')};
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
    border-color: transparent transparent ${dt('tabview.header.border.color')} transparent;
    color: ${dt('tabview.header.color')};
    padding: 1rem 1.125rem;
    font-weight: 600;
    border-top-right-radius: ${dt('rounded.base')};
    border-top-left-radius: ${dt('rounded.base')};
    transition: color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    margin: 0 0 -1px 0;
    outline-color: transparent;
}

.p-tabview-header:not(.p-disabled) .p-tabview-nav-link:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: -1px;
}

.p-tabview-header:not(.p-highlight):not(.p-disabled):hover >.p-tabview-nav-link {
    color: ${dt('tabview.header.hover.color')};
}

.p-tabview-header.p-highlight > .p-tabview-nav-link {
    color: ${dt('tabview.header.active.color')};
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
    background: ${dt('tabview.navigator.icon.background')};
    color: ${dt('tabview.navigator.icon.color')};
    width: 2.5rem;
    border-radius: 0;
    outline-color: transparent;
    transition: color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    box-shadow: ${dt('tabview.navigator.icon.box.shadow')};
}

.p-tabview-nav-btn:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-tabview-nav-btn:hover {
    color: ${dt('tabview.navigator.icon.hover.color')};
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
    background: ${dt('tabview.navigator.content.background')};
    color: ${dt('tabview.navigator.content.color')};
    padding: 0.875rem 1.125rem 1.125rem 1.125rem;
}

.p-tabview-ink-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: -1px;
    height: 1px;
    background-color: ${dt('tabview.header.active.border.color')};
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`
};
