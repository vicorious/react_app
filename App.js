/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './header.js';
import SuggestionList from './list.js';
import EmployeeList from './employees.js';
import API from './Api.js';
import Home from  './home.js';


export default class App extends Component 
{
	state = 
	{
		suggestionList 	: [],
		suggestionList2	: [],
	}
	async componentDidMount()
	{
		const empleados  = await API.getEmployees();
		const empleados2 = await API.getEmployees();
		this.setState
		({
			suggestionList  : empleados,
			suggestionList2 : empleados2,
		})		
	}
		
  	render() {
	  
    	return (
      		<Home>
				<Header/> 
				<EmployeeList
					list={this.state.suggestionList}
				/>	
				<SuggestionList
					list={this.state.suggestionList}
				/>								
      		</Home>
    		);
  	}
}