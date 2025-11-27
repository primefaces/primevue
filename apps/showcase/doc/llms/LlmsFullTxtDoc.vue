<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The <code>llms-full.txt</code> file is a complete list of all the pages in the PrimeVue documentation. It is used to help AI models understand the entire documentation set.
        </p>
        <Button as="a" href="/llms/llms-full.txt" target="_blank">Open llms-full.txt</Button>
    </DocSectionText>
</template>

<script>
export default {
    name: 'LlmsFullTxtDoc'
};
</script>
