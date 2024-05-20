<template>
    <DocSectionText v-bind="$attrs">
        <p>Overlay mode is enabled by adding <i>popup</i> property and calling <i>toggle</i> function of the menu ref with an event of the target.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Button type="button" label="Toggle" @click="toggle" aria-haspopup="true" aria-controls="overlay_tmenu" />
        <TieredMenu ref="menu" id="overlay_tmenu" :model="items" popup />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'File',
                    icon: 'pi pi-file',
                    items: [
                        {
                            label: 'New',
                            icon: 'pi pi-plus',
                            items: [
                                {
                                    label: 'Document',
                                    icon: 'pi pi-file'
                                },
                                {
                                    label: 'Image',
                                    icon: 'pi pi-image'
                                },
                                {
                                    label: 'Video',
                                    icon: 'pi pi-video'
                                }
                            ]
                        },
                        {
                            label: 'Open',
                            icon: 'pi pi-folder-open'
                        },
                        {
                            label: 'Print',
                            icon: 'pi pi-print'
                        }
                    ]
                },
                {
                    label: 'Edit',
                    icon: 'pi pi-file-edit',
                    items: [
                        {
                            label: 'Copy',
                            icon: 'pi pi-copy'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-times'
                        }
                    ]
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search'
                },
                {
                    separator: true
                },
                {
                    label: 'Share',
                    icon: 'pi pi-share-alt',
                    items: [
                        {
                            label: 'Slack',
                            icon: 'pi pi-slack'
                        },
                        {
                            label: 'Whatsapp',
                            icon: 'pi pi-whatsapp'
                        }
                    ]
                }
            ],
            code: {
                basic: `
<Button type="button" label="Toggle" @click="toggle" aria-haspopup="true" aria-controls="overlay_tmenu" />
<TieredMenu ref="menu" id="overlay_tmenu" :model="items" popup />
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Button type="button" label="Toggle" @click="toggle" aria-haspopup="true" aria-controls="overlay_tmenu" />
        <TieredMenu ref="menu" id="overlay_tmenu" :model="items" popup />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'File',
                    icon: 'pi pi-file',
                    items: [
                        {
                            label: 'New',
                            icon: 'pi pi-plus',
                            items: [
                                {
                                    label: 'Document',
                                    icon: 'pi pi-file'
                                },
                                {
                                    label: 'Image',
                                    icon: 'pi pi-image'
                                },
                                {
                                    label: 'Video',
                                    icon: 'pi pi-video'
                                }
                            ]
                        },
                        {
                            label: 'Open',
                            icon: 'pi pi-folder-open'
                        },
                        {
                            label: 'Print',
                            icon: 'pi pi-print'
                        }
                    ]
                },
                {
                    label: 'Edit',
                    icon: 'pi pi-file-edit',
                    items: [
                        {
                            label: 'Copy',
                            icon: 'pi pi-copy'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-times'
                        }
                    ]
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search'
                },
                {
                    separator: true
                },
                {
                    label: 'Share',
                    icon: 'pi pi-share-alt',
                    items: [
                        {
                            label: 'Slack',
                            icon: 'pi pi-slack'
                        },
                        {
                            label: 'Whatsapp',
                            icon: 'pi pi-whatsapp'
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        toggle(event) {
            this.$refs.menu.toggle(event);
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Button type="button" label="Toggle" @click="toggle" aria-haspopup="true" aria-controls="overlay_tmenu" />
        <TieredMenu ref="menu" id="overlay_tmenu" :model="items" popup />
    </div>
</template>

<script setup>
import { ref } from "vue";

const menu = ref();
const items = ref([
    {
        label: 'File',
        icon: 'pi pi-file',
        items: [
            {
                label: 'New',
                icon: 'pi pi-plus',
                items: [
                    {
                        label: 'Document',
                        icon: 'pi pi-file'
                    },
                    {
                        label: 'Image',
                        icon: 'pi pi-image'
                    },
                    {
                        label: 'Video',
                        icon: 'pi pi-video'
                    }
                ]
            },
            {
                label: 'Open',
                icon: 'pi pi-folder-open'
            },
            {
                label: 'Print',
                icon: 'pi pi-print'
            }
        ]
    },
    {
        label: 'Edit',
        icon: 'pi pi-file-edit',
        items: [
            {
                label: 'Copy',
                icon: 'pi pi-copy'
            },
            {
                label: 'Delete',
                icon: 'pi pi-times'
            }
        ]
    },
    {
        label: 'Search',
        icon: 'pi pi-search'
    },
    {
        separator: true
    },
    {
        label: 'Share',
        icon: 'pi pi-share-alt',
        items: [
            {
                label: 'Slack',
                icon: 'pi pi-slack'
            },
            {
                label: 'Whatsapp',
                icon: 'pi pi-whatsapp'
            }
        ]
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};
<\/script>
`
            }
        };
    },
    methods: {
        toggle(event) {
            this.$refs.menu.toggle(event);
        }
    }
};
</script>
