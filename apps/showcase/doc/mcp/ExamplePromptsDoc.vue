<template>
    <DocSectionText v-bind="$attrs">
        <p>Once installed, try asking your AI assistant:</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggle />
</template>

<script>
export default {
    name: 'ExamplePromptsDoc',
    data() {
        return {
            code: {
                basic: `
"What are all the props available for the DataTable component?"
"Show me how to implement row selection in DataTable"
"How do I customize Button styles using Pass Through?"
"What design tokens are available for the Card component?"
"Find me a component for selecting multiple items from a list"
"Compare AutoComplete and Select components"
`
            }
        };
    }
};
</script>
