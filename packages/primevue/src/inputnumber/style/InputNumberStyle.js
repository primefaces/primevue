import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-inputnumber {
    display: inline-flex;
    position: relative;
}

.p-inputnumber-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    cursor: pointer;
    background: ${dt('inputnumber.button.background')};
    color: ${dt('inputnumber.button.color')};
    width: ${dt('inputnumber.button.width')};
    transition: background ${dt('inputnumber.transition.duration')}, color ${dt('inputnumber.transition.duration')}, border-color ${dt('inputnumber.transition.duration')}, outline-color ${dt('inputnumber.transition.duration')};
}

.p-inputnumber-button:hover {
    background: ${dt('inputnumber.button.hover.background')};
    color: ${dt('inputnumber.button.hover.color')};
}

.p-inputnumber-button:active {
    background: ${dt('inputnumber.button.active.background')};
    color: ${dt('inputnumber.button.active.color')};
}

.p-inputnumber-stacked .p-inputnumber-button {
    position: relative;
    border: 0 none;
}

.p-inputnumber-stacked .p-inputnumber-button-group {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 1px;
    right: 1px;
    height: calc(100% - 2px);
}

.p-inputnumber-stacked .p-inputnumber-increment-button {
    padding: 0;
    border-top-right-radius: calc(${dt('inputnumber.button.border.radius')} - 1px);
}

.p-inputnumber-stacked .p-inputnumber-decrement-button {
    padding: 0;
    border-bottom-right-radius: calc(${dt('inputnumber.button.border.radius')} - 1px);
}

.p-inputnumber-stacked .p-inputnumber-button {
    flex: 1 1 auto;
    border: 0 none;
}

.p-inputnumber-horizontal .p-inputnumber-button {
    border: 1px solid ${dt('inputnumber.button.border.color')};
}

.p-inputnumber-horizontal .p-inputnumber-button:hover {
    border-color: ${dt('inputnumber.button.hover.border.color')};
}

.p-inputnumber-horizontal .p-inputnumber-button:active {
    border-color: ${dt('inputnumber.button.active.border.color')};
}

.p-inputnumber-horizontal .p-inputnumber-increment-button {
    order: 3;
    border-top-right-radius: ${dt('border.radius.md')};
    border-bottom-right-radius: ${dt('border.radius.md')};
    border-left: 0 none;
}

.p-inputnumber-horizontal .p-inputnumber-input {
    order: 2;
    border-radius: 0;
}

.p-inputnumber-horizontal .p-inputnumber-decrement-button {
    order: 1;
    border-top-left-radius: ${dt('border.radius.md')};
    border-bottom-left-radius: ${dt('border.radius.md')};
    border-right: 0 none;
}

.p-inputnumber-vertical {
    flex-direction: column;
}

.p-inputnumber-vertical .p-inputnumber-button {
    border: 1px solid ${dt('inputnumber.button.border.color')};
    padding: ${dt('inputnumber.button.vertical.padding')}; 0;
}

.p-inputnumber-vertical .p-inputnumber-button:hover {
    border-color: ${dt('inputnumber.button.hover.border.color')};
}

.p-inputnumber-vertical .p-inputnumber-button:active {
    border-color: ${dt('inputnumber.button.active.border.color')};
}

.p-inputnumber-vertical .p-inputnumber-increment-button {
    order: 1;
    border-top-left-radius: ${dt('border.radius.md')};
    border-top-right-radius: ${dt('border.radius.md')};
    width: 100%;
    border-bottom: 0 none;
}

.p-inputnumber-vertical .p-inputnumber-input {
    order: 2;
    border-radius: 0;
    text-align: center;
}

.p-inputnumber-vertical .p-inputnumber-decrement-button {
    order: 3;
    border-bottom-left-radius: ${dt('border.radius.md')};
    border-bottom-right-radius: ${dt('border.radius.md')};
    width: 100%;
    border-top: 0 none;
}

.p-inputnumber-input {
    flex: 1 1 auto;
}

.p-fluid .p-inputnumber {
    width: 100%;
}

.p-fluid .p-inputnumber .p-inputnumber-input {
    width: 1%;
}

.p-fluid .p-inputnumber-vertical .p-inputnumber-input {
    width: 100%;
}
`;

const classes = {
    root: ({ instance, props }) => [
        'p-inputnumber p-component p-inputwrapper',
        {
            'p-inputwrapper-filled': instance.filled || props.allowEmpty === false,
            'p-inputwrapper-focus': instance.focused,
            'p-inputnumber-stacked': props.showButtons && props.buttonLayout === 'stacked',
            'p-inputnumber-horizontal': props.showButtons && props.buttonLayout === 'horizontal',
            'p-inputnumber-vertical': props.showButtons && props.buttonLayout === 'vertical'
        }
    ],
    pcInput: 'p-inputnumber-input',
    buttonGroup: 'p-inputnumber-button-group',
    incrementButton: ({ instance, props }) => [
        'p-inputnumber-button p-inputnumber-increment-button',
        {
            'p-disabled': props.showButtons && props.max !== null && instance.maxBoundry()
        }
    ],
    decrementButton: ({ instance, props }) => [
        'p-inputnumber-button p-inputnumber-decrement-button',
        {
            'p-disabled': props.showButtons && props.min !== null && instance.minBoundry()
        }
    ]
};

export default BaseStyle.extend({
    name: 'inputnumber',
    theme,
    classes
});
