<script setup lang="ts" generic="Item extends MenuItem">
import type { MenuItem } from 'primevue/menuitem';
import { MenuEmits, MenuMethods, MenuProps, MenuSlots } from './Menu';

defineProps<MenuProps<Item>>();
defineSlots<MenuSlots<Item>>();
defineEmits<MenuEmits>();
defineExpose<MenuMethods>();
</script>
