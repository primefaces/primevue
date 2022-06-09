<template>
    <div>
        <Button label="Show" @click="onShow" />

        <DynamicDialog v-model:visible="isShow"/>
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
    data() {
        return {
            isShow: false
        }
    },
    methods:{
        onShow() {
            this.$dialog.open({
                component: defineAsyncComponent(() => import('./ProductListDemo.vue')),
                header: 'Dialog Header',
                width: '50%',
                height: '550px'
            });
        }
    }
}
</script>