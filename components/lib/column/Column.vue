<script>
import BaseColumn from './BaseColumn.vue';

export default {
    name: 'Column',
    extends: BaseColumn,
    inheritAttrs: false,
    inject: ['$columns'],
    mounted() {
        this.$columns?.add(this.$);
    },
    unmounted() {
        this.$columns?.delete(this.$);
    },
    render() {
        return null;
    }
};
</script>
