<template>
	<div class="main-wrapper container">
		<h3 class="main-title">結帳</h3>
		<form action="" class="form" @submit.stop.prevent="handleSubmit">
			<StepperPanel :current-step="currentStep" :sections="sections" />
			<div class="form-panel">
				<h3 class="form-panel__title">
					{{ sections[currentStep].sectionName }}
				</h3>
				<div class="form-panel__content">
					<FormSectionAddress
						v-if="currentStep === 0"
						:section-data="sections[0]"
						@update-data="updateData"
					/>
					<FormSectionShipping
						v-if="currentStep === 1"
						:section-data="sections[1]"
						@update-data="updateData"
					/>
					<FormSectionPayment
						v-if="currentStep === 2"
						:section-data="sections[2]"
						@update-data="updateData"
					/>
				</div>
			</div>
			<ControlPanel
				:current-step="currentStep"
				:sections="sections"
				@previous-step="currentStep--"
				@next-step="currentStep++"
			/>
			<CartPanel
				:cart-products="cart.products"
				:shipping="sections[1].shipping"
				@product-change="handleProductChange"
			/>
		</form>

		<div
			class="modal-overlay"
			v-if="cacheProduct"
			@click="cacheProduct = ''"
		></div>
		<div class="modal-window" v-if="cacheProduct">
			<div class="modal-window__exit" @click="cacheProduct = ''"></div>
			<p class="modal-window__text">確定要移除商品嗎？</p>
			<div class="modal-window__buttons">
				<button
					class="modal-window__button modal-window__button--yes"
					@click="handleProductChange(cacheProduct, -1, true)"
				>
					是
				</button>
				<button
					class="modal-window__button modal-window__button--no"
					@click="cacheProduct = ''"
				>
					否
				</button>
			</div>
		</div>
	</div>
</template>
<script>
import StepperPanel from '@/components/Checkout/StepperPanel.vue'
import ControlPanel from '@/components/Checkout/StepControlPanel.vue'
import CartPanel from '@/components/Checkout/CartPanel.vue'
import FormSectionAddress from '@/components/Checkout/FormSectionAddress.vue'
import FormSectionShipping from '@/components/Checkout/FormSectionShipping.vue'
import FormSectionPayment from '@/components/Checkout/FormSectionPayment.vue'
const dummyData = {
	cartProducts: [
		{
			id: '1',
			name: '破壞補丁修身牛仔褲',
			imageUrl:
				'https://c0.wallpaperflare.com/preview/711/684/890/jean-style-ripped-leg.jpg',
			price: 3999,
			num: 1,
		},
		{
			id: '2',
			name: '刷色直筒牛仔褲',
			imageUrl:
				'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
			price: 1299,
			num: 1,
		},
	],
}
export default {
	components: {
		StepperPanel,
		FormSectionAddress,
		FormSectionShipping,
		FormSectionPayment,
		ControlPanel,
		CartPanel,
	},
	data() {
		return {
			cacheProduct: '',
			currentStep: 0,
			sections: [
				{
					sectionName: '寄送地址',
					title: 'male',
					name: '',
					phone: '',
					email: '',
					city: '',
					address: '',
				},
				{
					sectionName: '運送方式',
					shipping: {
						name: 'normal',
						price: 0,
					},
				},
				{
					sectionName: '付款資訊',
					cardName: '',
					cardNumber: '',
					cardExpired: '',
					cardCvc: '',
				},
			],
			cart: {
				products: [],
			},
		}
	},
	methods: {
		fetchCart: function () {
			//TODO: 從 local storage 取得購物車資料
			const cartProducts = [...dummyData.cartProducts]
			this.cart.products = [...cartProducts]
		},
		updateData: function (index, key, value) {
			this.sections[index][key] = value
			console.log(index, key, value)
		},
		handleProductChange: function (product, change, modalConfirmed = false) {
			if (modalConfirmed) {
				this.cart.products = this.cart.products.filter(
					(_product) => _product.id !== product.id
				)
				this.cacheProduct = ''
				return
			}
			if (product.num === 1 && change === -1 && !modalConfirmed) {
				this.cacheProduct = product
				return
			}
			product.num += change
		},
		handleSubmit: function () {
			const {
				title,
				name,
				phone,
				email,
				city,
				address,
				shipping,
				cardName,
				cardNumber,
				cardExpired,
				cardCvc,
				products,
			} = {
				...this.sections[0],
				...this.sections[1],
				...this.sections[2],
				...this.cart,
			}
			//TODO: 將訂單資料發送到後端伺服器
			console.log({
				title,
				name,
				phone,
				email,
				city,
				address,
				shipping,
				cardName,
				cardNumber,
				cardExpired,
				cardCvc,
				products,
			})
		},
	},
	created() {
		this.fetchCart()
	},
}
</script>

<style lang="scss">
@import '@/assets/scss/Checkout/Checkout.scss';
</style>
