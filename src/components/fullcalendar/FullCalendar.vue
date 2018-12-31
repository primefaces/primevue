<template>
    <div ref="container"></div>
</template>

<script>
import {Calendar} from 'fullcalendar';

export default {
    props: {
        events: Array,
        options: null
    },
    calendar: null,
    watch: {
        events(newValue) {
            this.calendar.removeAllEventSources();
            this.calendar.addEventSource(newValue);
        }
    },
    mounted() {
        if (this.$refs.container.offsetParent) {
            this.initialize();
        }
    },
    updated() {
        if (!this.calendar && this.$refs.container.offsetParent) {
            this.initialize();
        }
    },
    beforeDestroy() {
        if (this.calendar) {
            this.calendar.destroy();
            this.calendar = null;
        }
    },
    methods: {
        initialize() {
            let defaultConfig = {theme: true};
            let config = this.options ? {...this.options, ...defaultConfig} : defaultConfig;
            this.calendar = new Calendar(this.$refs.container, config);
            this.calendar.render();

            if (this.events) {
                this.calendar.removeAllEventSources();
                this.calendar.addEventSource(this.events);
            }
        }
    }
}
</script>

<style>

</style>
