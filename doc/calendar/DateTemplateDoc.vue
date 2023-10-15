<template>
    <DocSectionText v-bind="$attrs">
        <p>Custom content can be placed inside date cells with the <i>date</i> slot that takes a Date as a parameter.</p>
    </DocSectionText>
    <div class="card flex justify-content-center">
        <Calendar v-model="date">
            <template #date="slotProps">
                <strong v-if="slotProps.date.day > 10 && slotProps.date.day < 15" style="text-decoration: line-through">{{ slotProps.date.day }}</strong>
                <template v-else>{{ slotProps.date.day }}</template>
            </template>
        </Calendar>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            date: null,
            code: {
                basic: `
<Calendar v-model="date">
    <template #date="slotProps">
        <strong v-if="slotProps.date.day > 10 && slotProps.date.day < 15" style="text-decoration: line-through">{{ slotProps.date.day }}</strong>
        <template v-else>{{ slotProps.date.day }}</template>
    </template>
</Calendar>
`,
                options: `
<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date">
            <template #date="slotProps">
                <strong v-if="slotProps.date.day > 10 && slotProps.date.day < 15" style="text-decoration: line-through">{{ slotProps.date.day }}</strong>
                <template v-else>{{ slotProps.date.day }}</template>
            </template>
        </Calendar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: null
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date">
            <template #date="slotProps">
                <strong v-if="slotProps.date.day > 10 && slotProps.date.day < 15" style="text-decoration: line-through">{{ slotProps.date.day }}</strong>
                <template v-else>{{ slotProps.date.day }}</template>
            </template>
        </Calendar>
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>
`
            }
        };
    }
};
</script>
