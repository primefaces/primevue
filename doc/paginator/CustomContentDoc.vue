<template>
    <DocSectionText v-bind="$attrs">
        <p>There are two templates available named <i>start</i> and <i>end</i> to add custom content to these locations. Both templates get a state object as a slot property to provide the current page, first index and the rows.</p>
    </DocSectionText>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]">
            <template #start="slotProps"> Page: {{ slotProps.state.page }} First: {{ slotProps.state.first }} Rows: {{ slotProps.state.rows }} </template>
            <template #end>
                <Button type="button" icon="pi pi-search" />
            </template>
        </Paginator>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]">
    <template #start="slotProps">
        Page: {{ slotProps.state.page }}
        First: {{ slotProps.state.first }}
        Rows: {{ slotProps.state.rows }}
    </template>
    <template #end>
        <Button type="button" icon="pi pi-search" />
    </template>
</Paginator>
`,
                options: `
<template>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]">
            <template #start="slotProps">
                Page: {{ slotProps.state.page }}
                First: {{ slotProps.state.first }}
                Rows: {{ slotProps.state.rows }}
            </template>
            <template #end>
                <Button type="button" icon="pi pi-search" />
            </template>
        </Paginator>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]">
            <template #start="slotProps">
                Page: {{ slotProps.state.page }}
                First: {{ slotProps.state.first }}
                Rows: {{ slotProps.state.rows }}
            </template>
            <template #end>
                <Button type="button" icon="pi pi-search" />
            </template>
        </Paginator>
    </div>
</template>

<script setup>
<\/script>
`
            }
        };
    }
};
</script>
