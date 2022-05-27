const state = {
	sampleClicked: false,
};

const getters = {
	getSampleClicked(state) {
		return state.sampleClicked;
	},
};

const actions = {};

const mutations = {
	changeSampleClicked(state) {
		state.sampleClicked = state.sampleClicked ? false : true;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
