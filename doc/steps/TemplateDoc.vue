<template>
    <DocSectionText v-bind="$attrs">
        <p>Steps offers item customization with the <i>item</i> template that receives the item instance from the model as a parameter.</p>
    </DocSectionText>
    <div class="card">
        <Steps :model="items" class="custom-steps" :readonly="false">
            <template #item="{ item, active }">
                <span :class="['inline-flex align-items-center justify-content-center align-items-center border-circle border-primary border-1 h-3rem w-3rem z-1 cursor-pointer', { 'bg-primary': active, 'surface-overlay text-primary': !active }]">
                    <i :class="[item.icon, 'text-xl']" />
                </span>
            </template>
        </Steps>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    icon: 'pi pi-user'
                },
                {
                    icon: 'pi pi-calendar'
                },
                {
                    icon: 'pi pi-check'
                }
            ],
            code: {
                basic: `
<Steps :model="items" class="custom-steps" :readonly="false">
    <template #item="{ item, active }">
        <span :class="['inline-flex align-items-center justify-content-center align-items-center border-circle border-primary border-1 h-3rem w-3rem z-1 cursor-pointer', { 'bg-primary': active, 'surface-overlay text-primary': !active }]">
            <i :class="[item.icon, 'text-xl']" />
        </span>
    </template>
</Steps>
`,
                options: `
<template>
    <div class="card">
        <Steps :model="items" class="custom-steps" :readonly="false">
            <template #item="{ item, active }">
                <span :class="['inline-flex align-items-center justify-content-center align-items-center border-circle border-primary border-1 h-3rem w-3rem z-1 cursor-pointer', { 'bg-primary': active, 'surface-overlay text-primary': !active }]">
                    <i :class="[item.icon, 'text-xl']" />
                </span>
            </template>
        </Steps>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    icon: 'pi pi-user'
                },
                {
                    icon: 'pi pi-calendar'
                },
                {
                    icon: 'pi pi-check'
                }
            ]
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Steps :model="items" class="custom-steps" :readonly="false">
            <template #item="{ item, active }">
                <span :class="['inline-flex align-items-center justify-content-center align-items-center border-circle border-primary border-1 h-3rem w-3rem z-1 cursor-pointer', { 'bg-primary': active, 'surface-overlay text-primary': !active }]">
                    <i :class="[item.icon, 'text-xl']" />
                </span>
            </template>
        </Steps>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        icon: 'pi pi-user'
    },
    {
        icon: 'pi pi-calendar'
    },
    {
        icon: 'pi pi-check'
    }
]);

<\/script>
`
            }
        };
    }
};
</script>

<style lang="scss" scoped>
::v-deep(.custom-steps) {
    .p-steps-item:before {
        margin-top: 0;
        border-color: var(--primary-color);
    }
}
</style>
