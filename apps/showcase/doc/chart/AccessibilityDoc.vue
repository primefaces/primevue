<template>
    <DocSectionText id="accessibility" label="Accessibility" v-bind="$attrs">
        <h3>Screen Reader</h3>
        <p>
            Chart components internally use <i>canvas</i> element, refer to the <a href="https://www.chartjs.org/docs/latest/general/accessibility.html">Chart.js accessibility</a> guide for more information. The canvas element can be customized with
            <i>canvasProps</i> property to define aria roles and properties, in addition any content inside the component is directly passed as a child of the canvas to be able to provide fallback content like a table.
        </p>

        <DocSectionCode :code="code" hideToggleCode hideStackBlitz v-bind="$attrs" />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Chart type="line" :data="data" :canvasProps="{'role': 'img', 'aria-label': 'Data'}" />
`
            }
        };
    }
};
</script>
