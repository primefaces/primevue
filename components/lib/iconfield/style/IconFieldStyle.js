import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-input-icon-left,
    .p-input-icon-right {
        position: relative;
        display: inline-block;
    }

    .p-input-icon-left > i,
    .p-input-icon-left > svg,
    .p-input-icon-right > i,
    .p-input-icon-right > svg {
        position: absolute;
        top: 50%;
        margin-top: -.5rem;
    }
}
`;

const classes = {
    root: ({ props }) => [
        {
            'p-input-icon-right': props.iconPosition === 'right',
            'p-input-icon-left': props.iconPosition === 'left'
        }
    ]
};

export default BaseStyle.extend({
    name: 'iconfield',
    css,
    classes
});
