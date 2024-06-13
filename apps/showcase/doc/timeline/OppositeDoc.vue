<template>
    <DocSectionText v-bind="$attrs">
        <p>Additional content at the other side of the line can be provided with the <i>opposite</i> property.</p>
    </DocSectionText>
    <div class="card">
        <Timeline :value="events">
            <template #opposite="slotProps">
                <small class="text-surface-500 dark:text-surface-400">{{ slotProps.item.date }}</small>
            </template>
            <template #content="slotProps">
                {{ slotProps.item.status }}
            </template>
        </Timeline>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            events: [
                { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0' },
                { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
                { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
                { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
            ],
            code: {
                basic: `
<Timeline :value="events">
    <template #opposite="slotProps">
        <small class="text-surface-500 dark:text-surface-400">{{slotProps.item.date}}</small>
    </template>
    <template #content="slotProps">
        {{slotProps.item.status}}
    </template>
</Timeline>
`,
                options: `
<template>
    <div class="card">
        <Timeline :value="events">
            <template #opposite="slotProps">
                <small class="text-surface-500 dark:text-surface-400">{{slotProps.item.date}}</small>
            </template>
            <template #content="slotProps">
                {{slotProps.item.status}}
            </template>
        </Timeline>
    </div>
</template>

<script>
export default {
    data() {
        return {
            events: [
                { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0'},
                { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
                { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
                { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
            ]
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Timeline :value="events">
            <template #opposite="slotProps">
                <small class="text-surface-500 dark:text-surface-400">{{slotProps.item.date}}</small>
            </template>
            <template #content="slotProps">
                {{slotProps.item.status}}
            </template>
        </Timeline>
    </div>
</template>

<script setup>
import { ref } from "vue";

const events = ref([
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0'},
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
]);

<\/script>
`
            }
        };
    }
};
</script>
