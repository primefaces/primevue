<template>
    <DocSectionText v-bind="$attrs">
        <p>Animation classes are defined with the <i>enterClass</i> and <i>leaveClass</i> properties. This example utilizes PrimeFlex animations however any valid CSS animation is supported.</p>
    </DocSectionText>
    <div class="card flex flex-column align-items-center overflow-hidden">
        <div class="flex flex-column align-items-center gap-2">
            <span class="text-xl font-medium">Scroll Down</span>
            <span class="slidedown-icon h-2rem w-2rem bg-primary border-circle inline-flex align-items-center justify-content-center">
                <i class="pi pi-arrow-down" />
            </span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000">
            <span class="text-3xl font-bold">fade-in</span>
        </div>
        <div class="h-30rem"></div>
        <div
            v-animateonscroll="{ enterClass: 'fadeinleft', leaveClass: 'fadeoutleft' }"
            class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out"
        >
            <span class="text-3xl font-bold">fade-left</span>
        </div>
        <div class="h-30rem"></div>
        <div
            v-animateonscroll="{ enterClass: 'fadeinright', leaveClass: 'fadeoutright' }"
            class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out"
        >
            <span class="text-3xl font-bold">fade-right</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'zoomin', leaveClass: 'fadeout' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000">
            <span class="text-3xl font-bold">zoom</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'flipleft', leaveClass: 'fadeout' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
            <span class="text-3xl font-bold">flip-left</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'flipup', leaveClass: 'fadeout' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
            <span class="text-3xl font-bold">flip-y</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'scalein', leaveClass: 'fadeout' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
            <span class="text-3xl font-bold">scalein</span>
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
<div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000">
    <span class="text-3xl font-bold">fade-in</span>
</div>

<div v-animateonscroll="{ enterClass: 'fadeinleft', leaveClass: 'fadeoutleft' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
    <span class="text-3xl font-bold">fade-left</span>
</div>

<div v-animateonscroll="{ enterClass: 'fadeinright', leaveClass: 'fadeoutright' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
    <span class="text-3xl font-bold">fade-right</span>
</div>

<div v-animateonscroll="{ enterClass: 'zoomin', leaveClass: 'fadeout' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000">
    <span class="text-3xl font-bold">zoom</span>
</div>

<div v-animateonscroll="{ enterClass: 'flipleft', leaveClass: 'fadeout' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
    <span class="text-3xl font-bold">flip-left</span>
</div>

<div v-animateonscroll="{ enterClass: 'flipup', leaveClass: 'fadeout' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
    <span class="text-3xl font-bold">flip-y</span>
</div>

<div v-animateonscroll="{ enterClass: 'scalein', leaveClass: 'fadeout' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
    <span class="text-3xl font-bold">scalein</span>
</div>
`,
                options: `
<template>
    <div class="card flex flex-column align-items-center">
        <div class="flex flex-column align-items-center gap-2">
            <span class="text-xl font-medium">Scroll Down</span>
            <span class="slidedown-icon h-2rem w-2rem bg-primary border-circle inline-flex align-items-center justify-content-center">
                <i class="pi pi-arrow-down" />
            </span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000">
            <span class="text-3xl font-bold">fade-in</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'fadeinleft', leaveClass: 'fadeoutleft' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
            <span class="text-3xl font-bold">fade-left</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'fadeinright', leaveClass: 'fadeoutright' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
            <span class="text-3xl font-bold">fade-right</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'zoomin', leaveClass: 'fadeout' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000">
            <span class="text-3xl font-bold">zoom</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'flipleft', leaveClass: 'fadeout' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
            <span class="text-3xl font-bold">flip-left</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'flipup', leaveClass: 'fadeout' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
            <span class="text-3xl font-bold">flip-y</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'scalein', leaveClass: 'fadeout' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
            <span class="text-3xl font-bold">scalein</span>
        </div>
    </div>
</template>

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

.box {
    background-image: radial-gradient(var(--primary-300), var(--primary-600));
    border-radius: 50% !important;
    color: var(--primary-color-text);
}
</style>
`,
                composition: `
<template>
    <div class="card flex flex-column align-items-center">
        <div class="flex flex-column align-items-center gap-2">
            <span class="text-xl font-medium">Scroll Down</span>
            <span class="slidedown-icon h-2rem w-2rem bg-primary border-circle inline-flex align-items-center justify-content-center">
                <i class="pi pi-arrow-down" />
            </span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000">
            <span class="text-3xl font-bold">fade-in</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'fadeinleft', leaveClass: 'fadeoutleft' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
            <span class="text-3xl font-bold">fade-left</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'fadeinright', leaveClass: 'fadeoutright' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
            <span class="text-3xl font-bold">fade-right</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'zoomin', leaveClass: 'fadeout' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000">
            <span class="text-3xl font-bold">zoom</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'flipleft', leaveClass: 'fadeout' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
            <span class="text-3xl font-bold">flip-left</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'flipup', leaveClass: 'fadeout' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
            <span class="text-3xl font-bold">flip-y</span>
        </div>
        <div class="h-30rem"></div>
        <div v-animateonscroll="{ enterClass: 'scalein', leaveClass: 'fadeout' }" class="flex box shadow-4 justify-content-center align-items-center h-10rem w-10rem sm:h-15rem sm:w-15rem border-round animation-duration-1000 animation-ease-in-out">
            <span class="text-3xl font-bold">scalein</span>
        </div>
    </div>
</template>

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

.box {
    background-image: radial-gradient(var(--primary-300), var(--primary-600));
    border-radius: 50% !important;
    color: var(--primary-color-text);
}
</style>
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

.box {
    background-image: radial-gradient(var(--primary-300), var(--primary-600));
    border-radius: 50% !important;
    color: var(--primary-color-text);
}
</style>
