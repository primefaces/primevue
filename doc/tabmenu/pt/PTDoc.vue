<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <div class="card">
        <TabMenu
            :model="items"
            :pt="{
                action: ({ props, state, context }) => ({
                    class: context.order === state.d_activeIndex ? 'bg-primary' : undefined
                })
            }"
        />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
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
<TabMenu
    :model="items"
    :pt="{
        action: ({ props, state, context }) => ({
            class: context.order === state.d_activeIndex ? 'bg-primary' : undefined
        })
    }"
/>
`,
                options: `
<template>
    <div class="card">
        <TabMenu
            :model="items"
            :pt="{
                action: ({ props, state, context }) => ({
                    class: context.order === state.d_activeIndex ? 'bg-primary' : undefined
                })
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
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
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <TabMenu
            :model="items"
            :pt="{
                action: ({ props, state, context }) => ({
                    class: context.order === state.d_activeIndex ? 'bg-primary' : undefined
                })
            }"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";

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
<\/script>
`
            }
        };
    }
};
</script>
