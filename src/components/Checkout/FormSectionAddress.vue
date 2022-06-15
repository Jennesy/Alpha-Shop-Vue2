<template>
	<section class="form-panel__section form-panel__section--address">
		<div class="form-panel__input-block form-panel__input-block--title">
			<label for="title" class="form-panel__label">稱謂</label>
			<select
				name="title"
				id="title"
				class="form-panel__input form-panel__input--select"
				v-model="title"
				@change="updateDataToParent('title', title)"
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
				v-model="name"
				@change="updateDataToParent('name', name)"
			/>
		</div>
		<div class="form-panel__input-block form-panel__input-block--phone">
			<label for="phone" class="form-panel__label">電話</label>
			<input
				type="text"
				id="phone"
				placeholder="請輸入行動電話"
				class="form-panel__input form-panel__input--text"
				v-model="phone"
				@change="updateDataToParent('phone', phone)"
			/>
		</div>
		<div class="form-panel__input-block form-panel__input-block--email">
			<label for="email" class="form-panel__label">Email</label>
			<input
				type="text"
				id="email"
				placeholder="請輸入電子郵件"
				class="form-panel__input form-panel__input--text"
				v-model="email"
				@change="updateDataToParent('email', email)"
			/>
		</div>
		<div class="form-panel__input-block form-panel__input-block--city">
			<label for="city" class="form-panel__label">縣市</label>
			<select
				name="city"
				id="title"
				class="form-panel__input form-panel__input--select"
				required
				v-model="city"
				@change="updateDataToParent('city', city)"
			>
				<option value="" selected disabled>請選擇縣市</option>
			</select>
		</div>
		<div class="form-panel__input-block form-panel__input-block--address">
			<label for="address" class="form-panel__label">地址</label>
			<input
				type="text"
				id="address"
				placeholder="請輸入地址"
				class="form-panel__input form-panel__input--text"
				v-model="address"
				@change="updateDataToParent('address', address)"
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
			title: 'male',
			name: '',
			phone: '',
			email: '',
			city: '',
			address: '',
		}
	},
	created() {
		const { title, name, phone, email, city, address } = this.sectionData
		this.title = title
		this.name = name
		this.phone = phone
		this.email = email
		this.city = city
		this.address = address
	},
	methods: {
		updateDataToParent: function (key, value) {
			this.$emit('update-data', 0, key, value)
		},
	},
}
</script>
