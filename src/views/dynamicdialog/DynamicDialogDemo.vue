<template>
    <div>
        <Button label="Show" @click="onShow" />

        <DynamicDialog v-model:visible="isShow" group="dialog"/>
    </div>
</template>

<script>
import ProductListDemo from './ProductListDemo.vue';

export default {
    data() {
        return {
            isShow: false
        }
    },
    methods:{
        onShow() {
            this.$dialog.open({
                component: ProductListDemo,
                group: 'dialog',
                header: 'Dialog Header',
                width: '50%',
                height: '550px'
            });
        }
    }
}
</script>