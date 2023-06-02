<script>
import BaseComponent from 'primevue/basecomponent';

const classes = {
    root: 'p-dataview-layout-options p-selectbutton p-buttonset',
    listButton: ({ props }) => [
        'p-button p-button-icon-only',
        {
            'p-highlight': props.modelValue === 'list'
        }
    ],
    gridButton: ({ props }) => [
        'p-button p-button-icon-only',
        {
            'p-highlight': props.modelValue === 'grid'
        }
    ]
};

export default {
    name: 'BaseDataViewLayoutOptions',
    extends: BaseComponent,
    props: {
        modelValue: String
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
