<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
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

const { load: loadStyle, unload: unloadStyle } = useStyle(styles, { name: 'slider', manual: true });

export default {
    name: 'BaseSlider',
    extends: BaseComponent,
    props: {
        modelValue: [Number, Array],
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        orientation: {
            type: String,
            default: 'horizontal'
        },
        step: {
            type: Number,
            default: null
        },
        range: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: 0
        },
        'aria-labelledby': {
            type: String,
            default: null
        },
        'aria-label': {
            type: String,
            default: null
        }
    },
    css: {
        classes,
        inlineStyles,
        loadStyle
    },
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
