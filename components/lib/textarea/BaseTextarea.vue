<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-inputtextarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-fluid .p-inputtextarea {
    width: 100%;
}
`;

const classes = {
    root: ({ instance, props }) => [
        'p-inputtextarea p-inputtext p-component',
        {
            'p-filled': instance.filled,
            'p-inputtextarea-resizable ': props.autoResize
        }
    ]
};

const { load: loadStyle } = useStyle(styles, { name: 'textarea', manual: true });

export default {
    name: 'BaseTextarea',
    extends: BaseComponent,
    props: {
        modelValue: null,
        autoResize: Boolean
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
