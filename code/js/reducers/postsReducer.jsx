
let postsArr = new Array();

for(let i = 1; i < 4; i++) {
	let str = 'https://my-json-server.typicode.com/tilianlol/JSONPlaceholder/posts/'+i;
	fetch(str)
	  .then(response => response.json())
	  .then(json => postsArr.push(json));
}

export default function() {
	return postsArr;
}
// export default function() {
// 	return [
// 		{
// 			id: 1,
// 			image: "http://lorempixel.com/400/200",
// 			title: 'Статья №1',
// 			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eos sequi facilis ipsa, velit eaque!'
// 		},
// 		{
// 			id: 2,
// 			image: "http://lorempixel.com/400/200",
// 			title: 'Статья №2',
// 			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eos sequi facilis ipsa, velit eaque!'
// 		},
// 		{
// 			id: 3,
// 			image: "http://lorempixel.com/400/200",
// 			title: 'Статья №3',
// 			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eos sequi facilis ipsa, velit eaque!'
// 		},
// 		{
// 			id: 4,
// 			image: "http://lorempixel.com/400/200",
// 			title: 'Статья №4',
// 			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore eos sequi facilis ipsa, velit eaque!'
// 		},
// 	]
// }