<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import AnimateOnScroll from 'primevue/animateonscroll';

app.directive('animateonscroll', AnimateOnScroll);
`
            }
        };
    }
};
</script>
