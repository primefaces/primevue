<template>
	<AppDoc name="FullCalendarDemo" :sources="sources" :service="['EventService']" :data="['events']" github="fullcalendar/FullCalendarDemo.vue"
        :dependencies="{'@fullcalendar/core': '^5.7.2', '@fullcalendar/vue3': '^5.7.2', '@fullcalendar/daygrid': '^5.7.2', '@fullcalendar/interaction': '^5.7.2', '@fullcalendar/timegrid': '^5.7.2'}" component="FullCalendar">

        <p>As it is not a component from PrimeVue, refer to the FullCalendar <a href="https://fullcalendar.io/docs/vue">documentation</a> for more information.</p>
    </AppDoc>
</template>

<script>
export default {
	data() {
		return {
			sources: {
				'options-api': {
                    tabName: 'Options API Source',
					content: `
<template>
    <div>
        <FullCalendar :events="events" :options="options" />
    </div>
</template>

<script>
import '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import EventService from './service/EventService';

export default {
    data() {
        return {
            options: {
                plugins:[dayGridPlugin, timeGridPlugin, interactionPlugin],
                initialDate : '2017-02-01',
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                editable: true,
                selectable:true, 
                selectMirror: true, 
                dayMaxEvents: true
            },
            events: null
        };
    },
    eventService: null,
    created() {
        this.eventService = new EventService();
    },
    mounted() {
        this.eventService.getEvents().then(data => this.events = data);
    }
}
<\\/script>

<style scoped>
@media screen and (max-width: 960px) {
    ::v-deep(.fc-header-toolbar) {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>`
				},
                'composition-api': {
                    tabName: 'Composition API Source',
					content: `
<template>
    <div>
        <FullCalendar :events="events" :options="options" />
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import EventService from './service/EventService';

export default {
    setup() {
        onMounted(() => {
            eventService.value.getEvents().then(data => events.value = data);
        })

        const options =  ref({
            plugins:[dayGridPlugin, timeGridPlugin, interactionPlugin],
            initialDate : '2017-02-01',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            editable: true,
                selectable:true, 
                selectMirror: true, 
                dayMaxEvents: true
        });
        const events =  ref(null);
        const eventService = ref(new EventService());

        return { options, events, eventService };
    }
}
<\\/script>

<style scoped>
@media screen and (max-width: 960px) {
    ::v-deep(.fc-header-toolbar) {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>`
				},
                'browser-source': {
                    tabName: 'Browser Source',
                    imports: `<script src="https://unpkg.com/fullcalendar@5.7.2/main.min.js"><\\/script>
        <link rel="stylesheet" href="https://unpkg.com/fullcalendar@5.7.2/main.min.css"><\\/link>

        <script src="https://unpkg.com/primevue@^3/fullcalendar/fullcalendar.min.js"><\\/script>
        <script src="./EventService.js"><\\/script>`,
					content: `<div id="app">
            <p-fullcalendar :events="events" :options="options"></p-fullcalendar>
        </div>

        <script>
        const { createApp, ref, onMounted } = Vue;
        const { dayGridPlugin, timeGridPlugin, interactionPlugin } = FullCalendar.Calendar;

        const App = {
            setup() {
                onMounted(() => {
                    eventService.value.getEvents().then(data => events.value = data);
                })

                const options =  ref({
                    plugins:[dayGridPlugin, timeGridPlugin, interactionPlugin],
                    initialDate : '2017-02-01',
                    headerToolbar: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    },
                    editable: true,
                        selectable:true, 
                        selectMirror: true, 
                        dayMaxEvents: true
                });
                const events =  ref(null);
                const eventService = ref(new EventService());

                return { options, events, eventService };
            },
            components: {
                "p-fullcalendar": primevue.fullcalendar
            }
        };

        createApp(App)
            .use(primevue.config.default)
            .mount("#app");
        <\\/script>

        <style scoped>
        @media screen and (max-width: 960px) {
            ::v-deep(.fc-header-toolbar) {
                display: flex;
                flex-wrap: wrap;
            }
        }
        </style>`
				}
			}
		}
	}
}
</script>