<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <div class="card">
        <Paginator
            :rows="10"
            :totalRecords="120"
            :pt="{
                pageButton: ({ props, state, context }) => ({
                    class: context.active ? 'bg-primary' : undefined
                })
            }"
        />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Paginator
    :rows="10"
    :totalRecords="120"
    :pt="{
        pageButton: ({ props, state, context }) => ({
            class: context.active ? 'bg-primary' : undefined
        })
    }"
/>
`,
                options: `
<template>
    <div class="card">
        <Paginator
            :rows="10"
            :totalRecords="120"
            :pt="{
                pageButton: ({ props, state, context }) => ({
                    class: context.active ? 'bg-primary' : undefined
                })
            }"
        />
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Paginator
            :rows="10"
            :totalRecords="120"
            :pt="{
                pageButton: ({ props, state, context }) => ({
                    class: context.active ? 'bg-primary' : undefined
                })
            }"
        />
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
