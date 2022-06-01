'use strict';

require('@fullcalendar/core/vdom');
var core = require('@fullcalendar/core');
var vue = require('vue');

var script = {
    name: 'FullCalendar',
    props: {
        events: Array,
        options: null
    },
    calendar: null,
    watch: {
        events(value) {
            if (value && this.calendar) {
                this.calendar.removeAllEventSources();
                this.calendar.addEventSource(value);
            }
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
            this.calendar = new core.Calendar(this.$el, config);
            this.calendar.render();

            if (this.events) {
                this.calendar.removeAllEventSources();
                this.calendar.addEventSource(this.events);
            }
        }
    }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div"))
}

script.render = render;

module.exports = script;
