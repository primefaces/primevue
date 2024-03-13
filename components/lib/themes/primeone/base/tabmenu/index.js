export default {
    css: ({ dt }) => `
.p-tabmenu {
    overflow-x: auto;
}

.p-tabmenu-nav {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex: 1 1 auto;
    background: ${dt('tabmenu.nav.background')};
    border: 1px solid ${dt('tabmenu.nav.border.color')};
    border-width: 0 0 1px 0;
    position: relative;
}

.p-tabmenuitem .p-menuitem-link {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: transparent transparent ${dt('tabmenu.header.border.color')} transparent;
    color: ${dt('tabmenu.header.color')};
    padding: 1rem 1.125rem;
    font-weight: 600;
    border-top-right-radius: ${dt('rounded.base')};
    border-top-left-radius: ${dt('rounded.base')};
    transition: color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    margin: 0 0 -1px 0;
    outline-color: transparent;
}

.p-tabmenuitem .p-menuitem-link:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: -1px;
}

.p-tabmenuitem .p-menuitem-icon {
    margin-right: 0.5rem;
}

.p-tabmenu-nav .p-menuitem-text {
    line-height: 1;
}

.p-tabmenuitem:not(.p-highlight):not(.p-disabled):hover .p-menuitem-link {
    color: ${dt('tabmenu.header.hover.color')};
}

.p-tabmenuitem.p-highlight .p-menuitem-link {
    color: ${dt('tabmenu.header.active.border.color')};
}

.p-tabmenu-ink-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: -1px;
    height: 1px;
    background-color: ${dt('tabmenu.header.active.border.color')};
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}

.p-tabmenu::-webkit-scrollbar {
    display: none;
}
`
};
