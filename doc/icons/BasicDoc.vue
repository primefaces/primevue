<template>
    <DocSectionText v-bind="$attrs">
        <p>PrimeIcons use the <i>pi pi-&#123;icon&#125;</i> syntax such as <i>pi pi-check</i>. A standalone icon can be displayed using an element such as <i>i</i> or <i>span</i></p>
    </DocSectionText>
    <div class="card flex justify-center gap-4">
        <i class="pi pi-check"></i>
        <i class="pi pi-times"></i>
        <span class="pi pi-search"></span>
        <span class="pi pi-user"></span>
    </div>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<i class="pi pi-check"></i>
<i class="pi pi-times"></i>
<span class="pi pi-search"></span>
<span class="pi pi-user"></span>
`
            }
        };
    }
};
</script>
