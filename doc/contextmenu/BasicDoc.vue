<template>
    <DocSectionText v-bind="$attrs">
        <p>ContextMenu requires a collection of menuitems as its <i>model</i> and the <i>show</i> method needs to be called explicity using the <i>contextmenu</i> event of the target to display the menu.</p>
    </DocSectionText>
    <div class="card flex md:justify-content-center">
        <img alt="Logo" src="https://primefaces.org/cdn/primevue/images/nature/nature3.jpg" class="w-full md:w-auto" @contextmenu="onImageRightClick" aria-haspopup="true" />
        <ContextMenu ref="menu" :model="items" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                { label: 'View', icon: 'pi pi-fw pi-search' },
                { label: 'Delete', icon: 'pi pi-fw pi-trash' }
            ],
            code: {
                basic: `
<img alt="Logo" src="/images/nature/nature3.jpg" class="w-full md:w-auto" @contextmenu="onImageRightClick" aria-haspopup="true" />
<ContextMenu ref="menu" :model="items" />`,
                options: `
<template>
    <div class="card flex md:justify-content-center">
        <img alt="Logo" src="https://primefaces.org/cdn/primevue/images/nature/nature3.jpg" @contextmenu="onImageRightClick" class="w-full md:w-auto" aria-haspopup="true" />
        <ContextMenu ref="menu" :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { label: 'View', icon: 'pi pi-fw pi-search' },
                { label: 'Delete', icon: 'pi pi-fw pi-trash' }
            ]
        };
    },
    methods: {
        onImageRightClick(event) {
            this.$refs.menu.show(event);
        }
    }
};
<\/script>`,
                composition: `
<template>
    <div class="card">
        <img alt="Logo" src="https://primefaces.org/cdn/primevue/images/nature/nature3.jpg" @contextmenu="onImageRightClick" class="w-full md:w-auto" aria-haspopup="true" />
        <ContextMenu ref="menu" :model="items" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const menu = ref();
const items = ref([
    { label: 'View', icon: 'pi pi-fw pi-search' },
    { label: 'Delete', icon: 'pi pi-fw pi-trash' }
]);

const onImageRightClick = (event) => {
    menu.value.show(event);
};

<\/script>`
            }
        };
    },
    methods: {
        onImageRightClick(event) {
            this.$refs.menu.show(event);
        }
    }
};
</script>
