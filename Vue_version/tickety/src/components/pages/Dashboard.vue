<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-4">Welcome to your Dashboard</h1>
    <p class="text-gray-600">
      This is where you’ll manage tickets and view stats.
    </p>

    <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="p-4 bg-blue-100 rounded-lg text-center">
        <h2 class="text-xl font-semibold">Active Tickets</h2>
        <p class="text-2xl font-bold mt-2">12</p>
      </div>

      <div class="p-4 bg-green-100 rounded-lg text-center">
        <h2 class="text-xl font-semibold">Resolved</h2>
        <p class="text-2xl font-bold mt-2">8</p>
      </div>

      <div class="p-4 bg-yellow-100 rounded-lg text-center">
        <h2 class="text-xl font-semibold">Pending</h2>
        <p class="text-2xl font-bold mt-2">4</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  mounted() {
    console.log("Dashboard loaded!");
  },
};
</script>

<style scoped>
/* Optional styles */
</style>
