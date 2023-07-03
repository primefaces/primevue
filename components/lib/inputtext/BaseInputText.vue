<script>
import BaseComponent from 'primevue/basecomponent';

const classes = {
    root: ({ instance }) => ['p-inputtext p-component', { 'p-filled': instance.filled }]
};

export default {
    name: 'BaseInputText',
    extends: BaseComponent,
    props: {
        modelValue: null
    },
    css: {
        classes
    },
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
