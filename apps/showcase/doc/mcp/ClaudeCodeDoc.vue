<template>
    <DocSectionText v-bind="$attrs">
        <p>Add the PrimeVue MCP server using the CLI. After adding, start a new session and use <i>/mcp</i> to verify the connection.</p>
    </DocSectionText>
    <DocSectionCode :code="cliCode" hideToggle />
    <p class="doc-section-description">See <a href="https://docs.anthropic.com/en/docs/claude-code/mcp" class="font-medium hover:underline text-primary" target="_blank" rel="noopener noreferrer">Claude Code MCP Documentation</a> for more details.</p>
</template>

<script>
export default {
    name: 'ClaudeCodeDoc',
    data() {
        return {
            cliCode: {
                basic: `
# Add to user config (available in all projects)
claude mcp add primevue -s user -- npx -y @primevue/mcp

# Or add to current project only
claude mcp add primevue -- npx -y @primevue/mcp
`
            }
        };
    }
};
</script>
