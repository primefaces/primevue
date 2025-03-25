<template>
    <DocSectionText v-bind="$attrs">
        <p><a href="https://fonts.google.com/icons">Material icons</a> is the official icon library based on Google Material Design.</p>
    </DocSectionText>
    <DocSectionCode :code="code" />
</template>

<script setup>
const code = ref(`
<template #dropdownicon>
    <span class="material-icons">arrow_drop_down</span>
</template>
`);
</script>
