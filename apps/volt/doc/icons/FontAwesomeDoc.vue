<template>
    <DocSectionText v-bind="$attrs">
        <p><a href="https://fontawesome.com/">Font Awesome</a> is a popular icon library with a wide range of icons.</p>
    </DocSectionText>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
const code = ref(`
<template #dropdownicon>
    <i class="fa-light fa-chevron-down"></i>
</template>
`);
</script>
