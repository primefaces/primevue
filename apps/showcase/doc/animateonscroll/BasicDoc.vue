<template>
    <DocSectionText v-bind="$attrs">
        <p>Animation classes are defined with the <i>enterClass</i> and <i>leaveClass</i> properties. This example utilizes PrimeFlex animations however any valid CSS animation is supported.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center overflow-hidden">
        <div class="flex flex-col items-center gap-2">
            <span class="text-xl font-medium">Scroll Down</span>
            <span class="slidedown-icon h-8 w-8 bg-primary text-primary-contrast rounded-full inline-flex items-center justify-center">
                <i class="pi pi-arrow-down" />
            </span>
        </div>
        <div class="h-[30rem]"></div>
        <div v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-fadeout' }" class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000">
            <span class="text-3xl font-bold">fade-in</span>
        </div>
        <div class="h-[30rem]"></div>
        <div
            v-animateonscroll="{ enterClass: 'animate-fadeinleft', leaveClass: 'animate-fadeoutleft' }"
            class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000 animate-ease-in-out"
        >
            <span class="text-3xl font-bold">fade-left</span>
        </div>
        <div class="h-[30rem]"></div>
        <div
            v-animateonscroll="{ enterClass: 'animate-fadeinright', leaveClass: 'animate-fadeoutright' }"
            class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000 animate-ease-in-out"
        >
            <span class="text-3xl font-bold">fade-right</span>
        </div>
        <div class="h-[30rem]"></div>
        <div v-animateonscroll="{ enterClass: 'animate-zoomin', leaveClass: 'animate-fadeout' }" class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000">
            <span class="text-3xl font-bold">zoom</span>
        </div>
        <div class="h-[30rem]"></div>
        <div
            v-animateonscroll="{ enterClass: 'animate-flipleft', leaveClass: 'animate-fadeout' }"
            class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000 animate-ease-in-out"
        >
            <span class="text-3xl font-bold">flip-left</span>
        </div>
        <div class="h-[30rem]"></div>
        <div
            v-animateonscroll="{ enterClass: 'animate-flipup', leaveClass: 'animate-fadeout' }"
            class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000 animate-ease-in-out"
        >
            <span class="text-3xl font-bold">flip-y</span>
        </div>
        <div class="h-[30rem]"></div>
        <div
            v-animateonscroll="{ enterClass: 'animate-scalein', leaveClass: 'animate-fadeout' }"
            class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000 animate-ease-in-out"
        >
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
<div v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-fadeout' }" class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000">
    <span class="text-3xl font-bold">fade-in</span>
</div>

<div v-animateonscroll="{ enterClass: 'animate-fadeinleft', leaveClass: 'animate-fadeoutleft' }" class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000 animate-ease-in-out">
    <span class="text-3xl font-bold">fade-left</span>
</div>

<div v-animateonscroll="{ enterClass: 'animate-fadeinright', leaveClass: 'animate-fadeoutright' }" class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000 animate-ease-in-out">
    <span class="text-3xl font-bold">fade-right</span>
</div>

<div v-animateonscroll="{ enterClass: 'animate-zoomin', leaveClass: 'animate-fadeout' }" class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000">
    <span class="text-3xl font-bold">zoom</span>
</div>

<div v-animateonscroll="{ enterClass: 'animate-flipleft', leaveClass: 'animate-fadeout' }" class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000 animate-ease-in-out">
    <span class="text-3xl font-bold">flip-left</span>
</div>

<div v-animateonscroll="{ enterClass: 'animate-flipup', leaveClass: 'animate-fadeout' }" class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000 animate-ease-in-out">
    <span class="text-3xl font-bold">flip-y</span>
</div>

<div v-animateonscroll="{ enterClass: 'animate-scalein', leaveClass: 'animate-fadeout' }" class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000 animate-ease-in-out">
    <span class="text-3xl font-bold">scalein</span>
</div>
`,
                options: `
<template>
    <div class="card flex flex-col items-center">
        <div class="flex flex-col items-center gap-2">
            <span class="text-xl font-medium">Scroll Down</span>
            <span class="slidedown-icon h-8 w-8 bg-primary text-primary-contrast rounded-full inline-flex items-center justify-center">
                <i class="pi pi-arrow-down" />
            </span>
        </div>
        <div class="h-[30rem]"></div>
        <div v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-fadeout' }" class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000">
            <span class="text-3xl font-bold">fade-in</span>
        </div>
        <div class="h-[30rem]"></div>
        <div v-animateonscroll="{ enterClass: 'animate-fadeinleft', leaveClass: 'animate-fadeoutleft' }" class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000 animate-ease-in-out">
            <span class="text-3xl font-bold">fade-left</span>
        </div>
        <div class="h-[30rem]"></div>
        <div v-animateonscroll="{ enterClass: 'animate-fadeinright', leaveClass: 'animate-fadeoutright' }" class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000 animate-ease-in-out">
            <span class="text-3xl font-bold">fade-right</span>
        </div>
        <div class="h-[30rem]"></div>
        <div v-animateonscroll="{ enterClass: 'animate-zoomin', leaveClass: 'animate-fadeout' }" class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000">
            <span class="text-3xl font-bold">zoom</span>
        </div>
        <div class="h-[30rem]"></div>
        <div v-animateonscroll="{ enterClass: 'animate-flipleft', leaveClass: 'animate-fadeout' }" class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000 animate-ease-in-out">
            <span class="text-3xl font-bold">flip-left</span>
        </div>
        <div class="h-[30rem]"></div>
        <div v-animateonscroll="{ enterClass: 'animate-flipup', leaveClass: 'animate-fadeout' }" class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000 animate-ease-in-out">
            <span class="text-3xl font-bold">flip-y</span>
        </div>
        <div class="h-[30rem]"></div>
        <div v-animateonscroll="{ enterClass: 'animate-scalein', leaveClass: 'animate-fadeout' }" class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000 animate-ease-in-out">
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
</style>
`,
                composition: `
<template>
    <div class="card flex flex-col items-center">
        <div class="flex flex-col items-center gap-2">
            <span class="text-xl font-medium">Scroll Down</span>
            <span class="slidedown-icon h-8 w-8 bg-primary text-primary-contrast rounded-full inline-flex items-center justify-center">
                <i class="pi pi-arrow-down" />
            </span>
        </div>
        <div class="h-[30rem]"></div>
        <div v-animateonscroll="{ enterClass: 'animate-fadein', leaveClass: 'animate-fadeout' }" class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000">
            <span class="text-3xl font-bold">fade-in</span>
        </div>
        <div class="h-[30rem]"></div>
        <div v-animateonscroll="{ enterClass: 'animate-fadeinleft', leaveClass: 'animate-fadeoutleft' }" class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000 animate-ease-in-out">
            <span class="text-3xl font-bold">fade-left</span>
        </div>
        <div class="h-[30rem]"></div>
        <div v-animateonscroll="{ enterClass: 'animate-fadeinright', leaveClass: 'animate-fadeoutright' }" class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000 animate-ease-in-out">
            <span class="text-3xl font-bold">fade-right</span>
        </div>
        <div class="h-[30rem]"></div>
        <div v-animateonscroll="{ enterClass: 'animate-zoomin', leaveClass: 'animate-fadeout' }" class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000">
            <span class="text-3xl font-bold">zoom</span>
        </div>
        <div class="h-[30rem]"></div>
        <div v-animateonscroll="{ enterClass: 'animate-flipleft', leaveClass: 'animate-fadeout' }" class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000 animate-ease-in-out">
            <span class="text-3xl font-bold">flip-left</span>
        </div>
        <div class="h-[30rem]"></div>
        <div v-animateonscroll="{ enterClass: 'animate-flipup', leaveClass: 'animate-fadeout' }" class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000 animate-ease-in-out">
            <span class="text-3xl font-bold">flip-y</span>
        </div>
        <div class="h-[30rem]"></div>
        <div v-animateonscroll="{ enterClass: 'animate-scalein', leaveClass: 'animate-fadeout' }" class="flex bg-primary text-primary-contrast shadow-lg justify-center items-center h-40 w-40 sm:h-60 sm:w-60 rounded-2xl animate-duration-1000 animate-ease-in-out">
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
</style>
