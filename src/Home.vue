<template>
  <Calendar
    v-model="date"
    :disabledDays="[2, 3, 5]"
    :disabledDates="[
      new Date('08-15-2022'),
      new Date('09-12-2022'),
      new Date('09-05-2022'),
      new Date('09-18-2022'),
      new Date('09-19-2022'),
    ]"
    :manualInput="false"
  />
</template>

<script>
import Calendar from "./components/calendar/Calendar";

export default {
  props: {
    theme: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      date: new Date(),
    };
  },

  components: {
    Calendar,
  },
};
</script>

<style lang="scss">
@import "./assets/styles/landing/landing.scss";
</style>
