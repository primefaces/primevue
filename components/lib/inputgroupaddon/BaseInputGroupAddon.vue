<script>
import BaseComponent from 'primevue/basecomponent';
import InputGroupAddonStyle from 'primevue/inputgroupaddon/style';

export default {
    name: 'BaseInputGroupAddon',
    extends: BaseComponent,
    style: InputGroupAddonStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
