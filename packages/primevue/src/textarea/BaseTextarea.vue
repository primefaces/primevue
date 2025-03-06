<script>
import BaseInput from '@primevue/core/baseinput';
import TextareaStyle from 'primevue-vaultic/textarea/style';

export default {
    name: 'BaseTextarea',
    extends: BaseInput,
    props: {
        autoResize: Boolean
    },
    style: TextareaStyle,
    provide() {
        return {
            $pcTextarea: this,
            $parentInstance: this
        };
    }
};
</script>
