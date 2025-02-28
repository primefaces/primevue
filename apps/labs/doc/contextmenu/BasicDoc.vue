<template>
    <DocSectionText v-bind="$attrs">
        <p>ContextMenu requires a collection of menuitems as its <i>model</i> and the <i>show</i> method needs to be called explicity using an event of the target like <i>contextmenu</i> to display the menu.</p>
    </DocSectionText>
    <div class="card flex md:justify-center">
        <img alt="Logo" src="https://primefaces.org/cdn/primevue/images/nature/nature2.jpg" class="w-full md:w-[30rem] rounded shadow-lg" @contextmenu="onImageRightClick" aria-haspopup="true" />
        <ContextMenu ref="menu" :model="items" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                { label: 'Copy', icon: 'pi pi-copy' },
                { label: 'Rename', icon: 'pi pi-file-edit' }
            ],
            code: {
                basic: `
<img alt="Logo" src="/images/nature/nature2.jpg" class="w-full md:w-[30rem] rounded shadow-lg" @contextmenu="onImageRightClick" aria-haspopup="true" />
<ContextMenu ref="menu" :model="items" />
`,
                options: `
<template>
    <div class="card flex md:justify-center">
        <img alt="Logo" src="https://primefaces.org/cdn/primevue/images/nature/nature2.jpg" @contextmenu="onImageRightClick" class="w-full md:w-[30rem] rounded shadow-lg" aria-haspopup="true" />
        <ContextMenu ref="menu" :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { label: 'Copy', icon: 'pi pi-copy' },
                { label: 'Rename', icon: 'pi pi-file-edit' }
            ]
        };
    },
    methods: {
        onImageRightClick(event) {
            this.$refs.menu.show(event);
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <img alt="Logo" src="https://primefaces.org/cdn/primevue/images/nature/nature2.jpg" @contextmenu="onImageRightClick" class="w-full md:w-[30rem] rounded shadow-lg" aria-haspopup="true" />
        <ContextMenu ref="menu" :model="items" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const menu = ref();
const items = ref([
    { label: 'Copy', icon: 'pi pi-copy' },
    { label: 'Rename', icon: 'pi pi-file-edit' }
]);

const onImageRightClick = (event) => {
    menu.value.show(event);
};

<\/script>
`
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
