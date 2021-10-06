<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>PanelMenu</h1>
                <p>PanelMenu is a hybrid of Accordion and Tree components.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
               <h5>Default</h5>
               <PanelMenu :model="items" />

               <h5>Programmatic</h5>
               <div class="p-mb-3">
                    <Button type="button" icon="plus" label="Expand All" @click="expandAll" class="p-mr-2" />
                    <Button type="button" icon="minus" label="Collapse All" @click="collapseAll" />
                </div>
               <PanelMenu :model="items" v-model:expandedKeys="expandedKeys" />
            </div>
        </div>

        <PanelMenuDoc />
    </div>
</template>

<script>
import PanelMenuDoc from './PanelMenuDoc';

export default {
    data() {
        return {
            expandedKeys: {},
            items: [{
                    key: '0',
                    label: 'File',
                    icon: 'fw file',
                    items: [{
                            key: '0_0',
                            label: 'New',
                            icon: 'fw plus',
                            items: [{
                                    key: '0_0_0',
                                    label: 'Bookmark',
                                    icon: 'fw bookmark'
                                },
                                {
                                    key: '0_0_1',
                                    label: 'Video',
                                    icon: 'fw video'
                                }
                            ]
                        },
                        {
                            key: '0_1',
                            label: 'Delete',
                            icon: 'fw trash'
                        },
                        {
                            key: '0_2',
                            label: 'Export',
                            icon: 'fw external-link'
                        }
                    ]
                },
                {
                    key: '1',
                    label: 'Edit',
                    icon: 'fw pencil',
                    items: [{
                            key: '1_0',
                            label: 'Left',
                            icon: 'fw align-left'
                        },
                        {
                            key: '1_1',
                            label: 'Right',
                            icon: 'fw align-right'
                        },
                        {
                            key: '1_2',
                            label: 'Center',
                            icon: 'fw align-center'
                        },
                        {
                            key: '1_3',
                            label: 'Justify',
                            icon: 'fw align-justify'
                        }
                    ]
                },
                {
                    key: '2',
                    label: 'Users',
                    icon: 'fw user',
                    items: [{
                            key: '2_0',
                            label: 'New',
                            icon: 'fw user-plus',

                        },
                        {
                            key: '2_1',
                            label: 'Delete',
                            icon: 'fw user-minus',
                        },
                        {
                            key: '2_2',
                            label: 'Search',
                            icon: 'fw users',
                            items: [{
                                    key: '2_2_0',
                                    label: 'Filter',
                                    icon: 'fw filter',
                                    items: [{
                                        key: '2_2_0_0',
                                        label: 'Print',
                                        icon: 'fw print'
                                    }]
                                },
                                {
                                    key: '2_2_1',
                                    icon: 'fw bars',
                                    label: 'List'
                                }
                            ]
                        }
                    ]
                },
                {
                    key: '3',
                    label: 'Events',
                    icon: 'fw calendar',
                    items: [{
                            key: '3_0',
                            label: 'Edit',
                            icon: 'fw pencil',
                            items: [{
                                    key: '3_0_0',
                                    label: 'Save',
                                    icon: 'fw calendar-plus'
                                },
                                {
                                    key: '3_0_0',
                                    label: 'Delete',
                                    icon: 'fw calendar-minus'
                                }
                            ]
                        },
                        {
                            key: '3_1',
                            label: 'Archieve',
                            icon: 'fw calendar-times',
                            items: [{
                                key: '3_1_0',
                                label: 'Remove',
                                icon: 'fw calendar-minus'
                            }]
                        }
                    ]
                }
            ]
        }
    },
    methods: {
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
    },
    components: {
        'PanelMenuDoc': PanelMenuDoc
    }
}
</script>

<style scoped lang="scss">
.p-panelmenu {
    width: 22rem;
}
</style>
