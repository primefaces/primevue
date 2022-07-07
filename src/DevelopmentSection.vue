<template>
    <p v-if="isProduction">This section is under development. After the necessary tests and improvements are made, it will be shared with the users as soon as possible.</p>
    <slot v-else />
</template>

<script>
    export default {
        data() {
            return {
                isProduction: null
            }
        },
        mounted() {
            this.isProduction = process.env.NODE_ENV === 'production';
        }
    }
</script>
