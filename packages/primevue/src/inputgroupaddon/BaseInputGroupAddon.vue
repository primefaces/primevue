<script>
import BaseComponent from '@primevue/core/basecomponent';
import InputGroupAddonStyle from 'primevue/inputgroupaddon/style';

export default {
    name: 'BaseInputGroupAddon',
    extends: BaseComponent,
    style: InputGroupAddonStyle,
    provide() {
        return {
            $pcInputGroupAddon: this,
            $parentInstance: this
        };
    }
};
</script>
