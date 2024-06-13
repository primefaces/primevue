<template>
    <DocSectionText v-bind="$attrs">
        <p>Migrates files from PrimeFlex to Tailwind CSS, see the <NuxtLink to="/guides/primeflex">primeflex migration</NuxtLink> for further information.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
prime pf2tw
`
            }
        };
    }
};
</script>
