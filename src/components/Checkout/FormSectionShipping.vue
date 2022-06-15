<template>
	<section class="form-panel__section form-panel__section--shipping">
		<input
			type="radio"
			class="form-panel__input form-panel__input--shipping"
			name="shipping"
			id="normal-shipping"
			value="normal"
			checked
			v-model="shipping.name"
			@change="
				shipping.price = 0
				updateDataToParent('shipping', shipping)
			"
		/>
		<input
			type="radio"
			class="form-panel__input form-panel__input--shipping"
			name="shipping"
			id="dhl-shipping"
			v-model="shipping.name"
			@change="
				shipping.price = 500
				updateDataToParent('shipping', shipping)
			"
			value="dhl"
		/>
		<label
			for="normal-shipping"
			value="normal"
			class="form-panel__label form-panel__label--radio"
		>
			<div class="form-panel__input-block form-panel__input-block--shipping">
				<div class="form-panel__radio-label--button"></div>
				<div class="form-panel__radio-label--name">標準運送</div>
				<div class="form-panel__radio-label--time">約 3~7 個工作天</div>
				<div class="form-panel__radio-label--price">
					{{ 0 | priceDollarSign }}
				</div>
			</div>
		</label>
		<label
			for="dhl-shipping"
			value="dhl"
			class="form-panel__label form-panel__label--radio"
		>
			<div class="form-panel__input-block form-panel__input-block--shipping">
				<div class="form-panel__radio-label--button"></div>
				<div class="form-panel__radio-label form-panel__radio-label--name">
					DHL 貨運
				</div>
				<div class="form-panel__radio-label form-panel__radio-label--time">
					48 小時內送達
				</div>
				<div class="form-panel__radio-label form-panel__radio-label--price">
					{{ 500 | priceDollarSign }}
				</div>
			</div>
		</label>
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
			shipping: {
				name: 'normal',
				price: 0,
			},
		}
	},
	created() {
		const { shipping } = this.sectionData
		this.shipping = shipping
	},
	methods: {
		updateDataToParent: function (key, value) {
			this.$emit('update-data', 1, key, value)
		},
	},
	filters: {
		priceDollarSign: function (text) {
			return text === 0 ? '免費' : '$' + text
		},
	},
}
</script>
