export default {
    css: ({ dt }) => `
.p-megamenu {
    display: flex;
    position: relative;
    padding: 0.5rem 0.5rem;
    background: ${dt('megamenu.background')};
    color: ${dt('megamenu.color')};
    border: 1px solid ${dt('megamenu.border.color')};
    border-radius: ${dt('rounded.base')};
}

.p-megamenu-root-list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-megamenu .p-menuitem-content {
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')};
    border-radius: ${dt('rounded.sm')};
    color: ${dt('megamenu.item.color')};
}

.p-megamenu .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: 0.5rem 0.75rem;
    user-select: none;
}

.p-megamenu .p-menuitem-text {
    line-height: 1;
}

.p-megamenu .p-menuitem-icon {
    color: ${dt('megamenu.item.icon.color')};
    margin-right: 0.5rem;
}

.p-megamenu .p-menuitem.p-focus > .p-menuitem-content {
    color: ${dt('megamenu.item.focus.color')};
    background: ${dt('megamenu.item.focus.background')};
}

.p-megamenu .p-menuitem.p-focus > .p-menuitem-content .p-menuitem-icon,
.p-megamenu .p-menuitem.p-focus > .p-menuitem-content .p-submenu-icon {
    color: ${dt('megamenu.item.icon.focus.color')};
}

.p-megamenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover {
    color: ${dt('megamenu.item.focus.color')};
    background: ${dt('megamenu.item.focus.background')};
}

.p-megamenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-menuitem-icon,
.p-megamenu .p-menuitem:not(.p-disabled) > .p-menuitem-content:hover .p-submenu-icon {
    color: ${dt('megamenu.item.icon.focus.color')};

.p-megamenu .p-menuitem-active > .p-menuitem-content {
    color: ${dt('megamenu.item.focus.color')};
    background: ${dt('megamenu.item.focus.background')};
}

.p-megamenu .p-menuitem-active > .p-menuitem-content .p-menuitem-icon,
.p-megamenu .p-menuitem-active > .p-menuitem-content .p-submenu-icon {
    color: ${dt('megamenu.item.icon.focus.color')};
}

.p-megamenu .p-submenu-icon {
    color: ${dt('megamenu.item.icon.color')};
    margin-left: 0.5rem;
    font-size: 0.875rem;
    width: 0.875rem;
    height: 0.875rem;
}

.p-megamenu-panel {
    display: none;
    position: absolute;
    width: auto;
    z-index: 1;
    left: 0;
    min-width: 100%;
    background: ${dt('megamenu.background')};
    color: ${dt('megamenu.color')};
    border: 1px solid ${dt('megamenu.border.color')};
    border-radius: ${dt('rounded.base')};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)
}

.p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
    display: block;
}

.p-megamenu-submenu {
    margin: 0;
    list-style: none;
    padding: 0.25rem 0.25rem;
    min-width: 12.5rem;
}

.p-megamenu-submenu .p-menuitem {
    margin: 2px 0;
}

.p-megamenu-submenu .p-menuitem:first-child {
    margin-top: 0;
}

.p-megamenu-submenu .p-menuitem:last-child {
    margin-bottom: 0;
}

.p-megamenu-submenu .p-submenu-header {
    margin: 0;
    padding: 0.5rem 0.75rem;
    color: ${dt('megamenu.submenu.header.color')};
    font-weight: 600;
    margin-bottom: 2px;
}

.p-megamenu-submenu .p-menuitem-separator {
    border-top: 1px solid ${dt('megamenu.separator.border.color')};
    margin: 2px 0;
}

.p-megamenu-horizontal {
    align-items: center;
}

.p-megamenu-horizontal .p-megamenu-root-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.p-megamenu-horizontal .p-megamenu-end {
    margin-left: auto;
    align-self: center;
}

.p-megamenu-vertical {
    display: inline-flex;
    flex-direction: column;
    min-width: 12.5rem;
    padding: 0.25rem 0.25rem;
}

.p-megamenu-vertical .p-megamenu-root-list {
    flex-direction: column;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
    left: 100%;
    top: 0;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-menuitem > .p-menuitem-content .p-submenu-icon {
    margin-left: auto;
}

.p-megamenu-grid {
    display: flex;
}

.p-megamenu-col-2,
.p-megamenu-col-3,
.p-megamenu-col-4,
.p-megamenu-col-6,
.p-megamenu-col-12 {
    flex: 0 0 auto;
    padding: 0.5rem;
}

.p-megamenu-col-2 {
    width: 16.6667%;
}

.p-megamenu-col-3 {
    width: 25%;
}

.p-megamenu-col-4 {
    width: 33.3333%;
}

.p-megamenu-col-6 {
    width: 50%;
}

.p-megamenu-col-12 {
    width: 100%;
}

.p-megamenu-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 1.75rem;
    height: 1.75rem;
    position: relative;
    color: ${dt('megamenu.mobile.toggle.color')};
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
}

.p-megamenu-button:hover {
    color: ${dt('megamenu.mobile.toggle.hover.color')};
    background: ${dt('megamenu.mobile.toggle.hover.background')};
}

.p-megamenu-button:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-megamenu-mobile {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-button {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-root-list {
    position: absolute;
    display: none;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
    width: 100%;
    padding: 0.25rem 0.25rem;
    background: ${dt('megamenu.background')};
    border: 1px solid ${dt('megamenu.border.color')};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    gap: 2px;
}

.p-megamenu-mobile-active .p-megamenu-root-list {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-root-list .p-menuitem {
    width: 100%;
    position: static;
}

.p-megamenu-mobile .p-megamenu-panel {
    position: static;
    border: 0 none;
    border-radius: 0;
    box-shadow: none;
}

.p-megamenu-mobile .p-megamenu-grid {
    flex-wrap: wrap;
    overflow: auto;
    max-height: 90%;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-menuitem > .p-menuitem-content .p-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-content .p-submenu-icon {
    transform: rotate(-180deg);
}
`
};
