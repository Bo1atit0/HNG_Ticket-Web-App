<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">My Tickets</h1>
    <p>Welcome to your tickets dashboard.</p>
  </div>
</template>

<script>
export default {
  name: "Tickets",
  data() {
    return {
      tickets: [],
    };
  },
  mounted() {
    // Example: Fetch user tickets later
    console.log("Tickets page loaded");
  },
};
</script>

<style scoped>
/* Optional styles */
</style>
