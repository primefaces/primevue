<script>
import AccordionContentStyle from 'primevue/accordioncontent/style';
import BaseComponent from 'primevue/basecomponent';

export default {
    name: 'BaseAccordionContent',
    extends: BaseComponent,
    props: {
        as: {
            type: String,
            default: 'DIV'
        },
        asChild: {
            type: Boolean,
            default: false
        }
    },
    style: AccordionContentStyle,
    provide() {
        return {
            $pcAccordionContent: this,
            $parentInstance: this
        };
    }
};
</script>
