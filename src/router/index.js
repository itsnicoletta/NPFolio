import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'
import SideQuestView from '../views/SideQuestView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/projects/:slug', component: ProjectView },
    { path: '/side-quests/:slug', component: SideQuestView },
  ],
})

export default router
