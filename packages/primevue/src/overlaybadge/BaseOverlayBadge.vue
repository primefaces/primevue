<script>
import Badge from 'primevue-vaultic/badge';
import OverlayBadgeStyle from 'primevue-vaultic/overlaybadge/style';

export default {
    name: 'OverlayBadge',
    extends: Badge,
    style: OverlayBadgeStyle,
    provide() {
        return {
            $pcOverlayBadge: this,
            $parentInstance: this
        };
    }
};
</script>
