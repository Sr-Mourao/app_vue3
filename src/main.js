import "./axios";
import { createApp } from "vue";
import vuetify from "@/plugins/vuetify";
import router from "@/router";
import pinia from "@/store";
import App from "./App.vue";
import { useMe } from "@/store/me";

const app = createApp(App);

app.use(pinia);
const meStore = useMe();
meStore
  .getMe()
  .catch(() => {})
  .finally(() => {
    app.use(vuetify);
    app.use(router);
    app.mount("#app");
  });
