<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Message</h1>
                <p>Messages is used to display inline messages with various severities.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Severities</h5>
                <Message severity="success">Success Message Content</Message>
                <Message severity="info">Info Message Content</Message>
                <Message severity="warn">Warning Message Content</Message>
                <Message severity="error">Error Message Content</Message>

                <h5>Custom Icon</h5>
                <Message severity="info" icon="pi-send">Info Message Content</Message>

                <h5>Dynamic</h5>
                <Button label="Show" @click="addMessages()" />
                <transition-group name="p-message" tag="div">
                    <Message v-for="msg of messages" :severity="msg.severity" :key="msg.id">{{msg.content}}</Message>
                </transition-group>

                <h5>Inline Messages</h5>
                <p>Message component is used to display inline messages mostly within forms.</p>
                <div class="grid">
                    <div class="col-12 md:col-3">
                        <InlineMessage severity="info">Message Content</InlineMessage>
                    </div>
                    <div class="col-12 md:col-3">
                        <InlineMessage severity="success">Message Content</InlineMessage>
                    </div>
                    <div class="col-12 md:col-3">
                        <InlineMessage severity="warn">Message Content</InlineMessage>
                    </div>
                    <div class="col-12 md:col-3">
                        <InlineMessage severity="error">Message Content</InlineMessage>
                    </div>
                </div>

                <h5>Auto Dismiss</h5>
                <Message severity="warn" :life="3000" :sticky="false">This message will hide in 3 seconds.</Message>

                <h5>Validation Message</h5>
                <div class="formgroup-inline" style="margin-bottom:.5rem">
                    <label for="username" class="p-sr-only">Username</label>
                    <InputText id="username" placeholder="Username" class="p-invalid" />
                    <InlineMessage>Username is required</InlineMessage>
                </div>
                <div class="formgroup-inline">
                    <label for="email" class="p-sr-only">email</label>
                    <InputText id="email" placeholder="Email" class="p-invalid" />
                    <InlineMessage />
                </div>
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
                {severity: 'info', content: 'Dynamic Info Message', id: this.count++},
                {severity: 'success', content: 'Dynamic Success Message', id: this.count++},
                {severity: 'warn', content: 'Dynamic Warning Message', id: this.count++}
            ]
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
