import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		redirect: '/Checkout',
	},
	{
		path: '/Checkout',
		name: 'Checkout',
		component: () => import('../views/Checkout.vue'),
	},
]

const router = new VueRouter({
	// base: process.env.BASE_URL,
	routes,
})

export default router
