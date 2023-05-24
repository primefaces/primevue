<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
`;

const classes = {
    root: ({ instance }) => [
        'p-inputmask p-inputtext p-component',
        {
            'p-filled': instance.filled
        }
    ]
};

const { load: loadStyle, unload: unloadStyle } = useStyle(styles, { id: 'primevue_inputmask_style', manual: true });

export default {
    name: 'BaseInputMask',
    extends: BaseComponent,
    props: {
        modelValue: null,
        slotChar: {
            type: String,
            default: '_'
        },
        mask: {
            type: String,
            default: null
        },
        autoClear: {
            type: Boolean,
            default: true
        },
        unmask: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
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
