<template>
    <DocSectionText v-bind="$attrs">
        <p>The <i>type</i> property of an OrganizationChartNode is used to map a template to a node. If it is undefined, the default template is used.</p>
    </DocSectionText>
    <div class="card overflow-x-auto">
        <OrganizationChart :value="data" collapsible>
            <template #country="slotProps">
                <div class="flex flex-col items-center">
                    <img :alt="slotProps.node.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`w-2rem flag flag-${slotProps.node.data}`" />
                    <div class="mt-4 font-medium text-lg">{{ slotProps.node.label }}</div>
                </div>
            </template>
            <template #default="slotProps">
                <span>{{ slotProps.node.data.label }}</span>
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
                key: '0',
                type: 'country',
                label: 'Argentina',
                data: 'ar',
                children: [
                    {
                        key: '0_0',
                        type: 'country',
                        label: 'Argentina',
                        data: 'ar',
                        children: [
                            {
                                key: '0_0_0',
                                type: 'country',
                                label: 'Argentina',
                                data: 'ar'
                            },
                            {
                                key: '0_0_1',
                                type: 'country',
                                label: 'Croatia',
                                data: 'hr'
                            }
                        ]
                    },
                    {
                        key: '0_1',
                        type: 'country',
                        label: 'France',
                        data: 'fr',
                        children: [
                            {
                                key: '0_1_0',
                                type: 'country',
                                label: 'France',
                                data: 'fr'
                            },
                            {
                                key: '0_1_1',
                                type: 'country',
                                label: 'Morocco',
                                data: 'ma'
                            }
                        ]
                    }
                ]
            },
            code: {
                basic: `
<OrganizationChart :value="data" collapsible>
    <template #country="slotProps">
        <div class="flex flex-col items-center">
            <img :alt="slotProps.node.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`w-2rem flag flag-\${slotProps.node.data}\`" />
            <div class="mt-4 font-medium text-lg">{{ slotProps.node.label }}</div>
        </div>
    </template>
    <template #default="slotProps">
        <span>{{slotProps.node.data.label}}</span>
    </template>
</OrganizationChart>
`,
                options: `
<template>
    <div class="card overflow-x-auto">
        <OrganizationChart :value="data" collapsible>
            <template #country="slotProps">
                <div class="flex flex-col items-center">
                    <img :alt="slotProps.node.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`w-2rem flag flag-\${slotProps.node.data}\`" />
                    <div class="mt-4 font-medium text-lg">{{ slotProps.node.label }}</div>
                </div>
            </template>
            <template #default="slotProps">
                <span>{{slotProps.node.data.label}}</span>
            </template>
        </OrganizationChart>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: {
                key: '0',
                type: 'country',
                label: 'Argentina',
                data: 'ar',
                children: [
                    {
                        key: '0_0',
                        type: 'country',
                        label: 'Argentina',
                        data: 'ar',
                        children: [
                            {
                                key: '0_0_0',
                                type: 'country',
                                label: 'Argentina',
                                data: 'ar'
                            },
                            {
                                key: '0_0_1',
                                type: 'country',
                                label: 'Croatia',
                                data: 'hr'
                            }
                        ]
                    },
                    {
                        key: '0_1',
                        type: 'country',
                        label: 'France',
                        data: 'fr',
                        children: [
                            {
                                key: '0_1_0',
                                type: 'country',
                                label: 'France',
                                data: 'fr'
                            },
                            {
                                key: '0_1_1',
                                type: 'country',
                                label: 'Morocco',
                                data: 'ma'
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
        <OrganizationChart :value="data" collapsible>
            <template #country="slotProps">
                <div class="flex flex-col items-center">
                    <img :alt="slotProps.node.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`w-2rem flag flag-\${slotProps.node.data}\`" />
                    <div class="mt-4 font-medium text-lg">{{ slotProps.node.label }}</div>
                </div>
            </template>
            <template #default="slotProps">
                <span>{{slotProps.node.data.label}}</span>
            </template>
        </OrganizationChart>
    </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref({
    key: '0',
    type: 'country',
    label: 'Argentina',
    data: 'ar',
    children: [
        {
            key: '0_0',
            type: 'country',
            label: 'Argentina',
            data: 'ar',
            children: [
                {
                    key: '0_0_0',
                    type: 'country',
                    label: 'Argentina',
                    data: 'ar'
                },
                {
                    key: '0_0_1',
                    type: 'country',
                    label: 'Croatia',
                    data: 'hr'
                }
            ]
        },
        {
            key: '0_1',
            type: 'country',
            label: 'France',
            data: 'fr',
            children: [
                {
                    key: '0_1_0',
                    type: 'country',
                    label: 'France',
                    data: 'fr'
                },
                {
                    key: '0_1_1',
                    type: 'country',
                    label: 'Morocco',
                    data: 'ma'
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
