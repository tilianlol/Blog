import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../actions/index.jsx';
import { Link } from 'react-router-dom'


class Post extends Component {
	postRender() {
		return (
			this.props.posts.map((post) => {
				return (
					<div className="Post" key={post.id}>
						<img src={post.image}/>
						<h3>{post.title}</h3>
						<div className="post__info">
							<span className="post__date">{post.date}</span>
							<span>Просмотров: <b>{post.views}</b></span>
						</div>
						<p>{post.description}</p>
						<Link to="/post"  onClick={() => this.props.select(post)}>Читать далее</Link>
					</div>
				)
			})
		)
	}
	componentDidMount() {
		setTimeout(() => {
			this.props.downloaded(this.props.posts);
		},1000);
	}
	render() {
		return (
			<div className="Post">
				{this.postRender()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	if(!state.active) {
		console.log(state.posts);
		return {
			posts: state.posts
		};
	}
	return {
		posts: state.active
	};
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators(
		{
			select: actions[0],
			downloaded: actions[3]
		},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);