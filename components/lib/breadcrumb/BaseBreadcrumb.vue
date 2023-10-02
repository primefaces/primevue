<script>
import BaseComponent from 'primevue/basecomponent';
import BreadcrumbStyle from 'primevue/breadcrumb/style';

export default {
    name: 'BaseBreadcrumb',
    extends: BaseComponent,
    props: {
        model: {
            type: Array,
            default: null
        },
        home: {
            type: null,
            default: null
        },
        exact: {
            type: Boolean,
            default: true
        }
    },
    style: BreadcrumbStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
