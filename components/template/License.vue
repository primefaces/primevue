<template>
    <div class="template-license-wrapper">
        <div class="template-license">
            <div class="template-license-cards">
                <template v-for="(detail, index) in license.licenseDetails" :key="index">
                    <div class="template-license-card">
                        <span>{{ detail.title }}</span>
                        <h2>{{ detail.price }}</h2>
                        <div class="template-license-card-included">
                            <template v-for="(txt, i) in detail.included" :key="`text_${i}`">
                                <p>{{ txt }}</p>
                            </template>
                        </div>
                        <a href="https://www.primefaces.org/layouts/licenses" target="_blank">
                            <button>License Details</button>
                        </a>
                    </div>
                </template>
            </div>
            <p class="template-license-description">{{ license.description }}</p>
            <p class="template-license-visit">
                Visit the
                <a :href="license.documentLink" target="_blank"> official documentation </a> for more information.
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
