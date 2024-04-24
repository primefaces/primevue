<script>
import AccordionPanelStyle from 'primevue/accordionpanel/style';
import BaseComponent from 'primevue/basecomponent';

export default {
    name: 'BaseAccordionPanel',
    extends: BaseComponent,
    props: {
        value: {
            type: String,
            default: undefined
        },
        disabled: {
            type: Boolean,
            default: false
        },
        as: {
            type: String,
            default: 'DIV'
        },
        asChild: {
            type: Boolean,
            default: false
        }
    },
    style: AccordionPanelStyle,
    provide() {
        return {
            $pcAccordionPanel: this,
            $parentInstance: this
        };
    }
};
</script>
