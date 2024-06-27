<template>
    <div class="px-6 py-6 sm:px-10 sm:py-5 lg:py-20 lg:px-8 rounded-3xl bg-surface-0 dark:bg-surface-900">
        <div v-animateonscroll.once="{ enterClass: 'animate-fadein' }" class="p-6 md:p-8 rounded-2xl lg:rounded-3xl border border-surface max-w-3xl w-full mx-auto animate-duration-500">
            <div class="rounded-lg lg:rounded-xl border border-surface overflow-hidden">
                <div class="py-1 px-6 h-14 flex items-center gap-2">
                    <div v-for="(c, i) of ['#ED6B5D', '#F4BE50', '#61C554']" :key="i" class="w-3 h-3 rounded-full" :style="{ background: c }" />
                </div>
                <div class="p-6 bg-surface-900 dark:bg-surface-800 flex flex-col gap-4 relative">
                    <p class="m-0 text-surface-0 text-xs sm:text-sm">&gt; npm install <span class="text-gray-500">or yarn</span></p>
                    <p class="m-0 text-surface-0 text-xs sm:text-sm">&gt; npm run dev <span class="text-gray-500">or yarn dev</span></p>
                    <br />
                    <br />
                    <img class="w-28 lg:w-32 h-28 lg:h-32 absolute right-6 bottom-4" src="https://primefaces.org/cdn/primevue/images/templates/vue-3d-logo.png" alt="Vue 3D Logo" />
                </div>
            </div>
            <h3 class="text-lg lg:text-2xl text-surface-900 dark:text-surface-0 font-bold">{{ configurationData.title }}</h3>
            <p class="text-sm lg:text-base text-surface-600 dark:text-surface-400 mt-3 mb-0">{{ configurationData.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        configurationData: {
            type: null,
            default: null
        }
    }
};
</script>
