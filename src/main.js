import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
const app = createApp(App);

app.directive("focus", {
  mounted(el) {
    el.focus();
  },
});
app.directive("background", {
  mounted(el, bind) {
    el.style.backgroundColor = bind.value;
  },
});
app.use(router).use(store).mount("#app");
