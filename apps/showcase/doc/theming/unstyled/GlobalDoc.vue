<template>
    <DocSectionText v-bind="$attrs">
        <p>
            A global configuration can be created at application level to avoid repetition via the global <i>pt</i> option so that the styles can be shared from a single location. A particular component can still override a global configuration with
            its own <i>pt</i> property.
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
    unstyled: true,
    pt: {
        button: {
            root: 'bg-teal-500 hover:bg-teal-700 active:bg-teal-900 cursor-pointer py-2 px-4 rounded-full border-0 flex gap-2',
            label: 'text-white font-bold text-lg',
            icon: 'text-white text-xl'
        },
        panel: {
            header: 'bg-primary text-primary-contrast border-primary',
            content: 'border-primary text-lg text-primary-700',
            title: 'bg-primary text-primary-contrast text-xl',
            pcToggleButton: {
                root: 'bg-primary text-primary-contrast hover:text-primary hover:bg-primary-contrast'
            }
        }
    }
});
`
            }
        };
    }
};
</script>
