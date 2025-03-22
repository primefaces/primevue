<template>
    <DocSectionText v-bind="$attrs">
        <p>MultiSelect offers multiple slots for customization through templating.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <MultiSelect v-model="selectedCountries" :options="countries" optionLabel="name" filter placeholder="Select Countries" display="chip" class="w-full md:w-80">
            <template #option="slotProps">
                <div class="flex items-center gap-2">
                    <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
            <template #dropdownicon>
                <i class="pi pi-map" />
            </template>
            <template #filtericon>
                <i class="pi pi-map-marker" />
            </template>
            <template #header>
                <div class="font-medium px-3 py-2">Available Countries</div>
            </template>
            <template #footer>
                <div class="p-3 flex justify-between">
                    <SecondaryButton label="Add New" severity="secondary" text size="small" icon="pi pi-plus" />
                    <DangerButton label="Remove All" severity="danger" text size="small" icon="pi pi-times" />
                </div>
            </template>
        </MultiSelect>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import DangerButton from '@/volt/button/danger';
import SecondaryButton from '@/volt/button/secondary';
import MultiSelect from '@/volt/multiselect';
import { ref } from 'vue';

const selectedCountries = ref(null);
const countries = ref([
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
]);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <MultiSelect v-model="selectedCountries" :options="countries" optionLabel="name" filter placeholder="Select Countries" display="chip" class="w-full md:w-80">
            <template #option="slotProps">
                <div class="flex items-center gap-2">
                    <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()}\`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
            <template #dropdownicon>
                <i class="pi pi-map" />
            </template>
            <template #filtericon>
                <i class="pi pi-map-marker" />
            </template>
            <template #header>
                <div class="font-medium px-3 py-2">Available Countries</div>
            </template>
            <template #footer>
                <div class="p-3 flex justify-between">
                    <SecondaryButton label="Add New" severity="secondary" text size="small" icon="pi pi-plus" />
                    <DangerButton label="Remove All" severity="danger" text size="small" icon="pi pi-times" />
                </div>
            </template>
        </MultiSelect>
    </div>
</template>

<script setup>
import DangerButton from '@/volt/button/danger';
import SecondaryButton from '@/volt/button/secondary';
import MultiSelect from '@/volt/multiselect';
import { ref } from 'vue';

const selectedCountries = ref(null);
const countries = ref([
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
]);
<\/script>
`);
</script>
