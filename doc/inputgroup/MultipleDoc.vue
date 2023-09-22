<template>
    <DocSectionText v-bind="$attrs">
        <p>Multiple add-ons can be placed inside the same group.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <div class="p-inputgroup w-full md:w-30rem">
            <span class="p-inputgroup-addon">
                <i class="pi pi-clock"></i>
            </span>
            <span class="p-inputgroup-addon">
                <i class="pi pi-star-fill"></i>
            </span>
            <InputNumber placeholder="Price" />
            <span class="p-inputgroup-addon">$</span>
            <span class="p-inputgroup-addon">.00</span>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<div class="p-inputgroup w-full md:w-30rem">
    <span class="p-inputgroup-addon">
        <i class="pi pi-clock"></i>
    </span>
    <span class="p-inputgroup-addon">
        <i class="pi pi-star-fill"></i>
    </span>
    <InputNumber placeholder="Price" />
    <span class="p-inputgroup-addon">$</span>
    <span class="p-inputgroup-addon">.00</span>
</div>`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <div class="p-inputgroup w-full md:w-30rem">
            <span class="p-inputgroup-addon">
                <i class="pi pi-clock"></i>
            </span>
            <span class="p-inputgroup-addon">
                <i class="pi pi-star-fill"></i>
            </span>
            <InputNumber placeholder="Price" />
            <span class="p-inputgroup-addon">$</span>
            <span class="p-inputgroup-addon">.00</span>
        </div>
    </div>
</template>`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <div class="p-inputgroup w-full md:w-30rem">
            <span class="p-inputgroup-addon">
                <i class="pi pi-clock"></i>
            </span>
            <span class="p-inputgroup-addon">
                <i class="pi pi-star-fill"></i>
            </span>
            <InputNumber placeholder="Price" />
            <span class="p-inputgroup-addon">$</span>
            <span class="p-inputgroup-addon">.00</span>
        </div>
    </div>
</template>`
            }
        };
    }
};
</script>
