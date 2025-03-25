<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Customization is the most important value of Volt. Instead of CSS overrides of 3rd party UI libraries or learning design token APIs, the theming is integrated within the component for you to add customizations per your needs e.g. custom
            branding. As example, here are 3 different Select components based on Volt, first one is the
            <a href="https://github.com/primefaces/primevue/blob/master/apps/volt/volt/select/index.vue" target="_blank" rel="noopener noreferrer">default</a>, second one is
            <a href="https://github.com/primefaces/primevue/tree/master/apps/volt/doc/overview/select/compact.vue" target="_blank" rel="noopener noreferrer">compact</a> and third one is quite
            <a href="https://github.com/primefaces/primevue/tree/master/apps/volt/doc/overview/select/fancy.vue" target="_blank" rel="noopener noreferrer">fancy</a>. With Volt, the convenience of Tailwind allows for the creation of custom designs.
            This opens up various possibilities, including the development of a in-house UI library tailored to your organization's needs.
        </p>
    </DocSectionText>
    <div class="card">
        <div class="grid grid-cols-3 gap-4 w-full items-center">
            <Select v-model="member1" :options="members" optionLabel="name" placeholder="Select a User" class="w-full">
                <template #option="slotProps">
                    <div class="flex items-center gap-2">
                        <img :src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.option.image}`" style="width: 24px" />
                        <div>{{ slotProps.option.name }}</div>
                    </div>
                </template>
            </Select>

            <CompactSelect v-model="member2" :options="members" optionLabel="name" placeholder="Select a User" class="w-full">
                <template #option="slotProps">
                    <div class="flex items-center gap-2">
                        <img :src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.option.image}`" style="width: 24px" />
                        <div>{{ slotProps.option.name }}</div>
                    </div>
                </template>
            </CompactSelect>

            <FancySelect v-model="member3" :options="members" optionLabel="name" placeholder="Select a User" class="w-full" checkmark>
                <template #option="slotProps">
                    <div class="flex items-center gap-2">
                        <img :src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.option.image}`" style="width: 24px" />
                        <div>{{ slotProps.option.name }}</div>
                    </div>
                </template>
            </FancySelect>
        </div>
    </div>
</template>

<script setup>
import Select from '@/volt/select';
import { ref } from 'vue';
import CompactSelect from './select/compact.vue';
import FancySelect from './select/fancy.vue';

const member1 = ref(null);
const member2 = ref(null);
const member3 = ref(null);
const members = ref([
    { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' },
    { name: 'Onyama Limba', image: 'onyamalimba.png', email: 'onyama@email.com', role: 'Viewer' }
]);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <InputText v-model="value" />
    </div>
</template>

<script setup>
import InputText from '@/volt/inputtext';
import { ref } from 'vue';

const value = ref(null);
<\/script>
`);
</script>
