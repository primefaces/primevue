<template>
    <DocSectionText v-bind="$attrs">
        <p>A Badge can be added to any element using the directive.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-6">
        <span v-badge="2">
            <i class="pi pi-bell" style="font-size: 2rem" />
        </span>
        <span v-badge.danger="'5+'">
            <i class="pi pi-calendar" style="font-size: 2rem" />
        </span>
        <span v-badge.danger>
            <i class="pi pi-envelope" style="font-size: 2rem" />
        </span>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<span v-badge="2">
    <i class="pi pi-bell" style="font-size: 2rem" />
</span>
<span v-badge.danger="'5+'">
    <i class="pi pi-calendar" style="font-size: 2rem" />
</span>
<span v-badge.danger>
    <i class="pi pi-envelope" style="font-size: 2rem" />
</span>
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center gap-6">
        <span v-badge="2">
            <i class="pi pi-bell" style="font-size: 2rem" />
        </span>
        <span v-badge.danger="'5+'">
            <i class="pi pi-calendar" style="font-size: 2rem" />
        </span>
        <span v-badge.danger>
            <i class="pi pi-envelope" style="font-size: 2rem" />
        </span>
    </div>
</template>

<script>

<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-center gap-6">
        <span v-badge="2">
            <i class="pi pi-bell" style="font-size: 2rem" />
        </span>
        <span v-badge.danger="'5+'">
            <i class="pi pi-calendar" style="font-size: 2rem" />
        </span>
        <span v-badge.danger>
            <i class="pi pi-envelope" style="font-size: 2rem" />
        </span>
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
