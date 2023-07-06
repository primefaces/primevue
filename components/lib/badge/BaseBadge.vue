<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';
import { ObjectUtils } from 'primevue/utils';

const styles = `
.p-badge {
    display: inline-block;
    border-radius: 10px;
    text-align: center;
    padding: 0 .5rem;
}

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge .p-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%,-50%);
    transform-origin: 100% 0;
    margin: 0;
}

.p-badge-dot {
    width: .5rem;
    min-width: .5rem;
    height: .5rem;
    border-radius: 50%;
    padding: 0;
}

.p-badge-no-gutter {
    padding: 0;
    border-radius: 50%;
}
`;

const classes = {
    root: ({ props, instance }) => [
        'p-badge p-component',
        {
            'p-badge-no-gutter': ObjectUtils.isNotEmpty(props.value) && String(props.value).length === 1,
            'p-badge-dot': ObjectUtils.isEmpty(props.value) && !instance.$slots.default,
            'p-badge-lg': props.size === 'large',
            'p-badge-xl': props.size === 'xlarge',
            'p-badge-info': props.severity === 'info',
            'p-badge-success': props.severity === 'success',
            'p-badge-warning': props.severity === 'warning',
            'p-badge-danger': props.severity === 'danger'
        }
    ]
};

const { load: loadStyle } = useStyle(styles, { name: 'badge', manual: true });

export default {
    name: 'BaseBadge',
    extends: BaseComponent,
    props: {
        value: {
            type: [String, Number],
            default: null
        },
        severity: {
            type: String,
            default: null
        },
        size: {
            type: String,
            default: null
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
