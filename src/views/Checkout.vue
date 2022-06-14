<template>
	<div class="main-wrapper container">
		<h3 class="main-title">結帳</h3>
		<form action="" class="form" @submit.stop.prevent="handleSubmit">
			<div class="stepper-panel">
				<div
					v-for="(section, index) in sections"
					:key="index"
					:class="[
						'stepper-panel__step',
						{ active: currentStep === index },
						{ checked: currentStep > index },
					]"
				>
					<div class="stepper-panel__circle"></div>
					<div class="stepper-panel__label">{{ section.sectionName }}</div>
				</div>
			</div>
			<div class="form-panel">
				<h3 class="form-panel__title">
					{{ sections[currentStep].sectionName }}
				</h3>
				<div class="form-panel__content">
					<section
						class="form-panel__section form-panel__section--address"
						v-if="currentStep === 0"
					>
						<div class="form-panel__input-block form-panel__input-block--title">
							<label for="title" class="form-panel__label">稱謂</label>
							<select
								name="title"
								id="title"
								class="form-panel__input form-panel__input--select"
								v-model="sections[0].title"
								required
							>
								<option value="male">先生</option>
								<option value="female">小姐</option>
								<option value="other">其他</option>
							</select>
						</div>
						<div class="form-panel__input-block form-panel__input-block--name">
							<label for="name" class="form-panel__label">姓名</label>
							<input
								type="text"
								id="name"
								placeholder="請輸入姓名"
								class="form-panel__input form-panel__input--text"
								v-model="sections[0].name"
							/>
						</div>
						<div class="form-panel__input-block form-panel__input-block--phone">
							<label for="phone" class="form-panel__label">電話</label>
							<input
								type="text"
								id="phone"
								placeholder="請輸入行動電話"
								class="form-panel__input form-panel__input--text"
								v-model="sections[0].phone"
							/>
						</div>
						<div class="form-panel__input-block form-panel__input-block--email">
							<label for="email" class="form-panel__label">Email</label>
							<input
								type="text"
								id="email"
								placeholder="請輸入電子郵件"
								class="form-panel__input form-panel__input--text"
								v-model="sections[0].email"
							/>
						</div>
						<div class="form-panel__input-block form-panel__input-block--city">
							<label for="city" class="form-panel__label">縣市</label>
							<select
								name="city"
								id="title"
								class="form-panel__input form-panel__input--select"
								required
								v-model="sections[0].city"
							>
								<option value="" selected disabled>請選擇縣市</option>
							</select>
						</div>
						<div
							class="form-panel__input-block form-panel__input-block--address"
						>
							<label for="address" class="form-panel__label">地址</label>
							<input
								type="text"
								id="address"
								placeholder="請輸入地址"
								class="form-panel__input form-panel__input--text"
								v-model="sections[0].address"
							/>
						</div>
					</section>
					<section
						class="form-panel__section form-panel__section--shipping"
						v-if="currentStep === 1"
					>
						<input
							type="radio"
							class="form-panel__input form-panel__input--shipping"
							name="shipping"
							id="normal-shipping"
							value="normal"
							checked
							v-model="sections[1].shipping.name"
							@change="sections[1].shipping.price = 0"
						/>
						<input
							type="radio"
							class="form-panel__input form-panel__input--shipping"
							name="shipping"
							id="dhl-shipping"
							v-model="sections[1].shipping.name"
							@change="sections[1].shipping.price = 500"
							value="dhl"
						/>
						<label
							for="normal-shipping"
							value="normal"
							class="form-panel__label form-panel__label--radio"
						>
							<div
								class="form-panel__input-block form-panel__input-block--shipping"
							>
								<div class="form-panel__radio-label--button"></div>
								<div class="form-panel__radio-label--name">標準運送</div>
								<div class="form-panel__radio-label--time">約 3~7 個工作天</div>
								<div class="form-panel__radio-label--price" data-price="0">
									免費
								</div>
							</div>
						</label>
						<label
							for="dhl-shipping"
							value="dhl"
							class="form-panel__label form-panel__label--radio"
						>
							<div
								class="form-panel__input-block form-panel__input-block--shipping"
							>
								<div class="form-panel__radio-label--button"></div>
								<div
									class="form-panel__radio-label form-panel__radio-label--name"
								>
									DHL 貨運
								</div>
								<div
									class="form-panel__radio-label form-panel__radio-label--time"
								>
									48 小時內送達
								</div>
								<div
									class="form-panel__radio-label form-panel__radio-label--price"
									data-price="500"
								>
									500
								</div>
							</div>
						</label>
					</section>
					<section
						class="form-panel__section form-panel__section--payment"
						v-if="currentStep === 2"
					>
						<div
							class="form-panel__input-block form-panel__input-block--card-name"
						>
							<label for="card-name" class="form-panel__label"
								>持卡人姓名</label
							>
							<input
								type="text"
								id="card-name"
								placeholder="John Doe"
								class="form-panel__input form-panel__input form-panel__input--text"
								v-model="sections[2].cardName"
							/>
						</div>
						<div
							class="form-panel__input-block form-panel__input-block--card-number"
						>
							<label for="card-number" class="form-panel__label">卡號</label>
							<input
								type="text"
								id="card-number"
								placeholder="1111 2222 3333 4444"
								class="form-panel__input form-panel__input--text"
								v-model="sections[2].cardNumber"
							/>
						</div>
						<div
							class="form-panel__input-block form-panel__input-block--card-expired"
						>
							<label for="card-expired" class="form-panel__label"
								>有效期限</label
							>
							<input
								type="text"
								id="card-expired"
								placeholder="MM/YY"
								class="form-panel__input form-panel__input--text"
								v-model="sections[2].cardExpired"
							/>
						</div>
						<div
							class="form-panel__input-block form-panel__input-block--card-cvc"
						>
							<label for="card-cvc" class="form-panel__label">CVC / CCV </label>
							<input
								type="text"
								id="card-cvc"
								placeholder="123"
								class="form-panel__input form-panel__input--text"
								v-model="sections[2].cardCvc"
							/>
						</div>
					</section>
				</div>
			</div>
			<div class="control-panel">
				<button
					class="control-panel__button control-panel__button--previous"
					@click.stop.prevent="currentStep--"
					v-if="currentStep > 0"
				>
					← 上一步
				</button>
				<button
					class="control-panel__button control-panel__button--next"
					@click.stop.prevent="currentStep++"
					v-if="currentStep < sections.length - 1"
				>
					下一步 →
				</button>
				<button
					class="control-panel__button control-panel__button--next"
					type="submit"
					v-if="currentStep === sections.length - 1"
				>
					確認下單
				</button>
			</div>
			<div class="cart-panel">
				<h3 class="cart-panel__title">購物籃</h3>
				<div class="cart-products">
					<div
						class="cart-product"
						v-for="product in cart.products"
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
								@click="handleProductChange(product, -1)"
							></div>
							<div class="cart-product__num--text">{{ product.num }}</div>
							<div
								class="cart-product__button cart-product__button--plus"
								@click="handleProductChange(product, 1)"
							></div>
						</div>
						<div class="cart-product__price" :data-price="product.price">
							{{ product.price }}
						</div>
					</div>
					<div class="shipping-price">
						<div class="shipping-price__title">運費</div>
						<div class="shipping-price__price">
							{{ sections[1].shipping.price }}
						</div>
					</div>
					<div class="total-price">
						<div class="total-price__title">小計</div>
						<div class="total-price__price">{{ cartTotal }}</div>
					</div>
				</div>
			</div>
		</form>
		<div
			class="modal-overlay"
			v-if="cacheProduct"
			@click="cacheProduct = ''"
		></div>
		<div class="modal-window" v-if="cacheProduct">
			<div class="modal-window__exit"></div>
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
	name: 'Checkout',
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
	computed: {
		cartTotal() {
			let sum = 0
			this.cart.products.forEach((product) => {
				sum += product.num * product.price
			})
			sum += this.sections[1].shipping.price
			return sum
		},
	},
	methods: {
		fetchCart: function () {
			//TODO: 從 local storage 取得購物車資料
			const cartProducts = [...dummyData.cartProducts]
			this.cart.products = [...cartProducts]
		},
		handleSubmit: function () {
			console.log(this.sections)
		},
		handleProductChange: function (product, change, modalConfirmed = false) {
			if (modalConfirmed) {
				this.cart.products = this.cart.products.filter(
					(_product) => _product.id !== product.id
				)
				this.cacheProduct = ''
			}
			if (product.num === 1 && change === -1 && !modalConfirmed) {
				this.cacheProduct = product
				return
			}
			product.num += change
		},
	},
	created() {
		this.fetchCart()
	},
}
</script>

<style lang="scss">
@import '@/assets/scss/Checkout.scss';
</style>
