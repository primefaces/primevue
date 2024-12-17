<template>
    <DocSectionText v-bind="$attrs">
        <p>Buttons can be placed at either side of an input element.</p>
    </DocSectionText>
    <div class="card flex flex-col md:flex-row gap-4">
        <InputGroup>
            <Button label="Search" />
            <InputText placeholder="Keyword" />
        </InputGroup>

        <InputGroup>
            <InputText placeholder="Keyword" />
            <InputGroupAddon>
                <Button icon="pi pi-search" severity="secondary" variant="text" @click="toggle" />
            </InputGroupAddon>
        </InputGroup>
        <Menu ref="menu" :model="items" popup class="!min-w-fit" />

        <InputGroup>
            <InputGroupAddon>
                <Button icon="pi pi-check" severity="secondary" />
            </InputGroupAddon>
            <InputText placeholder="Vote" />
            <InputGroupAddon>
                <Button icon="pi pi-times" severity="secondary" />
            </InputGroupAddon>
        </InputGroup>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            items: [{ label: 'Web Search' }, { label: 'AI Assistant' }, { label: 'History' }],
            code: {
                basic: `
<InputGroup>
    <Button label="Search" />
    <InputText placeholder="Keyword" />
</InputGroup>

<InputGroup>
    <InputText placeholder="Keyword" />
    <InputGroupAddon>
        <Button icon="pi pi-search" severity="secondary" variant="text" @click="toggle" />
    </InputGroupAddon>
</InputGroup>
<Menu ref="menu" :model="items" popup class="!min-w-fit" />

<InputGroup>
    <InputGroupAddon>
        <Button icon="pi pi-check" severity="secondary" />
    </InputGroupAddon>
    <InputText placeholder="Vote" />
    <InputGroupAddon>
        <Button icon="pi pi-times" severity="secondary" />
    </InputGroupAddon>
</InputGroup>
`,
                options: `
<template>
    <div class="card flex flex-col md:flex-row gap-4">
        <InputGroup>
            <Button label="Search" />
            <InputText placeholder="Keyword" />
        </InputGroup>

        <InputGroup>
            <InputText placeholder="Keyword" />
            <InputGroupAddon>
                <Button icon="pi pi-search" severity="secondary" variant="text" @click="toggle" />
            </InputGroupAddon>
        </InputGroup>
        <Menu ref="menu" :model="items" popup class="!min-w-fit" />

        <InputGroup>
            <InputGroupAddon>
                <Button icon="pi pi-check" severity="secondary" />
            </InputGroupAddon>
            <InputText placeholder="Vote" />
            <InputGroupAddon>
                <Button icon="pi pi-times" severity="secondary" />
            </InputGroupAddon>
        </InputGroup>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [{ label: 'Web Search' }, { label: 'AI Assistant' }, { label: 'History' }],
        };
    },
    methods: {
        toggle(event) {
            this.$refs.menu.toggle(event);
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-col md:flex-row gap-4">
        <InputGroup>
            <Button label="Search" />
            <InputText placeholder="Keyword" />
        </InputGroup>

        <InputGroup>
            <InputText placeholder="Keyword" />
            <InputGroupAddon>
                <Button icon="pi pi-search" severity="secondary" variant="text" @click="toggle" />
            </InputGroupAddon>
        </InputGroup>
        <Menu ref="menu" :model="items" popup class="!min-w-fit" />

        <InputGroup>
            <InputGroupAddon>
                <Button icon="pi pi-check" severity="secondary" />
            </InputGroupAddon>
            <InputText placeholder="Vote" />
            <InputGroupAddon>
                <Button icon="pi pi-times" severity="secondary" />
            </InputGroupAddon>
        </InputGroup>
    </div>
</template>

<script setup>
import { ref } from "vue";

const menu = ref();
const items = ref([{ label: 'Web Search' }, { label: 'AI Assistant' }, { label: 'History' }]);

const toggle = (event) => {
    menu.value.toggle(event);
};
<\/script>
`
            }
        };
    },
    methods: {
        toggle(event) {
            this.$refs.menu.toggle(event);
        }
    }
};
</script>
