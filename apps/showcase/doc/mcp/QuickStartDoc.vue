<template>
    <DocSectionText v-bind="$attrs">
        <p>The easiest way to use this MCP server is with <code>npx</code> - no installation required:</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggle />
</template>

<script>
export default {
    name: 'QuickStartDoc',
    data() {
        return {
            code: {
                basic: `
npx @primevue/mcp
`
            }
        };
    }
};
</script>
