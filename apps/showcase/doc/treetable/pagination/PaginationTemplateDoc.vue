<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Paginator UI is customized using the <i>paginatorTemplate</i> property. Each element can also be customized further with your own UI to replace the default one, refer to the
            <PrimeVueNuxtLink to="/paginator">Paginator</PrimeVueNuxtLink> component for more information about the advanced customization options.
        </p>
    </DocSectionText>
    <DeferredDemo @load="loadDemoData">
        <div class="card">
            <TreeTable
                :value="nodes"
                :paginator="true"
                :rows="5"
                :rowsPerPageOptions="[5, 10, 25, 50]"
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}"
                tableStyle="min-width: 50rem"
            >
                <template #paginatorstart>
                    <Button type="button" icon="pi pi-refresh" text />
                </template>
                <Column field="name" header="Name" expander style="width: 34%"></Column>
                <Column field="size" header="Size" style="width: 33%"></Column>
                <Column field="type" header="Type" style="width: 33%"></Column>
                <template #paginatorend>
                    <Button type="button" icon="pi pi-download" text />
                </template>
            </TreeTable>
        </div>
    </DeferredDemo>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            nodes: null,
            code: {
                basic: `
<TreeTable
    :value="nodes"
    :paginator="true"
    :rows="5"
    :rowsPerPageOptions="[5, 10, 25, 50]"
    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
    currentPageReportTemplate="{first} to {last} of {totalRecords}"
    tableStyle="min-width: 50rem"
>
    <template #paginatorstart>
        <Button type="button" icon="pi pi-refresh" text />
    </template>
    <Column field="name" header="Name" expander style="width: 34%"></Column>
    <Column field="size" header="Size" style="width: 33%"></Column>
    <Column field="type" header="Type" style="width: 33%"></Column>
    <template #paginatorend>
        <Button type="button" icon="pi pi-download" text />
    </template>
</TreeTable>
`,
                options: `
<template>
    <div class="card">
        <TreeTable
            :value="nodes"
            :paginator="true"
            :rows="5"
            :rowsPerPageOptions="[5, 10, 25, 50]"
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="{first} to {last} of {totalRecords}"
            tableStyle="min-width: 50rem"
        >
            <template #paginatorstart>
                <Button type="button" icon="pi pi-refresh" text />
            </template>
            <Column field="name" header="Name" expander style="width: 34%"></Column>
            <Column field="size" header="Size" style="width: 33%"></Column>
            <Column field="type" header="Type" style="width: 33%"></Column>
            <template #paginatorend>
                <Button type="button" icon="pi pi-download" text />
            </template>
        </TreeTable>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nodes: null,
        }
    },
    created() {
        let files = [];

        for (let i = 0; i < 50; i++) {
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
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <TreeTable
            :value="nodes"
            :paginator="true"
            :rows="5"
            :rowsPerPageOptions="[5, 10, 25, 50]"
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="{first} to {last} of {totalRecords}"
            tableStyle="min-width: 50rem"
        >
            <template #paginatorstart>
                <Button type="button" icon="pi pi-refresh" text />
            </template>
            <Column field="name" header="Name" expander style="width: 34%"></Column>
            <Column field="size" header="Size" style="width: 33%"></Column>
            <Column field="type" header="Type" style="width: 33%"></Column>
            <template #paginatorend>
                <Button type="button" icon="pi pi-download" text />
            </template>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const nodes = ref();

let files = [];
for (let i = 0; i < 50; i++) {
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

nodes.value = files;

<\/script>
`
            }
        };
    },
    methods: {
        loadDemoData() {
            let files = [];

            for (let i = 0; i < 50; i++) {
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
};
</script>
