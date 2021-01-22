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

        <div class="content-section documentation">
            <TabView>
                <TabPanel header="Source">
                    <div class="p-d-flex p-jc-end">
                        <LiveEditor name="TreeTableDemo" :sources="sources" :components="['Column']" />
                    </div>
<pre v-code>
<code><template v-pre>
&lt;TreeTable :value="nodes" :paginator="true" :rows="10"&gt;
    &lt;Column field="name" header="Name" :expander="true"&gt;&lt;/Column&gt;
    &lt;Column field="size" header="Size"&gt;&lt;/Column&gt;
    &lt;Column field="type" header="Type"&gt;&lt;/Column&gt;
&lt;/TreeTable&gt;
</template>
</code></pre>

<pre v-code.script>
<code>
export default {
    data() {
        return {
            nodes: null
        }
    },
    created() {
        let files = [];
        for(let i = 0; i &lt; 50; i++) {
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

</code></pre>
                </TabPanel>
            </TabView>
        </div>
    </div>
</template>

<script>
import LiveEditor from '../liveeditor/LiveEditor';

export default {
    data() {
        return {
            nodes: null,
            sources: {
                'template': {
                    content: `<template>
    <div class="layout-content">
        <div class="content-section implementation">
            <div class="card">
                <TreeTable :value="nodes" :paginator="true" :rows="10">
                    <Column field="name" header="Name" :expander="true"></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
        </div>
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
    },
    components: {
        LiveEditor
    }
}
</script>