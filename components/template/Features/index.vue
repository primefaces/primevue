<template>
    <div class="template-features">
        <div v-if="displayType === 'vertical'" class="template-features-vertical-wrapper">
            <div class="template-features-vertical">
                <div class="template-features-vertical-col">
                    <template v-for="(data, j) of featuresData.slice(0, Math.ceil(featuresData.length / 2))" :key="j">
                        <div class="template-features-vertical-card">
                            <div class="template-features-vertical-card-image">
                                <img :src="$appState.darkTheme ? data.darkSrc || data.src : data.src" :alt="data.title" />
                            </div>
                            <h2>{{ data.title }}</h2>
                            <p>{{ data.description }}</p>
                        </div>
                    </template>
                </div>
                <div class="template-features-vertical-col">
                    <template v-for="(data, j) of featuresData.slice(Math.ceil(featuresData.length / 2))" :key="j">
                        <div class="template-features-vertical-card">
                            <div class="template-features-vertical-card-image">
                                <img :src="$appState.darkTheme ? data.darkSrc || data.src : data.src" :alt="data.title" />
                            </div>
                            <h2>{{ data.title }}</h2>
                            <p>{{ data.description }}</p>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <div v-else class="template-features-horizontal-wrapper">
            <div class="template-features-horizontal">
                <template v-for="(data, index) in featuresData" :key="index">
                    <div class="template-features-horizontal-card">
                        <div class="template-features-horizontal-card-top">
                            <img :src="$appState.darkTheme ? data.darkSrc || data.src : data.src" :alt="data.title" />
                        </div>
                        <div class="template-features-horizontal-card-bottom">
                            <h5 class="template-features-horizontal-card-bottom-title">{{ data.title }}</h5>
                            <p class="template-features-horizontal-card-bottom-description">{{ data.description }}</p>
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
