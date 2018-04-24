let select = (post) => {
	return {
		type: "POST_SELECTED",
		payLoad: post
	}
};
let search = (posts, inputText, filters) => {
	return {
		type: "SEARCH_POST",
		payLoad: [posts,inputText,filters]
	}
};
let filterMode = (mode) => {
	return {
		type: "MODE_CHANGE",
		payLoad: mode
	}
};
let downloaded = (posts) => {
	return {
		type: "DOWNLOADED",
		payLoad: posts
	}
};
let sortingViews = (posts) => {
	return {
		type: "SEARCH_VIEWS",
		payLoad: posts
	}
};
let sortingDate = (posts) => {
	return {
		type: "SEARCH_DATE",
		payLoad: posts
	}
};
export const actions = [select,search,filterMode,downloaded,sortingViews,sortingDate];