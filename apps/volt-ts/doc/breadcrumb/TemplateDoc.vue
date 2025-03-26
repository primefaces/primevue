<template>
    <DocSectionText v-bind="$attrs">
        <p>Custom content can be placed inside the items using the <i>item</i> template. The divider between the items has its own <i>separator</i> template.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Breadcrumb :home="home" :model="items">
            <template #item="{ item }">
                <a class="cursor-pointer text-primary hover:text-color" :href="item.url">
                    <span :class="item.icon"></span>
                </a>
            </template>
            <template #separator>
                <span class="text-primary">/</span>
            </template>
        </Breadcrumb>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Breadcrumb from '@/volt/Breadcrumb.vue';
import { ref } from 'vue';

const home = ref({ icon: 'pi pi-home' });
const items = ref([{ icon: 'pi pi-sitemap' }, { icon: 'pi pi-book' }, { icon: 'pi pi-wallet' }, { icon: 'pi pi-shopping-bag' }, { icon: 'pi pi-calculator' }]);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Breadcrumb :home="home" :model="items">
            <template #item="{ item }">
                <a class="cursor-pointer text-primary hover:text-color" :href="item.url">
                    <span :class="item.icon"></span>
                </a>
            </template>
            <template #separator>
                <span class="text-primary">/</span>
            </template>
        </Breadcrumb>
    </div>
</template>

<script setup lang="ts">
import Breadcrumb from '@/volt/Breadcrumb.vue';
import { ref } from 'vue';

const home = ref({ icon: 'pi pi-home' });
const items = ref([{ icon: 'pi pi-sitemap' }, { icon: 'pi pi-book' }, { icon: 'pi pi-wallet' }, { icon: 'pi pi-shopping-bag' }, { icon: 'pi pi-calculator' }]);
<\/script>
`);
</script>
