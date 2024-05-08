import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: ${dt('tabs.tab.list.background')};
    border: 1px solid ${dt('tabs.tab.list.border.color')};
    border-width: 0 0 1px 0;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${dt('tabs.nav.button.background')};
    color: ${dt('tabs.nav.button.color')};
    width: 2.5rem;
    transition: color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    box-shadow: ${dt('tabs.nav.button.shadow')};
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-tablist-nav-button:hover {
    color: ${dt('tabs.nav.button.hover.color')};
}

.p-tablist-prev-button {
    left: 0;
}

.p-tablist-next-button {
    right: 0;
}

.p-tab {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: transparent transparent ${dt('tabs.tab.border.color')} transparent;
    color: ${dt('tabs.tab.color')};
    background: ${dt('tabs.nav.background')};
    padding: 1rem 1.125rem;
    font-weight: 600;
    border-top-right-radius: ${dt('border.radius.md')};
    border-top-left-radius: ${dt('border.radius.md')};
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

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    color: ${dt('tabs.tab.hover.color')};
}

.p-tab-active {
    color: ${dt('tabs.tab.active.color')};
}

.p-tabpanels {
    background: ${dt('tabs.tab.panel.background')};
    color: ${dt('tabs.tab.panel.color')};
    padding: 0.875rem 1.125rem 1.125rem 1.125rem;
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: -1px;
    height: 1px;
    background-color: ${dt('tabs.tab.active.border.color')};
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`;

const classes = {
    root: ({ props }) => [
        'p-tabs p-component',
        {
            'p-tabs-scrollable': props.scrollable
        }
    ]
};

export default BaseStyle.extend({
    name: 'tabs',
    theme,
    classes
});
