<template>
    <DocSectionText v-bind="$attrs">
        <p>An InputGroup is created by wrapping the input and add-ons inside an element with a <i>p-inputgroup</i> class where add-ons also should be inside an element with <i>.p-inputgroup-addon</i> class.</p>
    </DocSectionText>
    <div class="card flex flex-column md:flex-row gap-3">
        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">
                <i class="pi pi-user"></i>
            </span>
            <InputText placeholder="Username" />
        </div>

        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">$</span>
            <InputNumber placeholder="Price" />
            <span class="p-inputgroup-addon">.00</span>
        </div>

        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">www</span>
            <InputText placeholder="Website" />
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
<div class="p-inputgroup flex-1">
    <span class="p-inputgroup-addon">
        <i class="pi pi-user"></i>
    </span>
    <InputText placeholder="Username" />
</div>

<div class="p-inputgroup flex-1">
    <span class="p-inputgroup-addon">$</span>
    <InputNumber placeholder="Price" />
    <span class="p-inputgroup-addon">.00</span>
</div>

<div class="p-inputgroup flex-1">
    <span class="p-inputgroup-addon">www</span>
    <InputText placeholder="Website" />
</div>`,
                options: `
<template>
    <div class="card flex flex-column md:flex-row gap-3">
        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">
                <i class="pi pi-user"></i>
            </span>
            <InputText placeholder="Username" />
        </div>

        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">$</span>
            <InputNumber placeholder="Price" />
            <span class="p-inputgroup-addon">.00</span>
        </div>

        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">www</span>
            <InputText placeholder="Website" />
        </div>
    </div>
</template>`,
                composition: `
<template>
    <div class="card flex flex-column md:flex-row gap-3">
        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">
                <i class="pi pi-user"></i>
            </span>
            <InputText placeholder="Username" />
        </div>

        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">$</span>
            <InputNumber placeholder="Price" />
            <span class="p-inputgroup-addon">.00</span>
        </div>

        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">www</span>
            <InputText placeholder="Website" />
        </div>
    </div>
</template>`
            }
        };
    }
};
</script>
