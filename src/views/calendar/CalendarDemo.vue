<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Calendar</h1>
                <p>Calendar is an input component to select a date.</p>
            </div>
        </div>

        <div class="content-section implementation" style="padding-top:0">
            <div class="p-grid p-fluid">
                <div class="p-col-12 p-md-4">
                    <h3>Basic</h3>
                    <Calendar v-model="date1" />
                </div>
                <div class="p-col-12 p-md-4">
                    <h3>Spanish</h3>
                    <Calendar v-model="date2" :locale="es" />
                </div>
                <div class="p-col-12 p-md-4">
                    <h3>Icon</h3>
                    <Calendar v-model="date3" :showIcon="true" />
                </div>
                <div class="p-col-12 p-md-4">
                    <h3>Min-Max</h3>
                    <Calendar v-model="date4" :minDate="minDate" :maxDate="maxDate" :readonly="true" />
                </div>
                <div class="p-col-12 p-md-4">
                    <h3>Disable Days</h3>
                    <Calendar v-model="date5" :disabledDates="invalidDates" :disabledDays="[0,6]" :readonly="true" />
                </div>
                <div class="p-col-12 p-md-4">
                    <h3>Navigators</h3>
                    <Calendar v-model="date6" :monthNavigator="true" :yearNavigator="true" yearRange="2000:2030" />
                </div>
            </div>
        </div>

        <CalendarDoc />
    </div>
</template>

<script>
import CalendarDoc from './CalendarDoc'

export default {
    created() {
        console.log(this.es.firstDayOfWeek);
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month -1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;
        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);
        
        let invalidDate = new Date();
        invalidDate.setDate(today.getDate() - 1);
        this.invalidDates = [today,invalidDate];
    },
    data() {
        return {
            date1: null,
            date2: null,
            date3: null,
            date4: null,
            date5: null,
            date6: null,
            es: {
                firstDayOfWeek: 1,
                dayNames: [ "Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado" ],
                dayNamesShort: [ "Dom","Lun","Mar","Mié","Jue","Vie","Sáb" ],
                dayNamesMin: [ "D","L","M","X","J","V","S" ],
                monthNames: [ "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre" ],
                monthNamesShort: [ "Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic" ],
                today: 'Hoy',
                clear: 'Borrar',
                weekHeader: 'Sm'
            },
            minDate: null,
            maxDate: null,
            invalidDates: null
        }
    },
	components: {
		'CalendarDoc': CalendarDoc
    }
}
</script>