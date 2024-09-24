<template>
    <DocPTViewer :docs="docs">
        <Listbox v-model="selectedCity" filter checkmark :highlightOnSelect="false" :options="groupedCities" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" class="w-full md:w-56" listStyle="max-height:250px">
            <template #optiongroup="slotProps">
                <div class="flex items-center">
                    <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`" style="width: 18px" />
                    <div>{{ slotProps.option.label }}</div>
                </div>
            </template>
        </Listbox>
    </DocPTViewer>
</template>

<script>
import { getPTOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            selectedCity: null,
            groupedCities: [
                {
                    label: 'Germany',
                    code: 'DE',
                    items: [
                        { label: 'Berlin', value: 'Berlin' },
                        { label: 'Frankfurt', value: 'Frankfurt' },
                        { label: 'Hamburg', value: 'Hamburg' },
                        { label: 'Munich', value: 'Munich' }
                    ]
                },
                {
                    label: 'USA',
                    code: 'US',
                    items: [
                        { label: 'Chicago', value: 'Chicago' },
                        { label: 'Los Angeles', value: 'Los Angeles' },
                        { label: 'New York', value: 'New York' },
                        { label: 'San Francisco', value: 'San Francisco' }
                    ]
                },
                {
                    label: 'Japan',
                    code: 'JP',
                    items: [
                        { label: 'Kyoto', value: 'Kyoto' },
                        { label: 'Osaka', value: 'Osaka' },
                        { label: 'Tokyo', value: 'Tokyo' },
                        { label: 'Yokohama', value: 'Yokohama' }
                    ]
                }
            ],
            docs: [
                {
                    data: getPTOptions('Listbox'),
                    key: 'Listbox'
                }
            ]
        };
    }
};
</script>
