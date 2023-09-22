<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Since v3.33.0 the vue-router dependency of menu components is deprecated and templating should be used to define router links instead. This approach provides flexibility to be able to use any kind of router link component such as
            <i>NuxtLink</i> or <i>router-link</i>. Here is an example with vue-router.
        </p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Menu :model="items">
            <template #item="{ label, item, props }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                </a>
            </template>
        </Menu>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Options',
                    items: [
                        {
                            label: 'Update',
                            icon: 'pi pi-refresh',
                            command: () => {
                                this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                            }
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-times',
                            command: () => {
                                this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                            }
                        }
                    ]
                },
                {
                    label: 'Navigate',
                    items: [
                        {
                            label: 'Vue Website',
                            icon: 'pi pi-external-link',
                            url: 'https://vuejs.org/',
                            target: '_blank'
                        },
                        {
                            label: 'Upload',
                            icon: 'pi pi-upload',
                            route: '/fileupload'
                        }
                    ]
                }
            ],
            code: {
                basic: `
<Menu :model="items">
    <template #item="{ label, item, props }">
        <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
            <a :href="routerProps.href" v-bind="props.action">
                <span v-bind="props.icon" />
                <span v-bind="props.label">{{ label }}</span>
            </a>
        </router-link>
        <a v-else :href="item.url" v-bind="props.action">
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ label }}</span>
        </a>
    </template>
</Menu>`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Menu :model="items">
            <template #item="{ label, item, props }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                </a>
            </template>
        </Menu>
        <Toast />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Options',
                    items: [
                        {
                            label: 'Update',
                            icon: 'pi pi-refresh',

                            command: () => {
                                this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                            }
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-times',
                            command: () => {
                                this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                            }
                        }
                    ]
                },
                {
                    label: 'Navigate',
                    items: [
                        {
                            label: 'Vue Website',
                            icon: 'pi pi-external-link',
                            url: 'https://vuejs.org/',
                            target: '_blank',
                        },
                        {
                            label: 'Upload',
                            icon: 'pi pi-upload',
                            route: '/fileupload'
                        }
                    ]
                }
            ]
        };
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Menu :model="items">
            <template #item="{ label, item, props }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                </a>
            </template>
        </Menu>
        <Toast />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref(items: [
    {
        label: 'Options',
        items: [
            {
                label: 'Update',
                icon: 'pi pi-refresh',

                command: () => {
                    this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-times',
                command: () => {
                    this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                }
            }
        ]
    },
    {
        label: 'Navigate',
        items: [
            {
                label: 'Vue Website',
                icon: 'pi pi-external-link',
                url: 'https://vuejs.org/',
                target: '_blank',
            },
            {
                label: 'Upload',
                icon: 'pi pi-upload',
                route: '/fileupload'
            }
        ]
    }
]);
<\/script>`
            }
        };
    }
};
</script>
