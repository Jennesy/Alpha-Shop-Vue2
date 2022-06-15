<template>
	<div class="cart-panel">
		<h3 class="cart-panel__title">購物籃</h3>
		<div class="cart-products">
			<div
				class="cart-product"
				v-for="product in cartProducts"
				:key="product.id"
			>
				<div
					class="cart-product__image"
					:style="{ '--imageUrl': `url(${product.imageUrl})` }"
				></div>
				<div class="cart-product__name">{{ product.name }}</div>
				<div class="cart-product__num">
					<div
						class="cart-product__button cart-product__button--minus"
						@click="$emit('product-change', product, -1)"
					></div>
					<div class="cart-product__num--text">{{ product.num }}</div>
					<div
						class="cart-product__button cart-product__button--plus"
						@click="$emit('product-change', product, 1)"
					></div>
				</div>
				<div class="cart-product__price">
					{{ product.price | priceDollarSign }}
				</div>
			</div>
			<div class="shipping-price">
				<div class="shipping-price__title">運費</div>
				<div class="shipping-price__price">
					{{ shipping.price | priceDollarSign }}
				</div>
			</div>
			<div class="total-price">
				<div class="total-price__title">小計</div>
				<div class="total-price__price">{{ cartTotal | priceDollarSign }}</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import '@/assets/scss/Checkout/CartPanel.scss';
</style>

<script>
export default {
	props: {
		cartProducts: {
			type: Array,
			required: true,
		},
		shipping: {
			type: Object,
			required: true,
		},
	},
	computed: {
		cartTotal() {
			let sum = 0
			this.cartProducts.forEach((product) => {
				sum += product.num * product.price
			})
			sum += this.shipping.price
			return sum
		},
	},
	filters: {
		priceDollarSign: function (text) {
			return text === 0 ? '免費' : '$ ' + text
		},
	},
}
</script>
