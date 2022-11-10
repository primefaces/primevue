<template>
    <div class="content-section introduction">
        <div class="feature-intro">
            <h1>Focus Trap</h1>
            <p>Focus Trap keeps focus within a certain DOM element while tabbing.</p>
        </div>
        <AppDemoActions />
    </div>

    <div class="content-section implementation">
        <div v-focustrap class="card">
            <h5 class="mt-0">Input</h5>
            <InputText id="input" v-model="value1" type="text" size="30" />

            <h5>Float Label</h5>
            <span class="p-float-label">
                <InputText id="float-input" v-model="value2" type="text" size="30" />
                <label for="float-input">Username</label>
            </span>

            <h5>Disabled Input</h5>
            <InputText id="disabled-input" v-model="value3" type="text" size="30" disabled />

            <h5>Input with tabindex -1</h5>
            <InputText v-model="value4" type="text" size="30" tabindex="-1" />

            <h5>Button</h5>
            <Button type="button" icon="pi pi-check" label="Check"></Button>

            <h5>Disabled Button</h5>
            <Button type="button" icon="pi pi-check" disabled label="Disabled"></Button>

            <h5>Button with tabindex -1</h5>
            <Button type="button" icon="pi pi-check" tabindex="-1" label="Check"></Button>

            <h5>Dropdown</h5>
            <Dropdown v-model="selectedCountry" :options="countries" optionLabel="name" placeholder="Select a Country" :showClear="true" />
        </div>
    </div>

    <FocusTrapDoc />
</template>

<script>
import FocusTrapDoc from './FocusTrapDoc.vue';

export default {
    data() {
        return {
            value1: null,
            value2: null,
            value3: null,
            value4: null,
            selectedCountry: null,
            countries: [
                { name: 'Australia', code: 'AU' },
                { name: 'Brazil', code: 'BR' },
                { name: 'China', code: 'CN' },
                { name: 'Egypt', code: 'EG' },
                { name: 'France', code: 'FR' },
                { name: 'Germany', code: 'DE' },
                { name: 'India', code: 'IN' },
                { name: 'Japan', code: 'JP' },
                { name: 'Spain', code: 'ES' },
                { name: 'United States', code: 'US' }
            ]
        };
    },
    components: {
        FocusTrapDoc: FocusTrapDoc
    }
};
</script>
