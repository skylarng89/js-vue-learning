<script setup>
import { ref } from 'vue';

const header = ref('My Shopping List');
const items = ref([]);
const addItem = ref('');

const saveItem = () => {
  // Checking if there is no value in the addItem before pushing a new item to the "items" array
  if (!addItem.value) return;
  // Generating a 5 digit identifier, it may not be unique
  items.value.push({
    id: Math.floor(Math.random() * 9000) + 1000,
    label: addItem.value,
  });
  // Setting 'addItem" ref to empty string to clear the input field after adding item
  addItem.value = '';
};

const cartTotal = () => {
  return items.value.length;
};

const lastItemId = () => {
  return items.value.length
    ? ` || Last item ID: ${items.value[items.value.length - 1].id}`
    : '';
};
</script>

<template>
  <h1>{{ header }}</h1>
  <p>
    Type in your shopping list item and click the "Add item" button or press "Enter" on
    your keyboard.
  </p>

  <form @submit.prevent="saveItem" class="add-item-form">
    <input
      v-model="addItem"
      type="text"
      placeholder="Enter item name (e.g. 3 bowls of sugar)"
    />
    <button class="btn btn-primary">Add Item</button>
  </form>

  <p class="txt-small">Cart Total: {{ cartTotal() }} {{ lastItemId() }}</p>

  <ul>
    <li v-for="item in items" :key="item.id" class="list-hover">{{ item.label }}</li>
  </ul>
</template>

<style>
@import 'main.css';
</style>
