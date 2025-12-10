import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { readFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Types
interface PropInfo {
  name: string;
  type: string;
  default?: string;
  description: string;
}

interface SlotInfo {
  name: string;
  parameters?: string;
  description: string;
}

interface EmitInfo {
  name: string;
  parameters?: string;
  description: string;
}

interface PassThroughInfo {
  name: string;
  description: string;
}

interface TokenInfo {
  token: string;
  variable: string;
  description: string;
}

interface StyleInfo {
  class: string;
  description: string;
}

interface ComponentAPI {
  props: PropInfo[] | null;
  slots: SlotInfo[] | null;
  emits: EmitInfo[] | null;
  pt: PassThroughInfo[] | null;
  styles: StyleInfo[] | null;
  tokens: TokenInfo[] | null;
}

interface Section {
  id: string;
  label: string;
  description: string;
  examples: Record<string, string> | null;
}

interface Component {
  name: string;
  title: string;
  description: string;
  sections: Section[];
  api: ComponentAPI;
}

interface Page {
  name: string;
  path: string;
  title: string;
  description: string;
  sections: Section[];
}

interface ComponentsData {
  version: string;
  generatedAt: string;
  components: Component[];
  pages?: Page[];
}

const BASE_URL = "https://primevue.org";

// Helper functions
function findComponent(data: ComponentsData, name: string): Component {
  const component = data.components.find(
    (c) => c.name.toLowerCase() === name.toLowerCase()
  );
  if (!component) {
    throw new Error(`Component "${name}" not found`);
  }
  return component;
}

function extractCategory(component: Component): string {
  const name = component.name.toLowerCase();
  if (
    name.includes("table") ||
    name.includes("tree") ||
    name.includes("list") ||
    name.includes("paginator") ||
    name.includes("virtualscroller") ||
    name.includes("timeline") ||
    name.includes("orderlist") ||
    name.includes("picklist") ||
    name.includes("organizationchart")
  ) {
    return "Data";
  }
  if (name.includes("button") || name.includes("speed")) {
    return "Button";
  }
  if (
    name.includes("input") ||
    name.includes("select") ||
    name.includes("dropdown") ||
    name.includes("autocomplete") ||
    name.includes("calendar") ||
    name.includes("checkbox") ||
    name.includes("radio") ||
    name.includes("slider") ||
    name.includes("rating") ||
    name.includes("toggle") ||
    name.includes("editor") ||
    name.includes("colorpicker") ||
    name.includes("password") ||
    name.includes("textarea") ||
    name.includes("chips") ||
    name.includes("knob") ||
    name.includes("listbox") ||
    name.includes("multiselect") ||
    name.includes("treeselect") ||
    name.includes("cascadeselect") ||
    name.includes("mention") ||
    name.includes("datepicker")
  ) {
    return "Form";
  }
  if (
    name.includes("menu") ||
    name.includes("breadcrumb") ||
    name.includes("contextmenu") ||
    name.includes("dock") ||
    name.includes("megamenu") ||
    name.includes("panelmenu") ||
    name.includes("steps") ||
    name.includes("tabmenu") ||
    name.includes("tieredmenu")
  ) {
    return "Menu";
  }
  if (
    name.includes("dialog") ||
    name.includes("overlay") ||
    name.includes("sidebar") ||
    name.includes("tooltip") ||
    name.includes("popover") ||
    name.includes("drawer") ||
    name.includes("confirmpopup") ||
    name.includes("confirmdialog") ||
    name.includes("dynamicdialog")
  ) {
    return "Overlay";
  }
  if (
    name.includes("panel") ||
    name.includes("accordion") ||
    name.includes("card") ||
    name.includes("fieldset") ||
    name.includes("divider") ||
    name.includes("splitter") ||
    name.includes("scrollpanel") ||
    name.includes("tab") ||
    name.includes("toolbar") ||
    name.includes("stepper")
  ) {
    return "Panel";
  }
  if (name.includes("upload") || name.includes("file")) {
    return "File";
  }
  if (name.includes("chart")) {
    return "Chart";
  }
  if (
    name.includes("message") ||
    name.includes("toast") ||
    name.includes("inlinemessage")
  ) {
    return "Messages";
  }
  if (
    name.includes("carousel") ||
    name.includes("galleria") ||
    name.includes("image")
  ) {
    return "Media";
  }
  return "Misc";
}

function findGuide(data: ComponentsData, name: string): Page {
  if (!data.pages) {
    throw new Error("No guides available in the data");
  }
  const page = data.pages.find(
    (p) => p.name.toLowerCase() === name.toLowerCase()
  );
  if (!page) {
    const availableGuides = data.pages.map((p) => p.name).join(", ");
    throw new Error(
      `Guide "${name}" not found. Available guides: ${availableGuides}`
    );
  }
  return page;
}

function getGuideContent(
  data: ComponentsData,
  guideName: string,
  sectionId?: string
): string {
  const guide = findGuide(data, guideName);

  if (sectionId) {
    const section = guide.sections.find(
      (s) => s.id.toLowerCase() === sectionId.toLowerCase()
    );

    if (!section) {
      const availableSections = guide.sections.map((s) => s.id).join(", ");
      return `Section "${sectionId}" not found in guide "${guideName}". Available sections: ${availableSections}`;
    }

    let content = `# ${guide.title} - ${section.label}\n\n`;
    content += `${section.description}\n\n`;
    if (section.examples) {
      Object.entries(section.examples).forEach(([variant, code]) => {
        if (variant !== "basic") {
          content += `### ${variant}\n`;
        }
        content += `\`\`\`javascript\n${code}\n\`\`\`\n\n`;
      });
    }
    content += `**Full documentation:** ${BASE_URL}/${guide.path}`;
    return content;
  }

  let content = `# ${guide.title}\n\n${guide.description}\n\n`;
  content += `**Documentation:** ${BASE_URL}/${guide.path}\n\n`;
  content += `## Sections\n\n`;

  guide.sections.forEach((section) => {
    content += `### ${section.label}\n\n`;
    content += `${section.description}\n\n`;
    if (section.examples) {
      Object.entries(section.examples).forEach(([variant, code]) => {
        if (variant !== "basic") {
          content += `#### ${variant}\n`;
        }
        content += `\`\`\`javascript\n${code}\n\`\`\`\n\n`;
      });
    }
  });

  return content;
}

// Load components data
async function loadComponentsData(): Promise<ComponentsData> {
  const dataPath = join(__dirname, "../data/components.json");
  const fileContent = await readFile(dataPath, "utf-8");
  return JSON.parse(fileContent);
}

// Create and configure MCP server
function createServer(data: ComponentsData): McpServer {
  const server = new McpServer(
    {
      name: "@primevue/mcp",
      version: "1.0.0",
    },
    {
      capabilities: {
        tools: {},
        resources: {},
      },
    }
  );

  // ===== Component Tools =====

  server.tool(
    "list_components",
    "List all available PrimeVue components with their categories",
    {
      category: {
        type: "string",
        description: "Optional category filter",
      },
    },
    async ({ category }) => {
      const grouped = data.components.reduce(
        (acc, comp) => {
          const cat = extractCategory(comp);
          if (category && cat.toLowerCase() !== (category as string).toLowerCase()) {
            return acc;
          }
          if (!acc[cat]) acc[cat] = [];
          acc[cat].push(comp.name);
          return acc;
        },
        {} as Record<string, string[]>
      );

      return {
        content: [{ type: "text", text: JSON.stringify(grouped, null, 2) }],
      };
    }
  );

  server.tool(
    "get_component",
    "Get detailed information about a specific PrimeVue component",
    {
      name: {
        type: "string",
        description: "Component name (e.g., 'DataTable', 'Button')",
      },
    },
    async ({ name }) => {
      const component = findComponent(data, name as string);
      const category = extractCategory(component);

      const summary = {
        name: component.name,
        title: component.title,
        description: component.description,
        category,
        url: `${BASE_URL}/${component.name.toLowerCase()}`,
        stats: {
          props_count: component.api.props?.length || 0,
          events_count: component.api.emits?.length || 0,
          slots_count: component.api.slots?.length || 0,
          sections_count: component.sections.length,
          pt_count: component.api.pt?.length || 0,
        },
        props_preview: (component.api.props || []).slice(0, 5).map((p) => ({
          name: p.name,
          type: p.type,
          description: p.description,
        })),
        sections: component.sections.map((s) => ({
          id: s.id,
          label: s.label,
          has_examples: s.examples !== null,
        })),
      };

      return {
        content: [{ type: "text", text: JSON.stringify(summary, null, 2) }],
      };
    }
  );

  server.tool(
    "search_components",
    "Search PrimeVue components by name or description",
    {
      query: {
        type: "string",
        description: "Search query",
      },
    },
    async ({ query }) => {
      const results = data.components.filter(
        (c) =>
          c.name.toLowerCase().includes((query as string).toLowerCase()) ||
          c.description.toLowerCase().includes((query as string).toLowerCase()) ||
          c.title.toLowerCase().includes((query as string).toLowerCase())
      );

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              results.map((c) => ({
                name: c.name,
                title: c.title,
                description: c.description,
              })),
              null,
              2
            ),
          },
        ],
      };
    }
  );

  server.tool(
    "get_component_props",
    "Get all props/properties for a PrimeVue component",
    {
      component: {
        type: "string",
        description: "Component name",
      },
    },
    async ({ component }) => {
      const comp = findComponent(data, component as string);
      return {
        content: [{ type: "text", text: JSON.stringify(comp.api.props || [], null, 2) }],
      };
    }
  );

  server.tool(
    "get_component_events",
    "Get all events for a PrimeVue component",
    {
      component: {
        type: "string",
        description: "Component name",
      },
    },
    async ({ component }) => {
      const comp = findComponent(data, component as string);
      return {
        content: [{ type: "text", text: JSON.stringify(comp.api.emits || [], null, 2) }],
      };
    }
  );

  server.tool(
    "get_component_slots",
    "Get all slots/templates for a PrimeVue component",
    {
      component: {
        type: "string",
        description: "Component name",
      },
    },
    async ({ component }) => {
      const comp = findComponent(data, component as string);
      return {
        content: [{ type: "text", text: JSON.stringify(comp.api.slots || [], null, 2) }],
      };
    }
  );

  server.tool(
    "get_usage_example",
    "Get code examples for a PrimeVue component",
    {
      component: {
        type: "string",
        description: "Component name",
      },
    },
    async ({ component }) => {
      const comp = findComponent(data, component as string);
      const examples: { section: string; label: string; examples: Record<string, string> }[] = [];
      comp.sections.forEach((section) => {
        if (section.examples) {
          examples.push({ section: section.id, label: section.label, examples: section.examples });
        }
      });

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                component: comp.name,
                total_sections_with_examples: examples.length,
                documentation_url: `${BASE_URL}/${comp.name.toLowerCase()}`,
                examples,
              },
              null,
              2
            ),
          },
        ],
      };
    }
  );

  server.tool(
    "get_component_pt",
    "Get Pass Through (PT) options for a PrimeVue component",
    {
      component: {
        type: "string",
        description: "Component name",
      },
    },
    async ({ component }) => {
      const comp = findComponent(data, component as string);
      const pt = comp.api.pt || [];

      if (pt.length === 0) {
        return {
          content: [{ type: "text", text: `No Pass Through (PT) options documented for ${comp.name}.` }],
        };
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                component: comp.name,
                description: "Pass Through (PT) allows customizing DOM elements",
                pt_options: pt,
              },
              null,
              2
            ),
          },
        ],
      };
    }
  );

  server.tool(
    "get_component_tokens",
    "Get design tokens (CSS variables) for a PrimeVue component",
    {
      component: {
        type: "string",
        description: "Component name",
      },
    },
    async ({ component }) => {
      const comp = findComponent(data, component as string);
      const tokens = comp.api.tokens || [];

      if (tokens.length === 0) {
        return {
          content: [{ type: "text", text: `No design tokens documented for ${comp.name}.` }],
        };
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              { component: comp.name, total_tokens: tokens.length, tokens },
              null,
              2
            ),
          },
        ],
      };
    }
  );

  server.tool(
    "get_component_styles",
    "Get CSS class names for a PrimeVue component",
    {
      component: {
        type: "string",
        description: "Component name",
      },
    },
    async ({ component }) => {
      const comp = findComponent(data, component as string);
      const styles = comp.api.styles || [];

      if (styles.length === 0) {
        return {
          content: [{ type: "text", text: `No CSS classes documented for ${comp.name}.` }],
        };
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              { component: comp.name, total_classes: styles.length, styles },
              null,
              2
            ),
          },
        ],
      };
    }
  );

  server.tool(
    "find_by_prop",
    "Find PrimeVue components that have a specific prop",
    {
      prop_name: {
        type: "string",
        description: "Property name to search for",
      },
    },
    async ({ prop_name }) => {
      const propNameLower = (prop_name as string).toLowerCase();
      const results = data.components.filter((c) =>
        (c.api.props || []).some((p) => p.name.toLowerCase() === propNameLower)
      );

      return {
        content: [{ type: "text", text: JSON.stringify(results.map((c) => c.name), null, 2) }],
      };
    }
  );

  server.tool(
    "find_by_event",
    "Find PrimeVue components that emit a specific event",
    {
      event_name: {
        type: "string",
        description: "Event name to search for",
      },
    },
    async ({ event_name }) => {
      const eventNameLower = (event_name as string).toLowerCase();
      const results = data.components.filter((c) =>
        (c.api.emits || []).some((e) => e.name.toLowerCase() === eventNameLower)
      );

      return {
        content: [{ type: "text", text: JSON.stringify(results.map((c) => c.name), null, 2) }],
      };
    }
  );

  server.tool(
    "get_component_url",
    "Get the official documentation URL for a PrimeVue component",
    {
      component: {
        type: "string",
        description: "Component name",
      },
    },
    async ({ component }) => {
      const comp = findComponent(data, component as string);
      return {
        content: [{ type: "text", text: `${BASE_URL}/${comp.name.toLowerCase()}` }],
      };
    }
  );

  server.tool(
    "compare_components",
    "Compare two PrimeVue components side by side",
    {
      component1: {
        type: "string",
        description: "First component name",
      },
      component2: {
        type: "string",
        description: "Second component name",
      },
    },
    async ({ component1, component2 }) => {
      const comp1 = findComponent(data, component1 as string);
      const comp2 = findComponent(data, component2 as string);

      const comparison = {
        component1: {
          name: comp1.name,
          props_count: comp1.api.props?.length || 0,
          events_count: comp1.api.emits?.length || 0,
          slots_count: comp1.api.slots?.length || 0,
        },
        component2: {
          name: comp2.name,
          props_count: comp2.api.props?.length || 0,
          events_count: comp2.api.emits?.length || 0,
          slots_count: comp2.api.slots?.length || 0,
        },
        common_props: (comp1.api.props || [])
          .filter((p1) => (comp2.api.props || []).some((p2) => p2.name === p1.name))
          .map((p) => p.name),
      };

      return {
        content: [{ type: "text", text: JSON.stringify(comparison, null, 2) }],
      };
    }
  );

  server.tool(
    "get_categories",
    "Get all PrimeVue component categories",
    {},
    async () => {
      const categories = [...new Set(data.components.map((c) => extractCategory(c)))];
      return {
        content: [{ type: "text", text: JSON.stringify(categories, null, 2) }],
      };
    }
  );

  server.tool(
    "get_version_info",
    "Get PrimeVue version and compatibility information",
    {},
    async () => {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                framework: "primevue",
                version: data.version,
                generated_at: data.generatedAt,
                components_count: data.components.length,
                pages_count: data.pages?.length || 0,
                vue_compatibility: "Vue 3.x",
              },
              null,
              2
            ),
          },
        ],
      };
    }
  );

  server.tool(
    "get_installation",
    "Get PrimeVue installation instructions",
    {
      environment: {
        type: "string",
        description: "Environment: 'vite', 'nuxt', 'laravel', or 'cdn'",
      },
    },
    async ({ environment }) => {
      const env = ((environment as string) || "vite").toLowerCase();
      let guide = `# PrimeVue Installation\n\n`;

      if (env === "nuxt") {
        guide += `## Nuxt 3\n\n\`\`\`bash\nnpm install primevue @primevue/themes\n\`\`\`\n\nAdd to nuxt.config.ts:\n\`\`\`typescript\nexport default defineNuxtConfig({ modules: ['@primevue/nuxt-module'] })\n\`\`\`\n`;
      } else if (env === "cdn") {
        guide += `## CDN\n\n\`\`\`html\n<script src="https://unpkg.com/primevue/core/core.min.js"></script>\n\`\`\`\n`;
      } else {
        guide += `## Vite\n\n\`\`\`bash\nnpm install primevue @primevue/themes\n\`\`\`\n\nSetup in main.ts:\n\`\`\`typescript\nimport { createApp } from 'vue'\nimport PrimeVue from 'primevue/config'\nimport Aura from '@primevue/themes/aura'\n\nconst app = createApp(App)\napp.use(PrimeVue, { theme: { preset: Aura } })\n\`\`\`\n`;
      }

      guide += `\nFor detailed instructions: ${BASE_URL}/installation`;

      return {
        content: [{ type: "text", text: guide }],
      };
    }
  );

  // ===== Guide Tools =====

  server.tool(
    "list_guides",
    "List all available PrimeVue guides and documentation pages",
    {},
    async () => {
      if (!data.pages || data.pages.length === 0) {
        return {
          content: [{ type: "text", text: "No guides available." }],
        };
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                total: data.pages.length,
                guides: data.pages.map((p) => ({
                  name: p.name,
                  title: p.title,
                  description: p.description,
                })),
              },
              null,
              2
            ),
          },
        ],
      };
    }
  );

  server.tool(
    "get_guide",
    "Get a specific PrimeVue guide by name",
    {
      name: {
        type: "string",
        description: "Guide name",
      },
      section: {
        type: "string",
        description: "Optional section ID",
      },
    },
    async ({ name, section }) => {
      const content = getGuideContent(data, name as string, section as string | undefined);
      return {
        content: [{ type: "text", text: content }],
      };
    }
  );

  server.tool(
    "get_theming_info",
    "Get information about PrimeVue theming",
    {
      mode: {
        type: "string",
        description: "Theming mode: 'styled', 'unstyled', or 'passthrough'",
      },
    },
    async ({ mode }) => {
      const modeStr = ((mode as string) || "styled").toLowerCase();
      let info = `# PrimeVue Theming\n\n`;

      if (modeStr === "unstyled") {
        info += `## Unstyled Mode\n\nUse unstyled mode for complete control.\n\n\`\`\`typescript\napp.use(PrimeVue, { unstyled: true })\n\`\`\`\n`;
      } else if (modeStr === "passthrough") {
        info += `## Pass Through (PT)\n\nPT allows fine-grained control over DOM elements.\n\n\`\`\`vue\n<Button :pt="{ root: { class: 'my-class' } }" />\n\`\`\`\n`;
      } else {
        info += `## Styled Mode (Default)\n\nPre-skinned components with design tokens. Presets: Aura, Lara, Nora, Material\n\n\`\`\`typescript\nimport Aura from '@primevue/themes/aura'\napp.use(PrimeVue, { theme: { preset: Aura } })\n\`\`\`\n`;
      }

      info += `\nFor detailed docs: ${BASE_URL}/theming`;

      return {
        content: [{ type: "text", text: info }],
      };
    }
  );

  // ===== Composables Tools =====

  server.tool(
    "list_composables",
    "List all PrimeVue composables",
    {},
    async () => {
      const composables = [
        { name: "useToast", description: "Programmatically display toast messages", related_component: "Toast" },
        { name: "useConfirm", description: "Programmatically display confirmation dialogs", related_component: "ConfirmDialog" },
        { name: "useDialog", description: "Programmatically create dynamic dialogs", related_component: "DynamicDialog" },
        { name: "useStyle", description: "Inject custom styles", related_component: null },
        { name: "usePrimeVue", description: "Access PrimeVue configuration", related_component: null },
      ];

      return {
        content: [{ type: "text", text: JSON.stringify({ total: composables.length, composables }, null, 2) }],
      };
    }
  );

  server.tool(
    "get_composable",
    "Get detailed info about a PrimeVue composable",
    {
      name: {
        type: "string",
        description: "Composable name (e.g., 'useToast')",
      },
    },
    async ({ name }) => {
      const composables: Record<string, { description: string; usage: string; example: string }> = {
        usetoast: {
          description: "useToast provides methods to display toast notifications.",
          usage: `import { useToast } from 'primevue/usetoast';\nconst toast = useToast();`,
          example: `toast.add({ severity: 'success', summary: 'Success', detail: 'Message', life: 3000 });`,
        },
        useconfirm: {
          description: "useConfirm provides methods to display confirmation dialogs.",
          usage: `import { useConfirm } from 'primevue/useconfirm';\nconst confirm = useConfirm();`,
          example: `confirm.require({ message: 'Are you sure?', header: 'Confirm', accept: () => {} });`,
        },
        usedialog: {
          description: "useDialog enables creating dynamic dialogs.",
          usage: `import { useDialog } from 'primevue/usedialog';\nconst dialog = useDialog();`,
          example: `dialog.open(MyComponent, { props: { header: 'Dialog' } });`,
        },
        usestyle: {
          description: "useStyle injects custom CSS styles.",
          usage: `import { useStyle } from 'primevue/usestyle';\nuseStyle(css, { name: 'my-styles' });`,
          example: `useStyle('.my-class { color: red; }', { name: 'custom' });`,
        },
        useprimevue: {
          description: "usePrimeVue provides access to PrimeVue configuration.",
          usage: `import { usePrimeVue } from 'primevue/config';\nconst primevue = usePrimeVue();`,
          example: `primevue.config.ripple = true;`,
        },
      };

      const normalizedName = (name as string).toLowerCase();
      const composable = composables[normalizedName];

      if (!composable) {
        return {
          content: [{ type: "text", text: `Composable "${name}" not found. Available: useToast, useConfirm, useDialog, useStyle, usePrimeVue` }],
        };
      }

      return {
        content: [{ type: "text", text: JSON.stringify({ name, ...composable }, null, 2) }],
      };
    }
  );

  // ===== Example Tools =====

  server.tool(
    "list_examples",
    "List all available code examples",
    {
      component: {
        type: "string",
        description: "Optional component filter",
      },
    },
    async ({ component }) => {
      const componentFilter = component as string | undefined;
      const examples: { component: string; section: string; label: string; variants: string[] }[] = [];

      const components = componentFilter
        ? data.components.filter((c) => c.name.toLowerCase() === componentFilter.toLowerCase())
        : data.components;

      components.forEach((comp) => {
        comp.sections.forEach((section) => {
          if (section.examples) {
            examples.push({
              component: comp.name,
              section: section.id,
              label: section.label,
              variants: Object.keys(section.examples),
            });
          }
        });
      });

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ total: examples.length, filter: componentFilter || "all", examples }, null, 2),
          },
        ],
      };
    }
  );

  server.tool(
    "get_example",
    "Get a specific code example",
    {
      component: {
        type: "string",
        description: "Component name",
      },
      section: {
        type: "string",
        description: "Section ID",
      },
      variant: {
        type: "string",
        description: "Example variant (default: 'basic')",
      },
    },
    async ({ component, section, variant }) => {
      const comp = findComponent(data, component as string);
      const sectionData = comp.sections.find(
        (s) => s.id.toLowerCase() === (section as string).toLowerCase()
      );

      if (!sectionData) {
        const availableSections = comp.sections.map((s) => s.id).join(", ");
        return {
          content: [{ type: "text", text: `Section "${section}" not found for ${comp.name}. Available: ${availableSections}` }],
        };
      }

      if (!sectionData.examples) {
        return {
          content: [{ type: "text", text: `No code examples for ${comp.name} > ${sectionData.label}` }],
        };
      }

      const selectedVariant = (variant as string) || "basic";
      const code = sectionData.examples[selectedVariant];

      if (!code) {
        const availableVariants = Object.keys(sectionData.examples).join(", ");
        return {
          content: [{ type: "text", text: `Variant "${selectedVariant}" not found. Available: ${availableVariants}` }],
        };
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                component: comp.name,
                section: sectionData.id,
                label: sectionData.label,
                variant: selectedVariant,
                code,
              },
              null,
              2
            ),
          },
        ],
      };
    }
  );

  server.tool(
    "get_component_sections",
    "Get all available sections for a component",
    {
      component: {
        type: "string",
        description: "Component name",
      },
    },
    async ({ component }) => {
      const comp = findComponent(data, component as string);
      const sections = comp.sections.map((s) => ({
        id: s.id,
        label: s.label,
        description: s.description.slice(0, 150) + (s.description.length > 150 ? "..." : ""),
        has_examples: s.examples !== null,
        example_variants: s.examples ? Object.keys(s.examples) : [],
      }));

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ component: comp.name, total_sections: sections.length, sections }, null, 2),
          },
        ],
      };
    }
  );

  server.tool(
    "get_component_import",
    "Get the import statement for a PrimeVue component",
    {
      component: {
        type: "string",
        description: "Component name",
      },
    },
    async ({ component }) => {
      const comp = findComponent(data, component as string);
      const importSection = comp.sections.find((s) => s.id === "import");

      let importCode = "";
      if (importSection?.examples?.basic) {
        importCode = importSection.examples.basic;
      } else {
        const pascalName = comp.name.charAt(0).toUpperCase() + comp.name.slice(1);
        importCode = `import ${pascalName} from 'primevue/${comp.name.toLowerCase()}';`;
      }

      return {
        content: [{ type: "text", text: `# Import ${comp.title}\n\n\`\`\`javascript\n${importCode}\n\`\`\`\n\n**Documentation:** ${BASE_URL}/${comp.name}` }],
      };
    }
  );

  // ===== Advanced Search Tools =====

  server.tool(
    "find_components_with_feature",
    "Find components supporting a specific feature",
    {
      feature: {
        type: "string",
        description: "Feature to search for",
      },
    },
    async ({ feature }) => {
      const featureLower = (feature as string).toLowerCase();
      const matches = data.components.filter((c) =>
        c.sections.some(
          (s) => s.id.toLowerCase().includes(featureLower) || s.label.toLowerCase().includes(featureLower)
        )
      );

      if (matches.length === 0) {
        return {
          content: [{ type: "text", text: `No components found with feature "${feature}".` }],
        };
      }

      const results = matches.map((c) => ({
        component: c.name,
        matching_sections: c.sections
          .filter((s) => s.id.toLowerCase().includes(featureLower) || s.label.toLowerCase().includes(featureLower))
          .map((s) => s.id),
      }));

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ feature, total_matches: results.length, components: results }, null, 2),
          },
        ],
      };
    }
  );

  server.tool(
    "search_all",
    "Search across all components, guides, and props",
    {
      query: {
        type: "string",
        description: "Search query",
      },
    },
    async ({ query }) => {
      const queryLower = (query as string).toLowerCase();

      const componentMatches = data.components
        .filter(
          (c) =>
            c.name.toLowerCase().includes(queryLower) ||
            c.title.toLowerCase().includes(queryLower) ||
            c.description.toLowerCase().includes(queryLower)
        )
        .slice(0, 5)
        .map((c) => ({ name: c.name, title: c.title, description: c.description.slice(0, 100) }));

      const propMatches: { component: string; prop: string; type: string }[] = [];
      data.components.forEach((c) => {
        c.api.props?.forEach((p) => {
          if (p.name.toLowerCase().includes(queryLower)) {
            propMatches.push({ component: c.name, prop: p.name, type: p.type });
          }
        });
      });

      const guideMatches = (data.pages || [])
        .filter((p) => p.name.toLowerCase().includes(queryLower) || p.title.toLowerCase().includes(queryLower))
        .slice(0, 5)
        .map((p) => ({ name: p.name, title: p.title }));

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                query,
                results: {
                  components: componentMatches,
                  props: propMatches.slice(0, 10),
                  guides: guideMatches,
                },
              },
              null,
              2
            ),
          },
        ],
      };
    }
  );

  server.tool(
    "suggest_component",
    "Suggest components based on use case",
    {
      use_case: {
        type: "string",
        description: "Description of what you want to build",
      },
    },
    async ({ use_case }) => {
      const useCaseLower = (use_case as string).toLowerCase();

      const keywords: Record<string, string[]> = {
        table: ["datatable", "treetable"],
        grid: ["datatable", "dataview"],
        list: ["listbox", "orderlist", "picklist", "dataview"],
        tree: ["tree", "treetable", "treeselect"],
        form: ["inputtext", "inputnumber", "textarea", "checkbox", "select"],
        input: ["inputtext", "inputnumber", "inputmask", "textarea", "password"],
        select: ["select", "multiselect", "listbox", "cascadeselect"],
        dropdown: ["select", "multiselect"],
        date: ["datepicker"],
        calendar: ["datepicker"],
        file: ["fileupload"],
        upload: ["fileupload"],
        image: ["image", "galleria"],
        gallery: ["galleria", "carousel"],
        dialog: ["dialog", "confirmdialog", "dynamicdialog"],
        modal: ["dialog", "drawer"],
        popup: ["popover", "confirmpopup", "tooltip"],
        drawer: ["drawer"],
        sidebar: ["drawer"],
        menu: ["menu", "menubar", "megamenu", "tieredmenu", "contextmenu", "panelmenu"],
        navigation: ["menubar", "breadcrumb", "tabs", "stepper"],
        tab: ["tabs"],
        step: ["stepper"],
        wizard: ["stepper"],
        accordion: ["accordion"],
        panel: ["panel", "fieldset", "card", "splitter"],
        card: ["card"],
        button: ["button", "splitbutton", "speeddial"],
        toggle: ["toggleswitch", "togglebutton", "checkbox"],
        switch: ["toggleswitch"],
        rating: ["rating"],
        progress: ["progressbar", "progressspinner"],
        loading: ["progressspinner", "skeleton"],
        toast: ["toast"],
        notification: ["toast", "message"],
        message: ["message", "toast"],
        chip: ["chip"],
        avatar: ["avatar"],
        tooltip: ["tooltip"],
        editor: ["editor"],
        color: ["colorpicker"],
        chart: ["chart"],
        terminal: ["terminal"],
        scroll: ["scrollpanel", "scrolltop", "virtualscroller"],
        timeline: ["timeline"],
        divider: ["divider"],
        splitter: ["splitter"],
        knob: ["knob"],
      };

      const matchedComponents = new Set<string>();

      Object.entries(keywords).forEach(([keyword, components]) => {
        if (useCaseLower.includes(keyword)) {
          components.forEach((c) => matchedComponents.add(c));
        }
      });

      data.components.forEach((c) => {
        if (c.name.toLowerCase().includes(useCaseLower) || c.description.toLowerCase().includes(useCaseLower)) {
          matchedComponents.add(c.name);
        }
      });

      const suggestions = Array.from(matchedComponents)
        .map((name) => {
          const comp = data.components.find((c) => c.name.toLowerCase() === name.toLowerCase());
          return comp
            ? {
                name: comp.name,
                title: comp.title,
                description: comp.description,
                url: `${BASE_URL}/${comp.name.toLowerCase()}`,
              }
            : null;
        })
        .filter(Boolean)
        .slice(0, 8);

      if (suggestions.length === 0) {
        return {
          content: [
            {
              type: "text",
              text: `No specific suggestions for "${use_case}". Try list_components or get_form_components.`,
            },
          ],
        };
      }

      return {
        content: [{ type: "text", text: JSON.stringify({ use_case, suggestions }, null, 2) }],
      };
    }
  );

  // ===== Category Tools =====

  server.tool(
    "get_form_components",
    "Get all PrimeVue form input components",
    {},
    async () => {
      const formComponents = data.components
        .filter((c) => extractCategory(c) === "Form")
        .map((c) => ({ name: c.name, title: c.title, description: c.description }));

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ category: "Form Components", total: formComponents.length, components: formComponents }, null, 2),
          },
        ],
      };
    }
  );

  server.tool(
    "get_data_components",
    "Get all PrimeVue data display components",
    {},
    async () => {
      const dataComponents = data.components
        .filter((c) => extractCategory(c) === "Data")
        .map((c) => ({ name: c.name, title: c.title, description: c.description }));

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ category: "Data Components", total: dataComponents.length, components: dataComponents }, null, 2),
          },
        ],
      };
    }
  );

  server.tool(
    "get_overlay_components",
    "Get all PrimeVue overlay/popup components",
    {},
    async () => {
      const overlayComponents = data.components
        .filter((c) => extractCategory(c) === "Overlay")
        .map((c) => ({ name: c.name, title: c.title, description: c.description }));

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({ category: "Overlay Components", total: overlayComponents.length, components: overlayComponents }, null, 2),
          },
        ],
      };
    }
  );

  return server;
}

// Main entry point
async function main() {
  try {
    const data = await loadComponentsData();
    const server = createServer(data);
    const transport = new StdioServerTransport();

    await server.connect(transport);
    console.error("PrimeVue MCP Server running on stdio");
  } catch (error) {
    console.error("Failed to start PrimeVue MCP Server:", error);
    process.exit(1);
  }
}

main();
