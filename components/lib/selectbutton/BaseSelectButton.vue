<script>
import BaseComponent from 'primevue/basecomponent';

const classes = {
    root: ({ props }) => ['p-selectbutton p-buttonset p-component', { 'p-disabled': props.disabled }],
    button: ({ instance, option }) => [
        'p-button p-component',
        {
            'p-highlight': instance.isSelected(option),
            'p-disabled': instance.isOptionDisabled(option)
        }
    ],
    label: 'p-button-label'
};

export default {
    name: 'BaseSelectButton',
    extends: BaseComponent,
    props: {
        modelValue: null,
        options: Array,
        optionLabel: null,
        optionValue: null,
        optionDisabled: null,
        multiple: Boolean,
        unselectable: {
            type: Boolean,
            default: false
        },
        disabled: Boolean,
        dataKey: null,
        'aria-labelledby': {
            type: String,
            default: null
        }
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
