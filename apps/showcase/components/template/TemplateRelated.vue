<template>
    <div class="px-6 py-6 sm:px-10 sm:py-5 lg:py-20 lg:px-8 rounded-2xl lg:rounded-3xl bg-surface-0 dark:bg-surface-900">
        <h2 class="text-center text-surface-900 dark:text-surface-0 text-3xl lg:text-5xl font-semibold lg:pt-0 pt-6">Related Layouts</h2>
        <div class="flex flex-wrap items-center justify-center w-fit mt-12 mx-auto gap-6 max-w-screen-lg">
            <template v-for="(data, index) in relatedData" :key="index">
                <a :href="data.href" target="_blank" class="flex-1 min-w-60 rounded-2xl border border-surface p-4 xl:p-5 flex ring-0 hover:ring-8 ring-surface-100 dark:ring-surface-800 transition-all">
                    <img class="w-full h-auto rounded-lg" :src="data.src" :alt="'Related Image ' + index" />
                </a>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        relatedData: {
            type: null,
            default: null
        }
    }
};
</script>
