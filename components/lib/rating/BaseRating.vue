<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-rating {
    position: relative;
    display: flex;
    align-items: center;
}

.p-rating-item {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}

.p-rating.p-readonly .p-rating-item {
    cursor: default;
}
`;

const classes = {
    root: ({ props }) => [
        'p-rating',
        {
            'p-readonly': props.readonly,
            'p-disabled': props.disabled
        }
    ],
    cancelItem: ({ instance }) => [
        'p-rating-item p-rating-cancel-item',
        {
            'p-focus': instance.focusedOptionIndex === 0
        }
    ],
    cancelIcon: 'p-rating-icon p-rating-cancel',
    item: ({ instance, props, value }) => [
        'p-rating-item',
        {
            'p-rating-item-active': value <= props.modelValue,
            'p-focus': value === instance.focusedOptionIndex
        }
    ],
    onIcon: 'p-rating-icon',
    offIcon: 'p-rating-icon'
};

const { load: loadStyle, unload: unloadStyle } = useStyle(styles, { name: 'rating', manual: true });

export default {
    name: 'BaseRating',
    extends: BaseComponent,
    props: {
        modelValue: {
            type: Number,
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        stars: {
            type: Number,
            default: 5
        },
        cancel: {
            type: Boolean,
            default: true
        },
        onIcon: {
            type: String,
            default: undefined
        },
        offIcon: {
            type: String,
            default: undefined
        },
        cancelIcon: {
            type: String,
            default: undefined
        }
    },
    css: {
        classes,
        loadStyle
    },
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
