<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Calendar</h1>
                <p>Calendar is an input component to select a date.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="p-grid p-fluid">
                <div class="p-col-12 p-md-4">
                    <h3>Basic</h3>
                    <Calendar v-model="date1" />
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
            date1: null
        }
    },
	components: {
		'CalendarDoc': CalendarDoc
    }
}
</script>