<template>
    <DocSectionText v-bind="$attrs">
        <p>Create <i>.cursor/mcp.json</i> in your project or <i>~/.cursor/mcp.json</i> for global configuration.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggle />
    <p class="doc-section-description">See <a href="https://docs.cursor.com/context/model-context-protocol" class="font-medium hover:underline text-primary" target="_blank" rel="noopener noreferrer">Cursor MCP Documentation</a> for more details.</p>
</template>

<script>
export default {
    name: 'CursorDoc',
    data() {
        return {
            code: {
                basic: `
{
    "mcpServers": {
        "primevue": {
            "command": "npx",
            "args": ["-y", "@primevue/mcp"]
        }
    }
}
`
            }
        };
    }
};
</script>
