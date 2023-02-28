<template>
    <DocSectionText v-bind="$attrs">
        <p>Default styling of the animation adds a shade of white. This can easily be customized using css that changes the color of <i>p-ink</i> element.</p>
    </DocSectionText>
    <div class="card flex justify-content-center align-items-center gap-2">
        <div v-ripple class="p-ripple card shadow-2 styled-box-green">Green</div>
        <div v-ripple class="p-ripple card shadow-2 styled-box-orange">Orange</div>
        <div v-ripple class="p-ripple card shadow-2 styled-box-purple">Purple</div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<div v-ripple class="p-ripple card shadow-2 styled-box-green">Green</div>
<div v-ripple class="p-ripple card shadow-2 styled-box-orange">Orange</div>
<div v-ripple class="p-ripple card shadow-2 styled-box-purple">Purple</div>`,
                options: `
<template>
    <div class="flex justify-content-center align-items-center">
        <div v-ripple class="p-ripple card shadow-2 styled-box-green">Green</div>
        <div v-ripple class="p-ripple card shadow-2 styled-box-orange">Orange</div>
        <div v-ripple class="p-ripple card shadow-2 styled-box-purple">Purple</div>
    </div>
</template>

<script>
<\/script>

<style scoped>
::v-deep(.styled-box-green .p-ink) {
    background: rgba(75, 175, 80, 0.3);
}
::v-deep(.styled-box-orange .p-ink) {
    background: rgba(255, 193, 6, 0.3);
}

::v-deep(.styled-box-purple .p-ink) {
    background: rgba(156, 39, 176, 0.3);
}
</style>`,
                composition: `
<template>
    <div class="flex justify-content-center align-items-center">
        <div v-ripple class="p-ripple card shadow-2 styled-box-green">Green</div>
        <div v-ripple class="p-ripple card shadow-2 styled-box-orange">Orange</div>
        <div v-ripple class="p-ripple card shadow-2 styled-box-purple">Purple</div>
    </div>
</template>

<script setup>
<\/script>

<style scoped>
::v-deep(.styled-box-green .p-ink) {
    background: rgba(75, 175, 80, 0.3);
}
::v-deep(.styled-box-orange .p-ink) {
    background: rgba(255, 193, 6, 0.3);
}

::v-deep(.styled-box-purple .p-ink) {
    background: rgba(156, 39, 176, 0.3);
}
</style>`
            }
        };
    }
};
</script>

<style scoped>
::v-deep(.styled-box-green .p-ink) {
    background: rgba(75, 175, 80, 0.3);
}
::v-deep(.styled-box-orange .p-ink) {
    background: rgba(255, 193, 6, 0.3);
}

::v-deep(.styled-box-purple .p-ink) {
    background: rgba(156, 39, 176, 0.3);
}
</style>
