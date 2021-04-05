<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Calendar</h1>
                <p>Calendar is an input component to select a date.</p>
            </div>
            
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Popup</h5>
                <div class="p-fluid p-grid p-formgrid">
                    <div class="p-field p-col-12 p-md-4">
                        <label for="basic">Basic</label>
                        <Calendar id="basic" v-model="date1" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <label for="dateformat">DateFormat</label>
                        <Calendar id="dateformat" v-model="date2"  dateFormat="mm-dd-yy" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <label for="icon">Icon</label>
                        <Calendar id="icon" v-model="date3" :showIcon="true" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <label for="minmax">MinMax</label>
                        <Calendar id="minmax" v-model="date4" :minDate="minDate" :maxDate="maxDate" :manualInput="false" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <label for="disableddays">Disabled Days</label>
                        <Calendar id="disableddays" v-model="date5" :disabledDates="invalidDates" :disabledDays="[0,6]" :manualInput="false" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <label for="navigators">Navigators</label>
                        <Calendar id="navigators" v-model="date6" :monthNavigator="true" :yearNavigator="true" yearRange="2000:2030" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <label for="multiple">Multiple</label>
                        <Calendar id="multiple" v-model="dates1" selectionMode="multiple" :manualInput="false" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <label for="range">Range</label>
                        <Calendar id="range" v-model="dates2" selectionMode="range" :manualInput="false" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <label for="buttonbar">Button Bar</label>
                        <Calendar id="buttonbar" v-model="date7" :showButtonBar="true" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <label for="time24">Time / 24h</label>
                        <Calendar id="time24" v-model="date8" :showTime="true" :showSeconds="true" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <label for="time12">Time / 12h</label>
                        <Calendar id="time12" v-model="date9" :timeOnly="true" hourFormat="12" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <label for="monthpicker">Month Picker</label>
                        <Calendar id="monthpicker" v-model="date10" view="month" dateFormat="mm/yy" :yearNavigator="true" yearRange="2000:2030" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <label for="multiplemonths">Multiple Months</label>
                        <Calendar id="multiplemonths" v-model="date11" :numberOfMonths="3" />
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <label for="datetemplate">Date Template</label>
                        <Calendar id="datetemplate" v-model="date12">
                            <template #date="slotProps">
                                <strong v-if="slotProps.date.day > 10 && slotProps.date.day < 15" class="special-day">{{slotProps.date.day}}</strong>
                                <template v-else>{{slotProps.date.day}}</template>
                            </template>
                        </Calendar>
                    </div>
                    <div class="p-field p-col-12 p-md-4">
                        <label for="touchUI">TouchUI</label>
                        <Calendar id="touchUI" v-model="date13" :touchUI="true" />
                    </div>
                </div>

                <h5>Inline</h5>
                <Calendar v-model="date14" :inline="true" :showWeek="true" />
            </div>
        </div>

        <CalendarDoc />
    </div>
</template>

<script>
import CalendarDoc from './CalendarDoc'

export default {
    created() {
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
            date7: null,
            date8: null,
            date9: null,
            date10: null,
            date11: null,
            date12: null,
            date13: null,
            date14: null,
            dates1: null,
            dates2: null,
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

<style scoped>
.special-day {
    text-decoration: line-through;
}
</style>