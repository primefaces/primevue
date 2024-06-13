<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Paginator elements can be customized using the <i>template</i> property using the predefined keys, default value is "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown". Here are the available elements that
            can be placed inside a paginator in any order.
        </p>
        <ul class="mb-6 leading-loose">
            <li>FirstPageLink</li>
            <li>PrevPageLink</li>
            <li>PageLinks</li>
            <li>NextPageLink</li>
            <li>LastPageLink</li>
            <li>RowsPerPageDropdown</li>
            <li>JumpToPageDropdown</li>
            <li>JumpToPageInput</li>
            <li>CurrentPageReport</li>
        </ul>
    </DocSectionText>
    <div class="card">
        <Paginator v-model:first="first" :rows="1" :totalRecords="12" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" />

        <div class="p-4 text-center">
            <img :src="`https://primefaces.org/cdn/primevue/images/nature/nature${first + 1}.jpg`" :alt="first" class="rounded w-full sm:w-[30rem]" />
        </div>
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
<Paginator v-model:first="first" :rows="1" :totalRecords="1" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" />

<div class="p-4 text-center">
    <img :src="\`https://primefaces.org/cdn/primevue/images/nature/nature\${first + 1}.jpg\`" :alt="first" class="rounded w-full sm:w-[30rem]" />
</div>
`,
                options: `
<template>
    <div class="card">
        <Paginator v-model:first="first" :rows="1" :totalRecords="12" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" />

        <div class="p-4 text-center">
            <img :src="\`https://primefaces.org/cdn/primevue/images/nature/nature\${first + 1}.jpg\`" :alt="first" class="rounded w-full sm:w-[30rem]" />
        </div>
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
        <Paginator v-model:first="first" :rows="1" :totalRecords="12" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" />

        <div class="p-4 text-center">
            <img :src="\`https://primefaces.org/cdn/primevue/images/nature/nature\${first + 1}.jpg\`" :alt="first" class="rounded w-full sm:w-[30rem]" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const first = ref(0);
<\/script>
`
            }
        };
    }
};
</script>
