<template>
    <DocSectionText v-bind="$attrs">
        <p>Headless mode is enabled by defining a <i>container</i> slot that lets you implement entire UI instead of the default elements. The template receives the following data;</p>
        <ul class="mb-6 leading-relaxed">
            <li>first</li>
            <li>last</li>
            <li>rows</li>
            <li>page</li>
            <li>pageCount</li>
            <li>totalRecords</li>
            <li>firstPageCallback</li>
            <li>lastPageCallback</li>
            <li>prevPageCallback</li>
            <li>nextPageCallback</li>
            <li>rowChangeCallback</li>
        </ul>
    </DocSectionText>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120">
            <template #container="{ first, last, page, pageCount, prevPageCallback, nextPageCallback, totalRecords }">
                <div class="flex items-center gap-4 border border-primary bg-transparent rounded-full w-full py-1 px-2 justify-between">
                    <Button icon="pi pi-chevron-left" rounded variant="text" @click="prevPageCallback" :disabled="page === 0" />
                    <div class="text-color font-medium">
                        <span class="hidden sm:block">Showing {{ first }} to {{ last }} of {{ totalRecords }}</span>
                        <span class="block sm:hidden">Page {{ page + 1 }} of {{ pageCount }}</span>
                    </div>
                    <Button icon="pi pi-chevron-right" rounded variant="text" @click="nextPageCallback" :disabled="page === pageCount - 1" />
                </div>
            </template>
        </Paginator>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Paginator :rows="10" :totalRecords="120">
    <template #container="{ first, last, page, pageCount, prevPageCallback, nextPageCallback, totalRecords }">
        <div class="flex items-center gap-4 border border-primary bg-transparent rounded-full w-full py-1 px-2 justify-between">
            <Button icon="pi pi-chevron-left" rounded variant="text" @click="prevPageCallback" :disabled="page === 0" />
            <div class="text-color font-medium">
                <span class="hidden sm:block">Showing {{ first }} to {{ last }} of {{ totalRecords }}</span>
                <span class="block sm:hidden">Page {{ page + 1 }} of {{ pageCount }}</span>
            </div>
            <Button icon="pi pi-chevron-right" rounded variant="text" @click="nextPageCallback" :disabled="page === pageCount - 1" />
        </div>
    </template>
</Paginator>
`,
                options: `
<template>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120">
            <template #container="{ first, last, page, pageCount, prevPageCallback, nextPageCallback, totalRecords }">
                <div class="flex items-center gap-4 border border-primary bg-transparent rounded-full w-full py-1 px-2 justify-between">
                    <Button icon="pi pi-chevron-left" rounded variant="text" @click="prevPageCallback" :disabled="page === 0" />
                    <div class="text-color font-medium">
                        <span class="hidden sm:block">Showing {{ first }} to {{ last }} of {{ totalRecords }}</span>
                        <span class="block sm:hidden">Page {{ page + 1 }} of {{ pageCount }}</span>
                    </div>
                    <Button icon="pi pi-chevron-right" rounded variant="text" @click="nextPageCallback" :disabled="page === pageCount - 1" />
                </div>
            </template>
        </Paginator>
    </div>
</template>

<script>
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120">
            <template #container="{ first, last, page, pageCount, prevPageCallback, nextPageCallback, totalRecords }">
                <div class="flex items-center gap-4 border border-primary bg-transparent rounded-full w-full py-1 px-2 justify-between">
                    <Button icon="pi pi-chevron-left" rounded variant="text" @click="prevPageCallback" :disabled="page === 0" />
                    <div class="text-color font-medium">
                        <span class="hidden sm:block">Showing {{ first }} to {{ last }} of {{ totalRecords }}</span>
                        <span class="block sm:hidden">Page {{ page + 1 }} of {{ pageCount }}</span>
                    </div>
                    <Button icon="pi pi-chevron-right" rounded variant="text" @click="nextPageCallback" :disabled="page === pageCount - 1" />
                </div>
            </template>
        </Paginator>
    </div>
</template>

<script setup>
<\/script>
`
            }
        };
    }
};
</script>
