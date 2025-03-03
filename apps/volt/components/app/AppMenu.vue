<template>
    <aside class="layout-sidebar" :class="{ active: active }">
        <nav>
            <ol class="layout-menu">
                <AppMenuItem :menu="menu"></AppMenuItem>
            </ol>
        </nav>
    </aside>
</template>

<script>
import menudata from '@/assets/data/menu.json';

export default {
    props: {
        active: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            menu: menudata.data
        };
    }
};
</script>
