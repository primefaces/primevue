<template>
    <div class="p-6 shadow-lg border border-transparent dark:border-surface-800 bg-surface-0 dark:bg-surface-900">
        <div class="flex flex-col gap-4 mb-6">
            <label for="input_name" class="font-medium block text-color">Price Range</label>
            <Slider v-model="priceRange" range />
        </div>

        <div class="flex mb-4 gap-2">
            <div class="flex flex-col gap-2 flex-auto">
                <label for="price_min" class="font-medium block text-color">Min Value</label>
                <InputNumber v-model="minValue" inputId="price-min" mode="currency" currency="USD" locale="en-US" fluid showButtons />
            </div>
            <div class="flex flex-col gap-2 flex-auto">
                <label for="price_max" class="font-medium block text-color">Max Value</label>
                <InputNumber v-model="maxValue" inputId="price-min" mode="currency" currency="USD" locale="en-US" fluid showButtons />
            </div>
        </div>

        <div class="mb-4">
            <span class="block font-medium text-color mb-2">Criterias</span>
            <div class="grid grid-cols-2">
                <ul class="flex flex-col gap-2">
                    <li class="flex items-center gap-2">
                        <Checkbox v-model="criterias" inputId="criteria1" name="criteria" value="Furnished" />
                        <label for="criteria1"> Furnished </label>
                    </li>
                    <li class="flex items-center gap-2">
                        <Checkbox v-model="criterias" inputId="criteria1" name="criteria" value="Detached" />
                        <label for="criteria1"> Detached </label>
                    </li>
                    <li class="flex items-center gap-2">
                        <Checkbox v-model="criterias" inputId="criteria1" name="criteria" value="Balcony" />
                        <label for="criteria1"> Balcony </label>
                    </li>
                    <li class="flex items-center gap-2">
                        <Checkbox v-model="criterias" inputId="criteria1" name="criteria" value="Central" />
                        <label for="criteria1"> Central </label>
                    </li>
                </ul>
                <ul class="flex flex-col gap-2">
                    <li class="flex items-center gap-2">
                        <Checkbox v-model="criterias" inputId="criteria1" name="criteria" value="Garden" />
                        <label for="criteria1"> Garden </label>
                    </li>
                    <li class="flex items-center gap-2">
                        <Checkbox v-model="criterias" inputId="criteria1" name="criteria" value="Pool" />
                        <label for="criteria1"> Pool </label>
                    </li>
                    <li class="flex items-center gap-2">
                        <Checkbox v-model="criterias" inputId="criteria1" name="criteria" value="Security" />
                        <label for="criteria1"> Security </label>
                    </li>
                    <li class="flex items-center gap-2">
                        <Checkbox v-model="criterias" inputId="criteria1" name="criteria" value="Sea View" />
                        <label for="criteria1"> Sea View </label>
                    </li>
                </ul>
            </div>
        </div>

        <div class="flex gap-2 border-t border-surface pt-4">
            <SecondaryButton label="Clear" outlined class="grow" icon="pi pi-refresh" />
            <Button label="Search" class="grow" icon="pi pi-search" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@/volt/Button.vue';
import Checkbox from '@/volt/Checkbox.vue';
import InputNumber from '@/volt/inputnumber';
import SecondaryButton from '@/volt/SecondaryButton';
import Slider from '@/volt/Slider.vue';

const priceRange = ref([20, 80]);
const minValue = ref(1000);
const maxValue = ref(20000);
const criterias = ref(['Pool', 'Furnished', 'Central']);
</script>
