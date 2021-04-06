<template>
	<AppDoc name="FullCalendarDemo" :sources="sources" :service="['EventService']" :data="['events']" github="fullcalendar/FullCalendarDemo.vue"
        :dependencies="{'@fullcalendar/core': '5.4.0', '@fullcalendar/daygrid': '5.4.0', '@fullcalendar/interaction': '5.4.0', '@fullcalendar/timegrid': '5.4.0'}" component="FullCalendar">
        <h5>Import</h5>
<pre v-code.script><code>
import FullCalendar from 'primevue/fullcalendar';

</code></pre>

		<h5>Getting Started</h5>
		<p>FullCalendar is a wrapper around on <a href="https://fullcalendar.io/docs/v4">FullCalendar 5.4.0+</a> so fullcalendar needs to be included in your project.
        For a complete documentation and samples please refer to the <a href="https://fullcalendar.io/">fullcalendar website</a>.</p>
<pre v-code><code>
npm install @fullcalendar/core --save

</code></pre>

        <p>FullCalendar is plugin based so install the plugins you require and define them with the options property.</p>
<pre v-code><code>
npm install @fullcalendar/daygrid --save
npm install @fullcalendar/timegrid --save
npm install @fullcalendar/interaction --save

</code></pre>

		<p>Events should be an array and defined using the events property.</p>
<pre v-code><code>
&lt;FullCalendar :events="events" /&gt;

</code></pre>

<pre v-code.script><code>
export default {
	data() {
		return {
			events: [
				{
					"id": 1,
					"title": "All Day Event",
					"start": "2019-01-01"
				},
				{
					"id": 2,
					"title": "Long Event",
					"start": "2019-01-07",
					"end": "2019-01-10"
				},
				{
					"id": 3,
					"title": "Repeating Event",
					"start": "2019-01-09T16:00:00"
				},
				{
					"id": 4,
					"title": "Repeating Event",
					"start": "2019-01-16T16:00:00"
				},
				{
					"id": 5,
					"title": "Conference",
					"start": "2019-01-11",
					"end": "2019-01-13"
				},
				{
					"id": 6,
					"title": "Meeting",
					"start": "2019-01-12T10:30:00",
					"end": "2019-01-12T12:30:00"
				}
			]
		};
	}
}

</code></pre>

		<p>In a real application, it is likely to populate the events by making a remote call, when the events are updated, the component will detect the change and render them.</p>
<pre v-code.script><code>
import axios from 'axios';

export default class EventService {

	getEvents() {
		return axios.get('demo/data/events.json').then(res => res.data.data);
	}

}

</code></pre>

<pre v-code.script><code>
import EventService from '../../service/EventService';

export default {
	data() {
		return {
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

</code></pre>

		<h5>Options</h5>
		<p>FullCalendar has a long list of customization parameters that can be defined with the options property. Example below customizes the plugins, header and editable properties.</p>
<pre v-code><code>
&lt;FullCalendar :events="events" :options="options" /&gt;

</code></pre>

<pre v-code.script><code>
import EventService from '../../service/EventService';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export default {
    data() {
        return {
            options: {
                plugins:[dayGridPlugin, timeGridPlugin, interactionPlugin],
                initialDate: '2019-01-01',
                headerToolbar: {
                    left: 'prev,next',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                editable: true
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

</code></pre>

		<h5>Callbacks</h5>
		<p>Callbacks of the FullCalendar such as dateClick are also defined with the options property.</p>
<pre v-code.script><code>
export default {
     data() {
        return {
            options: {
                plugins:[dayGridPlugin, timeGridPlugin, interactionPlugin],
                initialDate: '2019-01-01',
                headerToolbar: {
                    left: 'prev,next',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                editable: true,
                dateClick: (e) =>  {
					//handle date click
				}
            }
        };
    }
}

</code></pre>

		<h5>Properties</h5>
		<div class="doc-tablewrapper">
			<table class="doc-table">
				<thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
				</thead>
				<tbody>
                    <tr>
                        <td>events</td>
                        <td>array</td>
                        <td>An array of events to display.</td>
                    </tr>
                    <tr>
                        <td>options</td>
                        <td>Object</td>
                        <td>A configuration object to define properties of FullCalendar.</td>
                    </tr>
				</tbody>
			</table>
		</div>

		<h5>Dependencies</h5>
        <p><a href="https://fullcalendar.io/docs/v4">FullCalendar 4.0.0+</a></p>
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
                    left: 'prev,next',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                editable: true
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
                left: 'prev,next',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            editable: true
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
				}
			}
		}
	}
}
</script>