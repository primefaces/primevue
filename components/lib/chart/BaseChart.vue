<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-chart {
    position: relative;
}
`;

const classes = {
    root: 'p-chart'
};

const { load: loadStyle } = useStyle(styles, { name: 'chart', manual: true });

export default {
    name: 'BaseChart',
    extends: BaseComponent,
    props: {
        type: String,
        data: null,
        options: null,
        plugins: null,
        width: {
            type: Number,
            default: 300
        },
        height: {
            type: Number,
            default: 150
        },
        canvasProps: {
            type: null,
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
