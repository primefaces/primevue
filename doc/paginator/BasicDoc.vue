<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Paginator is used as a controlled component with <i>first</i> and <i>rows</i> properties to manage the first index and number of records to display per page. Total number of records need to be with <i>totalRecords</i> property. Default
            template includes a dropdown to change the <i>rows</i> so <i>rowsPerPageOptions</i> is also necessary for the dropdown options.
        </p>
    </DocSectionText>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>
`,
                options: `
<template>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>
    </div>
</template>

<script setup>
<\/script>
`
            }
        };
    }
};
</script>
