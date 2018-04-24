export default function (state=null, actions) {
	let newState = null;
	switch(actions.type) {
		case "POST_SELECTED": 
			newState = actions.payLoad;
			return newState;
			break;
		case "DOWNLOADED": 
			newState = actions.payLoad.filter( (item) => {return item});
			return newState;
			break;
		case "SEARCH_DATE":
			newState = actions.payLoad.sort( (a, b) => {
				return Date.parse(a.date) > Date.parse(b.date);
			});
			newState = actions.payLoad.filter( (item) => {return item});
			return newState;
			break;
		case "SEARCH_VIEWS":
			newState = actions.payLoad.sort( (a, b) => {
				return a.views > b.views;
			});
			newState = actions.payLoad.filter( (item) => {return item});
			return newState;
			break;
		case "SEARCH_POST":
			let text = actions.payLoad[1];
			let filter = actions.payLoad[2].mode;
			newState = actions.payLoad[0].filter( (post) => {
				if(filter === "titleFilter")
					return post.title.toLowerCase().indexOf(text.toLowerCase()) !== -1;
				else return post.body.toLowerCase().indexOf(text.toLowerCase()) !== -1;
			});
			return newState;
			break;
		default: return state; break;
	}
}