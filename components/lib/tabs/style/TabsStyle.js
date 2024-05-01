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
    background: ${dt('tabs.nav.background')};
    border: 1px solid ${dt('tabs.nav.border.color')};
    border-width: 0 0 1px 0;
}

.p-tablist-prev-button,
.p-tablist-next-button {
    all: unset;
    position: absolute;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${dt('tabs.navigator.icon.background')};
    color: ${dt('tabs.navigator.icon.color')};
    width: 2.5rem;
    transition: color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    box-shadow: ${dt('tabs.navigator.icon.box.shadow')};
    cursor: pointer;
}

.p-tablist-prev-button:focus-visible,
.p-tablist-next-button:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-tablist-prev-button:hover,
.p-tablist-next-button:hover {
    color: ${dt('tabs.navigator.icon.hover.color')};
}

.p-tablist-prev-button {
    left: 0;
}

.p-tablist-next-button {
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

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    color: ${dt('tabs.header.hover.color')};
}

.p-tab-active {
    color: ${dt('tabs.header.active.color')};
}

.p-tabpanels {
    background: ${dt('tabs.navigator.content.background')};
    color: ${dt('tabs.navigator.content.color')};
    padding: 0.875rem 1.125rem 1.125rem 1.125rem;
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: -1px;
    height: 1px;
    background-color: ${dt('tabs.header.active.border.color')};
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
