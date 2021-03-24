<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable <span>Paginator</span></h1>
               <p>Pagination is enabled by setting paginator property to true and defining the rows attribute as the number of root level nodes per page.</p>
            </div>
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

        <AppDoc name="TreeTablePaginatorDemo" :sources="sources" :service="['NodeService']" :data="['treetablenodes']" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            nodes: null,
            sources: {
                'options-api': {
                    tabName: 'Source',
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
                    tabName: 'Composition API',
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