# MCP Server

Model Context Protocol (MCP) server for PrimeVue component library. Provides AI assistants with comprehensive access to PrimeVue component documentation.

## Claude Code

Add the PrimeVue MCP server using the CLI. After adding, start a new session and use /mcp to verify the connection.

## Cursor

Create .cursor/mcp.json in your project or ~/.cursor/mcp.json for global configuration.

```vue
{ "mcpServers": { "primevue": { "command": "npx", "args": ["-y", "@primevue/mcp"] } } }
```

## Example Prompts

Once installed, try asking your AI assistant:

```vue
"What are all the props available for the DataTable component?" "Show me how to implement row selection in DataTable" "How do I customize Button styles using Pass Through?" "What design tokens are available for the Card component?" "Find me a
component for selecting multiple items from a list" "Compare AutoComplete and Select components"
```

## Introduction

Model Context Protocol (MCP) is an open standard that enables AI models to connect with external tools and data sources . The PrimeVue MCP server provides AI assistants with comprehensive access to: Component documentation including props , events , slots , and methods Theming and styling with Pass Through and design tokens Code examples and usage patterns Accessibility information Installation and configuration guides

## OpenAI Codex

Add the PrimeVue MCP server using the CLI or edit ~/.codex/config.toml directly.

```vue
# Using the CLI codex mcp add primevue -- npx -y @primevue/mcp # Or edit ~/.codex/config.toml [mcp_servers.primevue] command = "npx" args = ["-y", "@primevue/mcp"]
```

## Tools

Component Information Tools for exploring and understanding PrimeVue components. list_components : List all PrimeVue components with categories get_component : Get detailed info about a specific component search_components : Search components by name or description get_component_props : Get all props for a component get_component_events : Get all events for a component get_component_methods : Get all methods for a component get_component_slots : Get all slots for a component compare_components : Compare two components side by side Code Examples Tools for retrieving code samples and generating templates. get_usage_example : Get code examples for a component list_examples : List all available code examples get_example : Get a specific example by component and section generate_component_template : Generate a basic component template Theming & Styling Tools for customizing component appearance and styling. get_component_pt : Get Pass Through options for DOM customization get_component_tokens : Get design tokens (CSS variables) get_component_styles : Get CSS class names get_theming_guide : Get detailed theming guide get_passthrough_guide : Get Pass Through customization guide get_tailwind_guide : Get Tailwind CSS integration guide Documentation & Guides Tools for accessing PrimeVue documentation and guides. list_guides : List all guides and documentation pages get_guide : Get a specific guide by name get_configuration : Get PrimeVue configuration options get_installation : Get installation instructions get_accessibility_guide : Get accessibility guide get_accessibility_info : Get accessibility info for a component Search & Discovery Tools for finding components based on various criteria. search_all : Search across components, guides, and props suggest_component : Suggest components based on use case find_by_prop : Find components with a specific prop find_by_event : Find components that emit a specific event find_components_with_feature : Find components supporting a feature get_related_components : Find related components

## VS Code

Create .vscode/mcp.json in your project or ~/Library/Application Support/Code/User/mcp.json for global configuration.

```vue
{ "servers": { "primevue": { "command": "npx", "args": ["-y", "@primevue/mcp"] } } }
```

## Windsurf

Edit ~/.codeium/windsurf/mcp_config.json to add the PrimeVue MCP server.

```vue
{ "mcpServers": { "primevue": { "command": "npx", "args": ["-y", "@primevue/mcp"] } } }
```

## Zed

Add to your Zed settings at ~/.config/zed/settings.json (Linux) or ~/Library/Application Support/Zed/settings.json (macOS).

```vue
{ "context_servers": { "primevue": { "command": { "path": "npx", "args": ["-y", "@primevue/mcp"] } } } }
```
