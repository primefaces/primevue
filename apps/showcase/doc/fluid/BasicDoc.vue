<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Components with the <i>fluid</i> option like <i>InputText</i> have the ability to span the full width of their component. Enabling the <i>fluid</i> for each component individually may be cumbersome so wrap the content with <i>Fluid</i> to
            instead for an easier alternative.
        </p>
        <p>Any component that has the <i>fluid</i> property can be nested inside the <i>Fluid</i> component. The <i>fluid</i> property of a child component has higher precedence than the fluid container as shown in the last sample.</p>
    </DocSectionText>
    <div class="card flex flex-col gap-6">
        <div>
            <label for="non-fluid" class="font-bold mb-2 block">Non-Fluid</label>
            <InputText id="non-fluid" />
        </div>

        <div>
            <label for="fluid" class="font-bold mb-2 block">Fluid Prop</label>
            <InputText id="fluid" fluid />
        </div>

        <Fluid>
            <span class="font-bold mb-2 block">Fluid Container</span>
            <div class="grid grid-cols-2 gap-4">
                <div><InputText /></div>
                <div><InputText /></div>
                <div class="col-span-full"><InputText /></div>
                <div><InputText :fluid="false" placeholder="Non-Fluid" /></div>
            </div>
        </Fluid>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: null,
            code: {
                basic: `
<div>
    <label for="non-fluid" class="font-bold mb-2 block">Non-Fluid</label>
    <InputText id="non-fluid" />
</div>

<div>
    <label for="fluid" class="font-bold mb-2 block">Fluid Prop</label>
    <InputText id="fluid" fluid />
</div>

<Fluid>
    <span class="font-bold mb-2 block">Fluid Container</span>
    <div class="grid grid-cols-2 gap-4">
        <div><InputText /></div>
        <div><InputText /></div>
        <div class="col-span-full"><InputText /></div>
        <div><InputText :fluid="false" placeholder="Non-Fluid" /></div>
    </div>
</Fluid>
`,
                options: `
<template>
    <div class="card flex flex-col gap-6">
        <div>
            <label for="non-fluid" class="font-bold mb-2 block">Non-Fluid</label>
            <InputText id="non-fluid" />
        </div>

        <div>
            <label for="fluid" class="font-bold mb-2 block">Fluid Prop</label>
            <InputText id="fluid" fluid />
        </div>

        <Fluid>
            <span class="font-bold mb-2 block">Fluid Container</span>
            <div class="grid grid-cols-2 gap-4">
                <div><InputText /></div>
                <div><InputText /></div>
                <div class="col-span-full"><InputText /></div>
                <div><InputText :fluid="false" placeholder="Non-Fluid" /></div>
            </div>
        </Fluid>
    </div>
</template>

<script>

<\/script>

`,
                composition: `
<template>
    <div class="card flex flex-col gap-6">
        <div>
            <label for="non-fluid" class="font-bold mb-2 block">Non-Fluid</label>
            <InputText id="non-fluid" />
        </div>

        <div>
            <label for="fluid" class="font-bold mb-2 block">Fluid Prop</label>
            <InputText id="fluid" fluid />
        </div>

        <Fluid>
            <span class="font-bold mb-2 block">Fluid Container</span>
            <div class="grid grid-cols-2 gap-4">
                <div><InputText /></div>
                <div><InputText /></div>
                <div class="col-span-full"><InputText /></div>
                <div><InputText :fluid="false" placeholder="Non-Fluid" /></div>
            </div>
        </Fluid>
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
