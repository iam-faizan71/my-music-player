import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import PlaylistPage from '../views/PlaylistPage.vue'
import LibraryView from "../views/LibraryView.vue";
import PlaylistPage from "../views/PlaylistPage.vue";
import PlaylistDetailPage from "../views/PlaylistDetailPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },

    {
      path: "/library",
      component: LibraryView,
    },
    {
      path: "/playlist",
      component: PlaylistPage,
    },
    {
      path: "/playlist/:id",
      name: "PlaylistDetail",
      component: PlaylistDetailPage,
    },
  ],
});

export default router;
