<template>
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
</template>

<style lang="scss">
@import '@/assets/scss/Checkout/StepperPanel.scss';
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
}
</script>
