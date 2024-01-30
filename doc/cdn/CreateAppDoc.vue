<template>
    <DocSectionText v-bind="$attrs">
        <p>Create an app container element and setup the application using <i>createApp</i>.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<body>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>

    <div id="app">
    </div>

    <script>
        const { createApp, ref } = Vue;

        const app = createApp({
            setup() {

            }
        });

        app.mount('#app');
    <\/script>
</body>
`
            }
        };
    }
};
</script>
