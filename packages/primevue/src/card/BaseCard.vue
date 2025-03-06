<script>
import BaseComponent from '@primevue/core/basecomponent';
import CardStyle from 'primevue-vaultic/card/style';

export default {
    name: 'BaseCard',
    extends: BaseComponent,
    style: CardStyle,
    provide() {
        return {
            $pcCard: this,
            $parentInstance: this
        };
    }
};
</script>
