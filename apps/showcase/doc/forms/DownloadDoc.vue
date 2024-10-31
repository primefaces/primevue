<template>
    <DocSectionText v-bind="$attrs">
        <p>Forms add-on is available for download on npm registry.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
# Using npm
npm install @primevue/forms

# Using yarn
yarn add @primevue/forms

# Using pnpm
pnpm add @primevue/forms
`
            }
        };
    }
};
</script>
