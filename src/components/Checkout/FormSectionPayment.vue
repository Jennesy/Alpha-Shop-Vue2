<template>
	<section class="form-panel__section form-panel__section--payment">
		<div class="form-panel__input-block form-panel__input-block--card-name">
			<label for="card-name" class="form-panel__label">持卡人姓名</label>
			<input
				type="text"
				id="card-name"
				placeholder="John Doe"
				class="form-panel__input form-panel__input form-panel__input--text"
				required
				v-model="cardName.value"
				@blur="
					checkValidity($event, cardName)
					updateDataToParent('cardName', cardName.value)
				"
			/>
		</div>
		<div class="form-panel__input-block form-panel__input-block--card-number">
			<label for="card-number" class="form-panel__label">卡號</label>
			<input
				type="text"
				id="card-number"
				placeholder="1111 2222 3333 4444"
				class="form-panel__input form-panel__input--text"
				required
				v-model="cardNumber.value"
				@blur="
					checkValidity($event, cardNumber)
					updateDataToParent('cardNumber', cardNumber.value)
				"
			/>
		</div>
		<div class="form-panel__input-block form-panel__input-block--card-expired">
			<label for="card-expired" class="form-panel__label">有效期限</label>
			<input
				type="text"
				id="card-expired"
				placeholder="MM/YY"
				class="form-panel__input form-panel__input--text"
				required
				v-model="cardExpired.value"
				@blur="
					checkValidity($event, cardExpired)
					updateDataToParent('cardExpired', cardExpired.value)
				"
			/>
		</div>
		<div class="form-panel__input-block form-panel__input-block--card-cvc">
			<label for="card-cvc" class="form-panel__label">CVC / CCV </label>
			<input
				type="text"
				id="card-cvc"
				placeholder="123"
				class="form-panel__input form-panel__input--text"
				required
				v-model="cardCvc.value"
				@blur="
					checkValidity($event, cardCvc)
					updateDataToParent('cardCvc', cardCvc.value)
				"
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
			cardName: { value: '', isDone: this.sectionData.isAllDone },
			cardNumber: { value: '', isDone: this.sectionData.isAllDone },
			cardExpired: { value: '', isDone: this.sectionData.isAllDone },
			cardCvc: { value: '', isDone: this.sectionData.isAllDone },
		}
	},
	created() {
		const { cardName, cardNumber, cardExpired, cardCvc } = this.sectionData
		this.cardName.value = cardName
		this.cardNumber.value = cardNumber
		this.cardExpired.value = cardExpired
		this.cardCvc.value = cardCvc
	},
	methods: {
		updateDataToParent: function (key, value) {
			const isAllDone =
				this.cardName.isDone &&
				this.cardNumber.isDone &&
				this.cardExpired.isDone &&
				this.cardCvc.isDone
			this.$emit('update-data', 2, key, value, isAllDone)
		},
		checkValidity: function (event, data) {
			if (!event.target.checkValidity()) {
				event.target.classList.add('warning')
				data.isDone = false
				return
			}
			event.target.classList.remove('warning')
			data.isDone = true
		},
	},
}
</script>
