<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card flex justify-content-center align-items-center gap-2">
        <Badge
            value="2"
            :pt="{
                root: 'bg-primary border-round-xl'
            }"
        />
        <i
            v-badge.danger="{
                value: '5+',
                pt: {
                    root: 'bg-primary'
                }
            }"
            class="pi pi-calendar text-4xl"
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
// component
<Badge
    value="2"
    :pt="{
        root: 'bg-primary border-round-xl'
    }"
/>

// directive
<i
    v-badge.danger="{
        value: '5+',
        pt: {
            root: 'bg-primary'
        }
    }"
    class="pi pi-calendar text-4xl"
/>
`,
                options: `
<template>
    <div class="card flex justify-content-center align-items-center gap-2">
        // component
        <Badge
            value="2"
            :pt="{
                root: 'bg-primary border-round-xl'
            }"
        />

        // directive
        <i
            v-badge.danger="{
                value: '5+',
                pt: {
                    root: 'bg-primary'
                }
            }"
            class="pi pi-calendar text-4xl"
        />
    </div>
</template>
`,
                composition: `
<template>
    <div class="card flex justify-content-center align-items-center gap-2">
        // component
        <Badge
            value="2"
            :pt="{
                root: 'bg-primary border-round-xl'
            }"
        />

        // directive
        <i
            v-badge.danger="{
                value: '5+',
                pt: {
                    root: 'bg-primary'
                }
            }"
            class="pi pi-calendar text-4xl"
        />
    </div>
</template>
`
            }
        };
    }
};
</script>
