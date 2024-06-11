<template>
    <DocSectionText v-bind="$attrs">
        <p>DeferredContent is used by wrapping the target.</p>
    </DocSectionText>
    <div class="card">
        <div style="height: 1000px">Scroll down to lazy load an image.</div>

        <DeferredContent @load="onImageLoad">
            <img src="https://primefaces.org/cdn/primevue/images/nature/nature4.jpg" alt="Nature" />
        </DeferredContent>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<DeferredContent @load="onImageLoad">
    <img src="/images/nature/nature4.jpg" alt="Nature" />
</DeferredContent>
`,
                options: `
<template>
    <div class="card">
        <Toast />
        <div style="height: 1000px">Scroll down to lazy load an image.</div>

        <DeferredContent @load="onImageLoad">
            <img src="https://primefaces.org/cdn/primevue/images/nature/nature4.jpg" alt="Nature" />
        </DeferredContent>
    </div>
</template>

<script>
export default {
    methods: {
        onImageLoad() {
            this.$toast.add({ severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable', life: 2000 });
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Toast />
        <div style="height: 1000px">Scroll down to lazy load an image.</div>

        <DeferredContent @load="onImageLoad">
            <img src="https://primefaces.org/cdn/primevue/images/nature/nature4.jpg" alt="Nature" />
        </DeferredContent>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const onImageLoad = () => {
    toast.add({ severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable', life: 2000 });
};
<\/script>
`
            }
        };
    },
    methods: {
        onImageLoad() {
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Image loaded', life: 2000 });
        }
    }
};
</script>
