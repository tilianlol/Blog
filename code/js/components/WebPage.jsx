import React from 'react';
import BlogPosts from './BlogPosts.jsx';
import PostContainer from './PostContainer.jsx';
import { Switch, Route } from 'react-router-dom'
import '../../sass/main.scss';

const WebPage = () => (
	<div className="main">
    <Switch>
			<Route exact path="/" component={BlogPosts} />
			<Route path="/post" component={PostContainer} />
    </Switch>
	</div>
);

export default WebPage;