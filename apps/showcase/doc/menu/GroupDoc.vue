<template>
    <DocSectionText v-bind="$attrs">
        <p>Menu supports single level of grouping by defining children with the <i>items</i> property.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Menu :model="items" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
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
            ],
            code: {
                basic: `
<Menu :model="items" />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Menu :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
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
            ]
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Menu :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";

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
`
            }
        };
    }
};
</script>
