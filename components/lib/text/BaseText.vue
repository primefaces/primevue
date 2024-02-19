<script>
import BaseComponent from 'primevue/basecomponent';
import TextStyle from 'primevue/text/style';
import { defineDeclarations } from '../props/style';
import SIZING from '../props/style/sizing.js';
import SPACING from '../props/style/spacing.js';

export const styleData = defineDeclarations(SPACING, SIZING);

export default {
    name: 'BaseText',
    extends: BaseComponent,
    props: {
        ...styleData.props,
        as: {
            type: String,
            default: 'p'
        }
    },
    style: TextStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
