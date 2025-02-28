<template>
    <DocSectionText v-bind="$attrs">
        <p>
            If the menuitem has a <i>key</i> defined, PanelMenu state can be controlled programmatically with the <i>expandedKeys</i> property that defines the keys that are expanded. This property is a Map instance whose key is the key of a node and
            value is a boolean.
        </p>
    </DocSectionText>
    <div class="card flex flex-col items-center gap-4">
        <Button type="button" label="Toggle All" text @click="toggleAll" />
        <PanelMenu v-model:expandedKeys="expandedKeys" :model="items" class="w-full md:w-80" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            expandedKeys: {},
            items: [
                {
                    key: '0',
                    label: 'Users',
                    icon: 'pi pi-users',
                    items: [
                        {
                            key: '0_1',
                            label: 'New',
                            items: [
                                {
                                    key: '0_1_0',
                                    label: 'Member'
                                },
                                {
                                    key: '0_1_1',
                                    label: 'Group'
                                }
                            ]
                        },
                        {
                            key: '0_2',
                            label: 'Search'
                        }
                    ]
                },
                {
                    key: '1',
                    label: 'Tasks',
                    icon: 'pi pi-server',
                    items: [
                        {
                            key: '1_0',
                            label: 'Add New'
                        },
                        {
                            key: '1_1',
                            label: 'Pending'
                        },
                        {
                            key: '1_2',
                            label: 'Overdue'
                        }
                    ]
                },
                {
                    key: '2',
                    label: 'Calendar',
                    icon: 'pi pi-calendar',
                    items: [
                        {
                            key: '2_0',
                            label: 'New Event'
                        },
                        {
                            key: '2_1',
                            label: 'Today'
                        },
                        {
                            key: '2_2',
                            label: 'This Week'
                        }
                    ]
                }
            ],
            code: {
                basic: `
<Button type="button" label="Toggle All" text @click="toggleAll" />
<PanelMenu v-model:expandedKeys="expandedKeys" :model="items" />
`,
                options: `
<template>
    <div class="card flex flex-col items-center gap-4">
        <Button type="button" label="Toggle All" text @click="toggleAll" />
        <PanelMenu v-model:expandedKeys="expandedKeys" :model="items" class="w-full md:w-80" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            expandedKeys: {},
            items: [
                {
                    key: '0',
                    label: 'Users',
                    icon: 'pi pi-users',
                    items: [
                        {
                            key: '0_1',
                            label: 'New',
                            items: [
                                {
                                    key: '0_1_0',
                                    label: 'Member'
                                },
                                {
                                    key: '0_1_1',
                                    label: 'Group'
                                }
                            ]
                        },
                        {
                            key: '0_2',
                            label: 'Search'
                        }
                    ]
                },
                {
                    key: '1',
                    label: 'Tasks',
                    icon: 'pi pi-server',
                    items: [
                        {
                            key: '1_0',
                            label: 'Add New'
                        },
                        {
                            key: '1_1',
                            label: 'Pending'
                        },
                        {
                            key: '1_2',
                            label: 'Overdue'
                        }
                    ]
                },
                {
                    key: '2',
                    label: 'Calendar',
                    icon: 'pi pi-calendar',
                    items: [
                        {
                            key: '2_0',
                            label: 'New Event'
                        },
                        {
                            key: '2_1',
                            label: 'Today'
                        },
                        {
                            key: '2_2',
                            label: 'This Week'
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        toggleAll() {
            if (Object.keys(this.expandedKeys).length) this.collapseAll();
            else this.expandAll();
        },
        expandAll() {
            for (let node of this.items) {
                this.expandNode(node);
            }

            this.expandedKeys = {
                ...this.expandedKeys
            };
        },
        collapseAll() {
            this.expandedKeys = {};
        },
        expandNode(node) {
            if (node.items && node.items.length) {
                this.expandedKeys[node.key] = true;

                for (let child of node.items) {
                    this.expandNode(child);
                }
            }
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-col items-center gap-4">
        <Button type="button" label="Toggle All" text @click="toggleAll" />
        <PanelMenu v-model:expandedKeys="expandedKeys" :model="items" class="w-full md:w-80" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const expandedKeys = ref({});
const items = ref([
    {
        key: '0',
        label: 'Users',
        icon: 'pi pi-users',
        items: [
            {
                key: '0_1',
                label: 'New',
                items: [
                    {
                        key: '0_1_0',
                        label: 'Member'
                    },
                    {
                        key: '0_1_1',
                        label: 'Group'
                    }
                ]
            },
            {
                key: '0_2',
                label: 'Search'
            }
        ]
    },
    {
        key: '1',
        label: 'Tasks',
        icon: 'pi pi-server',
        items: [
            {
                key: '1_0',
                label: 'Add New'
            },
            {
                key: '1_1',
                label: 'Pending'
            },
            {
                key: '1_2',
                label: 'Overdue'
            }
        ]
    },
    {
        key: '2',
        label: 'Calendar',
        icon: 'pi pi-calendar',
        items: [
            {
                key: '2_0',
                label: 'New Event'
            },
            {
                key: '2_1',
                label: 'Today'
            },
            {
                key: '2_2',
                label: 'This Week'
            }
        ]
    }
]);

const toggleAll = () => {
    if (Object.keys(expandedKeys.value).length) collapseAll();
    else expandAll();
}

const expandAll = () => {
    for (let node of items.value) {
        expandNode(node);
    }

    expandedKeys.value = {...expandedKeys.value};
};

const collapseAll = () => {
    expandedKeys.value = {};
};

const expandNode = (node) => {
    if (node.items && node.items.length) {
        expandedKeys.value[node.key] = true;

        for (let child of node.items) {
            expandNode(child);
        }
    }
};
<\/script>
`
            }
        };
    },
    methods: {
        toggleAll() {
            if (Object.keys(this.expandedKeys).length) this.collapseAll();
            else this.expandAll();
        },
        expandAll() {
            for (let node of this.items) {
                this.expandNode(node);
            }

            this.expandedKeys = {
                ...this.expandedKeys
            };
        },
        collapseAll() {
            this.expandedKeys = {};
        },
        expandNode(node) {
            if (node.items && node.items.length) {
                this.expandedKeys[node.key] = true;

                for (let child of node.items) {
                    this.expandNode(child);
                }
            }
        }
    }
};
</script>
