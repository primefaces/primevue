<template>
    <DocSectionText v-bind="$attrs">
        <p>Add to your Zed settings at <i>~/.config/zed/settings.json</i> (Linux) or <i>~/Library/Application Support/Zed/settings.json</i> (macOS).</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggle />
    <p class="doc-section-description">See <a href="https://zed.dev/docs/ai/mcp" class="font-medium hover:underline text-primary" target="_blank" rel="noopener noreferrer">Zed MCP Documentation</a> for more details.</p>
</template>

<script>
export default {
    name: 'ZedDoc',
    data() {
        return {
            code: {
                basic: `
{
    "context_servers": {
        "primevue": {
            "command": {
                "path": "npx",
                "args": ["-y", "@primevue/mcp"]
            }
        }
    }
}
`
            }
        };
    }
};
</script>
