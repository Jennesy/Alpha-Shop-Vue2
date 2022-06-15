<template>
	<section class="form-panel__section form-panel__section--payment">
		<div class="form-panel__input-block form-panel__input-block--card-name">
			<label for="card-name" class="form-panel__label">持卡人姓名</label>
			<input
				type="text"
				id="card-name"
				placeholder="John Doe"
				class="form-panel__input form-panel__input form-panel__input--text"
				v-model="cardName"
				@change="updateDataToParent('cardName', cardName)"
			/>
		</div>
		<div class="form-panel__input-block form-panel__input-block--card-number">
			<label for="card-number" class="form-panel__label">卡號</label>
			<input
				type="text"
				id="card-number"
				placeholder="1111 2222 3333 4444"
				class="form-panel__input form-panel__input--text"
				v-model="cardNumber"
				@change="updateDataToParent('cardNumber', cardNumber)"
			/>
		</div>
		<div class="form-panel__input-block form-panel__input-block--card-expired">
			<label for="card-expired" class="form-panel__label">有效期限</label>
			<input
				type="text"
				id="card-expired"
				placeholder="MM/YY"
				class="form-panel__input form-panel__input--text"
				v-model="cardExpired"
				@change="updateDataToParent('cardExpired', cardExpired)"
			/>
		</div>
		<div class="form-panel__input-block form-panel__input-block--card-cvc">
			<label for="card-cvc" class="form-panel__label">CVC / CCV </label>
			<input
				type="text"
				id="card-cvc"
				placeholder="123"
				class="form-panel__input form-panel__input--text"
				v-model="cardCvc"
				@change="updateDataToParent('cardCvc', cardCvc)"
			/>
		</div>
	</section>
</template>

<style lang="scss">
@import '@/assets/scss/Checkout/FormPanel.scss';
</style>

<script>
export default {
	props: {
		sectionData: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			cardName: '',
			cardNumber: '',
			cardExpired: '',
			cardCvc: '',
		}
	},
	created() {
		const { cardName, cardNumber, cardExpired, cardCvc } = this.sectionData
		this.cardName = cardName
		this.cardNumber = cardNumber
		this.cardExpired = cardExpired
		this.cardCvc = cardCvc
	},
	methods: {
		updateDataToParent: function (key, value) {
			this.$emit('update-data', 2, key, value)
		},
	},
}
</script>
