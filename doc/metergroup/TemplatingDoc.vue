<template>
    <DocSectionText v-bind="$attrs">
        <p>
            MeterGroup offers meter customization with the <i>meter</i> template that receives the meter instance from the value as a parameter and also <i>label</i> template receives value instance. In addition, the <i>start</i> and <i>end</i> slots
            are available to define the start and end templating for MeterGroup respectively.
        </p>
    </DocSectionText>
    <div class="card">
        <MeterGroup :value="value" labelPosition="start">
            <template #label="{ value }">
                <div class="flex flex-column text-sm gap-2">
                    <template v-for="(val, i) of value" :key="i">
                        <span :style="{ color: val.color }" class="flex gap-2">
                            <i :class="val.icon" />
                            {{ val.label }} ({{ val.value }}%)</span
                        >
                    </template>
                </div>
            </template>
            <template #start="{ totalPercent }">
                <div class="flex justify-content-between mt-3 mb-2">
                    <span>Account </span>
                    <span :style="{ width: totalPercent }" class="absolute text-right">{{ totalPercent }}</span>
                    <span>Savings: 1000$ </span>
                </div>
            </template>
            <template #meter="slotProps">
                <span :class="slotProps.class" :style="{ backgroundColor: slotProps.value.color, width: slotProps.width }" />
            </template>
        </MeterGroup>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value: [
                { color: '#239EF0', label: 'Mortgage', value: 25, icon: 'pi pi-home' },
                { color: '#FAA419', label: 'Loan', value: 15, icon: 'pi pi-money-bill' },
                { color: '#EE5879', label: 'Credit Card', value: 20, icon: 'pi pi-credit-card' }
            ],
            code: {
                basic: `
<MeterGroup :value="value" labelPosition="start">
    <template #label="{ value }">
        <div class="flex flex-column text-sm">
            <template v-for="(val, i) of value" :key="i">
                <span :style="{ color: val.color }" class="mt-2">- {{ val.label }} ({{ val.value }}%)</span>
            </template>
        </div>
    </template>
    <template #start="{ totalPercent }">
        <div class="flex justify-content-between mt-3 mb-2">
            <span>Account </span>
            <span :style="{ width: totalPercent }" class="absolute text-right">{{ totalPercent }}</span>
            <span>Savings: 1000$ </span>
        </div>
    </template>
    <template #meter="slotProps">
        <span :class="slotProps.class" :style="{ backgroundColor: slotProps.value.color, width: slotProps.width }" />
    </template>
</MeterGroup>
`,
                options: `
<template>
    <div class="card">
        <MeterGroup :value="value" labelPosition="start">
            <template #label="{ value }">
                <div class="flex flex-column text-sm">
                    <template v-for="(val, i) of value" :key="i">
                        <span :style="{ color: val.color }" class="mt-2">- {{ val.label }} ({{ val.value }}%)</span>
                    </template>
                </div>
            </template>
            <template #start="{ totalPercent }">
                <div class="flex justify-content-between mt-3 mb-2">
                    <span>Account </span>
                    <span :style="{ width: totalPercent }" class="absolute text-right">{{ totalPercent }}</span>
                    <span>Savings: 1000$ </span>
                </div>
            </template>
            <template #meter="slotProps">
                <span :class="slotProps.class" :style="{ backgroundColor: slotProps.value.color, width: slotProps.width }" />
            </template>
        </MeterGroup>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: [
                { color: '#239EF0', label: 'Mortgage', value: 25 },
                { color: '#FAA419', label: 'Loan', value: 15 },
                { color: '#EE5879', label: 'Credit Card', value: 20 }
            ]
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <MeterGroup :value="value" labelPosition="start">
            <template #label="{ value }">
                <div class="flex flex-column text-sm">
                    <template v-for="(val, i) of value" :key="i">
                        <span :style="{ color: val.color }" class="mt-2">- {{ val.label }} ({{ val.value }}%)</span>
                    </template>
                </div>
            </template>
            <template #start="{ totalPercent }">
                <div class="flex justify-content-between mt-3 mb-2">
                    <span>Account </span>
                    <span :style="{ width: totalPercent }" class="absolute text-right">{{ totalPercent }}</span>
                    <span>Savings: 1000$ </span>
                </div>
            </template>
            <template #meter="slotProps">
                <span :class="slotProps.class" :style="{ backgroundColor: slotProps.value.color, width: slotProps.width }" />
            </template>
        </MeterGroup>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref([
    { color: '#239EF0', label: 'Mortgage', value: 25 },
    { color: '#FAA419', label: 'Loan', value: 15 },
    { color: '#EE5879', label: 'Credit Card', value: 20 }
]);
<\/script>
`
            }
        };
    }
};
</script>
