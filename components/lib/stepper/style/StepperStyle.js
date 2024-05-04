import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-stepper-list {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow-x: auto;
}

.p-stepper-item {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    padding: 0.5rem;
}

.p-stepper-item:last-of-type {
    flex: initial;
}

.p-stepper-item-header {
    border: 0 none;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border-radius: ${dt('rounded.base')};
    outline-color: transparent;
    background: transparent;
}

.p-stepper-item .p-stepper-item-header:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-stepper.p-stepper-readonly .p-stepper-item {
    cursor: auto;
}

.p-stepper-item-title {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    margin-left: 0.5rem;
    color: ${dt('stepper.item.title.color')};
    font-weight: 500;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
}

.p-stepper-item-number {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: ${dt('stepper.item.number.color')};
    border: 1px solid ${dt('stepper.item.number.border.color')};
    border-width: 2px;
    background: ${dt('stepper.item.number.background')};
    min-width: 2rem;
    height: 2rem;
    line-height: 2rem;
    font-size: 1.143rem;
    border-radius: 50%;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
}

.p-stepper-item-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
}

.p-stepper-item-active .p-stepper-item-header {
    cursor: default;
}

.p-stepper-item-active .p-stepper-item-number {
    background: ${dt('stepper.item.number.active.background')};
    color: ${dt('stepper.item.number.active.color')};
}

.p-stepper-item-active .p-stepper-item-title {
    color: ${dt('stepper.item.title.active.color')};
}

.p-stepper-item:not(.p-disabled):focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-stepper-item:has(~ .p-stepper-item-active) .p-stepper-separator {
    background: ${dt('stepper.separator.active.background')};
}

.p-stepper-separator {
    flex: 1 1 0;
    background: ${dt('stepper.separator.background')};
    width: 100%;
    height: 2px;
    margin-inline-start: 1rem;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, box-shadow ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
}

.p-stepper-panels {
    padding: 0.875rem 1.125rem 1.125rem 1.125rem;
}

.p-stepper-panel-content {
    background: ${dt('stepper.panel.content.background')};
    color: ${dt('stepper.panel.content.color')};
}

.p-stepper-vertical .p-stepper-list {
    flex-direction: column;
}

.p-stepper-vertical {
    display: flex;
    flex-direction: column;
}

.p-stepper-vertical .p-stepper-panel-content-container {
    display: flex;
    flex: 1 1 auto;
}

.p-stepper-vertical .p-stepper-panel {
    display: flex;
    flex-direction: column;
    flex: initial;
}

.p-stepper-vertical .p-stepper-panel.p-stepper-panel-active {
    flex: 1 1 auto;
}

.p-stepper-vertical .p-stepper-panel .p-stepper-item {
    flex: initial;
}

.p-stepper-vertical .p-stepper-panel .p-stepper-panel-content {
    width: 100%;
    padding-left: 1rem;
}

.p-stepper-vertical .p-stepper-panel .p-stepper-separator {
    flex: 0 0 auto;
    width: 2px;
    height: auto;
    margin-inline-start: calc(1.75rem + 2px);
}

.p-stepper-vertical .p-stepper-panel:has(~ .p-stepper-panel-active) .p-stepper-separator {
    background: ${dt('stepper.connector.active.background')};
}

.p-stepper-vertical .p-stepper-panel:last-of-type .p-stepper-panel-content {
    padding-left: 3rem;
}
`;

const classes = {
    root: ({ props }) => [
        'p-stepper p-component',
        {
            'p-stepper-horizontal': props.orientation === 'horizontal',
            'p-stepper-vertical': props.orientation === 'vertical',
            'p-readonly': props.linear
        }
    ],
    list: 'p-stepper-list',
    stepper: {
        item: ({ instance, step, index }) => [
            'p-stepper-item',
            {
                'p-stepper-item-active': instance.isStepActive(index),
                'p-disabled': instance.isItemDisabled(index)
            }
        ],
        itemHeader: 'p-stepper-item-header',
        itemNumber: 'p-stepper-item-number',
        itemTitle: 'p-stepper-item-title',
        separator: 'p-stepper-separator',
        panelContentContainer: 'p-stepper-panel-content-container',
        panelContent: 'p-stepper-panel-content'
    },
    panels: 'p-stepper-panels',
    panel: ({ instance, props, index }) => [
        'p-stepper-panel',
        {
            'p-stepper-panel-active': props.orientation === 'vertical' && instance.isStepActive(index)
        }
    ]
};

export default BaseStyle.extend({
    name: 'stepper',
    theme,
    classes
});
