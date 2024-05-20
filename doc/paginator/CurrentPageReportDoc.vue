<template>
    <DocSectionText v-bind="$attrs">
        <p>Current page report item in the template displays information about the pagination state. Default value is ({currentPage} of {totalPages}) whereas available placeholders are the following;</p>
        <ul class="mb-6 leading-loose">
            <li>{currentPage}</li>
            <li>{totalPages}</li>
            <li>{rows}</li>
            <li>{first}</li>
            <li>{last}</li>
            <li>{totalRecords}</li>
        </ul>
    </DocSectionText>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            first: 0,
            code: {
                basic: `
<Paginator :rows="10" :totalRecords="120" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" />
`,
                options: `
<template>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            first: 0
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const first = ref(0);
<\/script>
`
            }
        };
    }
};
</script>
