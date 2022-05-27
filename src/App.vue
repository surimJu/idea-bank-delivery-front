<template>
	<v-app>
		<v-app-bar app color="primary" dark>
			<div class="d-flex align-center">
				<router-link :to="`/`"><span>Home</span></router-link> &nbsp; | &nbsp;
				<router-link :to="`/about`"><span>About</span></router-link>
			</div>
			<div class="alert-center">
				<v-alert v-if="this.getSampleClicked" dense prominent type="success"
					>SUCCSS ALERT!</v-alert
				>
			</div>

			<v-spacer></v-spacer>
		</v-app-bar>

		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'App',

	data: () => ({
		//
	}),
	computed: {
		...mapGetters(['getSampleClicked']),
	},
};
</script>

<style scoped>
a {
	text-decoration: none;
	color: white;
}
span {
	color: white;
}
.v-alert {
	float: initial;
	position: absolute;
	left: 50%;
	top: 50%;
	margin-left: -width;
	margin-top: -height;
}
</style>
