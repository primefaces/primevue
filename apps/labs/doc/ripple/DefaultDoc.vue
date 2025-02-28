<template>
    <DocSectionText v-bind="$attrs">
        <p>Ripple is enabled by adding add <i>p-ripple</i> class to the target and attach the directive with the v- prefix.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center gap-4">
        <span
            >Ripple option at the <span class="mx-1 h-8 w-8 rounded-border inline-flex items-center justify-center bg-primary text-primary-contrast"><i class="pi pi-palette"></i></span> configurator needs to be turned on for the demo.</span
        >
        <div v-ripple class="ripple-box">Default</div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<div v-ripple class="ripple-box">Default</div>
`,
                options: `
<template>
    <div class="card flex flex-col items-center gap-4">
        <div v-ripple class="ripple-box">Default</div>
    </div>
</template>

<script>
<\/script>

<style scoped>
.ripple-box {
    display: flex;
    user-select: none;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    font-weight: bold;
    background: var(--p-content-background);
    border: 1px solid var(--p-content-border-color);
    border-radius: var(--p-content-border-radius);
}
<\/style>
`,
                composition: `
<template>
    <div class="card flex flex-col items-center gap-4">
        <div v-ripple class="ripple-box">Default</div>
    </div>
</template>

<script setup>
<\/script>

<style scoped>
.ripple-box {
    display: flex;
    user-select: none;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    font-weight: bold;
    background: var(--p-content-background);
    border: 1px solid var(--p-content-border-color);
    border-radius: var(--p-content-border-radius);
}
<\/style>
`
            }
        };
    }
};
</script>

<style scoped>
.ripple-box {
    display: flex;
    user-select: none;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    font-weight: bold;
    background: var(--p-content-background);
    border: 1px solid var(--p-content-border-color);
    border-radius: var(--p-content-border-radius);
}
</style>
