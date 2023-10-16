<template>
    <DocSectionText v-bind="$attrs">
        <p>Chip content is customized using <i>item</i> slot that receives a single chip value as a parameter.</p>
    </DocSectionText>
    <div class="card p-fluid">
        <Chips v-model="value">
            <template #chip="slotProps">
                <div>
                    <span>{{ slotProps.value }} - (active) </span>
                    <i class="pi pi-user-plus" style="font-size: 14px"></i>
                </div>
            </template>
        </Chips>
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
<Chips v-model="value">
    <template #chip="slotProps">
        <div>
            <span>{{ slotProps.value }} - (active) </span>
            <i class="pi pi-user-plus" style="font-size: 14px"></i>
        </div>
    </template>
</Chips>
`,
                options: `
<template>
    <div class="card p-fluid">
        <Chips v-model="value">
            <template #chip="slotProps">
                <div>
                    <span>{{ slotProps.value }} - (active) </span>
                    <i class="pi pi-user-plus" style="font-size: 14px"></i>
                </div>
            </template>
        </Chips>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        };
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card p-fluid">
        <Chips v-model="value">
            <template #chip="slotProps">
                <div>
                    <span>{{ slotProps.value }} - (active) </span>
                    <i class="pi pi-user-plus" style="font-size: 14px"></i>
                </div>
            </template>
        </Chips>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref();
<\/script>
`
            }
        };
    }
};
</script>
