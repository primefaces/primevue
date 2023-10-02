import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-chips {
        display: inline-flex;
    }

    .p-chips-multiple-container {
        margin: 0;
        padding: 0;
        list-style-type: none;
        cursor: text;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .p-chips-token {
        cursor: default;
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
    }

    .p-chips-input-token {
        flex: 1 1 auto;
        display: inline-flex;
    }

    .p-chips-token-icon {
        cursor: pointer;
    }

    .p-chips-input-token input {
        border: 0 none;
        outline: 0 none;
        background-color: transparent;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
    }

    .p-fluid .p-chips {
        display: flex;
    }
}
`;

const classes = {
    root: ({ instance, props }) => [
        'p-chips p-component p-inputwrapper',
        {
            'p-disabled': props.disabled,
            'p-focus': instance.focused,
            'p-inputwrapper-filled': (props.modelValue && props.modelValue.length) || (instance.inputValue && instance.inputValue.length),
            'p-inputwrapper-focus': instance.focused
        }
    ],
    container: 'p-inputtext p-chips-multiple-container',
    token: ({ state, index }) => ['p-chips-token', { 'p-focus': state.focusedIndex === index }],
    label: 'p-chips-token-label',
    removeTokenIcon: 'p-chips-token-icon',
    inputToken: 'p-chips-input-token'
};

export default BaseStyle.extend({
    name: 'chips',
    css,
    classes
});
