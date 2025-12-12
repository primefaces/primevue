<template>
    <DocSectionText v-bind="$attrs">
        <p>Create <i>.vscode/mcp.json</i> in your project or <i>~/Library/Application Support/Code/User/mcp.json</i> for global configuration.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggle />
    <p class="doc-section-description">See <a href="https://code.visualstudio.com/docs/copilot/chat/mcp-servers" class="font-medium hover:underline text-primary" target="_blank" rel="noopener noreferrer">VS Code MCP Documentation</a> for more details.</p>
</template>

<script>
export default {
    name: 'VSCodeDoc',
    data() {
        return {
            code: {
                basic: `
{
    "servers": {
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
