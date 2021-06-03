<template>
    <div></div>
</template>

<script>
import {Calendar} from '@fullcalendar/core';

export default {
    name: 'FullCalendar',
    props: {
        events: Array,
        options: null
    },
    data() {
        return {
            calendar: null
        }
    },
    watch: {
        events: {
            deep: true,
            handler(newEvents, oldEvents) {
                if (newEvents && this.calendar) {
                    this.calendar.removeAllEventSources();
                    this.calendar.addEventSource(newEvents);
                }
            }
        },
        options: {
            deep: true,
            handler(newOptions, oldOptions) {
                if (newOptions && this.calendar) {
                    for (const prop in newOptions) {
                        this.calendar.setOption(prop, newOptions[prop]);
                    }
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
    beforeUnmount() {
        if (this.calendar) {
            this.calendar.destroy();
            this.calendar = null;
        }
    },
    methods: {
        initialize() {
            let defaultConfig = {themeSystem: 'standard'};
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
