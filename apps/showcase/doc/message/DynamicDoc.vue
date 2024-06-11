<template>
    <DocSectionText v-bind="$attrs">
        <p>Multiple messages can be displayed using the standard v-for directive.</p>
    </DocSectionText>
    <div class="card">
        <Button label="Show" @click="addMessages()" />
        <Button label="Clear" severity="secondary" class="ml-2" @click="clearMessages()" />
        <transition-group name="p-message" tag="div">
            <Message v-for="msg of messages" :key="msg.id" :severity="msg.severity">{{ msg.content }}</Message>
        </transition-group>
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            messages: [],
            count: 0,
            code: {
                basic: `
<Button label="Show" @click="addMessages()" />
<Button label="Clear" severity="secondary" class="ml-2" @click="clearMessages()" />
<transition-group name="p-message" tag="div">
    <Message v-for="msg of messages" :key="msg.id" :severity="msg.severity">{{ msg.content }}</Message>
</transition-group>
`,
                options: `
<template>
    <div class="card">
        <Button label="Show" @click="addMessages()" />
        <Button label="Clear" severity="secondary" class="ml-2" @click="clearMessages()" />
        <transition-group name="p-message" tag="div">
            <Message v-for="msg of messages" :key="msg.id" :severity="msg.severity">{{ msg.content }}</Message>
        </transition-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            messages: [],
            count: 0
        };
    },
    methods: {
        addMessages() {
            this.messages = [
                { severity: 'info', content: 'Dynamic Info Message', id: this.count++ },
                { severity: 'success', content: 'Dynamic Success Message', id: this.count++ },
                { severity: 'warn', content: 'Dynamic Warn Message', id: this.count++ }
            ];
        },
        clearMessages() {
            this.messages = [];
        }
    }
};
}
<\/script>
`,
                composition: `
<template>
    <div class="card">
        <Button label="Show" @click="addMessages()" />
        <Button label="Clear" severity="secondary" class="ml-2" @click="clearMessages()" />
        <transition-group name="p-message" tag="div">
            <Message v-for="msg of messages" :key="msg.id" :severity="msg.severity">{{ msg.content }}</Message>
        </transition-group>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const messages = ref([]);
let count = ref(0);

const addMessages = () => {
    messages.value = [
        { severity: 'info', content: 'Dynamic Info Message', id: count.value++ },
        { severity: 'success', content: 'Dynamic Success Message', id: count.value++ },
        { severity: 'warn', content: 'Dynamic Warn Message', id: count.value++ }
    ];
};

const clearMessages = () => {
    messages.value = [];
};
<\/script>
`
            }
        };
    },
    methods: {
        addMessages() {
            this.messages = [
                { severity: 'info', content: 'Dynamic Info Message', id: this.count++ },
                { severity: 'success', content: 'Dynamic Success Message', id: this.count++ },
                { severity: 'warn', content: 'Dynamic Warn Message', id: this.count++ }
            ];
        },
        clearMessages() {
            this.messages = [];
        }
    }
};
</script>
