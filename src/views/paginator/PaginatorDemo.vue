<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Paginator</h1>
                <p>Paginator is a generic component to display content in paged format.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Basic</h5>
                <Paginator :rows="10" :totalRecords="totalRecords" :rowsPerPageOptions="[10, 20, 30]"></Paginator>

                <h5>Custom Template</h5>
                <Paginator template="PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport" :rows="10" :totalRecords="totalRecords" :rowsPerPageOptions="[10, 20, 30]">
                    <template #PrevPageLink="{ options }">
                        <button type="button" class="p-paginator-prev p-paginator-element p-link" :class="{ 'p-disabled': options.disabled }" :disabled="options.disabled" @click="options.onClick($event)">
                            <span class="p-3">Previous</span>
                        </button>
                    </template>
                    <template #PageLinks="{ options }">
                        <span class="p-paginator-pages">
                            <button
                                v-for="pageLink of options.pageLinks"
                                :key="pageLink"
                                v-ripple
                                :class="['p-paginator-page p-paginator-element p-link', { 'p-highlight': pageLink - 1 === options.page }]"
                                type="button"
                                @click="options.onClick({ value: pageLink })"
                            >
                                {{ setPageLinks(options, pageLink) ? '...' : pageLink }}
                            </button>
                        </span>
                    </template>
                    <template #NextPageLink="{ options }">
                        <button type="button" class="p-paginator-prev p-paginator-element p-link" :class="{ 'p-disabled': options.disabled }" :disabled="options.disabled" @click="options.onClick($event)">
                            <span class="p-3">Next</span>
                        </button>
                    </template>
                    <template #RowsPerPageDropdown="{ options }"> <Dropdown v-model="dropdownValue" :options="dropdownOptions(options)" optionLabel="label" @change="options.onChange($event.value)" /> </template>
                    <template #CurrentPageReport="{ options }">
                        <span class="mx-3"> Go to <InputText v-model="currentPage" size="2" class="ml-1" @keydown="(e) => onPageInputKeyDown(e, options)" /> </span>
                    </template>
                </Paginator>

                <Paginator template="RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink" :rows="10" :totalRecords="totalRecords" :rowsPerPageOptions="[10, 20, 30]" class="justify-content-end my-3">
                    <template #RowsPerPageDropdown="{ options }">
                        <span class="mx-1"> Items per page: </span>
                        <Dropdown v-model="dropdownValue" :options="dropdownOptions(options)" optionLabel="label" @change="options.onChange($event.value)" />
                    </template>
                    <template #CurrentPageReport="{ options }">
                        <span> {{ options.first }} - {{ options.last }} of {{ options.totalRecords }} </span>
                    </template>
                </Paginator>

                <Paginator template="RowsPerPageDropdown PrevPageLink PageLinks NextPageLink CurrentPageReport" :rows="10" :totalRecords="totalRecords" :rowsPerPageOptions="[10, 20, 30]" class="justify-content-start my-3">
                    <template #RowsPerPageDropdown="{ options }">
                        <div class="flex align-items-center">
                            <span class="mr-3"> Items per page:</span>
                            <Slider v-model="sliderValue" :style="{ width: '10rem' }" @change="options.onChange({ value: sliderValue })" :min="10" :max="120" :step="30" />
                        </div>
                    </template>
                    <template #CurrentPageReport="{ options }">
                        <span> {{ options.first }} - {{ options.last }} of {{ options.totalRecords }} </span>
                    </template>
                </Paginator>

                <h5>Left and Right Content</h5>
                <Paginator v-model:first="first" :rows="1" :totalRecords="totalRecords2" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
                    <template #start>
                        <Button type="button" icon="pi pi-refresh" @click="reset()" />
                    </template>
                    <template #end>
                        <Button type="button" icon="pi pi-search" />
                    </template>
                </Paginator>

                <div class="image-gallery">
                    <img :src="'demo/images/nature/' + image + '.jpg'" />
                </div>
            </div>
        </div>

        <PaginatorDoc />
    </div>
</template>

<script>
import PaginatorDoc from './PaginatorDoc';

export default {
    data() {
        return {
            first: 0,
            totalRecords: 120,
            totalRecords2: 12,
            dropdownValue: { label: 10, value: 10 },
            sliderValue: 10,
            currentPage: 1
        };
    },
    methods: {
        onPageInputKeyDown(e, options) {
            if (e.code === 'Enter') {
                options.onChange(parseInt(this.currentPage));
            }
        },
        setPageLinks({ pageLinks, pageCount }, pageLink) {
            return (pageLinks[0] === pageLink || pageLinks[pageLinks.length - 1] === pageLink) && pageLink !== 1 && pageLink !== pageCount;
        },
        reset() {
            this.first = 0;
        },
        dropdownOptions(options) {
            return [
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 30, value: 30 },
                { label: 'All', value: options.totalRecords }
            ];
        }
    },
    computed: {
        image() {
            return 'nature' + (this.first + 1);
        }
    },
    components: {
        PaginatorDoc: PaginatorDoc
    }
};
</script>

<style scoped>
.image-gallery {
    text-align: center;
    padding: 1rem;
}
</style>
