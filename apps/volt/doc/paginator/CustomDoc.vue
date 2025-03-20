<template>
    <DocSectionText v-bind="$attrs">
        <p>A customized paginator with an alternative user interface.</p>
    </DocSectionText>
    <div class="card flex flex-col gap-4">
        <Paginator :rows="10" :totalRecords="120">
            <template #container="{ first, rows, page, pageCount, pageLinks, totalRecords, prevPageCallback, nextPageCallback, rowChangeCallback }">
                <div class="flex flex-col sm:flex-row gap-4 items-center border rounded-4xl border-surface py-2 px-4">
                    <Button icon="pi pi-search" rounded pt:root="hidden sm:inline-flex" />
                    <div class="flex grow-1 justify-center items-center gap-2">
                        <SecondaryButton text rounded @click="prevPageCallback" :disabled="page === 0">
                            <template #icon>
                                <AngleLeftIcon />
                            </template>
                        </SecondaryButton>
                        <div class="text-center text-surface-500 dark:text-surface-400">{{ page + 1 }} of {{ pageCount }}</div>
                        <SecondaryButton text rounded @click="nextPageCallback" :disabled="page === pageCount - 1">
                            <template #icon>
                                <AngleRightIcon />
                            </template>
                        </SecondaryButton>
                    </div>
                    <div class="flex gap-2 items-center">
                        <span class="select-none w-32 text-end">{{ first }} - {{ first - 1 + rows }} of {{ totalRecords }}</span>
                        <Select :modelValue="rows" :options="rowsPerPage" optionLabel="name" optionValue="value" pt:label="pe-2" pt:dropdown="w-8" @change="(event) => rowChangeCallback(event.value)" />
                    </div>
                </div>
            </template>
        </Paginator>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup>
import Button from '@/volt/button';
import SecondaryButton from '@/volt/button/secondary';
import Paginator from '@/volt/paginator';
import Select from '@/volt/select';
import AngleLeftIcon from '@primevue/icons/angleleft';
import AngleRightIcon from '@primevue/icons/angleright';
import { ref } from 'vue';

const rowsPerPage = ref([
    { name: '10', value: 10 },
    { name: '20', value: 20 },
    { name: '40', value: 40 }
]);

const code = ref(`
<template>
    <Paginator :rows="10" :totalRecords="120">
        <template #container="{ first, rows, page, pageCount, pageLinks, totalRecords, prevPageCallback, nextPageCallback, rowChangeCallback }">
            <div class="flex flex-col sm:flex-row gap-4 items-center border rounded-4xl border-surface py-2 px-4">
                <Button icon="pi pi-search" rounded pt:root="hidden sm:inline-flex" />
                <div class="flex grow-1 justify-center items-center gap-2">
                    <SecondaryButton text rounded @click="prevPageCallback" :disabled="page === 0">
                        <template #icon>
                            <AngleLeftIcon />
                        </template>
                    </SecondaryButton>
                    <div class="text-center text-surface-500 dark:text-surface-400">{{ page + 1 }} of {{ pageCount }}</div>
                    <SecondaryButton text rounded @click="nextPageCallback" :disabled="page === pageCount - 1">
                        <template #icon>
                            <AngleRightIcon />
                        </template>
                    </SecondaryButton>
                </div>
                <div class="flex gap-2 items-center">
                    <span class="select-none w-32 text-end">{{ first }} - {{ first - 1 + rows }} of {{ totalRecords }}</span>
                    <Select :modelValue="rows" :options="rowsPerPage" optionLabel="name" optionValue="value" pt:label="pe-2" pt:dropdown="w-8" @change="(event) => rowChangeCallback(event.value)" />
                </div>
            </div>
        </template>
    </Paginator>
</template>

<script setup>
import Button from '@/volt/button';
import SecondaryButton from '@/volt/button/secondary';
import Paginator from '@/volt/paginator';
import Select from '@/volt/select';
import AngleLeftIcon from '@primevue/icons/angleleft';
import AngleRightIcon from '@primevue/icons/angleright';
import { ref } from 'vue';

const rowsPerPage = ref([
    { name: '10', value: 10 },
    { name: '20', value: 20 },
    { name: '40', value: 40 }
]);
<\/script>
`);
</script>
