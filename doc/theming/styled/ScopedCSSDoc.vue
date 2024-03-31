<template>
    <DocSectionText v-bind="$attrs">
        <p>Design tokens can be scoped to a certain component using CSS variables.</p>
    </DocSectionText>
    <div class="card flex justify-content-center gap-3">
        <InputSwitch v-model="checked1" class="blue-switch" />
        <InputSwitch v-model="checked2" class="amber-switch" />
    </div>
    <DocSectionCode :code="code1" hideToggleCode hideStackBlitz />
    <DocSectionCode :code="code2" hideToggleCode hideStackBlitz />
    <h3>Future API Preview</h3>
    <p>In an upcoming update, a special <i>dt</i> property would be introduced for each component to generate the CSS variables from a design token object.</p>
    <DocSectionCode :code="code3" importCode hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            checked1: true,
            checked2: true,
            code1: {
                basic: `
<InputSwitch v-model="checked1" class="blue-switch" />
<InputSwitch v-model="checked2" class="amber-switch" />
`
            },
            code2: {
                basic: `
<style scoped>
    .blue-switch {
        --p-inputswitch-checked-background: var(--p-blue-500);
        --p-inputswitch-checked-hover-background: var(--p-blue-500);
        --p-inputswitch-border-radius: 4px;
    }

    .amber-switch {
        --p-inputswitch-checked-background: var(--p-amber-500);
        --p-inputswitch-checked-hover-background: var(--p-amber-500);
        --p-inputswitch-handle-background: var(--p-zinc-950);
        --p-inputswitch-handle-hover-background: var(--p-zinc-950);
        --p-inputswitch-handle-checked-background: var(--p-zinc-950);
        --p-inputswitch-handle-checked-hover-background: var(--p-zinc-950);
    }
</style>
`
            },
            code3: {
                basic: `
<InputSwitch v-model="checked" :dt="blueSwitch" />

/*
 const blueSwitch = {
    root: {
        checkedBackground: '{blue.500}',
        checkedHoverBackground: '{blue.500}',
        borderRadius: '40x'
    },
    handle: {
        background: '{blue.50}'
    }
 }
*/
`
            }
        };
    }
};
</script>

<style scoped>
.blue-switch {
    --p-inputswitch-checked-background: var(--p-blue-500);
    --p-inputswitch-checked-hover-background: var(--p-blue-500);
    --p-inputswitch-border-radius: 4px;
}

.amber-switch {
    --p-inputswitch-checked-background: var(--p-amber-500);
    --p-inputswitch-checked-hover-background: var(--p-amber-500);
    --p-inputswitch-handle-background: var(--p-zinc-950);
    --p-inputswitch-handle-hover-background: var(--p-zinc-950);
    --p-inputswitch-handle-checked-background: var(--p-zinc-950);
    --p-inputswitch-handle-checked-hover-background: var(--p-zinc-950);
}
</style>
