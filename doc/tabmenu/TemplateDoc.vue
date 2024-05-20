<template>
    <DocSectionText v-bind="$attrs">
        <p>TabMenu offers item customization with the <i>item</i> template that receives the menuitem instance from the model as a parameter.</p>
    </DocSectionText>
    <div class="card">
        <TabMenu :model="items">
            <template #item="{ item, props }">
                <a v-ripple v-bind="props.action" class="flex items-center gap-2">
                    <img :alt="item.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${item.image}`" style="width: 32px" />
                    <span class="font-bold">{{ item.name }}</span>
                </a>
            </template>
        </TabMenu>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [
                { name: 'Amy Elsner', image: 'amyelsner.png' },
                { name: 'Anna Fali', image: 'annafali.png' },
                { name: 'Asiya Javayant', image: 'asiyajavayant.png' }
            ],
            code: {
                basic: `
<TabMenu :model="items">
    <template #item="{ item, props }">
        <a v-ripple v-bind="props.action" class="flex items-center gap-2">
            <img :alt="item.name" :src="\`/images/avatar/\${item.image}\`" style="width: 32px" />
            <span class="font-bold">{{ item.name }}</span>
        </a>
    </template>
</TabMenu>
`,
                options: `
<template>
    <div class="card">
        <TabMenu :model="items">
            <template #item="{ item, props }">
                <a v-ripple v-bind="props.action" class="flex items-center gap-2">
                    <img :alt="item.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${item.image}\`" style="width: 32px" />
                    <span class="font-bold">{{ item.name }}</span>
                </a>
            </template>
        </TabMenu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { name: 'Amy Elsner', image: 'amyelsner.png' },
                { name: 'Anna Fali', image: 'annafali.png' },
                { name: 'Asiya Javayant', image: 'asiyajavayant.png' }
            ]
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <TabMenu :model="items">
            <template #item="{ item, props }">
                <a v-ripple v-bind="props.action" class="flex items-center gap-2">
                    <img :alt="item.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${item.image}\`" style="width: 32px" />
                    <span class="font-bold">{{ item.name }}</span>
                </a>
            </template>
        </TabMenu>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    { name: 'Amy Elsner', image: 'amyelsner.png' },
    { name: 'Anna Fali', image: 'annafali.png' },
    { name: 'Asiya Javayant', image: 'asiyajavayant.png' }
]);
<\/script>
`
            }
        };
    }
};
</script>
