<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>SelectButton</h1>
                <p>SelectButton is a form component to choose a value from a list of options using button elements.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Single Selection</h5>
                <SelectButton v-model="value1" :options="options" />

                <h5>Multiple Selection</h5>
                <SelectButton v-model="value2" :options="paymentOptions" optionLabel="name" multiple />

                <h5>Custom Content</h5>
                <SelectButton v-model="value3" :options="justifyOptions" optionLabel="value" dataKey="value" >
                    <template #option="slotProps">
                        <i :class="slotProps.option.icon"></i>
                    </template>
                </SelectButton>
            </div>
        </div>

        <SelectButtonDoc/>
    </div>
</template>

<script>
import SelectButtonDoc from './SelectButtonDoc';

export default {
    data() {
        return {
            value1: 'Off',
            value2: null,
            value3: null,
            options: ['Off', 'On'],
            paymentOptions: [
                {name: 'Option 1', value: 1},
                {name: 'Option 2', value: 2},
                {name: 'Option 3', value: 3}
            ],
            justifyOptions: [
                {icon: 'pi pi-align-left', value: 'Left'},
                {icon: 'pi pi-align-right', value: 'Right'},
                {icon: 'pi pi-align-center', value: 'Center'},
                {icon: 'pi pi-align-justify', value: 'Justify'}
            ]
        }
    },
    components: {
        'SelectButtonDoc': SelectButtonDoc
    }
}
</script>