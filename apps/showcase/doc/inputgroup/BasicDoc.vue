<template>
    <DocSectionText v-bind="$attrs">
        <p>A group is created by wrapping the input and add-ons with the <i>InputGroup</i> component. Each add-on element is defined as a child of <i>InputGroupAddon</i> component.</p>
    </DocSectionText>
    <div class="card flex flex-col md:flex-row gap-4">
        <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText placeholder="Username" />
        </InputGroup>

        <InputGroup>
            <InputGroupAddon>$</InputGroupAddon>
            <InputNumber placeholder="Price" />
            <InputGroupAddon>.00</InputGroupAddon>
        </InputGroup>

        <InputGroup>
            <InputGroupAddon>www</InputGroupAddon>
            <InputText placeholder="Website" />
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
<InputGroup>
    <InputGroupAddon>
        <i class="pi pi-user"></i>
    </InputGroupAddon>
    <InputText placeholder="Username" />
</InputGroup>

<InputGroup>
    <InputGroupAddon>$</InputGroupAddon>
    <InputNumber placeholder="Price" />
    <InputGroupAddon>.00</InputGroupAddon>
</InputGroup>

<InputGroup>
    <InputGroupAddon>www</InputGroupAddon>
    <InputText placeholder="Website" />
</InputGroup>
`,
                options: `
<template>
    <div class="card flex flex-col md:flex-row gap-4">
        <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText placeholder="Username" />
        </InputGroup>

        <InputGroup>
            <InputGroupAddon>$</InputGroupAddon>
            <InputNumber placeholder="Price" />
            <InputGroupAddon>.00</InputGroupAddon>
        </InputGroup>

        <InputGroup>
            <InputGroupAddon>www</InputGroupAddon>
            <InputText placeholder="Website" />
        </InputGroup>
    </div>
</template>
`,
                composition: `
<template>
    <div class="card flex flex-col md:flex-row gap-4">
        <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText placeholder="Username" />
        </InputGroup>

        <InputGroup>
            <InputGroupAddon>$</InputGroupAddon>
            <InputNumber placeholder="Price" />
            <InputGroupAddon>.00</InputGroupAddon>
        </InputGroup>

        <InputGroup>
            <InputGroupAddon>www</InputGroupAddon>
            <InputText placeholder="Website" />
        </InputGroup>
    </div>
</template>
`
            }
        };
    }
};
</script>
