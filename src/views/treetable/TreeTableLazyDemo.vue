<template>
    <div>
        <TreeTableSubMenu />

        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>TreeTable - Lazy</h1>
                <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime paging or sorting. In addition, 
                    children of a node can be loaded on demand at onNodeExpand event as well. Sample belows imitates lazy paging by using an in memory list..</p>
            </div>
        </div>

        <div class="content-section implementation">
            <TreeTable :value="nodes" :lazy="true" :paginator="true" :rows="rows" :loading="loading"
                @node-expand="onExpand" @page="onPage" :totalRecords="totalRecords">
                <Column field="name" header="Name" :expander="true"></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>

        <TreeTableDoc />
    </div>
</template>

<script>
import TreeTableDoc from './TreeTableDoc';
import TreeTableSubMenu from './TreeTableSubMenu';

export default {
    data() {
        return {
            nodes: null,
            rows: 10,
            loading: false,
            totalRecords: 0
        }
    },
    mounted() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false;
            this.nodes = this.loadNodes(0, this.rows);
            this.totalRecords = 1000;
        }, 1000);
    },
    methods: {
        onExpand(node) {
            if (!node.children) {
                this.loading = true;
                
                setTimeout(() => {
                    let lazyNode = {...node};
        
                    lazyNode.children = [
                        {
                            data: { 
                                name: lazyNode.data.name + ' - 0',
                                size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                                type: 'File'
                            },
                        },
                        {
                            data: {
                                name: lazyNode.data.name + ' - 1',
                                size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                                type: 'File'
                            }
                        }
                    ];

                    let nodes = this.nodes.map(n => {
                        if (n.key === node.key) {
                            n = lazyNode;
                        }

                        return n;
                    });

                    this.loading = false;
                    this.nodes = nodes;
                }, 250);
            }
        },
        onPage(event) {
            this.loading = true;

            //imitate delay of a backend call
            setTimeout(() => {    
                this.loading = false;
                this.nodes = this.loadNodes(event.first, this.rows);
            }, 1000);
        },
        loadNodes(first, rows) {
            let nodes = [];

            for(let i = 0; i < rows; i++) {
                let node = {
                    key: (first + i),
                    data: { 
                        name: 'Item ' + (first + i),
                        size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                        type: 'Type ' + (first + i)
                    },
                    leaf: false
                };

                nodes.push(node);
            }
            
            return nodes;
        }
    },
    components: {
        'TreeTableDoc': TreeTableDoc,
        'TreeTableSubMenu': TreeTableSubMenu
    }
}
</script>

<style scoped>
button {
    margin-right: .5em;
}
</style>