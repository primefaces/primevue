<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card flex justify-content-center">
        <Button type="button" icon="pi pi-image" label="Image" @click="toggle" />

        <OverlayPanel ref="op" :pt="{ root: { class: 'surface-ground' } }">
            <img src="https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg" alt="Bamboo Watch" />
        </OverlayPanel>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button type="button" icon="pi pi-image" label="Image" @click="toggle" />

<OverlayPanel ref="op"
    :pt="{
        root: { class: 'surface-ground' }
    }"
>
    <img src="https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg" alt="Bamboo Watch" />
</OverlayPanel>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Button type="button" icon="pi pi-image" label="Image" @click="toggle" />

        <OverlayPanel ref="op"
            :pt="{
                root: { class: 'surface-ground' }
            }"
        >
            <img src="https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg" alt="Bamboo Watch" />
        </OverlayPanel>
    </div>
</template>

<script>
export default {
    methods: {
        toggle(event) {
            this.$refs.op.toggle(event);
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Button type="button" icon="pi pi-image" label="Image" @click="toggle" />

        <OverlayPanel ref="op"
            :pt="{
                root: { class: 'surface-ground' }
            }"
        >
            <img src="https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg" alt="Bamboo Watch" />
        </OverlayPanel>
    </div>
</template>

<script setup>
import { ref } from "vue";

const op = ref();
const toggle = (event) => {
    op.value.toggle(event);
}
<\/script>
`
            }
        };
    },
    methods: {
        toggle(event) {
            this.$refs.op.toggle(event);
        }
    }
};
</script>
