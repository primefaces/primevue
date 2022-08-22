<template>
    <div></div>
</template>

<script>
import {Calendar} from '@fullcalendar/core';

export default {
    props: {
        events: Array,
        options: null
    },
    calendar: null,
    watch: {
        events(value) {
            this.calendar.removeAllEventSources();
            this.calendar.addEventSource(value);
        },
        options(value) {
            if (value && this.calendar) {
                for (let prop in value) {
                    this.calendar.setOption(prop, value[prop]);
                }
            }
        }
    },
    mounted() {
        if (this.$el.offsetParent) {
            this.initialize();
        }
    },
    updated() {
        if (!this.calendar && this.$el.offsetParent) {
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
            let defaultConfig = {themeSystem: false};
            let config = this.options ? {...this.options, ...defaultConfig} : defaultConfig;
            this.calendar = new Calendar(this.$el, config);
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
