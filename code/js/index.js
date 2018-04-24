import React from 'react';
import ReactDOM from "react-dom";
import WebPage from './components/WebPage.jsx';
import allReducers from './reducers/index.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(allReducers);


ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<WebPage />
	  </Provider>
  </BrowserRouter>, 
  document.getElementById('fieldToShow')
);
