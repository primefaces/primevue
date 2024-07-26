<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Each component can be imported and registered individually so that you only bundle what you use. Import path is available in the documentation of the corresponding component. If you prefer importing components automatically with
            tree-shaking support , view the
            <NuxtLink to="/autoimport">autoimport</NuxtLink> guide.
        </p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Button label="Check" icon="pi pi-check" />
    </div>
    <DocSectionCode :code="code" importCode />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import Button from "primevue/button"

const app = createApp(App);
app.component('Button', Button);
`,
                options: `
<template>
    <div class="card flex justify-center">
        <Button label="Check" icon="pi pi-check" />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Button label="Check" icon="pi pi-check" />
    </div>
</template>

<script setup>
<\/script>
`
            }
        };
    }
};
</script>
