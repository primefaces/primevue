<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>InputText</h1>
                <p>InputText renders and input field where the user can enter data.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h3 class="first">Basic</h3>
            <InputText type="text" v-model="value1" />
            <span :style="{marginLeft: '.5em'}">{{value1}}</span>

            <h3>Floating Label</h3>
            <span class="p-float-label">
                <InputText id="username" type="text" v-model="value2" />
                <label for="username">Username</label>
            </span>

            <h3>Left Icon</h3>
            <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText type="text" v-model="value3" placeholder="Search" />
            </span>

            <h3>Right Icon</h3>
            <span class="p-input-icon-right">
                <i class="pi pi-spin pi-spinner" />
                <InputText type="text" v-model="value4" />
            </span>

            <h3>Disabled</h3>
            <InputText type="text" v-model="value5" disabled />

             <h3>Invalid</h3>
            <InputText type="text" class="p-invalid" />

            <h3>Sizes</h3>
            <div class="component-sizes">
                <InputText type="text" class="p-component-sm" placeholder="Small" />
                <InputText type="text" placeholder="Normal" />
                <InputText type="text" class="p-component-lg" placeholder="Large" />
            </div>
        </div>

        <InputTextDoc />
    </div>
</template>

<script>
import InputTextDoc from './InputTextDoc';

export default {
    data() {
        return {
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: 'PrimeVue'
        }
    },
	components: {
		'InputTextDoc': InputTextDoc
	}
}
</script>