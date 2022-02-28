import { createApp } from "vue";
import App from "./App.vue";
import postsGet from "./components/PostsGet.vue";

const app = createApp(App);

app.component("posts-get", postsGet);
app.mount("#app");
