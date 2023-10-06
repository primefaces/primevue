<script>
import BaseComponent from 'primevue/basecomponent';
import DataViewLayoutOptionsStyle from 'primevue/dataviewlayoutoptions/style';

export default {
    name: 'BaseDataViewLayoutOptions',
    extends: BaseComponent,
    props: {
        modelValue: String
    },
    style: DataViewLayoutOptionsStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
