<template>
    <DocSectionText v-bind="$attrs">
        <p><a href="https://fontawesome.com/">Font Awesome</a> is a popular icon library with a wide range of icons.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Dropdown>
    <template #dropdownicon>
        <i class="fa-light fa-chevron-down"></i>
    </template>
</Dropdown>
`
            }
        };
    }
};
</script>
