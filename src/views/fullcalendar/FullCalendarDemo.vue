<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>FullCalendar</h1>
                <p>An event calendar based on the <a href="https://fullcalendar.io/">FullCalendar</a> library.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <FullCalendar :events="events" :options="options" />
            </div>
        </div>

        <FullCalendarDoc/>
    </div>
</template>

<script>
import EventService from '../../service/EventService';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendarDoc from './FullCalendarDoc';

export default {
    data() {
        return {
            options: {
                plugins:[dayGridPlugin, timeGridPlugin, interactionPlugin],
                initialDate : '2019-01-01',
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
    },
    components: {
        'FullCalendarDoc': FullCalendarDoc
    }
}
</script>