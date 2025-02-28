<template>
    <DocSectionText v-bind="$attrs">
        <p>Setting global property attaches the context menu to the document.</p>
    </DocSectionText>
    <div class="card text-center">
        <p class="mb-0">Right-Click anywhere on this page to view the global ContextMenu.</p>
        <ContextMenu global :model="items" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Translate',
                    icon: 'pi pi-language'
                },
                {
                    label: 'Speech',
                    icon: 'pi pi-volume-up',
                    items: [
                        {
                            label: 'Start',
                            icon: 'pi pi-caret-right'
                        },
                        {
                            label: 'Stop',
                            icon: 'pi pi-pause'
                        }
                    ]
                },
                {
                    separator: true
                },
                {
                    label: 'Print',
                    icon: 'pi pi-print'
                }
            ],
            code: {
                basic: `
<ContextMenu global :model="items" />
`,
                options: `
<template>
    <div class="card text-center">
        <p class="mb-0">Right-Click anywhere on this page to view the global ContextMenu.</p>
        <ContextMenu global :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Translate',
                    icon: 'pi pi-language'
                },
                {
                    label: 'Speech',
                    icon: 'pi pi-volume-up',
                    items: [
                        {
                            label: 'Start',
                            icon: 'pi pi-caret-right'
                        },
                        {
                            label: 'Stop',
                            icon: 'pi pi-pause'
                        }
                    ]
                },
                {
                    separator: true
                },
                {
                    label: 'Print',
                    icon: 'pi pi-print'
                }
            ]
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card text-center">
        <p class="mb-0">Right-Click anywhere on this page to view the global ContextMenu.</p>
        <ContextMenu global :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Translate',
        icon: 'pi pi-language'
    },
    {
        label: 'Speech',
        icon: 'pi pi-volume-up',
        items: [
            {
                label: 'Start',
                icon: 'pi pi-caret-right'
            },
            {
                label: 'Stop',
                icon: 'pi pi-pause'
            }
        ]
    },
    {
        separator: true
    },
    {
        label: 'Print',
        icon: 'pi pi-print'
    }
]);
<\/script>
`
            }
        };
    }
};
</script>
