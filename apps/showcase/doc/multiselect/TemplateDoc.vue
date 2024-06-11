<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Label of an option is used as the display text of an item by default, for custom content support define an <i>option</i> template that gets the option instance as a parameter. In addition <i>value</i>, <i>optiongroup</i>, <i>chip</i>,
            <i>header</i>, <i>footer</i>, <i>emptyfilter</i> and <i>empty</i> slots are provided for further customization.
        </p>
    </DocSectionText>
    <div class="card flex justify-center">
        <MultiSelect v-model="selectedCountries" :options="countries" optionLabel="name" filter placeholder="Select Countries" display="chip" class="w-full md:w-80">
            <template #option="slotProps">
                <div class="flex items-center">
                    <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
            <template #footer>
                <div class="py-2 px-4">
                    <b>{{ selectedCountries ? selectedCountries.length : 0 }}</b> item{{ (selectedCountries ? selectedCountries.length : 0) > 1 ? 's' : '' }} selected.
                </div>
            </template>
        </MultiSelect>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            selectedCountries: null,
            countries: [
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
            ],
            code: {
                basic: `
<MultiSelect v-model="selectedCountries" :options="countries" optionLabel="name" filter placeholder="Select Countries" display="chip" class="w-full md:w-80">
    <template #option="slotProps">
        <div class="flex items-center">
            <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
            <div>{{ slotProps.option.name }}</div>
        </div>
    </template>
    <template #footer>
        <div class="py-2 px-4">
            <b>{{ selectedCountries ? selectedCountries.length : 0 }}</b> item{{ (selectedCountries ? selectedCountries.length : 0) > 1 ? 's' : '' }} selected.
        </div>
    </template>
</MultiSelect>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <MultiSelect v-model="selectedCountries" :options="countries" optionLabel="name" filter placeholder="Select Countries" display="chip" class="w-full md:w-80">
            <template #option="slotProps">
                <div class="flex items-center">
                    <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
            <template #footer>
                <div class="py-2 px-4">
                    <b>{{ selectedCountries ? selectedCountries.length : 0 }}</b> item{{ (selectedCountries ? selectedCountries.length : 0) > 1 ? 's' : '' }} selected.
                </div>
            </template>
        </MultiSelect>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCountries: null,
            countries: [
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
            ]
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <MultiSelect v-model="selectedCountries" :options="countries" optionLabel="name" filter placeholder="Select Countries" display="chip" class="w-full md:w-80">
            <template #option="slotProps">
                <div class="flex items-center">
                    <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
            <template #footer>
                <div class="py-2 px-4">
                    <b>{{ selectedCountries ? selectedCountries.length : 0 }}</b> item{{ (selectedCountries ? selectedCountries.length : 0) > 1 ? 's' : '' }} selected.
                </div>
            </template>
        </MultiSelect>
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCountries = ref();
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
`
            }
        };
    }
};
</script>
