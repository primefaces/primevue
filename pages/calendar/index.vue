<template>
    <div>
        <Head>
            <Title>Vue Calendar Component</Title>
            <Meta name="description" content="Calendar also known as DatePicker, is a form component to work with dates." />
        </Head>

        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Calendar</h1>
                <p>Calendar is an input component to select a date.</p>
            </div>
            <AppDemoActions />
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Popup</h5>
                <div class="p-fluid grid formgrid">
                    <div class="field col-12 md:col-4">
                        <label for="basic">Basic</label>
                        <Calendar v-model="date1" inputId="basic" autocomplete="off" />
                    </div>
                    <div class="field col-12 md:col-4">
                        <label for="dateformat">DateFormat</label>
                        <Calendar v-model="date2" inputId="dateformat" dateFormat="mm-dd-yy" />
                    </div>
                    <div class="field col-12 md:col-4">
                        <label for="icon">Icon</label>
                        <Calendar v-model="date3" inputId="icon" :showIcon="true" />
                    </div>
                    <div class="field col-12 md:col-4">
                        <label for="minmax">MinMax</label>
                        <Calendar v-model="date4" inputId="minmax" :minDate="minDate" :maxDate="maxDate" :manualInput="false" />
                    </div>
                    <div class="field col-12 md:col-4">
                        <label for="disableddays">Disabled Days</label>
                        <Calendar v-model="date5" inputId="disableddays" :disabledDates="invalidDates" :disabledDays="[0, 6]" :manualInput="false" />
                    </div>
                    <div class="field col-12 md:col-4">
                        <label for="multiple">Multiple</label>
                        <Calendar v-model="dates1" inputId="multiple" selectionMode="multiple" :manualInput="false" />
                    </div>
                    <div class="field col-12 md:col-4">
                        <label for="range">Range</label>
                        <Calendar v-model="dates2" inputId="range" selectionMode="range" :manualInput="false" />
                    </div>
                    <div class="field col-12 md:col-4">
                        <label for="buttonbar">Button Bar</label>
                        <Calendar v-model="date6" inputId="buttonbar" :showButtonBar="true" />
                    </div>
                    <div class="field col-12 md:col-4">
                        <label for="time24">Time / 24h</label>
                        <Calendar v-model="date7" inputId="time24" :showTime="true" :showSeconds="true" />
                    </div>
                    <div class="field col-12 md:col-4">
                        <label for="time12">Time / 12h</label>
                        <Calendar v-model="date8" inputId="time12" :timeOnly="true" hourFormat="12" />
                    </div>
                    <div class="field col-12 md:col-4">
                        <label for="monthpicker">Month Picker</label>
                        <Calendar v-model="date9" inputId="monthpicker" view="month" dateFormat="mm/yy" />
                    </div>
                    <div class="field col-12 md:col-4">
                        <label for="yearpicker">Year Picker</label>
                        <Calendar v-model="date10" inputId="yearpicker" view="year" dateFormat="yy" />
                    </div>
                    <div class="field col-12 md:col-4">
                        <label for="multiplemonths">Multiple Months</label>
                        <Calendar v-model="date11" inputId="multiplemonths" :numberOfMonths="3" :responsiveOptions="responsiveOptions" />
                    </div>
                    <div class="field col-12 md:col-4">
                        <label for="datetemplate">Date Template</label>
                        <Calendar v-model="date12" inputId="datetemplate">
                            <template #date="slotProps">
                                <strong v-if="slotProps.date.day > 10 && slotProps.date.day < 15" class="special-day">{{ slotProps.date.day }}</strong>
                                <template v-else>{{ slotProps.date.day }}</template>
                            </template>
                        </Calendar>
                    </div>
                    <div class="field col-12 md:col-4">
                        <label for="touchUI">TouchUI</label>
                        <Calendar v-model="date13" inputId="touchUI" :touchUI="true" />
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
import CalendarDoc from './CalendarDoc';

export default {
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
            invalidDates: null,
            responsiveOptions: [
                {
                    breakpoint: '1400px',
                    numMonths: 2
                },
                {
                    breakpoint: '1200px',
                    numMonths: 1
                }
            ]
        };
    },
    created() {
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = month === 0 ? 11 : month - 1;
        let prevYear = prevMonth === 11 ? year - 1 : year;
        let nextMonth = month === 11 ? 0 : month + 1;
        let nextYear = nextMonth === 0 ? year + 1 : year;

        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);

        let invalidDate = new Date();

        invalidDate.setDate(today.getDate() - 1);
        this.invalidDates = [today, invalidDate];
    },
    components: {
        CalendarDoc: CalendarDoc
    }
};
</script>

<style scoped>
.special-day {
    text-decoration: line-through;
}
</style>
