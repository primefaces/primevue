<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The <i>global</i> property has a <i>css</i> option to define custom css that belongs to a global <i>pt</i> configuration. Common use case of this feature is defining global styles and animations related to the pass through props
            configuration.
        </p>
    </DocSectionText>

    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import { createApp } from "vue";
import PrimeVue from "primevue/config";
const app = createApp(App);

app.use(PrimeVue, {
    pt: {
        global: {
            css: \`
                button {
                    padding: 2rem;
                }

                .p-ink {
                    display: block;
                    position: absolute;
                    background: rgba(255, 255, 255, 0.5);
                    border-radius: 100%;
                    transform: scale(0);
                    pointer-events: none;
                }

                .p-ink-active {
                    animation: ripple 0.4s linear;
                }

                @keyframes ripple {
                    100% {
                        opacity: 0;
                        transform: scale(2.5);
                    }
                }
            \`
        }
    }
});
`
            }
        };
    }
};
</script>
