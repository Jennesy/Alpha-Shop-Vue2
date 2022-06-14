<template>
	<nav class="navbar">
		<div class="container">
			<label for="hamburger-checkbox">
				<div class="hamburger">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="15"
						viewBox="0 0 20 15"
						fill="none"
					>
						<path
							d="M0 6.25H15V8.75H0V6.25ZM0 0H20V2.5H0V0ZM0 15H9.04375V12.5H0V15Z"
						/>
					</svg>
				</div>
			</label>
			<input
				type="checkbox"
				class="hamburger-checkbox"
				id="hamburger-checkbox"
			/>
			<div class="logo navbar__logo">
				<div class="logo__image"></div>
				<div class="logo__title"></div>
			</div>
			<div class="navbar-wrapper">
				<ul class="menu">
					<li class="menu__item"><a href="#" class="menu__link">男款</a></li>
					<li class="menu__item"><a href="#" class="menu__link">女款</a></li>
					<li class="menu__item">
						<a href="#" class="menu__link">最新消息</a>
					</li>
					<li class="menu__item">
						<a href="#" class="menu__link">聯絡我們</a>
					</li>
					<li class="menu__item">
						<a href="#" class="menu__link">客製商品</a>
					</li>
				</ul>
				<div class="toolbar">
					<div class="toolbar__item toolbar__item--search"></div>
					<div class="toolbar__item toolbar__item--cart"></div>
					<div class="toolbar__item toolbar__item--theme"></div>
				</div>
			</div>
		</div>
	</nav>
</template>
<style lang="scss">
@import '@/assets/scss/Navbar.scss';
</style>
<script>
export default {
	name: 'Navbar',
}
</script>
