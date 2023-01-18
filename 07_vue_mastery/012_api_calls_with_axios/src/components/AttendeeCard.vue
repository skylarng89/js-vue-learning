<script setup>
defineProps({
  attendee: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="attendee-card">
    <span>User ID: {{ attendee.id }} </span><br />
    <span>Name: {{ attendee.name }} </span><br />
    <span>Email: {{ attendee.email }} </span><br />
    <span>Phone: {{ attendee.phone }} </span>
  </div>
</template>

<style scoped>
.attendee-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  text-align: left;
}

.attendee-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
