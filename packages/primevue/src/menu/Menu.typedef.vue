<script setup lang="ts" generic="T extends MenuItem">
import type { MenuItem } from 'primevue/menuitem';
import { VNode } from 'vue';

defineProps<{
    items: T[];
}>();
defineSlots<{
    item(scope: { item: T }): VNode[];
}>();
</script>
