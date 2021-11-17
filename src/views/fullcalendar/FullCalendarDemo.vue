<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>FullCalendar</h1>
                <p>PrimeVue provides theming for the <a href="https://fullcalendar.io/docs/vue">FullCalendar</a> Vue component.</p>
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
    },
    components: {
        'FullCalendarDoc': FullCalendarDoc
    }
}
</script>

<style scoped>
@media screen and (max-width: 960px) {
    ::v-deep(.fc-header-toolbar) {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>