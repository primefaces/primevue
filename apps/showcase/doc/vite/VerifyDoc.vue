<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Verify your setup by adding a component such as <NuxtLink to="/button">Button</NuxtLink>. Each component can be imported and registered individually so that you only include what you use for bundle optimizization. Import path is available
            in the documentation of the corresponding component.
        </p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Button label="Verify" />
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
        <Button label="Verify" />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <Button label="Verify" />
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
