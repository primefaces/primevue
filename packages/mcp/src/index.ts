import { ComponentsData, runPrimeMcpServer } from '@primeuix/mcp';
import ComponentJson from '../data/components.json';
import pkg from '../package.json';

// Vue-specific composables data
const composables = [
    {
        name: 'useToast',
        description: 'Programmatically display toast messages',
        related_component: 'Toast',
        usage: `import { useToast } from 'primevue/usetoast';\nconst toast = useToast();`,
        example: `toast.add({ severity: 'success', summary: 'Success', detail: 'Message', life: 3000 });`
    },
    {
        name: 'useConfirm',
        description: 'Programmatically display confirmation dialogs',
        related_component: 'ConfirmDialog',
        usage: `import { useConfirm } from 'primevue/useconfirm';\nconst confirm = useConfirm();`,
        example: `confirm.require({ message: 'Are you sure?', header: 'Confirm', accept: () => {} });`
    },
    {
        name: 'useDialog',
        description: 'Programmatically create dynamic dialogs',
        related_component: 'DynamicDialog',
        usage: `import { useDialog } from 'primevue/usedialog';\nconst dialog = useDialog();`,
        example: `dialog.open(MyComponent, { props: { header: 'Dialog' } });`
    },
    {
        name: 'useStyle',
        description: 'Inject custom styles',
        related_component: null,
        usage: `import { useStyle } from 'primevue/usestyle';\nuseStyle(css, { name: 'my-styles' });`,
        example: `useStyle('.my-class { color: red; }', { name: 'custom' });`
    },
    {
        name: 'usePrimeVue',
        description: 'Access PrimeVue configuration',
        related_component: null,
        usage: `import { usePrimeVue } from 'primevue/config';\nconst primevue = usePrimeVue();`,
        example: `primevue.config.ripple = true;`
    }
];

// Run PrimeVue MCP server with core + Vue-specific tools
runPrimeMcpServer({
    name: '@primevue/mcp',
    version: pkg.version,
    baseUrl: 'https://primevue.org',
    frameworkName: 'PrimeVue',
    slotKey: 'slots',
    codeLanguage: 'javascript',
    compatibility: 'Vue 3.x',
    loadComponentsData: async () => ComponentJson as ComponentsData,
    customTools: [
        // Vue-specific: list_composables
        {
            name: 'list_composables',
            description: 'List all available PrimeVue composables with their descriptions',
            parameters: {},
            handler: async () => {
                return {
                    content: [
                        {
                            type: 'text' as const,
                            text: JSON.stringify(
                                {
                                    total: composables.length,
                                    composables: composables.map((c) => ({
                                        name: c.name,
                                        description: c.description,
                                        related_component: c.related_component
                                    }))
                                },
                                null,
                                2
                            )
                        }
                    ]
                };
            }
        },
        // Vue-specific: get_composable
        {
            name: 'get_composable',
            description: 'Get detailed information about a specific PrimeVue composable',
            parameters: {
                name: {
                    type: 'string',
                    description: "Composable name (e.g., 'useToast', 'useConfirm')",
                    required: true
                }
            },
            handler: async (_data, args) => {
                const nameArg = args?.name as string | undefined;

                if (!nameArg) {
                    return {
                        content: [
                            {
                                type: 'text' as const,
                                text: `Please provide a composable name. Available: ${composables.map((c) => c.name).join(', ')}`
                            }
                        ]
                    };
                }

                const name = nameArg.toLowerCase();
                const composable = composables.find((c) => c.name.toLowerCase() === name);

                if (!composable) {
                    return {
                        content: [
                            {
                                type: 'text' as const,
                                text: `Composable "${nameArg}" not found. Available: ${composables.map((c) => c.name).join(', ')}`
                            }
                        ]
                    };
                }

                return {
                    content: [
                        {
                            type: 'text' as const,
                            text: JSON.stringify(composable, null, 2)
                        }
                    ]
                };
            }
        }
    ]
});
