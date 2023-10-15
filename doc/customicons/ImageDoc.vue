<template>
    <DocSectionText v-bind="$attrs">
        <p>Any time of image can be used as an icon.</p>
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
        <img alt="dropdown icon" src="/assets/icons/arrow_down.png">
    </template>
</Dropdown>
`
            }
        };
    }
};
</script>
