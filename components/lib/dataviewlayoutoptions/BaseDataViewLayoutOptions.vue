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

const { load: loadStyle } = useStyle(styles, { id: 'primevue_dataviewlayoutoptions_style', manual: true });

export default {
    name: 'BaseDataViewLayoutOptions',
    extends: BaseComponent,
    props: {
        modelValue: String
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
