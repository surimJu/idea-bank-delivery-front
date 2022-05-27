<template>
	<v-app id="inspire">
		<v-card class="d-flex pa-2" outlined tile>
			<div>About flex box</div>
		</v-card>
		<v-card
			class="d-flex justify-start mb-6"
			:color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
			flat
			tile
		>
			<v-card v-for="n in 3" :key="n" class="pa-2" outlined tile>
				justify-start
			</v-card>
		</v-card>
		<v-btn @click="clickMe" elevation="2" outlined x-largev>Click Me!</v-btn>
	</v-app>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
	data() {
		return {
			clicked: false,
		};
	},
	methods: {
		...mapMutations(['changeSampleClicked']),
		clickMe() {
			this.changeSampleClicked();
		},
	},
};
</script>

<style>
h1 {
	text-align: center;
}
.v-btn {
	max-width: 600px;
	margin-top: 20px;
	align-self: center;
}
</style>
