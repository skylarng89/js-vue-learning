<script setup>
import { ref, onMounted } from 'vue';
import AttendeeCard from '@/components/AttendeeCard.vue';
import AttendeeService from '@/services/AttendeeService.js';

const attendees = ref(null);
onMounted(() => {
  AttendeeService.getEvents()
    .then((response) => {
      attendees.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<template>
  <h1>Registered Attendees</h1>
  <div class="attendees">
    <AttendeeCard v-for="attendee in attendees" :key="attendee.id" :attendee="attendee" />
  </div>
</template>

<style scoped>
.attendees {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
