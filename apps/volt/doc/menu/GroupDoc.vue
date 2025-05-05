<template>
    <DocSectionText v-bind="$attrs">
        <p>Menu supports single level of grouping by defining children with the <i>items</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Menu :model="items" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Menu from '@/volt/Menu.vue';
import { ref } from 'vue';

const items = ref([
    {
        label: 'Documents',
        items: [
            {
                label: 'New',
                icon: 'pi pi-plus'
            },
            {
                label: 'Search',
                icon: 'pi pi-search'
            }
        ]
    },
    {
        label: 'Profile',
        items: [
            {
                label: 'Settings',
                icon: 'pi pi-cog'
            },
            {
                label: 'Logout',
                icon: 'pi pi-sign-out'
            }
        ]
    }
]);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Menu :model="items" />
    </div>
</template>

<script setup lang="ts">
import Menu from '@/volt/Menu.vue';
import { ref } from 'vue';

const items = ref([
    {
        label: 'Documents',
        items: [
            {
                label: 'New',
                icon: 'pi pi-plus'
            },
            {
                label: 'Search',
                icon: 'pi pi-search'
            }
        ]
    },
    {
        label: 'Profile',
        items: [
            {
                label: 'Settings',
                icon: 'pi pi-cog'
            },
            {
                label: 'Logout',
                icon: 'pi pi-sign-out'
            }
        ]
    }
]);
<\/script>
`);
</script>
