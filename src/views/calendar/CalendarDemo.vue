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
            </div>
        </div>

        <CalendarDoc />
    </div>
</template>

<script>
import CalendarDoc from './CalendarDoc'

export default {
    data() {
        return {
            date1: null,
            date2: null,
            date3: null,
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
            }
        }
    },
	components: {
		'CalendarDoc': CalendarDoc
    }
}
</script>