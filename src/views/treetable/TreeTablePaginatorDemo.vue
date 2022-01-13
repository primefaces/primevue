<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable <span>Paginator</span></h1>
                <p>Pagination is enabled by setting paginator property to true and defining the rows attribute as the number of root level nodes per page.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <TreeTable :value="nodes" :paginator="true" :rows="10">
                    <Column field="name" header="Name" :expander="true"></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
        </div>

        <AppDoc name="TreeTablePaginatorDemo" :sources="sources" :service="['NodeService']" :data="['treetablenodes']" github="treetable/TreeTablePaginatorDemo.vue" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            nodes: null,
            sources: {
                'options-api': {
                    tabName: 'Options API Source',
                    content: `
<template>
    <div>
        <TreeTable :value="nodes" :paginator="true" :rows="10">
            <Column field="name" header="Name" :expander="true"></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>                 
</template>

<script>
export default {
    data() {
        return {
            nodes: null
        }
    },
    created() {
        let files = [];
        for(let i = 0; i < 50; i++) {
            let node = {
                key: i,
                data: {
                    name: 'Item ' + i,
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                },
                children: [
                    {
                        key: i + ' - 0',
                        data: {
                            name: 'Item ' + i + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'Type ' + i
                        }
                    }
                ]
            };

            files.push(node);
        }

        this.nodes = files;
    }
}
<\\/script>
`
                },
                'composition-api': {
                    tabName: 'Composition API Source',
                    content: `
<template>
    <div>
        <TreeTable :value="nodes" :paginator="true" :rows="10">
            <Column field="name" header="Name" :expander="true"></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>                 
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        let files = [];
        for(let i = 0; i < 50; i++) {
            let node = {
                key: i,
                data: {
                    name: 'Item ' + i,
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                },
                children: [
                    {
                        key: i + ' - 0',
                        data: {
                            name: 'Item ' + i + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'Type ' + i
                        }
                    }
                ]
            };

            files.push(node);
        }

        const nodes = ref(files);

        return { nodes }
    }
}
<\\/script>
`
                },
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/primevue@^3/treetable/treetable.min.js"><\\/script>
        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>
        <script src="./NodeService.js"><\\/script>`,
                    content: `<div id="app">
            <p-treetable :value="nodes" :paginator="true" :rows="10">
                <p-column field="name" header="Name" :expander="true"></p-column>
                <p-column field="size" header="Size"></p-column>
                <p-column field="type" header="Type"></p-column>
            </p-treetable>
        </div>                 

        <script type="module">
        const { createApp, ref, onMounted } = Vue;

        const App = {
            setup() {
                let files = [];
                for(let i = 0; i < 50; i++) {
                    let node = {
                        key: i,
                        data: {
                            name: 'Item ' + i,
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'Type ' + i
                        },
                        children: [
                            {
                                key: i + ' - 0',
                                data: {
                                    name: 'Item ' + i + ' - 0',
                                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                                    type: 'Type ' + i
                                }
                            }
                        ]
                    };

                    files.push(node);
                }

                const nodes = ref(files);

                return { nodes }
            },
            components: {
                "p-treetable": primevue.treetable,
                "p-column": primevue.column
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>
`
                }
            }
        }
    },
    created() {
        let files = [];
        for(let i = 0; i < 50; i++) {
            let node = {
                key: i,
                data: {
                    name: 'Item ' + i,
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                },
                children: [
                    {
                        key: i + ' - 0',
                        data: {
                            name: 'Item ' + i + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'Type ' + i
                        }
                    }
                ]
            };

            files.push(node);
        }

        this.nodes = files;
    }
}
</script>