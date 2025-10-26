import { createApp } from "vue";
import App from "./App.vue";
import router from "./components/router";
import "../src/style.css";
import "./assets/main.css";

createApp(App).use(router).mount("#app");
