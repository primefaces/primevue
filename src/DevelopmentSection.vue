<template>
    <slot v-if="isProduction" />
    <p v-else>This section is under development. After the necessary tests and improvements are made, it will be shared with the users as soon as possible.</p>
</template>

<script>
    export default {
        data() {
            return {
                isProduction: null
            }
        },
        mounted() {
            this.isProduction = process.env.NODE_ENV === 'development';
        }
    }
</script>