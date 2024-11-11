<template>
    <DesignCSCommon />
    <DesignCSFormField />
    <DesignCSOverlay />
    <DesignCSList />
    <DesignCSNavigation />
</template>

<script>
export default {
    props: {
        value: {
            type: Object,
            default: null
        }
    },
    provide() {
        return {
            $colorScheme: this.value
        };
    }
};
</script>
