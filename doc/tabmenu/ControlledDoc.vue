<template>
    <DocSectionText v-bind="$attrs">
        <p>Visibility of the content is specified with the <i>activeIndex</i> property that supports one or two-way binding.</p>
    </DocSectionText>
    <div class="card">
        <Button @click="active = 0" text outlined class="mb-2" label="Activate 1st" />
        <TabMenu v-model:activeIndex="active" :model="items" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            active: 3,
            items: [
                {
                    label: 'Home',
                    icon: 'pi pi-fw pi-home'
                },
                {
                    label: 'Calendar',
                    icon: 'pi pi-fw pi-calendar'
                },
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil'
                },
                {
                    label: 'Documentation',
                    icon: 'pi pi-fw pi-file'
                },
                {
                    label: 'Settings',
                    icon: 'pi pi-fw pi-cog'
                }
            ],
            code: {
                basic: `
<Button @click="active = 0" text outlined label="Activate 1st" />
<TabMenu v-model:activeIndex="active" :model="items" />`,
                options: `
<template>
    <div class="card">
        <Button @click="active = 0" text outlined label="Activate 1st" />
        <TabMenu v-model:activeIndex="active" :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 3,
            items: [
                {
                    label: 'Home',
                    icon: 'pi pi-fw pi-home'
                },
                {
                    label: 'Calendar',
                    icon: 'pi pi-fw pi-calendar'
                },
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil'
                },
                {
                    label: 'Documentation',
                    icon: 'pi pi-fw pi-file'
                },
                {
                    label: 'Settings',
                    icon: 'pi pi-fw pi-cog'
                }
            ]
        };
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card">
        <Button @click="active = 0" text outlined label="Activate 1st" />
        <TabMenu v-model:activeIndex="active" :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const active = ref(3);
const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-fw pi-home'
    },
    {
        label: 'Calendar',
        icon: 'pi pi-fw pi-calendar'
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil'
    },
    {
        label: 'Documentation',
        icon: 'pi pi-fw pi-file'
    },
    {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog'
    }
]);
<\/script>`
            }
        };
    }
};
</script>
