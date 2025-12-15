# @primevue/mcp

Model Context Protocol (MCP) server for PrimeVue component library. Provides AI assistants with comprehensive access to PrimeVue component documentation, props, events, slots, theming, and code examples.

## What is MCP?

[Model Context Protocol (MCP)](https://modelcontextprotocol.io/) is an open standard that enables AI models to connect with external tools and data sources. By installing this MCP server, your AI assistant gains deep knowledge of PrimeVue components and can provide accurate, up-to-date information while helping you build Vue.js applications.

## Installation

### Claude Code

Add the PrimeVue MCP server using the CLI:

```bash
# Add to your user config (available in all projects)
claude mcp add primevue -s user -- npx -y @primevue/mcp

# Or add to current project only
claude mcp add primevue -- npx -y @primevue/mcp
```

Alternatively, use the JSON format for more control:

```bash
claude mcp add-json primevue '{"command":"npx","args":["-y","@primevue/mcp"]}' -s user
```

**Useful commands:**

```bash
claude mcp list           # List all MCP servers
claude mcp get primevue   # Get server details
claude mcp remove primevue # Remove the server
```

After adding, start a new Claude Code session and use `/mcp` to verify the connection.

> **Reference:** [Claude Code MCP Documentation](https://code.claude.com/docs/en/mcp)

---

### Cursor

**Option 1: Project Configuration**

Create `.cursor/mcp.json` in your project:

```json
{
    "mcpServers": {
        "primevue": {
            "command": "npx",
            "args": ["-y", "@primevue/mcp"]
        }
    }
}
```

**Option 2: Global Configuration**

Create or edit `~/.cursor/mcp.json` in your home directory:

```json
{
    "mcpServers": {
        "primevue": {
            "command": "npx",
            "args": ["-y", "@primevue/mcp"]
        }
    }
}
```

**Option 3: Via Settings UI**

1. Go to **Cursor Settings** > **Tools & Integrations**
2. Click **New MCP Server**
3. Add the configuration above

After adding, go to **Settings > MCP** and click the refresh button. The Composer Agent will automatically use PrimeVue tools when relevant.

> **Reference:** [Cursor MCP Documentation](https://docs.cursor.com/context/model-context-protocol)

---

### VS Code (GitHub Copilot)

**Option 1: Project Configuration**

Create `.vscode/mcp.json` in your project:

```json
{
    "servers": {
        "primevue": {
            "command": "npx",
            "args": ["-y", "@primevue/mcp"]
        }
    }
}
```

**Option 2: User Configuration (Global)**

Create or edit the MCP configuration file in your VS Code user data directory:

- **macOS**: `~/Library/Application Support/Code/User/mcp.json`
- **Windows**: `%APPDATA%\Code\User\mcp.json`
- **Linux**: `~/.config/Code/User/mcp.json`

```json
{
    "servers": {
        "primevue": {
            "command": "npx",
            "args": ["-y", "@primevue/mcp"]
        }
    }
}
```

**Option 3: Via Command Palette**

1. Open Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`)
2. Type "MCP: Add Server"
3. Select "Command (stdio)"
4. Enter `primevue` as the server ID
5. Enter `npx` as the command
6. Enter `-y,@primevue/mcp` as the arguments

After adding, use Copilot in **Agent mode** to access PrimeVue tools. The MCP server will be available in GitHub Copilot Chat.

> **Reference:** [VS Code MCP Documentation](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)

---

### OpenAI Codex CLI

**Option 1: Using the CLI**

```bash
codex mcp add primevue -- npx -y @primevue/mcp
```

**Option 2: Direct Configuration**

Edit `~/.codex/config.toml`:

```toml
[mcp_servers.primevue]
command = "npx"
args = ["-y", "@primevue/mcp"]
```

After adding, the MCP server will be available in both the Codex CLI and VS Code extension.

> **Reference:** [OpenAI Codex MCP Documentation](https://developers.openai.com/codex/mcp/)

---

### Windsurf

**Option 1: Via Settings UI**

1. Click **Windsurf - Settings** (bottom right) or press `Cmd+Shift+P` / `Ctrl+Shift+P`
2. Type "Open Windsurf Settings"
3. Navigate to **Cascade** section
4. Click **Manage MCPs** > **View raw config**

**Option 2: Direct Configuration**

Edit `~/.codeium/windsurf/mcp_config.json`:

```json
{
    "mcpServers": {
        "primevue": {
            "command": "npx",
            "args": ["-y", "@primevue/mcp"]
        }
    }
}
```

After adding, the MCP server will be available in Cascade.

> **Reference:** [Windsurf MCP Documentation](https://docs.windsurf.com/windsurf/cascade/mcp)

---

### Zed

Add to your Zed settings (`~/.config/zed/settings.json` on Linux, `~/Library/Application Support/Zed/settings.json` on macOS):

```json
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
```

After adding, restart Zed. Check the Agent Panel's settings view - a green indicator dot next to "primevue" confirms the server is active.

> **Reference:** [Zed MCP Documentation](https://zed.dev/docs/ai/mcp)

---

## Available Tools

### Component Information

| Tool                    | Description                                  |
| ----------------------- | -------------------------------------------- |
| `list_components`       | List all PrimeVue components with categories |
| `get_component`         | Get detailed info about a specific component |
| `search_components`     | Search components by name or description     |
| `get_component_props`   | Get all props for a component                |
| `get_component_events`  | Get all events for a component               |
| `get_component_methods` | Get all methods for a component              |
| `get_component_slots`   | Get all slots for a component                |
| `compare_components`    | Compare two components side by side          |
| `get_categories`        | Get all component categories                 |

### Code Examples

| Tool                          | Description                                     |
| ----------------------------- | ----------------------------------------------- |
| `get_usage_example`           | Get code examples for a component               |
| `list_examples`               | List all available code examples                |
| `get_example`                 | Get a specific example by component and section |
| `generate_component_template` | Generate a basic component template             |

### Theming & Styling

| Tool                    | Description                                    |
| ----------------------- | ---------------------------------------------- |
| `get_component_pt`      | Get Pass Through options for DOM customization |
| `get_component_tokens`  | Get design tokens (CSS variables)              |
| `get_component_styles`  | Get CSS class names                            |
| `get_theming_info`      | Get theming information                        |
| `get_theming_guide`     | Get detailed theming guide                     |
| `get_passthrough_guide` | Get Pass Through customization guide           |
| `get_tailwind_guide`    | Get Tailwind CSS integration guide             |

### Documentation & Guides

| Tool                      | Description                             |
| ------------------------- | --------------------------------------- |
| `list_guides`             | List all guides and documentation pages |
| `get_guide`               | Get a specific guide by name            |
| `get_configuration`       | Get PrimeVue configuration options      |
| `get_installation`        | Get installation instructions           |
| `get_icons_guide`         | Get icons usage guide                   |
| `get_accessibility_guide` | Get accessibility guide                 |
| `get_accessibility_info`  | Get accessibility info for a component  |

### Search & Discovery

| Tool                           | Description                                 |
| ------------------------------ | ------------------------------------------- |
| `search_all`                   | Search across components, guides, and props |
| `suggest_component`            | Suggest components based on use case        |
| `find_by_prop`                 | Find components with a specific prop        |
| `find_by_event`                | Find components that emit a specific event  |
| `find_components_with_feature` | Find components supporting a feature        |
| `get_related_components`       | Find related components                     |

### Utilities

| Tool                     | Description                               |
| ------------------------ | ----------------------------------------- |
| `get_component_url`      | Get the official documentation URL        |
| `get_component_import`   | Get the correct import statement          |
| `get_component_sections` | Get all sections/features for a component |
| `validate_props`         | Validate props for a component            |
| `export_component_docs`  | Export documentation in markdown          |
| `get_form_components`    | Get all form input components             |
| `get_data_components`    | Get all data display components           |
| `get_overlay_components` | Get all overlay/popup components          |
| `get_performance_tips`   | Get performance optimization tips         |
| `get_version_info`       | Get version and compatibility info        |

### Vue Composables

| Tool               | Description                             |
| ------------------ | --------------------------------------- |
| `list_composables` | List all PrimeVue composables           |
| `get_composable`   | Get details about a specific composable |

## Example Prompts

Once installed, try asking your AI assistant:

- "What are all the props available for the DataTable component?"
- "Show me how to implement row selection in DataTable"
- "How do I customize Button styles using Pass Through?"
- "What design tokens are available for the Card component?"
- "Find me a component for selecting multiple items from a list"
- "Compare AutoComplete and Select components"

## Requirements

- Node.js 18+
- One of the supported AI tools (Claude Code, VS Code + Copilot, Cursor, Windsurf, Claude Desktop)

## Links

- [PrimeVue Documentation](https://primevue.org/)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [GitHub Repository](https://github.com/primefaces/primevue)
- [Report Issues](https://github.com/primefaces/primevue/issues)

## License

MIT
