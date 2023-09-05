<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-organizationchart-table {
    border-spacing: 0;
    border-collapse: separate;
    margin: 0 auto;
}

.p-organizationchart-table > tbody > tr > td {
    text-align: center;
    vertical-align: top;
    padding: 0 0.75rem;
}

.p-organizationchart-node-content {
    display: inline-block;
    position: relative;
}

.p-organizationchart-node-content .p-node-toggler {
    position: absolute;
    bottom: -0.75rem;
    margin-left: -0.75rem;
    z-index: 2;
    left: 50%;
    user-select: none;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    text-decoration: none;
}

.p-organizationchart-node-content .p-node-toggler .p-node-toggler-icon {
    position: relative;
    top: 0.25rem;
}

.p-organizationchart-line-down {
    margin: 0 auto;
    height: 20px;
    width: 1px;
}

.p-organizationchart-line-right {
    border-radius: 0px;
}

.p-organizationchart-line-left {
    border-radius: 0;
}

.p-organizationchart-selectable-node {
    cursor: pointer;
}
`;

const classes = {
    root: 'p-organizationchart p-component',
    table: 'p-organizationchart-table',
    node: ({ instance }) => ['p-organizationchart-node-content', { 'p-organizationchart-selectable-node': instance.selectable, 'p-highlight': instance.selected }],
    nodeToggler: 'p-node-toggler',
    nodeTogglerIcon: 'p-node-toggler-icon',
    lines: 'p-organizationchart-lines',
    lineDown: 'p-organizationchart-line-down',
    lines: 'p-organizationchart-lines',
    lineLeft: ({ index }) => ['p-organizationchart-line-left', { 'p-organizationchart-line-top': !(index === 0) }],
    lineRight: ({ props, index }) => ['p-organizationchart-line-right', { 'p-organizationchart-line-top': !(index === props.node.children.length - 1) }],
    nodes: 'p-organizationchart-nodes'
};

const { load: loadStyle } = useStyle(styles, { name: 'organizationchart', manual: true });

export default {
    name: 'BaseOrganizationChart',
    extends: BaseComponent,
    props: {
        value: {
            type: null,
            default: null
        },
        selectionKeys: {
            type: null,
            default: null
        },
        selectionMode: {
            type: String,
            default: null
        },
        collapsible: {
            type: Boolean,
            default: false
        },
        collapsedKeys: {
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
