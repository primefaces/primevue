<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card">
        <Toolbar :pt="{ root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } } }">
            <template #start>
                <Button label="New" icon="pi pi-plus" class="p-button-help" />
            </template>

            <template #end>
                <Button icon="pi pi-search" class="mr-2" />
                <Button icon="pi pi-times" severity="danger" />
            </template>
        </Toolbar>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<TabView>
    <Toolbar
        :pt="{
            root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } }
        }">
        <template #start>
            <Button label="New" icon="pi pi-plus" class="p-button-help" />
        </template>

        <template #end>
            <Button icon="pi pi-search" class="mr-2" />
            <Button icon="pi pi-times" severity="danger" />
        </template>
    </Toolbar>
</TabView>
`,
                options: `
<template>
    <div class="card">
        <Toolbar
            :pt="{
                root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } }
            }">
            <template #start>
                <Button label="New" icon="pi pi-plus" class="p-button-help" />
            </template>

            <template #end>
                <Button icon="pi pi-search" class="mr-2" />
                <Button icon="pi pi-times" severity="danger" />
            </template>
        </Toolbar>
    </div>
</template>
`,
                composition: `
<template>
    <div class="card">
        <Toolbar
            :pt="{
                root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } }
            }">
            <template #start>
                <Button label="New" icon="pi pi-plus" class="p-button-help" />
            </template>

            <template #end>
                <Button icon="pi pi-search" class="mr-2" />
                <Button icon="pi pi-times" severity="danger" />
            </template>
        </Toolbar>
    </div>
</template>
`
            }
        };
    }
};
</script>
