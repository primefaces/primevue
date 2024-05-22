<script>
import Badge from 'primevue/badge';
import OverlayBadgeStyle from 'primevue/overlaybadge/style';

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
