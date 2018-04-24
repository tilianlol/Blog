export default function (state={ mode: 'titleFilter'}, actions) {
	let newState = state;
	switch(actions.type) {
		case "MODE_CHANGE": 
			newState.mode = actions.payLoad;
			return newState;
			break;

		default: return state; break;
	}
}