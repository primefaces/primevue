<template>
    <DocSectionText v-bind="$attrs">
        <p>The Paginator is a headless component to design a fully customized user interface using the <i>container</i> template. The default UI displays page navigation and page links.</p>
    </DocSectionText>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Paginator from '@/volt/Paginator.vue';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120" />
    </div>
</template>

<script setup lang="ts">
import Paginator from '@/volt/Paginator.vue';
<\/script>
`);
</script>
