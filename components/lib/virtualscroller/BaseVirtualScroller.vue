<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-virtualscroller {
    position: relative;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    /* contain: content; */
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller .p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-virtualscroller-loader.p-component-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: 2rem;
}

.p-virtualscroller-loading-icon.p-icon {
    width: 2rem;
    height: 2rem;
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

/* Inline */
.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`;

const inlineStyles = {
    root: { overflow: 'auto' }
};

const classes = {
    root: ({ instance, props }) => [
        'p-virtualscroller',
        {
            'p-virtualscroller-inline': props.inline,
            'p-virtualscroller-both p-both-scroll': instance.isBoth(),
            'p-virtualscroller-horizontal p-horizontal-scroll': instance.isHorizontal()
        }
    ],
    content: ({ instance }) => [
        'p-virtualscroller-content',
        {
            'p-virtualscroller-loading': instance.d_loading
        }
    ],
    spacer: 'p-virtualscroller-spacer',
    loader: ({ instance }) => [
        'p-virtualscroller-loader',
        {
            'p-component-overlay': !instance.$slots.loader
        }
    ],
    loadingIcon: 'p-virtualscroller-loading-icon'
};

const { load: loadStyle } = useStyle(styles, { id: 'primevue_virtualscroller_style', manual: true });

export default {
    name: 'BaseVirtualScroller',
    extends: BaseComponent,
    props: {
        id: {
            type: String,
            default: null
        },
        style: null,
        class: null,
        items: {
            type: Array,
            default: null
        },
        itemSize: {
            type: [Number, Array],
            default: 0
        },
        scrollHeight: null,
        scrollWidth: null,
        orientation: {
            type: String,
            default: 'vertical'
        },
        numToleratedItems: {
            type: Number,
            default: null
        },
        delay: {
            type: Number,
            default: 0
        },
        resizeDelay: {
            type: Number,
            default: 10
        },
        lazy: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loaderDisabled: {
            type: Boolean,
            default: false
        },
        columns: {
            type: Array,
            default: null
        },
        loading: {
            type: Boolean,
            default: false
        },
        showSpacer: {
            type: Boolean,
            default: true
        },
        showLoader: {
            type: Boolean,
            default: false
        },
        tabindex: {
            type: Number,
            default: 0
        },
        inline: {
            type: Boolean,
            default: false
        },
        step: {
            type: Number,
            default: 0
        },
        appendOnly: {
            type: Boolean,
            default: false
        },
        autoSize: {
            type: Boolean,
            default: false
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
