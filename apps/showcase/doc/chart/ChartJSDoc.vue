<template>
    <DocSectionText v-bind="$attrs">
        <p>Chart component uses <a href="https://chartjs.org/">Chart.JS</a> underneath so it needs to be installed as a dependency.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
npm install chart.js
`
            }
        };
    }
};
</script>
