<template>
    <div class="template-configuration-wrapper">
        <div class="template-configuration">
            <div class="template-configuration-screen">
                <div class="template-configuration-screen-top">
                    <div class="template-configuration-screen-top-close template-configuration-screen-top-circle" />
                    <div class="template-configuration-screen-top-minimize template-configuration-screen-top-circle" />
                    <div class="template-configuration-screen-top-zoom template-configuration-screen-top-circle" />
                </div>
                <div class="template-configuration-screen-bottom">
                    <p>&gt; npm install <span class="text-gray-500">or yarn</span></p>
                    <p>&gt; npm run dev <span class="text-gray-500">or yarn dev</span></p>
                    <br />
                    <br />
                    <img class="template-configuration-screen-bottom-logo" src="https://primefaces.org/cdn/primevue/images/templates/vue-3d-logo.png" alt="Vue 3D Logo" />
                </div>
            </div>
            <h3 class="template-configuration-title">{{ title }}</h3>
            <p class="template-configuration-description">{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: null
        },
        description: {
            type: String,
            default: null
        }
    }
};
</script>
