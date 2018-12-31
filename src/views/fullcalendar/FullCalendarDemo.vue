<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>FullCalendar</h1>
                <p>An event calendar based on the <a href="https://fullcalendar.io/">FullCalendar</a> library.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <p-fullCalendar :events="events" />
        </div>
    </div>
</template>

<script>
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
</script>