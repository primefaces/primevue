<template>
    <DocSectionText v-bind="$attrs">
        <p>Icon color is defined with the <i>color</i> property which is inherited from parent by default.</p>
    </DocSectionText>
    <div class="card flex justify-center items-center gap-4">
        <i class="pi pi-check" style="color: slateblue"></i>
        <i class="pi pi-times" style="color: green"></i>
        <i class="pi pi-search" style="color: 'var(--p-primary-color)'"></i>
        <i class="pi pi-user" style="color: #708090"></i>
    </div>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<i class="pi pi-check" style="color: slateblue"></i>
<i class="pi pi-times" style="color: green"></i>
<i class="pi pi-search" style="color: 'var(--p-primary-color)'"></i>
<i class="pi pi-user" style="color: #708090"></i>
`
            }
        };
    }
};
</script>
