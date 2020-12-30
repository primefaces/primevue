<script>
export default {
    name: 'splitterpanel',
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
    computed: {
        containerClass() {
            return ['p-splitter-panel', {'p-splitter-panel-nested': this.isNested}];
        },
        isNested() {
            return this.$slots.default.some(child => {
                return (child.componentOptions && child.componentOptions.tag === 'Splitter');
            });
        }
    },
    render() {
        return null;
    }
}
</script>