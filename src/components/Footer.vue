<template>
	<footer class="footer">
		<div class="footer-wrapper container">
			<div class="footer-info-section footer-info-section--logo logo">
				<div class="logo__image"></div>
				<div class="logo__title"></div>
			</div>
			<div
				class="footer-info-section"
				v-for="(info, index) in infos"
				:key="index"
			>
				<div class="footer-info-section__title">{{ info.title }}</div>
				<template v-for="(item, index) in info.items">
					<div
						class="footer-info-section__item"
						:key="index"
						v-if="item.name !== 'social medias'"
					>
						<a :href="item.link" class="footer-info-section__link">{{
							item.name
						}}</a>
					</div>
					<div class="footer-info-section__item" :key="index" v-else>
						<div class="footer-info-section__media-group">
							<div
								class="footer-info-section__media"
								v-for="(media, index) in item.medias"
								:key="index"
							>
								<a :href="media.link" class="footer-info-section__link">
									<div v-html="media.icon"></div>
								</a>
							</div>
						</div>
					</div>
				</template>
			</div>
		</div>
	</footer>
</template>

<style lang="scss">
@import '@/assets/scss/Footer.scss';
</style>

<script>
import { data } from '@/assets/Footer.json'
const { infos } = data
export default {
	data() {
		return {
			infos,
		}
	},
	filters: {
		toHtml: function (text) {
			const div = document.createElement('div')
			div.innerHTML = text
			return div
		},
	},
}
</script>
