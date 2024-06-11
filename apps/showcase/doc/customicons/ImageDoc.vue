<template>
    <DocSectionText v-bind="$attrs">
        <p>Any type of image can be used as an icon.</p>
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
        <img alt="dropdown icon" src="/assets/icons/arrow_down.png">
    </template>
</Select>
`
            }
        };
    }
};
</script>
