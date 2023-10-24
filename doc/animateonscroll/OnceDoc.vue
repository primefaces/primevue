<template>
    <DocSectionText v-bind="$attrs">
        <p>When <i>once</i> modifiers are added to an AnimateOnScroll, it works only once.</p>
    </DocSectionText>
    <div class="card flex flex-column align-items-center">
        <div v-animateonscroll.once="{ enterClass: 'flip', leaveClass: 'fadeoutleft' }" class="flex justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-out">
            <span class="text-900 text-3xl font-bold">flip</span>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<div class="card flex flex-column align-items-center">
    <div v-animateonscroll.once="{ enterClass: 'flip', leaveClass: 'fadeoutleft' }" class="flex justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-out">
        <span class="text-900 text-3xl font-bold">flip</span>
    </div>
</div>
`,
                options: `
<template>
    <div class="card flex flex-column align-items-center">
        <div v-animateonscroll.once="{ enterClass: 'flip', leaveClass: 'fadeoutleft' }" class="flex justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-out">
            <span class="text-900 text-3xl font-bold">flip</span>
        </div>
    </div>
</template>
`,
                composition: `
<template>
    <div class="card flex flex-column align-items-center">
        <div v-animateonscroll.once="{ enterClass: 'flip', leaveClass: 'fadeoutleft' }" class="flex justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-out">
            <span class="text-900 text-3xl font-bold">flip</span>
        </div>
    </div>
</template>`
            }
        };
    }
};
</script>
