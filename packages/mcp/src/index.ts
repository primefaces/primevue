import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
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

// Tool definitions
const tools = [
  {
    name: "list_components",
    description: "List all available PrimeVue components with their categories",
    inputSchema: {
      type: "object",
      properties: {
        category: { type: "string", description: "Optional category filter" },
      },
    },
  },
  {
    name: "get_component",
    description: "Get detailed information about a specific PrimeVue component",
    inputSchema: {
      type: "object",
      properties: {
        name: { type: "string", description: "Component name (e.g., 'DataTable', 'Button')" },
      },
      required: ["name"],
    },
  },
  {
    name: "search_components",
    description: "Search PrimeVue components by name or description",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Search query" },
      },
      required: ["query"],
    },
  },
  {
    name: "get_component_props",
    description: "Get all props/properties for a PrimeVue component",
    inputSchema: {
      type: "object",
      properties: {
        component: { type: "string", description: "Component name" },
      },
      required: ["component"],
    },
  },
  {
    name: "get_component_events",
    description: "Get all events for a PrimeVue component",
    inputSchema: {
      type: "object",
      properties: {
        component: { type: "string", description: "Component name" },
      },
      required: ["component"],
    },
  },
  {
    name: "get_component_slots",
    description: "Get all slots/templates for a PrimeVue component",
    inputSchema: {
      type: "object",
      properties: {
        component: { type: "string", description: "Component name" },
      },
      required: ["component"],
    },
  },
  {
    name: "get_usage_example",
    description: "Get code examples for a PrimeVue component",
    inputSchema: {
      type: "object",
      properties: {
        component: { type: "string", description: "Component name" },
      },
      required: ["component"],
    },
  },
  {
    name: "get_component_pt",
    description: "Get Pass Through (PT) options for a PrimeVue component",
    inputSchema: {
      type: "object",
      properties: {
        component: { type: "string", description: "Component name" },
      },
      required: ["component"],
    },
  },
  {
    name: "get_component_tokens",
    description: "Get design tokens (CSS variables) for a PrimeVue component",
    inputSchema: {
      type: "object",
      properties: {
        component: { type: "string", description: "Component name" },
      },
      required: ["component"],
    },
  },
  {
    name: "get_component_styles",
    description: "Get CSS class names for a PrimeVue component",
    inputSchema: {
      type: "object",
      properties: {
        component: { type: "string", description: "Component name" },
      },
      required: ["component"],
    },
  },
  {
    name: "find_by_prop",
    description: "Find PrimeVue components that have a specific prop",
    inputSchema: {
      type: "object",
      properties: {
        prop_name: { type: "string", description: "Property name to search for" },
      },
      required: ["prop_name"],
    },
  },
  {
    name: "find_by_event",
    description: "Find PrimeVue components that emit a specific event",
    inputSchema: {
      type: "object",
      properties: {
        event_name: { type: "string", description: "Event name to search for" },
      },
      required: ["event_name"],
    },
  },
  {
    name: "get_component_url",
    description: "Get the official documentation URL for a PrimeVue component",
    inputSchema: {
      type: "object",
      properties: {
        component: { type: "string", description: "Component name" },
      },
      required: ["component"],
    },
  },
  {
    name: "compare_components",
    description: "Compare two PrimeVue components side by side",
    inputSchema: {
      type: "object",
      properties: {
        component1: { type: "string", description: "First component name" },
        component2: { type: "string", description: "Second component name" },
      },
      required: ["component1", "component2"],
    },
  },
  {
    name: "get_categories",
    description: "Get all PrimeVue component categories",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "get_version_info",
    description: "Get PrimeVue version and compatibility information",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "get_installation",
    description: "Get PrimeVue installation instructions",
    inputSchema: {
      type: "object",
      properties: {
        environment: { type: "string", description: "Environment: 'vite', 'nuxt', 'laravel', or 'cdn'" },
      },
    },
  },
  {
    name: "list_guides",
    description: "List all available PrimeVue guides and documentation pages",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "get_guide",
    description: "Get a specific PrimeVue guide by name",
    inputSchema: {
      type: "object",
      properties: {
        name: { type: "string", description: "Guide name" },
        section: { type: "string", description: "Optional section ID" },
      },
      required: ["name"],
    },
  },
  {
    name: "get_theming_info",
    description: "Get information about PrimeVue theming",
    inputSchema: {
      type: "object",
      properties: {
        mode: { type: "string", description: "Theming mode: 'styled', 'unstyled', or 'passthrough'" },
      },
    },
  },
  {
    name: "list_composables",
    description: "List all PrimeVue composables",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "get_composable",
    description: "Get detailed info about a PrimeVue composable",
    inputSchema: {
      type: "object",
      properties: {
        name: { type: "string", description: "Composable name (e.g., 'useToast')" },
      },
      required: ["name"],
    },
  },
  {
    name: "list_examples",
    description: "List all available code examples",
    inputSchema: {
      type: "object",
      properties: {
        component: { type: "string", description: "Optional component filter" },
      },
    },
  },
  {
    name: "get_example",
    description: "Get a specific code example",
    inputSchema: {
      type: "object",
      properties: {
        component: { type: "string", description: "Component name" },
        section: { type: "string", description: "Section ID" },
        variant: { type: "string", description: "Example variant (default: 'basic')" },
      },
      required: ["component", "section"],
    },
  },
  {
    name: "get_component_sections",
    description: "Get all available sections for a component",
    inputSchema: {
      type: "object",
      properties: {
        component: { type: "string", description: "Component name" },
      },
      required: ["component"],
    },
  },
  {
    name: "get_component_import",
    description: "Get the import statement for a PrimeVue component",
    inputSchema: {
      type: "object",
      properties: {
        component: { type: "string", description: "Component name" },
      },
      required: ["component"],
    },
  },
  {
    name: "find_components_with_feature",
    description: "Find components supporting a specific feature",
    inputSchema: {
      type: "object",
      properties: {
        feature: { type: "string", description: "Feature to search for" },
      },
      required: ["feature"],
    },
  },
  {
    name: "search_all",
    description: "Search across all components, guides, and props",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Search query" },
      },
      required: ["query"],
    },
  },
  {
    name: "suggest_component",
    description: "Suggest components based on use case",
    inputSchema: {
      type: "object",
      properties: {
        use_case: { type: "string", description: "Description of what you want to build" },
      },
      required: ["use_case"],
    },
  },
  {
    name: "get_form_components",
    description: "Get all PrimeVue form input components",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "get_data_components",
    description: "Get all PrimeVue data display components",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "get_overlay_components",
    description: "Get all PrimeVue overlay/popup components",
    inputSchema: { type: "object", properties: {} },
  },
];

// Tool handlers
function handleTool(name: string, args: Record<string, unknown>, data: ComponentsData): { content: { type: string; text: string }[] } {
  switch (name) {
    case "list_components": {
      const category = args.category as string | undefined;
      const grouped = data.components.reduce((acc, comp) => {
        const cat = extractCategory(comp);
        if (category && cat.toLowerCase() !== category.toLowerCase()) return acc;
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(comp.name);
        return acc;
      }, {} as Record<string, string[]>);
      return { content: [{ type: "text", text: JSON.stringify(grouped, null, 2) }] };
    }

    case "get_component": {
      const component = findComponent(data, args.name as string);
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
      return { content: [{ type: "text", text: JSON.stringify(summary, null, 2) }] };
    }

    case "search_components": {
      const query = (args.query as string).toLowerCase();
      const results = data.components.filter(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          c.description.toLowerCase().includes(query) ||
          c.title.toLowerCase().includes(query)
      );
      return {
        content: [{
          type: "text",
          text: JSON.stringify(results.map((c) => ({ name: c.name, title: c.title, description: c.description })), null, 2),
        }],
      };
    }

    case "get_component_props": {
      const comp = findComponent(data, args.component as string);
      return { content: [{ type: "text", text: JSON.stringify(comp.api.props || [], null, 2) }] };
    }

    case "get_component_events": {
      const comp = findComponent(data, args.component as string);
      return { content: [{ type: "text", text: JSON.stringify(comp.api.emits || [], null, 2) }] };
    }

    case "get_component_slots": {
      const comp = findComponent(data, args.component as string);
      return { content: [{ type: "text", text: JSON.stringify(comp.api.slots || [], null, 2) }] };
    }

    case "get_usage_example": {
      const comp = findComponent(data, args.component as string);
      const examples: { section: string; label: string; examples: Record<string, string> }[] = [];
      comp.sections.forEach((section) => {
        if (section.examples) {
          examples.push({ section: section.id, label: section.label, examples: section.examples });
        }
      });
      return {
        content: [{
          type: "text",
          text: JSON.stringify({
            component: comp.name,
            total_sections_with_examples: examples.length,
            documentation_url: `${BASE_URL}/${comp.name.toLowerCase()}`,
            examples,
          }, null, 2),
        }],
      };
    }

    case "get_component_pt": {
      const comp = findComponent(data, args.component as string);
      const pt = comp.api.pt || [];
      if (pt.length === 0) {
        return { content: [{ type: "text", text: `No Pass Through (PT) options documented for ${comp.name}.` }] };
      }
      return {
        content: [{
          type: "text",
          text: JSON.stringify({ component: comp.name, description: "Pass Through (PT) allows customizing DOM elements", pt_options: pt }, null, 2),
        }],
      };
    }

    case "get_component_tokens": {
      const comp = findComponent(data, args.component as string);
      const tokens = comp.api.tokens || [];
      if (tokens.length === 0) {
        return { content: [{ type: "text", text: `No design tokens documented for ${comp.name}.` }] };
      }
      return {
        content: [{
          type: "text",
          text: JSON.stringify({ component: comp.name, total_tokens: tokens.length, tokens }, null, 2),
        }],
      };
    }

    case "get_component_styles": {
      const comp = findComponent(data, args.component as string);
      const styles = comp.api.styles || [];
      if (styles.length === 0) {
        return { content: [{ type: "text", text: `No CSS classes documented for ${comp.name}.` }] };
      }
      return {
        content: [{
          type: "text",
          text: JSON.stringify({ component: comp.name, total_classes: styles.length, styles }, null, 2),
        }],
      };
    }

    case "find_by_prop": {
      const propName = (args.prop_name as string).toLowerCase();
      const results = data.components.filter((c) =>
        (c.api.props || []).some((p) => p.name.toLowerCase() === propName)
      );
      return { content: [{ type: "text", text: JSON.stringify(results.map((c) => c.name), null, 2) }] };
    }

    case "find_by_event": {
      const eventName = (args.event_name as string).toLowerCase();
      const results = data.components.filter((c) =>
        (c.api.emits || []).some((e) => e.name.toLowerCase() === eventName)
      );
      return { content: [{ type: "text", text: JSON.stringify(results.map((c) => c.name), null, 2) }] };
    }

    case "get_component_url": {
      const comp = findComponent(data, args.component as string);
      return { content: [{ type: "text", text: `${BASE_URL}/${comp.name.toLowerCase()}` }] };
    }

    case "compare_components": {
      const comp1 = findComponent(data, args.component1 as string);
      const comp2 = findComponent(data, args.component2 as string);
      const comparison = {
        component1: { name: comp1.name, props_count: comp1.api.props?.length || 0, events_count: comp1.api.emits?.length || 0, slots_count: comp1.api.slots?.length || 0 },
        component2: { name: comp2.name, props_count: comp2.api.props?.length || 0, events_count: comp2.api.emits?.length || 0, slots_count: comp2.api.slots?.length || 0 },
        common_props: (comp1.api.props || []).filter((p1) => (comp2.api.props || []).some((p2) => p2.name === p1.name)).map((p) => p.name),
      };
      return { content: [{ type: "text", text: JSON.stringify(comparison, null, 2) }] };
    }

    case "get_categories": {
      const categories = [...new Set(data.components.map((c) => extractCategory(c)))];
      return { content: [{ type: "text", text: JSON.stringify(categories, null, 2) }] };
    }

    case "get_version_info": {
      return {
        content: [{
          type: "text",
          text: JSON.stringify({
            framework: "primevue",
            version: data.version,
            generated_at: data.generatedAt,
            components_count: data.components.length,
            pages_count: data.pages?.length || 0,
            vue_compatibility: "Vue 3.x",
          }, null, 2),
        }],
      };
    }

    case "get_installation": {
      const env = ((args.environment as string) || "vite").toLowerCase();
      let guide = `# PrimeVue Installation\n\n`;
      if (env === "nuxt") {
        guide += `## Nuxt 3\n\n\`\`\`bash\nnpm install primevue @primevue/themes\n\`\`\`\n\nAdd to nuxt.config.ts:\n\`\`\`typescript\nexport default defineNuxtConfig({ modules: ['@primevue/nuxt-module'] })\n\`\`\`\n`;
      } else if (env === "cdn") {
        guide += `## CDN\n\n\`\`\`html\n<script src="https://unpkg.com/primevue/core/core.min.js"></script>\n\`\`\`\n`;
      } else {
        guide += `## Vite\n\n\`\`\`bash\nnpm install primevue @primevue/themes\n\`\`\`\n\nSetup in main.ts:\n\`\`\`typescript\nimport { createApp } from 'vue'\nimport PrimeVue from 'primevue/config'\nimport Aura from '@primevue/themes/aura'\n\nconst app = createApp(App)\napp.use(PrimeVue, { theme: { preset: Aura } })\n\`\`\`\n`;
      }
      guide += `\nFor detailed instructions: ${BASE_URL}/installation`;
      return { content: [{ type: "text", text: guide }] };
    }

    case "list_guides": {
      if (!data.pages || data.pages.length === 0) {
        return { content: [{ type: "text", text: "No guides available." }] };
      }
      return {
        content: [{
          type: "text",
          text: JSON.stringify({ total: data.pages.length, guides: data.pages.map((p) => ({ name: p.name, title: p.title, description: p.description })) }, null, 2),
        }],
      };
    }

    case "get_guide": {
      const content = getGuideContent(data, args.name as string, args.section as string | undefined);
      return { content: [{ type: "text", text: content }] };
    }

    case "get_theming_info": {
      const mode = ((args.mode as string) || "styled").toLowerCase();
      let info = `# PrimeVue Theming\n\n`;
      if (mode === "unstyled") {
        info += `## Unstyled Mode\n\nUse unstyled mode for complete control.\n\n\`\`\`typescript\napp.use(PrimeVue, { unstyled: true })\n\`\`\`\n`;
      } else if (mode === "passthrough") {
        info += `## Pass Through (PT)\n\nPT allows fine-grained control over DOM elements.\n\n\`\`\`vue\n<Button :pt="{ root: { class: 'my-class' } }" />\n\`\`\`\n`;
      } else {
        info += `## Styled Mode (Default)\n\nPre-skinned components with design tokens. Presets: Aura, Lara, Nora, Material\n\n\`\`\`typescript\nimport Aura from '@primevue/themes/aura'\napp.use(PrimeVue, { theme: { preset: Aura } })\n\`\`\`\n`;
      }
      info += `\nFor detailed docs: ${BASE_URL}/theming`;
      return { content: [{ type: "text", text: info }] };
    }

    case "list_composables": {
      const composables = [
        { name: "useToast", description: "Programmatically display toast messages", related_component: "Toast" },
        { name: "useConfirm", description: "Programmatically display confirmation dialogs", related_component: "ConfirmDialog" },
        { name: "useDialog", description: "Programmatically create dynamic dialogs", related_component: "DynamicDialog" },
        { name: "useStyle", description: "Inject custom styles", related_component: null },
        { name: "usePrimeVue", description: "Access PrimeVue configuration", related_component: null },
      ];
      return { content: [{ type: "text", text: JSON.stringify({ total: composables.length, composables }, null, 2) }] };
    }

    case "get_composable": {
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
      const normalizedName = (args.name as string).toLowerCase();
      const composable = composables[normalizedName];
      if (!composable) {
        return { content: [{ type: "text", text: `Composable "${args.name}" not found. Available: useToast, useConfirm, useDialog, useStyle, usePrimeVue` }] };
      }
      return { content: [{ type: "text", text: JSON.stringify({ name: args.name, ...composable }, null, 2) }] };
    }

    case "list_examples": {
      const componentFilter = args.component as string | undefined;
      const examples: { component: string; section: string; label: string; variants: string[] }[] = [];
      const components = componentFilter
        ? data.components.filter((c) => c.name.toLowerCase() === componentFilter.toLowerCase())
        : data.components;
      components.forEach((comp) => {
        comp.sections.forEach((section) => {
          if (section.examples) {
            examples.push({ component: comp.name, section: section.id, label: section.label, variants: Object.keys(section.examples) });
          }
        });
      });
      return { content: [{ type: "text", text: JSON.stringify({ total: examples.length, filter: componentFilter || "all", examples }, null, 2) }] };
    }

    case "get_example": {
      const comp = findComponent(data, args.component as string);
      const sectionData = comp.sections.find((s) => s.id.toLowerCase() === (args.section as string).toLowerCase());
      if (!sectionData) {
        return { content: [{ type: "text", text: `Section "${args.section}" not found for ${comp.name}. Available: ${comp.sections.map((s) => s.id).join(", ")}` }] };
      }
      if (!sectionData.examples) {
        return { content: [{ type: "text", text: `No code examples for ${comp.name} > ${sectionData.label}` }] };
      }
      const variant = (args.variant as string) || "basic";
      const code = sectionData.examples[variant];
      if (!code) {
        return { content: [{ type: "text", text: `Variant "${variant}" not found. Available: ${Object.keys(sectionData.examples).join(", ")}` }] };
      }
      return {
        content: [{
          type: "text",
          text: JSON.stringify({ component: comp.name, section: sectionData.id, label: sectionData.label, variant, code }, null, 2),
        }],
      };
    }

    case "get_component_sections": {
      const comp = findComponent(data, args.component as string);
      const sections = comp.sections.map((s) => ({
        id: s.id,
        label: s.label,
        description: s.description.slice(0, 150) + (s.description.length > 150 ? "..." : ""),
        has_examples: s.examples !== null,
        example_variants: s.examples ? Object.keys(s.examples) : [],
      }));
      return { content: [{ type: "text", text: JSON.stringify({ component: comp.name, total_sections: sections.length, sections }, null, 2) }] };
    }

    case "get_component_import": {
      const comp = findComponent(data, args.component as string);
      const importSection = comp.sections.find((s) => s.id === "import");
      let importCode = "";
      if (importSection?.examples?.basic) {
        importCode = importSection.examples.basic;
      } else {
        const pascalName = comp.name.charAt(0).toUpperCase() + comp.name.slice(1);
        importCode = `import ${pascalName} from 'primevue/${comp.name.toLowerCase()}';`;
      }
      return { content: [{ type: "text", text: `# Import ${comp.title}\n\n\`\`\`javascript\n${importCode}\n\`\`\`\n\n**Documentation:** ${BASE_URL}/${comp.name}` }] };
    }

    case "find_components_with_feature": {
      const feature = (args.feature as string).toLowerCase();
      const matches = data.components.filter((c) =>
        c.sections.some((s) => s.id.toLowerCase().includes(feature) || s.label.toLowerCase().includes(feature))
      );
      if (matches.length === 0) {
        return { content: [{ type: "text", text: `No components found with feature "${args.feature}".` }] };
      }
      const results = matches.map((c) => ({
        component: c.name,
        matching_sections: c.sections.filter((s) => s.id.toLowerCase().includes(feature) || s.label.toLowerCase().includes(feature)).map((s) => s.id),
      }));
      return { content: [{ type: "text", text: JSON.stringify({ feature: args.feature, total_matches: results.length, components: results }, null, 2) }] };
    }

    case "search_all": {
      const query = (args.query as string).toLowerCase();
      const componentMatches = data.components
        .filter((c) => c.name.toLowerCase().includes(query) || c.title.toLowerCase().includes(query) || c.description.toLowerCase().includes(query))
        .slice(0, 5)
        .map((c) => ({ name: c.name, title: c.title, description: c.description.slice(0, 100) }));
      const propMatches: { component: string; prop: string; type: string }[] = [];
      data.components.forEach((c) => {
        c.api.props?.forEach((p) => {
          if (p.name.toLowerCase().includes(query)) {
            propMatches.push({ component: c.name, prop: p.name, type: p.type });
          }
        });
      });
      const guideMatches = (data.pages || [])
        .filter((p) => p.name.toLowerCase().includes(query) || p.title.toLowerCase().includes(query))
        .slice(0, 5)
        .map((p) => ({ name: p.name, title: p.title }));
      return {
        content: [{
          type: "text",
          text: JSON.stringify({ query: args.query, results: { components: componentMatches, props: propMatches.slice(0, 10), guides: guideMatches } }, null, 2),
        }],
      };
    }

    case "suggest_component": {
      const useCase = (args.use_case as string).toLowerCase();
      const keywords: Record<string, string[]> = {
        table: ["datatable", "treetable"], grid: ["datatable", "dataview"], list: ["listbox", "orderlist", "picklist", "dataview"],
        tree: ["tree", "treetable", "treeselect"], form: ["inputtext", "inputnumber", "textarea", "checkbox", "select"],
        input: ["inputtext", "inputnumber", "inputmask", "textarea", "password"], select: ["select", "multiselect", "listbox", "cascadeselect"],
        dropdown: ["select", "multiselect"], date: ["datepicker"], calendar: ["datepicker"], file: ["fileupload"], upload: ["fileupload"],
        image: ["image", "galleria"], gallery: ["galleria", "carousel"], dialog: ["dialog", "confirmdialog", "dynamicdialog"],
        modal: ["dialog", "drawer"], popup: ["popover", "confirmpopup", "tooltip"], drawer: ["drawer"], sidebar: ["drawer"],
        menu: ["menu", "menubar", "megamenu", "tieredmenu", "contextmenu", "panelmenu"], navigation: ["menubar", "breadcrumb", "tabs", "stepper"],
        tab: ["tabs"], step: ["stepper"], wizard: ["stepper"], accordion: ["accordion"], panel: ["panel", "fieldset", "card", "splitter"],
        card: ["card"], button: ["button", "splitbutton", "speeddial"], toggle: ["toggleswitch", "togglebutton", "checkbox"],
        switch: ["toggleswitch"], rating: ["rating"], progress: ["progressbar", "progressspinner"], loading: ["progressspinner", "skeleton"],
        toast: ["toast"], notification: ["toast", "message"], message: ["message", "toast"], chip: ["chip"], avatar: ["avatar"],
        tooltip: ["tooltip"], editor: ["editor"], color: ["colorpicker"], chart: ["chart"], terminal: ["terminal"],
        scroll: ["scrollpanel", "scrolltop", "virtualscroller"], timeline: ["timeline"], divider: ["divider"], splitter: ["splitter"], knob: ["knob"],
      };
      const matchedComponents = new Set<string>();
      Object.entries(keywords).forEach(([keyword, components]) => {
        if (useCase.includes(keyword)) components.forEach((c) => matchedComponents.add(c));
      });
      data.components.forEach((c) => {
        if (c.name.toLowerCase().includes(useCase) || c.description.toLowerCase().includes(useCase)) matchedComponents.add(c.name);
      });
      const suggestions = Array.from(matchedComponents)
        .map((name) => {
          const comp = data.components.find((c) => c.name.toLowerCase() === name.toLowerCase());
          return comp ? { name: comp.name, title: comp.title, description: comp.description, url: `${BASE_URL}/${comp.name.toLowerCase()}` } : null;
        })
        .filter(Boolean)
        .slice(0, 8);
      if (suggestions.length === 0) {
        return { content: [{ type: "text", text: `No specific suggestions for "${args.use_case}". Try list_components or get_form_components.` }] };
      }
      return { content: [{ type: "text", text: JSON.stringify({ use_case: args.use_case, suggestions }, null, 2) }] };
    }

    case "get_form_components": {
      const formComponents = data.components.filter((c) => extractCategory(c) === "Form").map((c) => ({ name: c.name, title: c.title, description: c.description }));
      return { content: [{ type: "text", text: JSON.stringify({ category: "Form Components", total: formComponents.length, components: formComponents }, null, 2) }] };
    }

    case "get_data_components": {
      const dataComponents = data.components.filter((c) => extractCategory(c) === "Data").map((c) => ({ name: c.name, title: c.title, description: c.description }));
      return { content: [{ type: "text", text: JSON.stringify({ category: "Data Components", total: dataComponents.length, components: dataComponents }, null, 2) }] };
    }

    case "get_overlay_components": {
      const overlayComponents = data.components.filter((c) => extractCategory(c) === "Overlay").map((c) => ({ name: c.name, title: c.title, description: c.description }));
      return { content: [{ type: "text", text: JSON.stringify({ category: "Overlay Components", total: overlayComponents.length, components: overlayComponents }, null, 2) }] };
    }

    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}

// Main entry point
async function main() {
  const data = await loadComponentsData();

  const server = new Server(
    { name: "@primevue/mcp", version: "1.0.0" },
    { capabilities: { tools: {} } }
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools }));

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    try {
      return handleTool(name, args || {}, data);
    } catch (error) {
      return { content: [{ type: "text", text: `Error: ${error instanceof Error ? error.message : String(error)}` }] };
    }
  });

  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("PrimeVue MCP Server running on stdio");
}

main().catch(console.error);
