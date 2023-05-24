<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-chip {
    display: inline-flex;
    align-items: center;
}

.p-chip-text {
    line-height: 1.5;
}

.p-chip-icon.pi {
    line-height: 1.5;
}

.p-chip-remove-icon {
    line-height: 1.5;
    cursor: pointer;
}

.p-chip img {
    border-radius: 50%;
}
`;

const classes = {
    root: ({ props }) => [
        'p-chip p-component',
        {
            'p-chip-image': props.image != null
        }
    ],
    icon: ({ props }) => ['p-chip-icon', props.icon],
    label: 'p-chip-text',
    removeIcon: ({ props }) => ['p-chip-remove-icon', props.removeIcon]
};

const { load: loadStyle } = useStyle(styles, { id: 'primevue_divider_style', manual: true });

export default {
    name: 'BaseAvatar',
    extends: BaseComponent,
    props: {
        label: {
            type: String,
            default: null
        },
        icon: {
            type: String,
            default: null
        },
        image: {
            type: String,
            default: null
        },
        removable: {
            type: Boolean,
            default: false
        },
        removeIcon: {
            type: String,
            default: undefined
        }
    },
    css: {
        classes
    },
    watch: {
        isUnstyled: {
            immediate: true,
            handler(newValue) {
                !newValue && loadStyle();
            }
        }
    }
};
</script>
