<template>
    <DocSectionText v-bind="$attrs">
        <p>Using Tailwind utilities for the responsive layout of a form with PrimeVue components.</p>
    </DocSectionText>
    <div class="card flex sm:justify-center">
        <div class="flex flex-col gap-6 w-full sm:w-auto">
            <div class="flex flex-col sm:flex-row sm:items-center gap-6">
                <div class="flex-auto">
                    <label for="firstname" class="block font-semibold mb-2">Firstname</label>
                    <InputText id="firstname" class="w-full" />
                </div>
                <div class="flex-auto">
                    <label for="lastname" class="block font-semibold mb-2">Lastname</label>
                    <InputText id="lastname" class="w-full" />
                </div>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-center gap-6">
                <div class="flex-1">
                    <label for="date" class="block font-semibold mb-2">Date</label>
                    <DatePicker inputId="date" class="w-full" />
                </div>
                <div class="flex-1">
                    <label for="country" class="block font-semibold mb-2">Country</label>
                    <Select v-model="selectedCountry" inputId="country" :options="countries" optionLabel="name" placeholder="Select a Country" class="w-full">
                        <template #value="slotProps">
                            <div v-if="slotProps.value" class="flex items-center">
                                <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px" />
                                <div>{{ slotProps.value.name }}</div>
                            </div>
                            <span v-else>
                                {{ slotProps.placeholder }}
                            </span>
                        </template>
                        <template #option="slotProps">
                            <div class="flex items-center">
                                <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />
                                <div>{{ slotProps.option.name }}</div>
                            </div>
                        </template>
                    </Select>
                </div>
            </div>
            <div class="flex-auto">
                <label for="message" class="block font-semibold mb-2">Message</label>
                <Textarea id="message" class="w-full" rows="4" />
            </div>
        </div>
    </div>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            selectedCountry: null,
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
<div class="flex flex-col gap-6 w-full sm:w-auto">
    <div class="flex flex-col sm:flex-row sm:items-center gap-6">
        <div class="flex-auto">
            <label for="firstname" class="block font-semibold mb-2">Firstname</label>
            <InputText id="firstname" class="w-full" />
        </div>
        <div class="flex-auto">
            <label for="lastname" class="block font-semibold mb-2">Lastname</label>
            <InputText id="lastname" class="w-full" />
        </div>
    </div>
    <div class="flex flex-col sm:flex-row sm:items-center gap-6">
        <div class="flex-1">
            <label for="date" class="block font-semibold mb-2">Date</label>
            <DatePicker inputId="date" class="w-full" />
        </div>
        <div class="flex-1">
            <label for="country" class="block font-semibold mb-2">Country</label>
            <Select v-model="selectedCountry" inputId="country" :options="countries" optionLabel="name" placeholder="Select a Country" class="w-full">
                <template #value="slotProps">
                    <div v-if="slotProps.value" class="flex items-center">
                        <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`mr-2 flag flag-\${slotProps.value.code.toLowerCase()}\`" style="width: 18px" />
                        <div>{{ slotProps.value.name }}</div>
                    </div>
                    <span v-else>
                        {{ slotProps.placeholder }}
                    </span>
                </template>
                <template #option="slotProps">
                    <div class="flex items-center">
                        <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`mr-2 flag flag-\${slotProps.option.code.toLowerCase()}\`" style="width: 18px" />
                        <div>{{ slotProps.option.name }}</div>
                    </div>
                </template>
            </Select>
        </div>
    </div>
    <div class="flex-auto">
        <label for="message" class="block font-semibold mb-2">Message</label>
        <Textarea id="message" class="w-full" rows="4" />
    </div>
</div>
`
            }
        };
    }
};
</script>
