<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Since v3.33.0 the vue-router dependency of menu components is deprecated and templating should be used to define router links instead. This approach provides flexibility to be able to use any kind of router link component such as
            <i>NuxtLink</i> or <i>router-link</i>. Here is an example with vue-router.
        </p>
    </DocSectionText>
    <div class="card flex md:justify-content-center">
        <img alt="Logo" src="https://primefaces.org/cdn/primevue/images/nature/nature3.jpg" class="w-full md:w-auto" @contextmenu="onImageRightClick" aria-haspopup="true" />
        <ContextMenu ref="routemenu" :model="items">
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
        </ContextMenu>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                { label: 'View', icon: 'pi pi-fw pi-search' },
                { label: 'Delete', icon: 'pi pi-fw pi-trash' },
                { separator: true },
                {
                    label: 'Upload',
                    icon: 'pi pi-upload',
                    route: '/fileupload'
                }
            ],
            code: {
                basic: `
<img alt="Logo" src="/images/nature/nature3.jpg" class="w-full md:w-auto" @contextmenu="onImageRightClick" aria-haspopup="true" />
<ContextMenu ref="routemenu" :model="items" />`,
                options: `
<template>
    <div class="card flex md:justify-content-center">
        <img alt="Logo" src="https://primefaces.org/cdn/primevue/images/nature/nature3.jpg" @contextmenu="onImageRightClick" class="w-full md:w-auto" aria-haspopup="true" />
        <ContextMenu ref="routemenu" :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { label: 'View', icon: 'pi pi-fw pi-search' },
                { label: 'Delete', icon: 'pi pi-fw pi-trash' },
                {
                    label: 'Upload',
                    icon: 'pi pi-upload',
                    route: '/fileupload'
                }
            ]
        };
    },
    methods: {
        onImageRightClick(event) {
            this.$refs.routemenu.show(event);
        }
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card">
        <img alt="Logo" src="https://primefaces.org/cdn/primevue/images/nature/nature3.jpg" @contextmenu="onImageRightClick" class="w-full md:w-auto" aria-haspopup="true" />
        <ContextMenu ref="routemenu" :model="items" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const routemenu = ref();
const items = ref([
    { label: 'View', icon: 'pi pi-fw pi-search' },
    { label: 'Delete', icon: 'pi pi-fw pi-trash' },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        route: '/fileupload'
    }
]);

const onImageRightClick = (event) => {
    routemenu.value.show(event);
};

<\/script>`
            }
        };
    },
    methods: {
        onImageRightClick(event) {
            this.$refs.routemenu.show(event);
        }
    }
};
</script>
