<template>
    <div class="px-6 py-6 sm:px-10 sm:py-10 lg:py-20 lg:px-8 rounded-3xl bg-surface-0 dark:bg-surface-900">
        <div class="template-license max-w-3xl mx-auto">
            <div class="flex flex-wrap items-start justify-center gap-6">
                <template v-for="(detail, index) in license.licenseDetails" :key="index">
                    <div class="flex-1 border border-surface rounded-xl lg:rounded-2xl p-6 min-w-80">
                        <span class="text-surface-600 dark:text-surface-400 font-semibold">{{ detail.title }}</span>
                        <div class="text-surface-900 dark:text-surface-0 text-4xl font-semibold mt-4 mb-5">
                            <span :class="{ 'text-muted-color line-through mr-4': license.showDiscount }">{{ detail.price }}</span>
                            <span v-if="license.showDiscount">{{ detail.discount }}</span>
                        </div>
                        <div class="flex flex-col gap-2 mb-5">
                            <template v-for="(txt, i) in detail.included" :key="`text_${i}`">
                                <p class="text-muted-color m-0">{{ txt }}</p>
                            </template>
                        </div>
                        <a href="https://www.primefaces.org/layouts/licenses" target="_blank">
                            <Button label="License Details" severity="contrast" class="w-full" />
                        </a>
                    </div>
                </template>
            </div>
            <p class="text-muted-color text-center mt-6 mb-0">{{ license.description }}</p>
            <p class="text-muted-color text-center mt-6 mb-0">
                Visit the
                <a :href="license.documentLink" target="_blank" class="text-primary cursor-pointer transition-all hover:underline"> official documentation </a> for more information.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        license: {
            type: null,
            default: null
        }
    }
};
</script>
