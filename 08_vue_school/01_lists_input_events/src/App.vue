<script>
// Imported "ref" and "computed"
import { ref, computed } from 'vue';

// Export the setup to make it readable
export default {
  setup() {
    const header = ref('Shopping List App');
    const items = ref([
      { id: 1, value: '10 mangoes' },
      { id: 2, value: '1 pack of cherries' },
      { id: 3, value: '3 packs of pickles' },
    ]);
    const lastItemId = computed(() => items.value.slice(-1)[0].id);
    return {
      header,
      lastItemId,
      items,
    };
  },
};
</script>

<template>
  <h1>{{ header }}</h1>
  <p>
    Type in your shopping list item and click the "Add item" button or press "Enter" on
    your keyboard.
  </p>

  <!--Use the "@submit" directive to submit the button click. It also triggers a submit on any input fields within the form. Use the "prevent" to prevent a page refresh (this is similar to prevent.default in Vanilla JS)-->
  <form
    @submit.prevent="items.push({ id: items.length + 1, value: addItem })"
    class="add -item-form"
  >
    <!--Use v-model to capture the input in the text field-->
    <input v-model="addItem" type="text" placeholder="e.g. 3 bowls of sugar" />
    <button class="btn btn-primary">Add Item</button>
  </form>

  <ul>
    <!--Loop over the "items" array using "v-for", get each item's key for performance-->
    <li v-for="item in items" :key="item.id">{{ item.value }}</li>
  </ul>

  <blockquote>
    Cart Total: {{ items.length }}<br />
    The ID of the last item in your cart is {{ lastItemId }}
  </blockquote>
</template>

<style>
@import url(main.css);
</style>
