<script>
import BaseColumn from './BaseColumn.vue';

export default {
    name: 'Column',
    extends: BaseColumn,
    inject: ['registerColumn', 'unregisterColumn'],
    mounted() {
        if (this.registerColumn) {
            this.$.children = new Proxy(this.$.slots, {});
            this.registerColumn(this.$);
        }
    },
    unmounted() {
        if (this.unregisterColumn) {
            this.unregisterColumn(this.$);
        }
    },
    render() {
        return null;
    }
};
</script>
