<template>
  <div>
    <AuthForm type="Sign Up" :onSubmit="handleSignup" />
    <p class="text-center mt-4 text-gray-600">
      Already have an account?
      <RouterLink to="/auth/login" class="text-blue-600 hover:underline"
        >Login</RouterLink
      >
    </p>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import AuthForm from "../AuthForm.vue";

const router = useRouter();

function handleSignup({ name, email, password }) {
  const newUser = { name, email, password };
  localStorage.setItem("ticketapp_user", JSON.stringify(newUser));
  alert("Account created successfully!");
  router.push("/auth/login");
}
</script>
