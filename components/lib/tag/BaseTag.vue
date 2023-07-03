<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.p-tag-icon,
.p-tag-value,
.p-tag-icon.pi {
    line-height: 1.5;
}

.p-tag.p-tag-rounded {
    border-radius: 10rem;
}
`;

const classes = {
    root: ({ props }) => [
        'p-tag p-component',
        {
            'p-tag-info': props.severity === 'info',
            'p-tag-success': props.severity === 'success',
            'p-tag-warning': props.severity === 'warning',
            'p-tag-danger': props.severity === 'danger',
            'p-tag-rounded': props.rounded
        }
    ],
    icon: 'p-tag-icon',
    value: 'p-tag-value'
};

const { load: loadStyle } = useStyle(styles, { name: 'tag', manual: true });

export default {
    name: 'BaseTag',
    extends: BaseComponent,
    props: {
        value: null,
        severity: null,
        rounded: Boolean,
        icon: String
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
