<template>
    <DocSectionText v-bind="$attrs">
        <p>Enabling <i>fullScreen</i> property controls the document.</p>
    </DocSectionText>
    <div class="card">
        <BlockUI :blocked="blocked" fullScreen />
        <Button label="Block" @click="blockDocument" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            blocked: false,
            code: {
                basic: `
<BlockUI :blocked="blocked" fullScreen />
<Button label="Block" @click="blocked = true" />
`,
                options: `
<template>
    <div class="card">
        <BlockUI :blocked="blocked" fullScreen />
        <Button label="Block" @click="blockDocument" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            blocked: false
        }
    },
    methods: {
        blockDocument() {
            this.blocked = true;

            setTimeout(() => {
                this.blocked = false;
            }, 3000);
        }
    }
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <BlockUI :blocked="blocked" fullScreen />
        <Button label="Block" @click="blockDocument" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const blocked = ref(false);
const blockDocument = () => {
    blocked.value = true;

    setTimeout(() => {
        blocked.value = false;
    }, 3000);
}
<\/script>
`
            }
        };
    },
    methods: {
        blockDocument() {
            this.blocked = true;

            setTimeout(() => {
                this.blocked = false;
            }, 3000);
        }
    }
};
</script>
