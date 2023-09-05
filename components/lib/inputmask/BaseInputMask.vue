<script>
import BaseComponent from 'primevue/basecomponent';

const classes = {
    root: ({ instance }) => [
        'p-inputmask p-inputtext p-component',
        {
            'p-filled': instance.filled
        }
    ]
};

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
    }
};
</script>
