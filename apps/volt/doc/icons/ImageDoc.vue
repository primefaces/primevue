<template>
    <DocSectionText v-bind="$attrs">
        <p>Any type of image can be used as an icon.</p>
    </DocSectionText>
    <DocSectionCode :code="code" />
</template>

<script setup>
const code = ref(`
<template #dropdownicon>
    <template #dropdownicon>
        <img alt="dropdown icon" src="/assets/icons/arrow_down.png">
    </template>
</template>
`);
</script>
