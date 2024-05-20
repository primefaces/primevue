<template>
    <DocSectionText v-bind="$attrs">
        <p>Multiple add-ons can be placed inside the same group.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <InputGroup class="w-full md:w-[30rem]">
            <InputGroupAddon>
                <i class="pi pi-clock"></i>
            </InputGroupAddon>
            <InputGroupAddon>
                <i class="pi pi-star-fill"></i>
            </InputGroupAddon>
            <InputNumber placeholder="Price" />
            <InputGroupAddon>$</InputGroupAddon>
            <InputGroupAddon>.00</InputGroupAddon>
        </InputGroup>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<InputGroup class="w-full md:w-[30rem]">
    <InputGroupAddon>
        <i class="pi pi-clock"></i>
    </InputGroupAddon>
    <InputGroupAddon>
        <i class="pi pi-star-fill"></i>
    </InputGroupAddon>
    <InputNumber placeholder="Price" />
    <InputGroupAddon>$</InputGroupAddon>
    <InputGroupAddon>.00</InputGroupAddon>
</InputGroup>
`,
                options: `
<template>
    <div class="card flex justify-center">
        <InputGroup class="w-full md:w-[30rem]">
            <InputGroupAddon>
                <i class="pi pi-clock"></i>
            </InputGroupAddon>
            <InputGroupAddon>
                <i class="pi pi-star-fill"></i>
            </InputGroupAddon>
            <InputNumber placeholder="Price" />
            <InputGroupAddon>$</InputGroupAddon>
            <InputGroupAddon>.00</InputGroupAddon>
        </InputGroup>
    </div>
</template>
`,
                composition: `
<template>
    <div class="card flex justify-center">
        <InputGroup class="w-full md:w-[30rem]">
            <InputGroupAddon>
                <i class="pi pi-clock"></i>
            </InputGroupAddon>
            <InputGroupAddon>
                <i class="pi pi-star-fill"></i>
            </InputGroupAddon>
            <InputNumber placeholder="Price" />
            <InputGroupAddon>$</InputGroupAddon>
            <InputGroupAddon>.00</InputGroupAddon>
        </InputGroup>
    </div>
</template>
`
            }
        };
    }
};
</script>
