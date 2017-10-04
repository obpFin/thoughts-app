import React from 'react';
import axios from 'axios';

import { apiUrl } from './../utils/utils';
import Header from './Header';
import Thought from './Thought';

export default class ThoughtsApp extends React.Component {
	state = {
    thoughts: {}
  };

  testConnection = () => {
   	var self = this;
    axios.get(`${apiUrl}/thoughts`)
	    .then(function (response) {
	      self.setState({
	        thoughts: response.data.thoughts
	      });
    		console.log(self.state.thoughts);

	    })
	    .catch(function (error) {
	      console.log(error);
	    });
  };

  componentDidMount() {
    this.testConnection();
  }

	render() {
		return (
			<div className="main-wrapper">
				<Header title="Thoughts" />
				<Thought thoughts={this.state.thoughts[1]}/>
			</div>
		);
	}
}