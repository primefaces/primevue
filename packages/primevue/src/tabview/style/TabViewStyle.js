import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-tabview-tablist-container {
    position: relative;
}

.p-tabview-scrollable > .p-tabview-tablist-container {
    overflow: hidden;
}

.p-tabview-tablist-scroll-container {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tabview-tablist-scroll-container::-webkit-scrollbar {
    display: none;
}

.p-tabview-tablist {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex: 1 1 auto;
    background: ${dt('tabview.tab.list.background')};
    border: 1px solid ${dt('tabview.tab.list.border.color')};
    border-width: 0 0 1px 0;
    position: relative;
}

.p-tabview-tab-header {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: transparent transparent ${dt('tabview.tab.border.color')} transparent;
    color: ${dt('tabview.tab.color')};
    padding: 1rem 1.125rem;
    font-weight: 600;
    border-top-right-radius: ${dt('border.radius.md')};
    border-top-left-radius: ${dt('border.radius.md')};
    transition: color ${dt('tabview.transition.duration')}, outline-color ${dt('tabview.transition.duration')};
    margin: 0 0 -1px 0;
    outline-color: transparent;
}

.p-tabview-tablist-item:not(.p-disabled) .p-tabview-tab-header:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: -1px;
}

.p-tabview-tablist-item:not(.p-highlight):not(.p-disabled):hover > .p-tabview-tab-header {
    color: ${dt('tabview.tab.hover.color')};
}

.p-tabview-tablist-item.p-highlight > .p-tabview-tab-header {
    color: ${dt('tabview.tab.active.color')};
}

.p-tabview-tab-title {
    line-height: 1;
    white-space: nowrap;
}

.p-tabview-next-button,
.p-tabview-prev-button {
    position: absolute;
    top: 0;
    margin: 0;
    padding: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${dt('tabview.nav.button.background')};
    color: ${dt('tabview.nav.button.color')};
    width: 2.5rem;
    border-radius: 0;
    outline-color: transparent;
    transition: color ${dt('tabview.transition.duration')}, outline-color ${dt('tabview.transition.duration')};
    box-shadow: ${dt('tabview.nav.button.shadow')};
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-tabview-next-button:focus-visible,
.p-tabview-prev-button:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-tabview-next-button:hover,
.p-tabview-prev-button:hover {
    color: ${dt('tabview.nav.button.hover.color')};
}

.p-tabview-prev-button {
    left: 0;
}

.p-tabview-next-button {
    right: 0;
}

.p-tabview-panels {
    background: ${dt('tabview.tab.panel.background')};
    color: ${dt('tabview.tab.panel.color')};
    padding: 0.875rem 1.125rem 1.125rem 1.125rem;
}

.p-tabview-ink-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: -1px;
    height: 1px;
    background: ${dt('tabview.tab.active.border.color')};
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`;

const classes = {
    root: ({ props }) => [
        'p-tabview p-component',
        {
            'p-tabview-scrollable': props.scrollable
        }
    ],
    navContainer: 'p-tabview-tablist-container',
    prevButton: 'p-tabview-prev-button',
    navContent: 'p-tabview-tablist-scroll-container',
    nav: 'p-tabview-tablist',
    tab: {
        header: ({ instance, tab, index }) => [
            'p-tabview-tablist-item',
            instance.getTabProp(tab, 'headerClass'),
            {
                'p-tabview-tablist-item-active': instance.d_activeIndex === index,
                'p-disabled': instance.getTabProp(tab, 'disabled')
            }
        ],
        headerAction: 'p-tabview-tab-header',
        headerTitle: 'p-tabview-tab-title',
        content: ({ instance, tab }) => ['p-tabview-panel', instance.getTabProp(tab, 'contentClass')]
    },
    inkbar: 'p-tabview-ink-bar',
    nextButton: 'p-tabview-next-button',
    panelContainer: 'p-tabview-panels'
};

export default BaseStyle.extend({
    name: 'tabview',
    theme,
    classes
});
