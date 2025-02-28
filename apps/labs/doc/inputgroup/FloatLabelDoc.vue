<template>
    <DocSectionText v-bind="$attrs">
        <p>FloatLabel visually integrates a label with its form element. Visit <PrimeVueNuxtLink to="/floatlabel">FloatLabel</PrimeVueNuxtLink> documentation for more information.</p>
    </DocSectionText>
    <div class="card flex flex-col md:items-end md:flex-row gap-4">
        <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <FloatLabel>
                <InputText id="over_label" v-model="value1" />
                <label for="over_label">Over Label</label>
            </FloatLabel>
        </InputGroup>

        <InputGroup>
            <InputGroupAddon>$</InputGroupAddon>
            <FloatLabel variant="in">
                <InputText id="in_label" v-model="value2" />
                <label for="in_label">In Label</label>
            </FloatLabel>
            <InputGroupAddon>.00</InputGroupAddon>
        </InputGroup>

        <InputGroup>
            <InputGroupAddon>www</InputGroupAddon>
            <FloatLabel variant="on">
                <InputText id="on_label" v-model="value3" />
                <label for="on_label">On Label</label>
            </FloatLabel>
        </InputGroup>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value1: null,
            value2: null,
            value3: null,
            code: {
                basic: `
<InputGroup>
    <InputGroupAddon>
        <i class="pi pi-user"></i>
    </InputGroupAddon>
    <FloatLabel>
        <InputText id="over_label" v-model="value1" />
        <label for="over_label">Over Label</label>
    </FloatLabel>
</InputGroup>

<InputGroup>
    <InputGroupAddon>$</InputGroupAddon>
    <FloatLabel variant="in">
        <InputText id="in_label" v-model="value2" />
        <label for="in_label">In Label</label>
    </FloatLabel>
    <InputGroupAddon>.00</InputGroupAddon>
</InputGroup>

<InputGroup>
    <InputGroupAddon>www</InputGroupAddon>
    <FloatLabel variant="on">
        <InputText id="on_label" v-model="value3" />
        <label for="on_label">On Label</label>
    </FloatLabel>
</InputGroup>
`,
                options: `
<template>
    <div class="card flex flex-col md:items-end md:flex-row gap-4">
        <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <FloatLabel>
                <InputText id="over_label" v-model="value1" />
                <label for="over_label">Over Label</label>
            </FloatLabel>
        </InputGroup>

        <InputGroup>
            <InputGroupAddon>$</InputGroupAddon>
            <FloatLabel variant="in">
                <InputText id="in_label" v-model="value2" />
                <label for="in_label">In Label</label>
            </FloatLabel>
            <InputGroupAddon>.00</InputGroupAddon>
        </InputGroup>

        <InputGroup>
            <InputGroupAddon>www</InputGroupAddon>
            <FloatLabel variant="on">
                <InputText id="on_label" v-model="value3" />
                <label for="on_label">On Label</label>
            </FloatLabel>
        </InputGroup>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: null,
            value2: null,
            value3: null
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-col md:items-end md:flex-row gap-4">
        <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <FloatLabel>
                <InputText id="over_label" v-model="value1" />
                <label for="over_label">Over Label</label>
            </FloatLabel>
        </InputGroup>

        <InputGroup>
            <InputGroupAddon>$</InputGroupAddon>
            <FloatLabel variant="in">
                <InputText id="in_label" v-model="value2" />
                <label for="in_label">In Label</label>
            </FloatLabel>
            <InputGroupAddon>.00</InputGroupAddon>
        </InputGroup>

        <InputGroup>
            <InputGroupAddon>www</InputGroupAddon>
            <FloatLabel variant="on">
                <InputText id="on_label" v-model="value3" />
                <label for="on_label">On Label</label>
            </FloatLabel>
        </InputGroup>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
<\/script>
`
            }
        };
    }
};
</script>
