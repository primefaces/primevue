<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>FullCalendar</h1>
                <p>An event calendar based on the <a href="https://fullcalendar.io/">FullCalendar</a> library.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <FullCalendar :events="events" :options="options" />
        </div>

        <FullCalendarDoc/>
    </div>
</template>

<script>
import EventService from '../../service/EventService';
import FullCalendarDoc from './FullCalendarDoc';

export default {
    data() {
        return {
            options: {
                defaultDate: '2019-01-01',
                header: {
                    left: 'prev,next',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
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