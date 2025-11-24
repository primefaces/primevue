<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Add a <code>.md</code> to a page's URL to display a Markdown version of that page.
        </p>
        <Button as="a" href="/button.md" target="_blank">Open /button.md</Button>
    </DocSectionText>
</template>

<script>
export default {
    name: 'MarkdownExtensionDoc'
};
</script>
