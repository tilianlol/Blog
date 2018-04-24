import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../actions/index.jsx';

class Search extends Component {
	// clickHendler1(e) {
	// 	e.preventDefault();
	// 	for(let index = 0; index < document.querySelectorAll('.Search__dropdown__block li').length; index++) {
	// 		document.querySelectorAll('.Search__dropdown__block li')[index].classList.remove('active');
	// 	}
	// 	e.target.classList.toggle("active");
	// 	() => this.props.filterMode('titleFilter');
	// }
	// clickHendler2(e) {
	// 	e.preventDefault();
	// 	for(let index = 0; index < document.querySelectorAll('.Search__dropdown__block li').length; index++) {
	// 		document.querySelectorAll('.Search__dropdown__block li')[index].classList.remove('active');
	// 	}
	// 	e.target.classList.toggle("active");
	// 	() => this.props.filterMode('textFilter');
	// }
	// componentDidMount() {
	// 	setTimeout( () => {
	// 		console.log(this.props.posts);
	// 	},100);
	// }
	render() {
		return (
			<div className="Search">
				<input className="Search__input" placeholder="Поиск..." onChange={(inputElement) => this.props.search(this.props.posts,inputElement.target.value,this.props.filters)}/>
				<div className="Search__dropdown">
					Поиск по:
					<ul>
						<li className="active" onClick={() => this.props.filterMode('titleFilter')}>Заголовку</li>
						<li onClick={() => this.props.filterMode('textFilter')}>Тексту</li>
					</ul>
				</div>
				<div className="Search__sort">
					Сортировать по:
					<ul>
						<li onClick={() => this.props.sortingDate(this.props.posts)}>Дате</li>
						<li onClick={() => this.props.sortingViews(this.props.posts)}>Просмотрам</li>
					</ul>
				</div>
				{/*<button className="Search__button" onClick={() => this.props.search(this.props.posts, this.props.filters)} >Поиск</button>*/}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts,
		filters: state.filters
	};
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({
		search: actions[1],
		filterMode: actions[2],
		sortingViews: actions[4],
		sortingDate: actions[5],
		downloaded: actions[3]
	}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);