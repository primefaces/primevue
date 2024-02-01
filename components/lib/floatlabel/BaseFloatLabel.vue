<script>
import BaseComponent from 'primevue/basecomponent';
import FloatLabelStyle from 'primevue/floatlabel/style';

export default {
    name: 'BaseFloatLabel',
    extends: BaseComponent,
    props: {},
    style: FloatLabelStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
