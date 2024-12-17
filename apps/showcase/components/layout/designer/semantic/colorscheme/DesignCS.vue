<template>
    <div class="flex flex-col gap-3">
        <DesignCSCommon />
        <DesignCSFormField />
        <DesignCSOverlay />
        <DesignCSList />
        <DesignCSNavigation />
    </div>
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
