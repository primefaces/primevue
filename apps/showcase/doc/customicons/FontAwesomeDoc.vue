<template>
    <DocSectionText v-bind="$attrs">
        <p><a href="https://fontawesome.com/">Font Awesome</a> is a popular icon library with a wide range of icons.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Select>
    <template #dropdownicon>
        <i class="fa-light fa-chevron-down"></i>
    </template>
</Select>
`
            }
        };
    }
};
</script>
