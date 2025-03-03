<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" lang="script" />
</template>

<script>
export default {
    data() {
        return {
            code: `import ToggleButton from '@/volt/togglebutton';
`
        };
    }
};
</script>
