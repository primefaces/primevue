<template>
    <DocSectionText v-bind="$attrs">
        <p>Instead of the <i>@tailwind</i> directive, import the styles from node_modules.</p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />

        <p>Add PrimeVue styles between the components and utilities.</p>
        <DocSectionCode :code="code2" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
/* Don't use @tailwind */
@tailwind base;
@tailwind components;
@tailwind utilities;
`
            },
            code2: {
                basic: `
/* Use @import */
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "./primevue/tailwind.css";
@import "tailwindcss/utilities";
`
            }
        };
    }
};
</script>
