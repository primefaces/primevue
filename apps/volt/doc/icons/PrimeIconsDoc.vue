<template>
    <DocSectionText v-bind="$attrs">
        <p>
            <a href="https://primevue.org/icons">PrimeIcons</a> is the default icon library of PrimeVue with over 250 open source icons developed by PrimeTek. Volt uses the PrimeIcons as Vue components instead of the font icons format to avoid
            importing the entire icon suite assets including the font files and styles. For example <i>ChevronDown</i> component is used instead of <i>pi pi-chevron-down</i>.
        </p>
        <p>An icon is customized with templating, example below changes the dropdown icon of a Select in <i>@/volt/select/index.vue</i>.</p>
    </DocSectionText>
    <DocSectionCode :code="code1" />
    <DocSectionCode :code="code2" lang="script" />
</template>

<script setup lang="ts">
const code1 = ref(`
<template #dropdownicon>
    <ArrowDownIcon class="text-primary"/>
</template>
`);

const code2 = ref(`import ArrowDownIcon from '@primevue/icons/arrowdown';
`);
</script>
