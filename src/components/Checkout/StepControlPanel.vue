<template>
	<div class="control-panel">
		<button
			class="control-panel__button control-panel__button--previous"
			@click.stop.prevent="previousStep"
			v-if="currentStep > 0"
		>
			← 上一步
		</button>
		<button
			class="control-panel__button control-panel__button--next"
			@click.stop.prevent="nextStep"
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
</template>

<style lang="scss">
@import '@/assets/scss/Checkout/StepControlPanel.scss';
</style>

<script>
export default {
	props: {
		currentStep: {
			type: Number,
			required: true,
		},
		sections: {
			type: Array,
			required: true,
		},
	},
	methods: {
		previousStep: function () {
			this.$emit('previous-step')
		},
		nextStep: function () {
			this.$emit('next-step')
		},
	},
}
</script>
