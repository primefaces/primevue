<script>
import AccordionTabStyle from 'primevue/accordiontab/style';
import BaseComponent from 'primevue/basecomponent';

export default {
    name: 'BaseAccordionTab',
    extends: BaseComponent,
    props: {
        header: null,
        headerStyle: null,
        headerClass: null,
        headerProps: null,
        headerActionProps: null,
        contentStyle: null,
        contentClass: null,
        contentProps: null,
        disabled: Boolean
    },
    style: AccordionTabStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
