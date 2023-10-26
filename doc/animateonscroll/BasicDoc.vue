<template>
    <DocSectionText v-bind="$attrs">
        <p>Animation classes are defined with the <i>enterClass</i> and <i>leaveClass</i> properties.</p>
    </DocSectionText>
    <div class="card flex flex-column align-items-center">
        <div class="flex flex-column align-items-center gap-2">
            <span class="text-xl font-medium">Scroll Down</span>
            <span class="slidedown-icon h-2rem w-2rem bg-primary border-circle inline-flex align-items-center justify-content-center">
                <i class="pi pi-arrow-down" />
            </span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="flex bg-primary justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000">
            <span class="text-3xl font-bold">fade-in</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'fadeinleft', leaveClass: 'fadeoutleft' }" class="flex bg-primary justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-in-out">
            <span class="text-3xl font-bold">fade-left</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'fadeinright', leaveClass: 'fadeoutright' }" class="flex bg-primary justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-in-out">
            <span class="text-3xl font-bold">fade-right</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'flipleft', leaveClass: 'flipright' }" class="flex bg-primary justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-in-out">
            <span class="text-3xl font-bold">flip</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll.once="{ enterClass: 'scalein' }" class="flex bg-primary justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-in-out">
            <span class="text-3xl font-bold">scale (once)</span>
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
    <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="flex bg-primary justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000">
        <span class="text-3xl font-bold">fade-in</span>
    </div>
    <div class="h-30rem"></div>
    <div v-animateonscroll="{ enterClass: 'fadeinleft', leaveClass: 'fadeoutleft' }" class="flex bg-primary justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-in-out">
        <span class="text-3xl font-bold">fade-left</span>
    </div>
    <div class="h-30rem"></div>
    <div v-animateonscroll="{ enterClass: 'fadeinright', leaveClass: 'fadeoutright' }" class="flex bg-primary justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-in-out">
        <span class="text-3xl font-bold">fade-right</span>
    </div>
    <div class="h-30rem"></div>
    <div v-animateonscroll="{ enterClass: 'flipleft', leaveClass: 'flipright' }" class="flex bg-primary justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-in-out">
        <span class="text-3xl font-bold">flip</span>
    </div>
    <div class="h-30rem"></div>
    <div v-animateonscroll.once="{ enterClass: 'scalein' }" class="flex bg-primary justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-in-out">
        <span class="text-3xl font-bold">scale (once)</span>
    </div>
</div>
`,
                options: `
<template>
    <div class="card flex flex-column align-items-center">
        <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="flex bg-primary justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000">
            <span class="text-3xl font-bold">fade-in</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'fadeinleft', leaveClass: 'fadeoutleft' }" class="flex bg-primary justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-in-out">
            <span class="text-3xl font-bold">fade-left</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'fadeinright', leaveClass: 'fadeoutright' }" class="flex bg-primary justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-in-out">
            <span class="text-3xl font-bold">fade-right</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'flipleft', leaveClass: 'flipright' }" class="flex bg-primary justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-in-out">
            <span class="text-3xl font-bold">flip</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll.once="{ enterClass: 'scalein' }" class="flex bg-primary justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-in-out">
            <span class="text-3xl font-bold">scale (once)</span>
        </div>
    </div>
</template>
`,
                composition: `
<template>
    <div class="card flex flex-column align-items-center">
        <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="flex bg-primary justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000">
            <span class="text-3xl font-bold">fade-in</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'fadeinleft', leaveClass: 'fadeoutleft' }" class="flex bg-primary justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-in-out">
            <span class="text-3xl font-bold">fade-left</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'fadeinright', leaveClass: 'fadeoutright' }" class="flex bg-primary justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-in-out">
            <span class="text-3xl font-bold">fade-right</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'flipleft', leaveClass: 'flipright' }" class="flex bg-primary justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-in-out">
            <span class="text-3xl font-bold">flip</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll.once="{ enterClass: 'scalein' }" class="flex bg-primary justify-content-center align-items-center h-20rem w-20rem border-round shadow-2 animation-duration-1000 animation-ease-in-out">
            <span class="text-3xl font-bold">scale (once)</span>
        </div>
    </div>
</template>
`
            }
        };
    }
};
</script>

<style scoped>
@keyframes slidedown-icon {
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(20px);
    }

    100% {
        transform: translateY(0);
    }
}

.slidedown-icon {
    animation: slidedown-icon;
    animation-duration: 3s;
    animation-iteration-count: infinite;
}
</style>
