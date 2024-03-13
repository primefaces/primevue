export default {
    css: ({ dt }) => `
.p-picklist {
    display: flex;
    gap: 1.125rem;
}

.p-picklist-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
}

.p-picklist-list-wrapper {
    flex: 1 1 50%;
    background: ${dt('picklist.list.background')};
    border: 1px solid ${dt('picklist.list.border.color')};
    border-radius: ${dt('rounded.base')};
}

.p-picklist .p-picklist-header {
    color: ${dt('picklist.header.color')};
    border: 0 none;
    padding: 0.75rem 1rem 0.5rem 1rem;
    font-weight: 600;
}

.p-picklist-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: auto;
    min-height: 12rem;
    max-height: 24rem;
    padding: 0.25rem 0.25rem;
    outline: 0 none;
}

.p-picklist-item {
    cursor: pointer;
    overflow: hidden;
    position: relative;
    padding: 0.5rem 0.75rem;
    margin: 2px 0;
    border-radius: ${dt('rounded.base')};
    border: 0 none;
    color: ${dt('picklist.item.color')};
    background: ${dt('picklist.item.background')};
    outline-color: transparent;
    transition: transform ${dt('transition.duration')}, background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
}

.p-picklist-item:first-child {
    margin-top: 0;
}

.p-picklist-item:last-child {
    margin-bottom: 0;
}

.p-picklist-item:not(.p-highlight):hover {
    color: ${dt('picklist.item.focus.color')};
    background: ${dt('picklist.item.focus.background')};
}

.p-picklist-item.p-focus {
    color: ${dt('picklist.item.focus.color')};
    background: ${dt('picklist.item.focus.background')};
}

.p-picklist-item.p-highlight {
    color: ${dt('highlight.color')};
    background: ${dt('highlight.background')};
}

.p-picklist-item.p-highlight.p-focus {
    color: ${dt('highlight.focus.color')};
    background: ${dt('highlight.focus.background')};
}

.p-picklist-buttons .p-button {
    background: ${dt('picklist.control.background')};
    border: 1px solid ${dt('picklist.control.border.color')};
    color: ${dt('picklist.control.color')};
    outline-color: transparent;
    transition: opacity ${dt('transition.duration')}, outline-color ${dt('transition.duration')}, background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')};
}

.p-picklist-buttons .p-button:not(:disabled):hover {
    background: ${dt('picklist.control.hover.background')};
    border: 1px solid ${dt('picklist.control.hover.border.color')};
    color: ${dt('picklist.control.hover.color')};
}

.p-picklist-buttons .p-button:not(:disabled):active {
    background: ${dt('picklist.control.active.background')};
    border: 1px solid ${dt('picklist.control.active.border.color')};
    color: ${dt('picklist.control.active.color')};
}

.p-picklist-buttons .p-button:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}
`
};
