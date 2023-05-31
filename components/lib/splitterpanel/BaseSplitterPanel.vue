<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-splitter-panel {
    flex-grow: 1;
}

.p-splitter-panel-nested {
    display: flex;
}

.p-splitter-panel .p-splitter {
    flex-grow: 1;
    border: 0 none;
}
`;

const classes = {
    root: ({ instance }) => ['p-splitter-panel', { 'p-splitter-panel-nested': instance.isNested }]
};

const { load: loadStyle } = useStyle(styles, { id: 'primevue_splitterpanel_style', manual: true });

export default {
    name: 'BaseSplitterPanel',
    extends: BaseComponent,
    props: {
        size: {
            type: Number,
            default: null
        },
        minSize: {
            type: Number,
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
