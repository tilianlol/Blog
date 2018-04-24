import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../actions/index.jsx';


class PostPage extends Component {
	render() {
		console.log(this.props.posts);
		return (
			<div className="post_page">
				<img src={this.props.posts.image} />
				<h2>{this.props.posts.title}</h2>
				<h4>{this.props.posts.description}</h4>
				<div className="post_page__info">
					<span className="date">{this.props.posts.date}</span>
					<span>Просмотров: <b>{this.props.posts.views}</b></span>
				</div>
				<p>{this.props.posts.body}</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	if(!state.active) {
		return {
			posts: state.posts
		};
	}
	return {
		posts: state.active
	};
}

export default connect(mapStateToProps)(PostPage);