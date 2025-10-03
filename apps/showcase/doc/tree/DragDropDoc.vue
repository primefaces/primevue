<template>
    <DocSectionText v-bind="$attrs">
        <p>When using <i>v-model:value</i>, the tree data is automatically updated after drag & drop operations. The component handles all internal state management, making it the recommended approach for most use cases.</p>
        <p>
            Alternatively, you can use <i>:value</i> with the <i>@update-value</i> and <i>@node-drop</i> events to manually control the tree state. The event payload includes <i>updatedValue</i> which contains the new tree structure after the drop
            operation.
        </p>
    </DocSectionText>
    <div class="card">
        <Tree v-model:value="nodes" class="w-full md:w-[30rem]" dragdrop></Tree>
    </div>
    <DocSectionCode :code="code" v-bind="$attrs" />
</template>

<script>
export default {
    data() {
        return {
            nodes: [
                {
                    key: '0',
                    label: '.github',
                    data: '.github folder',
                    icon: 'pi pi-fw pi-folder',
                    children: [
                        {
                            key: '0-0',
                            label: 'workflows',
                            data: 'workflows folder',
                            icon: 'pi pi-fw pi-folder',
                            children: [
                                {
                                    key: '0-0-0',
                                    label: 'node.js.yml',
                                    data: 'node.js.yml file',
                                    icon: 'pi pi-fw pi-file'
                                }
                            ]
                        }
                    ]
                },
                {
                    key: '1',
                    label: '.vscode',
                    data: '.vscode folder',
                    icon: 'pi pi-fw pi-folder',
                    children: [
                        {
                            key: '1-0',
                            label: 'extensions.json',
                            data: 'extensions.json file',
                            icon: 'pi pi-fw pi-file'
                        }
                    ]
                },
                {
                    key: '2',
                    label: 'public',
                    data: 'public folder',
                    icon: 'pi pi-fw pi-folder',
                    children: [
                        {
                            key: '2-0',
                            label: 'vite.svg',
                            data: 'vite.svg file',
                            icon: 'pi pi-fw pi-file'
                        }
                    ]
                },
                {
                    key: '3',
                    label: 'src',
                    data: 'src folder',
                    icon: 'pi pi-fw pi-folder',
                    children: [
                        {
                            key: '3-0',
                            label: 'assets',
                            data: 'assets folder',
                            icon: 'pi pi-fw pi-folder',
                            children: [
                                {
                                    key: '3-0-0',
                                    label: 'vue.svg',
                                    data: 'vue.svg file',
                                    icon: 'pi pi-fw pi-file'
                                }
                            ]
                        },
                        {
                            key: '3-1',
                            label: 'components',
                            data: 'components folder',
                            icon: 'pi pi-fw pi-folder',
                            children: [
                                {
                                    key: '3-1-0',
                                    label: 'HelloWorld.vue',
                                    data: 'HelloWorld.vue file',
                                    icon: 'pi pi-fw pi-file'
                                }
                            ]
                        },
                        {
                            key: '3-2',
                            label: 'App.vue',
                            data: 'App.vue file',
                            icon: 'pi pi-fw pi-file'
                        },
                        {
                            key: '3-3',
                            label: 'main.js',
                            data: 'main.js file',
                            icon: 'pi pi-fw pi-file'
                        },
                        {
                            key: '3-4',
                            label: 'style.css',
                            data: 'style.css file',
                            icon: 'pi pi-fw pi-file'
                        }
                    ]
                },
                {
                    key: '4',
                    label: 'index.html',
                    data: 'index.html file',
                    icon: 'pi pi-fw pi-file'
                },
                {
                    key: '5',
                    label: 'package.json',
                    data: 'package.json file',
                    icon: 'pi pi-fw pi-file'
                },
                {
                    key: '6',
                    label: 'vite.config.js',
                    data: 'vite.config.js file',
                    icon: 'pi pi-fw pi-file'
                }
            ],
            code: {
                basic: `
<Tree :value="nodes" dragdrop></Tree>
`,
                options: `
<template>
    <div class="card">
        <Tree :value="nodes" class="w-full md:w-[30rem]" dragdrop></Tree>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nodes: [
                {
                    key: '0',
                    label: '.github',
                    data: '.github folder',
                    icon: 'pi pi-fw pi-folder',
                    children: [
                        {
                            key: '0-0',
                            label: 'workflows',
                            data: 'workflows folder',
                            icon: 'pi pi-fw pi-folder',
                            children: [
                                {
                                    key: '0-0-0',
                                    label: 'node.js.yml',
                                    data: 'node.js.yml file',
                                    icon: 'pi pi-fw pi-file'
                                }
                            ]
                        }
                    ]
                },
                {
                    key: '1',
                    label: '.vscode',
                    data: '.vscode folder',
                    icon: 'pi pi-fw pi-folder',
                    children: [
                        {
                            key: '1-0',
                            label: 'extensions.json',
                            data: 'extensions.json file',
                            icon: 'pi pi-fw pi-file'
                        }
                    ]
                },
                {
                    key: '2',
                    label: 'public',
                    data: 'public folder',
                    icon: 'pi pi-fw pi-folder',
                    children: [
                        {
                            key: '2-0',
                            label: 'vite.svg',
                            data: 'vite.svg file',
                            icon: 'pi pi-fw pi-file'
                        }
                    ]
                },
                {
                    key: '3',
                    label: 'src',
                    data: 'src folder',
                    icon: 'pi pi-fw pi-folder',
                    children: [
                        {
                            key: '3-0',
                            label: 'assets',
                            data: 'assets folder',
                            icon: 'pi pi-fw pi-folder',
                            children: [
                                {
                                    key: '3-0-0',
                                    label: 'vue.svg',
                                    data: 'vue.svg file',
                                    icon: 'pi pi-fw pi-file'
                                }
                            ]
                        },
                        {
                            key: '3-1',
                            label: 'components',
                            data: 'components folder',
                            icon: 'pi pi-fw pi-folder',
                            children: [
                                {
                                    key: '3-1-0',
                                    label: 'HelloWorld.vue',
                                    data: 'HelloWorld.vue file',
                                    icon: 'pi pi-fw pi-file'
                                }
                            ]
                        },
                        {
                            key: '3-2',
                            label: 'App.vue',
                            data: 'App.vue file',
                            icon: 'pi pi-fw pi-file'
                        },
                        {
                            key: '3-3',
                            label: 'main.js',
                            data: 'main.js file',
                            icon: 'pi pi-fw pi-file'
                        },
                        {
                            key: '3-4',
                            label: 'style.css',
                            data: 'style.css file',
                            icon: 'pi pi-fw pi-file'
                        }
                    ]
                },
                {
                    key: '4',
                    label: 'index.html',
                    data: 'index.html file',
                    icon: 'pi pi-fw pi-file'
                },
                {
                    key: '5',
                    label: 'package.json',
                    data: 'package.json file',
                    icon: 'pi pi-fw pi-file'
                },
                {
                    key: '6',
                    label: 'vite.config.js',
                    data: 'vite.config.js file',
                    icon: 'pi pi-fw pi-file'
                }
            ]
        };
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Tree :value="nodes" class="w-full md:w-[30rem]" dragdrop></Tree>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const nodes = ref([
    {
        key: '0',
        label: '.github',
        data: '.github folder',
        icon: 'pi pi-fw pi-folder',
        children: [
            {
                key: '0-0',
                label: 'workflows',
                data: 'workflows folder',
                icon: 'pi pi-fw pi-folder',
                children: [
                    {
                        key: '0-0-0',
                        label: 'node.js.yml',
                        data: 'node.js.yml file',
                        icon: 'pi pi-fw pi-file'
                    }
                ]
            }
        ]
    },
    {
        key: '1',
        label: '.vscode',
        data: '.vscode folder',
        icon: 'pi pi-fw pi-folder',
        children: [
            {
                key: '1-0',
                label: 'extensions.json',
                data: 'extensions.json file',
                icon: 'pi pi-fw pi-file'
            }
        ]
    },
    {
        key: '2',
        label: 'public',
        data: 'public folder',
        icon: 'pi pi-fw pi-folder',
        children: [
            {
                key: '2-0',
                label: 'vite.svg',
                data: 'vite.svg file',
                icon: 'pi pi-fw pi-file'
            }
        ]
    },
    {
        key: '3',
        label: 'src',
        data: 'src folder',
        icon: 'pi pi-fw pi-folder',
        children: [
            {
                key: '3-0',
                label: 'assets',
                data: 'assets folder',
                icon: 'pi pi-fw pi-folder',
                children: [
                    {
                        key: '3-0-0',
                        label: 'vue.svg',
                        data: 'vue.svg file',
                        icon: 'pi pi-fw pi-file'
                    }
                ]
            },
            {
                key: '3-1',
                label: 'components',
                data: 'components folder',
                icon: 'pi pi-fw pi-folder',
                children: [
                    {
                        key: '3-1-0',
                        label: 'HelloWorld.vue',
                        data: 'HelloWorld.vue file',
                        icon: 'pi pi-fw pi-file'
                    }
                ]
            },
            {
                key: '3-2',
                label: 'App.vue',
                data: 'App.vue file',
                icon: 'pi pi-fw pi-file'
            },
            {
                key: '3-3',
                label: 'main.js',
                data: 'main.js file',
                icon: 'pi pi-fw pi-file'
            },
            {
                key: '3-4',
                label: 'style.css',
                data: 'style.css file',
                icon: 'pi pi-fw pi-file'
            }
        ]
    },
    {
        key: '4',
        label: 'index.html',
        data: 'index.html file',
        icon: 'pi pi-fw pi-file'
    },
    {
        key: '5',
        label: 'package.json',
        data: 'package.json file',
        icon: 'pi pi-fw pi-file'
    },
    {
        key: '6',
        label: 'vite.config.js',
        data: 'vite.config.js file',
        icon: 'pi pi-fw pi-file'
    }
]);
<\/script>
`,
                data: `
[
    {
        key: '0',
        label: '.github',
        data: '.github folder',
        icon: 'pi pi-fw pi-folder',
        children: [
            {
                key: '0-0',
                label: 'workflows',
                data: 'workflows folder',
                icon: 'pi pi-fw pi-folder',
                children: [
                    {
                        key: '0-0-0',
                        label: 'node.js.yml',
                        data: 'node.js.yml file',
                        icon: 'pi pi-fw pi-file'
                    }
                ]
            }
        ]
    },
    {
        key: '1',
        label: '.vscode',
        data: '.vscode folder',
        icon: 'pi pi-fw pi-folder',
        children: [
            {
                key: '1-0',
                label: 'extensions.json',
                data: 'extensions.json file',
                icon: 'pi pi-fw pi-file'
            }
        ]
    },
    {
        key: '2',
        label: 'public',
        data: 'public folder',
        icon: 'pi pi-fw pi-folder',
        children: [
            {
                key: '2-0',
                label: 'vite.svg',
                data: 'vite.svg file',
                icon: 'pi pi-fw pi-file'
            }
        ]
    },
    {
        key: '3',
        label: 'src',
        data: 'src folder',
        icon: 'pi pi-fw pi-folder',
        children: [
            {
                key: '3-0',
                label: 'assets',
                data: 'assets folder',
                icon: 'pi pi-fw pi-folder',
                children: [
                    {
                        key: '3-0-0',
                        label: 'vue.svg',
                        data: 'vue.svg file',
                        icon: 'pi pi-fw pi-file'
                    }
                ]
            },
            {
                key: '3-1',
                label: 'components',
                data: 'components folder',
                icon: 'pi pi-fw pi-folder',
                children: [
                    {
                        key: '3-1-0',
                        label: 'HelloWorld.vue',
                        data: 'HelloWorld.vue file',
                        icon: 'pi pi-fw pi-file'
                    }
                ]
            },
            {
                key: '3-2',
                label: 'App.vue',
                data: 'App.vue file',
                icon: 'pi pi-fw pi-file'
            },
            {
                key: '3-3',
                label: 'main.js',
                data: 'main.js file',
                icon: 'pi pi-fw pi-file'
            },
            {
                key: '3-4',
                label: 'style.css',
                data: 'style.css file',
                icon: 'pi pi-fw pi-file'
            }
        ]
    },
    {
        key: '4',
        label: 'index.html',
        data: 'index.html file',
        icon: 'pi pi-fw pi-file'
    },
    {
        key: '5',
        label: 'package.json',
        data: 'package.json file',
        icon: 'pi pi-fw pi-file'
    },
    {
        key: '6',
        label: 'vite.config.js',
        data: 'vite.config.js file',
        icon: 'pi pi-fw pi-file'
    }
]`
            }
        };
    }
};
</script>
