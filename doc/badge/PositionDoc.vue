<template>
    <DocSectionText v-bind="$attrs">
        <p>A Badge can be positioned at the top right corner of an element by adding <i>p-overlay-badge</i> style class to the element and embedding the badge inside.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-content-center gap-4">
        <i v-badge="2" class="pi pi-bell" style="font-size: 2rem" />
        <i v-badge.danger="'5+'" class="pi pi-calendar" style="font-size: 2rem" />
        <i v-badge.danger class="pi pi-envelope" style="font-size: 2rem" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<i v-badge="2" class="pi pi-bell" style="font-size: 2rem" />
<i v-badge.danger="'5+'" class="pi pi-calendar" style="font-size: 2rem" />
<i v-badge.danger class="pi pi-envelope" style="font-size: 2rem" />
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-content-center gap-4">
        <i v-badge="2" class="pi pi-bell" style="font-size: 2rem" />
        <i v-badge.danger="'5+'" class="pi pi-calendar" style="font-size: 2rem" />
        <i v-badge.danger class="pi pi-envelope" style="font-size: 2rem" />
    </div>
</template>

<script>

<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-content-center gap-4">
        <i v-badge="2" class="pi pi-bell" style="font-size: 2rem" />
        <i v-badge.danger="'5+'" class="pi pi-calendar" style="font-size: 2rem" />
        <i v-badge.danger class="pi pi-envelope" style="font-size: 2rem" />
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
