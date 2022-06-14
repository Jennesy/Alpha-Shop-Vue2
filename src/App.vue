<template>
	<div id="app">
		<Navbar />
		<main class="main">
			<router-view></router-view>
		</main>
		<Footer />
	</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
	name: 'App',
	components: {
		Navbar,
		Footer,
	},
}
</script>

<style lang="scss"></style>
