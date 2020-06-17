<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Message</h1>
                <p>Messages is used to display inline messages with various severities.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <h5>Severities</h5>
            <Message severity="success">Order Submitted</Message>
            <Message severity="info">PrimeVue Rocks</Message>
            <Message severity="warn">There are unsaved changes</Message>
            <Message severity="error">Validation Failed</Message>

            <h5>Dynamic</h5>
            <Button label="Show" @click="addMessages()" />
            <Button label="Clear" @click="removeMessages()" class="p-button-secondary"/>
            <transition-group name="p-messages" tag="div">
                <Message v-for="msg of messages" :severity="msg.severity" :key="msg.content">{{msg.content}}</Message>
            </transition-group>

            <h5>Auto Dismiss</h5>
            <Message severity="warn" :life="10000" :sticky="false">This message will hide in 10 seconds.</Message>

            <h5>Validation Message</h5>
            <div class="p-formgroup-inline" style="margin-bottom:.5rem">
                <Label for="username" class="p-sr-only">Username</Label>
                <InputText placeholder="Username" class="p-invalid" />
                <InlineMessage>Username is required</InlineMessage>
            </div>
            <div class="p-formgroup-inline">
                <Label for="email" class="p-sr-only">email</Label>
                <InputText placeholder="email" class="p-invalid" />
                <InlineMessage />
            </div>
        </div>

        <MessageDoc/>
    </div>
</template>

<script>
import MessageDoc from './MessageDoc';

export default {
    data() {
        return {
            messages: [],
            count: 0
        }
    },
    methods: {
        addMessages() {
            this.messages = [
                {severity: 'info', content: 'Dynamic Info Message'},
                {severity: 'success', content: 'Dynamic Success Message'},
                {severity: 'warn', content: 'Dynamic Warning Message'}
            ]
        },
        removeMessages() {
            this.messages = null;
        }
    },
    components: {
        'MessageDoc': MessageDoc
    }
}
</script>

<style scoped>
button.p-button {
    margin-right: .5rem;
}

.p-inputtext {
    margin-right: .5rem;
}
</style>
