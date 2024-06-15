<template>
    <div class="template-related-wrapper">
        <div class="template-related">
            <h2 class="template-related-title">Related Layouts</h2>
            <div class="template-related-slide">
                <template v-for="(data, index) in relatedData" :key="index">
                    <a :href="data.href" target="_blank" class="template-related-slide-card">
                        <img :src="data.src" :alt="'Related Image ' + index" />
                    </a>
                </template>
            </div>
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
