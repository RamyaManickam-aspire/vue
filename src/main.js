import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";
import store from "./store/store";
import router from "./router/router";

createApp(App).use(store).use(router).mount("#app");
