<template>
    <DocSectionText v-bind="$attrs">
        <p>Theming is implemented with the pass through properties in unstyled mode. Example below demonstrates the built-in Tailwind theme.</p>
    </DocSectionText>
    <DocSectionCode :code="code" embedded />
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
                composition: `
<template>
    <div class="card overflow-x-auto">
        <OrganizationChart :value="data" collapsible>
            <template #country="slotProps">
                <div class="flex flex-col items-center">
                    <img :alt="slotProps.node.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`w-8 shadow-md flag flag-\${slotProps.node.data}\`" />
                    <div class="mt-3 font-medium text-lg">{{ slotProps.node.label }}</div>
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
<\/script>`
            }
        };
    }
};
</script>
