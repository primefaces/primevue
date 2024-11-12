<template>
    <DesignCSCommon />
    <DesignCSFormField />
    <DesignCSOverlay />
    <DesignCSList />
    <DesignCSNavigation />
</template>

<script>
import { computed } from 'vue';

export default {
    props: {
        value: {
            type: Object,
            default: null
        }
    },
    provide() {
        return {
            $colorScheme: computed(() => this.value)
        };
    }
};
</script>
