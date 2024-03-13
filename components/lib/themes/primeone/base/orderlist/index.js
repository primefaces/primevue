export default {
    css: ({ dt }) => `
.p-orderlist {
    display: flex;
    gap: 1.125rem;
}

.p-orderlist-controls {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
}

.p-orderlist-list-container {
    flex: 1 1 auto;
    background: ${dt('orderlist.list.background')};
    border: 1px solid ${dt('orderlist.list.border.color')};
    border-radius: ${dt('rounded.base')};
}

.p-orderlist .p-orderlist-header {
    color: ${dt('orderlist.header.color')};
    border: 0 none;
    padding: 0.75rem 1rem 0.5rem 1rem;
    font-weight: 600;
}

.p-orderlist-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: auto;
    min-height: 12rem;
    max-height: 24rem;
    padding: 0.25rem 0.25rem;
    outline: 0 none;
}

.p-orderlist-item {
    cursor: pointer;
    overflow: hidden;
    position: relative;
    padding: 0.5rem 0.75rem;
    margin: 2px 0;
    border-radius: ${dt('rounded.base')};
    border: 0 none;
    color: ${dt('orderlist.item.color')};
    background: ${dt('orderlist.item.background')};
    outline-color: transparent;
    transition: transform ${dt('transition.duration')}, background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
}

.p-orderlist-item:first-child {
    margin-top: 0;
}

.p-orderlist-item:last-child {
    margin-bottom: 0;
}

.p-orderlist-item:not(.p-highlight):hover {
    color: ${dt('orderlist.item.focus.color')};
    background: ${dt('orderlist.item.focus.background')};
}

.p-orderlist-item.p-focus {
    color: ${dt('orderlist.item.focus.color')};
    background: ${dt('orderlist.item.focus.background')};
}

.p-orderlist-item.p-highlight {
    color: ${dt('highlight.color')};
    background: ${dt('highlight.background')};
}

.p-orderlist-item.p-highlight.p-focus {
    color: ${dt('highlight.focus.color')};
    background: ${dt('highlight.focus.background')};
}

.p-orderlist-controls .p-button {
    background: ${dt('orderlist.control.background')};
    border: 1px solid ${dt('orderlist.control.border.color')};
    color: ${dt('orderlist.control.color')};
    outline-color: transparent;
    transition: opacity ${dt('transition.duration')}, outline-color ${dt('transition.duration')}, background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')};
}

.p-orderlist-controls .p-button:not(:disabled):hover {
    background: ${dt('orderlist.control.hover.background')};
    border: 1px solid ${dt('orderlist.control.hover.border.color')};
    color: ${dt('orderlist.control.hover.color')};
}

.p-orderlist-controls .p-button:not(:disabled):active {
    background: ${dt('orderlist.control.active.background')};
    border: 1px solid ${dt('orderlist.control.active.border.color')};
    color: ${dt('orderlist.control.hover.active')};
}

.p-orderlist-controls .p-button:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}
`
};
