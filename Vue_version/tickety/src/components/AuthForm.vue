<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="w-full max-w-md bg-white p-8 rounded-xl shadow">
      <h2 class="text-2xl font-bold text-center text-blue-600 mb-6">
        {{ type === "login" ? "Login to Tickety" : "Create an Account" }}
      </h2>

      <form @submit.prevent="handleFormSubmit" class="space-y-4">
        <!-- Name Field (only for sign up) -->
        <div v-if="type === 'signup'">
          <input
            v-model="formData.name"
            type="text"
            placeholder="Name"
            class="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p v-if="errors.name" class="text-red-500 text-sm mt-1">
            {{ errors.name }}
          </p>
        </div>

        <!-- Email Field -->
        <div>
          <input
            v-model="formData.email"
            type="email"
            placeholder="Email"
            class="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p v-if="errors.email" class="text-red-500 text-sm mt-1">
            {{ errors.email }}
          </p>
        </div>

        <!-- Password Field -->
        <div>
          <input
            v-model="formData.password"
            type="password"
            placeholder="Password"
            class="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p v-if="errors.password" class="text-red-500 text-sm mt-1">
            {{ errors.password }}
          </p>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          {{ type === "login" ? "Login" : "Sign Up" }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthForm",
  props: {
    type: {
      type: String,
      required: true, // "login" or "signup"
    },
    onSubmit: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
      },
      errors: {},
    };
  },
  methods: {
    handleFormSubmit() {
      this.errors = {};

      // Validate manually (simple version)
      if (this.type === "signup" && !this.formData.name) {
        this.errors.name = "Name is required";
      }
      if (!this.formData.email) {
        this.errors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email)) {
        this.errors.email = "Invalid email address";
      }
      if (!this.formData.password) {
        this.errors.password = "Password is required";
      } else if (this.formData.password.length < 4) {
        this.errors.password = "Password must be at least 4 characters";
      }

      // Only submit if no errors
      if (Object.keys(this.errors).length === 0) {
        this.onSubmit({ ...this.formData });
      }
    },
  },
};
</script>
