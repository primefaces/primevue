<script>
import BaseColumnGroup from './BaseColumnGroup.vue';

export default {
    name: 'ColumnGroup',
    extends: BaseColumnGroup,
    inheritAttrs: false,
    inject: ['$columnGroups'],
    mounted() {
        this.$columnGroups?.add(this.$);
    },
    unmounted() {
        this.$columnGroups?.delete(this.$);
    },
    render() {
        return null;
    }
};
</script>
