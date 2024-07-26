<template>
    <div class="template-features">
        <div v-if="displayType === 'vertical'" class="px-6 py-6 sm:px-10 sm:py-10 lg:py-20 rounded-3xl bg-surface-0 dark:bg-surface-900">
            <div class="mx-auto max-w-3xl flex sm:flex-row flex-col items-start gap-6">
                <div
                    v-for="(_, i) of Array(2).fill(null)"
                    :key="i"
                    class="flex flex-col gap-6 flex-1"
                    :class="{
                        'sm:pt-32': i === 1
                    }"
                >
                    <template v-for="(data, j) of i === 0 ? featuresData.slice(0, Math.ceil(featuresData.length / 2)) : featuresData.slice(featuresData.length / 2)" :key="j">
                        <div v-animateonscroll.once="{ enterClass: 'animate-fadein' }" class="w-full p-4 md:p-5 rounded-2xl border border-surface animate-duration-500">
                            <div class="w-full bg-surface-100 dark:bg-surface-800 rounded-lg overflow-hidden flex">
                                <img class="w-full h-auto rounded-lg" :src="$appState.darkTheme ? data.darkSrc || data.src : data.src" :alt="data.title" />
                            </div>
                            <h2 class="mt-5 mb-0 text-lg text-surface-900 dark:text-surface-0 font-semibold">{{ data.title }}</h2>
                            <p class="mt-2 mb-0 text-muted-color" v-html="data.description"></p>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <div v-else class="px-6 py-6 sm:px-10 sm:py-10 lg:py-20 rounded-3xl bg-surface-0 dark:bg-surface-900">
            <div class="flex flex-wrap justify-center gap-6 mx-auto w-full max-w-5xl">
                <template v-for="(data, index) in featuresData" :key="index">
                    <div v-animateonscroll.once="{ enterClass: 'animate-fadein' }" class="p-5 rounded-2xl border border-surface flex-1 min-w-80 max-w-96 animate-duration-500">
                        <div class="flex w-full mb-5 bg-surface-100 dark:bg-surface-800 overflow-hidden rounded-lg">
                            <img class="w-full" :src="$appState.darkTheme ? data.darkSrc || data.src : data.src" :alt="data.title" />
                        </div>
                        <div>
                            <h5 class="text-surface-900 dark:text-surface-0 font-semibold mb-2 text-lg">{{ data.title }}</h5>
                            <p class="m-0 text-muted-color" v-html="data.description"></p>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        featuresData: {
            type: null,
            default: null
        },
        displayType: {
            type: null,
            default: null
        }
    }
};
</script>
