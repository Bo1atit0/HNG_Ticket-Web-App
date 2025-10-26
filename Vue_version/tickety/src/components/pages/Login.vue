<template>
  <div>
    <AuthForm type="Login" :onSubmit="handleLogin" />
    <p class="text-center mt-4 text-gray-600">
      Don’t have an account?
      <RouterLink to="/auth/signup" class="text-blue-600 hover:underline"
        >Sign up</RouterLink
      >
    </p>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import AuthForm from "../AuthForm.vue";

const router = useRouter();

function handleLogin({ email, password }) {
  const storedUser = JSON.parse(localStorage.getItem("ticketapp_user"));
  if (
    !storedUser ||
    storedUser.email !== email ||
    storedUser.password !== password
  ) {
    alert("Invalid credentials. Please try again.");
    return;
  }
  localStorage.setItem("ticketapp_session", "mock-session-token");
  router.push("/dashboard");
}
</script>
