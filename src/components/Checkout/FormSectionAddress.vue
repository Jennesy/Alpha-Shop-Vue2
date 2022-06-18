<template>
	<section class="form-panel__section form-panel__section--address">
		<div class="form-panel__input-block form-panel__input-block--title">
			<label for="title" class="form-panel__label">稱謂</label>
			<select
				name="title"
				id="title"
				required
				class="form-panel__input form-panel__input--select"
				v-model="title.value"
				@blur="
					checkValidity($event, title)
					updateDataToParent('title', title.value)
				"
			>
				<option value="" selected disabled>請選擇稱謂</option>
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
				v-model="name.value"
				@blur="
					checkValidity($event, name)
					updateDataToParent('name', name.value)
				"
				required
			/>
		</div>
		<div class="form-panel__input-block form-panel__input-block--phone">
			<label for="phone" class="form-panel__label">電話</label>
			<input
				type="text"
				id="phone"
				placeholder="請輸入行動電話"
				class="form-panel__input form-panel__input--text"
				v-model="phone.value"
				@blur="
					checkValidity($event, phone)
					updateDataToParent('phone', phone.value)
				"
				required
			/>
		</div>
		<div class="form-panel__input-block form-panel__input-block--email">
			<label for="email" class="form-panel__label">Email</label>
			<input
				type="email"
				id="email"
				placeholder="請輸入電子郵件"
				class="form-panel__input form-panel__input--text"
				v-model="email.value"
				@blur="
					checkValidity($event, email)
					updateDataToParent('email', email.value)
				"
				required
			/>
		</div>
		<div class="form-panel__input-block form-panel__input-block--city">
			<label for="city" class="form-panel__label">縣市</label>
			<select
				name="city"
				id="title"
				class="form-panel__input form-panel__input--select"
				required
				v-model="city.value"
				@blur="
					checkValidity($event, city)
					updateDataToParent('city', city.value)
				"
			>
				<option value="" selected disabled>請選擇縣市</option>
				<option v-for="city in cityOptions" value="city" :key="city">
					{{ city }}
				</option>
			</select>
		</div>
		<div class="form-panel__input-block form-panel__input-block--address">
			<label for="address" class="form-panel__label">地址</label>
			<input
				type="text"
				id="address"
				placeholder="請輸入地址"
				class="form-panel__input form-panel__input--text"
				required
				v-model="address.value"
				@blur="
					checkValidity($event, address)
					updateDataToParent('address', address.value)
				"
			/>
		</div>
	</section>
</template>

<style lang="scss">
@import '@/assets/scss/Checkout/FormPanel.scss';
</style>

<script>
import { data } from '@/assets/TaiwanCities.json'
const { Cities } = data

export default {
	props: {
		sectionData: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			cityOptions: Cities,
			title: { value: '', isDone: this.sectionData.isAllDone },
			name: { value: '', isDone: this.sectionData.isAllDone },
			phone: { value: '', isDone: this.sectionData.isAllDone },
			email: { value: '', isDone: this.sectionData.isAllDone },
			city: { value: '', isDone: this.sectionData.isAllDone },
			address: { value: '', isDone: this.sectionData.isAllDone },
		}
	},
	created() {
		const { title, name, phone, email, city, address } = this.sectionData
		this.title.value = title
		this.name.value = name
		this.phone.value = phone
		this.email.value = email
		this.city.value = city
		this.address.value = address
	},
	methods: {
		updateDataToParent: function (key, value) {
			const isAllDone =
				this.title.isDone &&
				this.name.isDone &&
				this.phone.isDone &&
				this.email.isDone &&
				this.city.isDone &&
				this.address.isDone
			this.$emit('update-data', 0, key, value, isAllDone)
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
