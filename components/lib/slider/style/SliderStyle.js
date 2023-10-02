import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-slider {
        position: relative;
    }

    .p-slider .p-slider-handle {
        cursor: grab;
        touch-action: none;
        display: block;
    }

    .p-slider-range {
        display: block;
    }

    .p-slider-horizontal .p-slider-range {
        top: 0;
        left: 0;
        height: 100%;
    }

    .p-slider-horizontal .p-slider-handle {
        top: 50%;
    }

    .p-slider-vertical {
        height: 100px;
    }

    .p-slider-vertical .p-slider-handle {
        left: 50%;
    }

    .p-slider-vertical .p-slider-range {
        bottom: 0;
        left: 0;
        width: 100%;
    }
}
`;

const inlineStyles = {
    handle: { position: 'absolute' },
    range: { position: 'absolute' }
};

const classes = {
    root: ({ props }) => [
        'p-slider p-component',
        {
            'p-disabled': props.disabled,
            'p-slider-horizontal': props.orientation === 'horizontal',
            'p-slider-vertical': props.orientation === 'vertical'
        }
    ],
    range: 'p-slider-range',
    handle: 'p-slider-handle'
};

export default BaseStyle.extend({
    name: 'slider',
    css,
    classes,
    inlineStyles
});
