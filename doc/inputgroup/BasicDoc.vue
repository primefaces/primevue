<template>
    <DocSectionText v-bind="$attrs">
        <p>An InputGroup is created by wrapping the input and add-ons inside an element with a <i>p-inputgroup</i> class where add-ons also should be inside an element with <i>.p-inputgroup-addon</i> class.</p>
    </DocSectionText>
    <div class="card flex flex-column md:flex-row gap-3">
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
    <div class="card flex flex-column md:flex-row gap-3">
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
    <div class="card flex flex-column md:flex-row gap-3">
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
