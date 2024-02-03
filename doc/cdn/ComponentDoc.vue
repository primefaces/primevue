<template>
    <DocSectionText v-bind="$attrs">
        <p>Include the component to use with a script tag.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<script src="https://unpkg.com/primevue/calendar/calendar.min.js"><\/script>
`
            }
        };
    }
};
</script>
