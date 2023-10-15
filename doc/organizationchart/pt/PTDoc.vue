<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <div class="card overflow-x-auto">
        <OrganizationChart
            :value="data"
            collapsible
            :pt="{
                node: ({ context }) => ({
                    class: context.toggleable ? 'border-orange-400 border-round-sm' : 'border-teal-400 border-round-sm'
                })
            }"
        >
            <template #default="slotProps">
                <span>{{ slotProps.node.label }}</span>
            </template>
        </OrganizationChart>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            data: {
                label: 'Argentina',
                children: [
                    {
                        label: 'Argentina',
                        children: [
                            {
                                label: 'Argentina'
                            },
                            {
                                label: 'Croatia'
                            }
                        ]
                    },
                    {
                        label: 'France',
                        children: [
                            {
                                label: 'France'
                            },
                            {
                                label: 'Morocco'
                            }
                        ]
                    }
                ]
            },
            code: {
                basic: `
<OrganizationChart
    :value="data"
    collapsible
    :pt="{
        node: ({ context }) => ({
            class: context.toggleable ? 'border-orange-400 border-round-sm' : 'border-teal-400 border-round-sm'
        })
    }"
>
    <template #default="slotProps">
        <span>{{ slotProps.node.label }}</span>
    </template>
</OrganizationChart>
`,
                options: `
<template>
    <div class="card overflow-x-auto">
        <OrganizationChart
            :value="data"
            collapsible
            :pt="{
                node: ({ context }) => ({
                    class: context.toggleable ? 'border-orange-400 border-round-sm' : 'border-teal-400 border-round-sm'
                })
            }"
        >
            <template #default="slotProps">
                <span>{{ slotProps.node.label }}</span>
            </template>
        </OrganizationChart>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: {
                label: 'Argentina',
                children: [
                    {
                        label: 'Argentina',
                        children: [
                            {
                                label: 'Argentina'
                            },
                            {
                                label: 'Croatia'
                            }
                        ]
                    },
                    {
                        label: 'France',
                        children: [
                            {
                                label: 'France'
                            },
                            {
                                label: 'Morocco'
                            }
                        ]
                    }
                ]
            }
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card overflow-x-auto">
        <OrganizationChart
            :value="data"
            collapsible
            :pt="{
                node: ({ context }) => ({
                    class: context.toggleable ? 'border-orange-400 border-round-sm' : 'border-teal-400 border-round-sm'
                })
            }"
        >
            <template #default="slotProps">
                <span>{{ slotProps.node.label }}</span>
            </template>
        </OrganizationChart>
    </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref({
    label: 'Argentina',
    children: [
        {
            label: 'Argentina',
            children: [
                {
                    label: 'Argentina'
                },
                {
                    label: 'Croatia'
                }
            ]
        },
        {
            label: 'France',
            children: [
                {
                    label: 'France'
                },
                {
                    label: 'Morocco'
                }
            ]
        }
    ]
});
<\/script>
`
            }
        };
    }
};
</script>
