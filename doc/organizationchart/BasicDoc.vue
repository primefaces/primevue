<template>
    <DocSectionText v-bind="$attrs">
        <p>OrganizationChart requires a collection of <i>TreeNode</i> instances as a <i>value</i>.</p>
    </DocSectionText>
    <div class="card overflow-x-auto">
        <OrganizationChart :value="data">
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
<OrganizationChart :value="data">
    <template #default="slotProps">
        <span>{{ slotProps.node.label }}</span>
    </template>
</OrganizationChart>
`,
                options: `
<template>
    <div class="card overflow-x-auto">
        <OrganizationChart :value="data">
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
        <OrganizationChart :value="data">
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
