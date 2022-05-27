import Vue from 'vue';
import Vuex from 'vuex';

import sample from '@/store/modules/sample';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		sample,
	},
});

export default store;
