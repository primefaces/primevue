<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Nodes can be transferred between multiple trees as well. The <i>draggableScope</i> and <i>droppableScope</i> properties defines keys to restrict the actions between trees. In this example, nodes can only be transferred from start to the
            end.
        </p>
    </DocSectionText>
    <div class="card flex gap-4 flex-wrap">
        <Tree v-model:value="value1" class="flex-auto border rounded-lg" dragdrop draggableScope="first" droppableScope="none">
            <template #empty> No Items Left </template>
        </Tree>
        <Tree v-model:value="value2" class="flex-auto border rounded-lg" dragdrop draggableScope="second" droppableScope="first">
            <template #empty> No Items Left </template>
        </Tree>
        <Tree v-model:value="value3" class="flex-auto border rounded-lg" dragdrop :droppableScope="['first', 'second']" />
    </div>
    <DocSectionCode :code="code" v-bind="$attrs" />
</template>

<script>
export default {
    data() {
        return {
            value1: [
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
            value2: [
                {
                    key: '0',
                    label: '/etc',
                    icon: 'pi pi-fw pi-folder'
                }
            ],
            value3: [
                {
                    key: '0',
                    label: '/var',
                    icon: 'pi pi-fw pi-folder'
                }
            ],
            code: {
                basic: `
<Tree v-model:value="nodes" dragdrop></Tree>
`,
                options: `
<template>
    <div class="card">
        <Tree v-model:value="nodes" class="w-full md:w-[30rem]" dragdrop></Tree>
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
        <Tree v-model:value="nodes" class="w-full md:w-[30rem]" dragdrop></Tree>
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
