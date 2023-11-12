<template>
    <DocSectionText v-bind="$attrs"> </DocSectionText>
    <div class="card flex justify-content-center">
        <Skeleton :pt="{ root: { class: 'w-3rem h-3rem' } }" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Skeleton
    :pt="{
        root: { class: 'w-3rem h-3rem' }
    }"
/>
`,
                options: `
<template>
    <Skeleton
        :pt="{
            root: { class: 'w-3rem h-3rem' }
        }"
    />
</template>
`,
                composition: `
<template>
    <Skeleton
        :pt="{
            root: { class: 'w-3rem h-3rem' }
        }"
    />
</template>
`
            }
        };
    }
};
</script>
