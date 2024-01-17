import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
    }

    .p-checkbox-input {
        cursor: pointer;
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
`;

const classes = {
    root: ({ instance, props }) => [
        'p-checkbox p-component',
        {
            'p-highlight': instance.checked,
            'p-disabled': props.disabled
        }
    ],
    box: 'p-checkbox-box',
    input: 'p-checkbox-input',
    icon: 'p-checkbox-icon'
};

export default BaseStyle.extend({
    name: 'checkbox',
    css,
    classes
});
